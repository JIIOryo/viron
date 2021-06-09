import { AUTH_TYPE, AuthType } from '../constants';
import { ListWithPager, genPasswordHash } from '../helpers';
import { repositoryContainer } from '../repositories';
import { adminUserNotFound } from '../errors';
import { listRoles, revokeRoleForUser, updateRolesForUser } from './adminrole';

export interface AdminUser {
  id: string;
  email: string;
  authType: AuthType;
  password: string | null;
  salt: string | null;
  googleOAuth2AccessToken: string | null;
  googleOAuth2ExpiryDate: number | null;
  googleOAuth2IdToken: string | null;
  googleOAuth2RefreshToken: string | null;
  googleOAuth2TokenType: string | null;
  createdAt: Date;
  updatedAt: Date;
}

type AdminUserBase = Pick<
  AdminUser,
  'id' | 'email' | 'authType' | 'createdAt' | 'updatedAt'
>;

export interface AdminUserEmail extends AdminUserBase {
  authType: 'email';
  password: string;
  salt: string;
}

export interface AdminUserGoogle extends AdminUserBase {
  authType: 'google';
  googleOAuth2AccessToken: string;
  googleOAuth2ExpiryDate: number;
  googleOAuth2IdToken: string;
  googleOAuth2RefreshToken: string;
  googleOAuth2TokenType: string;
}

export interface AdminUserEmailCreateAttributes {
  email: string;
  password: string | null;
  salt: string | null;
}

export interface AdminUserGoogleCreateAttributes {
  email: string;
  googleOAuth2AccessToken: string | null;
  googleOAuth2ExpiryDate: number | null;
  googleOAuth2IdToken: string | null;
  googleOAuth2RefreshToken: string | null;
  googleOAuth2TokenType: string | null;
}

export type AdminUserCreateAttributes =
  | AdminUserEmailCreateAttributes
  | AdminUserGoogleCreateAttributes;

export interface AdminUserEmailUpdateAttributes {
  password: string | null;
  salt: string | null;
}

export interface AdminUserGoogleUpdateAttributes {
  googleOAuth2AccessToken: string | null;
  googleOAuth2ExpiryDate: number | null;
  googleOAuth2IdToken: string | null;
  googleOAuth2RefreshToken: string | null;
  googleOAuth2TokenType: string | null;
}

export type AdminUserUpdateAttributes =
  | AdminUserEmailUpdateAttributes
  | AdminUserGoogleUpdateAttributes;

export interface AdminUserView extends AdminUser {
  roleIds: string[];
}

export interface AdminUserEmailCreatePayload {
  email: string;
  password: string;
  roleIds?: string[];
}

export interface AdminUserGoogleCreatePayload {
  email: string;
  googleOAuth2AccessToken: string | null;
  googleOAuth2ExpiryDate: number | null;
  googleOAuth2IdToken: string | null;
  googleOAuth2RefreshToken: string | null;
  googleOAuth2TokenType: string | null;
  roleIds?: string[];
}

export type AdminUserCreatePayload =
  | AdminUserEmailCreatePayload
  | AdminUserGoogleCreatePayload;

export interface AdminUserEmailUpdatePayload {
  password?: string;
  roleIds?: string[];
}

export interface AdminUserGoogleUpdatePayload {
  googleOAuth2AccessToken: string | null;
  googleOAuth2ExpiryDate: number | null;
  googleOAuth2IdToken: string | null;
  googleOAuth2RefreshToken: string | null;
  googleOAuth2TokenType: string | null;
  roleIds?: string[];
}

export type AdminUserUpdatePayload =
  | AdminUserEmailUpdatePayload
  | AdminUserGoogleUpdatePayload;

const format = (adminUser: AdminUser, roleIds?: string[]): AdminUserView => {
  return Object.assign({}, adminUser, { roleIds: roleIds ?? [] });
};

// 一覧取得
export const list = async (): Promise<ListWithPager<AdminUserView>> => {
  const repository = repositoryContainer.getAdminUserRepository();
  // TODO: 検索
  const result = await repository.findWithPager();
  const adminRoles = await Promise.all(
    result.list.map((adminUser) => listRoles(adminUser.id))
  );
  return {
    ...result,
    list: result.list.map((adminUser) => format(adminUser, adminRoles.shift())),
  };
};

// 1件作成
export const createOne = async (
  payload: AdminUserCreatePayload,
  authType: AuthType = AUTH_TYPE.EMAIL
): Promise<AdminUserView> => {
  const repository = repositoryContainer.getAdminUserRepository();
  const { roleIds, ...adminUser } = payload;

  let obj;
  if (authType === AUTH_TYPE.EMAIL) {
    const adminUserEmail = adminUser as AdminUserEmailCreatePayload;
    obj = {
      authType: AUTH_TYPE.EMAIL,
      ...adminUserEmail,
      ...genPasswordHash(adminUserEmail.password),
    } as AdminUserEmailCreateAttributes;
  } else {
    const adminUserGoogle = adminUser as AdminUserGoogleCreatePayload;
    obj = {
      authType: AUTH_TYPE.GOOGLE,
      ...adminUserGoogle,
    } as AdminUserGoogleCreateAttributes;
  }
  const user = await repository.createOne(obj);

  if (roleIds?.length) {
    await updateRolesForUser(user.id, roleIds);
  }
  return format(user, roleIds);
};

// IDで1件更新
export const updateOneById = async (
  id: string,
  payload: AdminUserUpdatePayload
): Promise<void> => {
  const repository = repositoryContainer.getAdminUserRepository();
  const user = await findOneById(id);
  if (!user) {
    throw adminUserNotFound();
  }

  const { roleIds, ...adminUser } = payload;
  if (user.authType === AUTH_TYPE.EMAIL) {
    const adminUserEmail = adminUser as AdminUserEmailUpdatePayload;
    if (adminUserEmail.password) {
      await repository.updateOneById(
        id,
        genPasswordHash(adminUserEmail.password)
      );
    }
  } else {
    const adminUserGoogle = adminUser as AdminUserGoogleUpdatePayload;
    await repository.updateOneById(id, adminUserGoogle);
  }

  if (roleIds?.length) {
    await updateRolesForUser(id, roleIds);
  }
};

// IDで1件削除
export const removeOneById = async (id: string): Promise<void> => {
  const repository = repositoryContainer.getAdminUserRepository();
  const user = await findOneById(id);
  if (!user) {
    throw adminUserNotFound();
  }
  await Promise.all([repository.removeOneById(id), revokeRoleForUser(id)]);
};

// IDで1件取得
export const findOneById = async (
  id: string
): Promise<AdminUserView | null> => {
  const repository = repositoryContainer.getAdminUserRepository();
  const user = await repository.findOneById(id);
  if (!user) {
    return null;
  }
  const roleIds = await listRoles(user.id);
  return format(user, roleIds);
};

// emailで1件取得
export const findOneByEmail = async (
  email: string
): Promise<AdminUserView | null> => {
  const repository = repositoryContainer.getAdminUserRepository();
  const user = await repository.findOne({ email });
  if (!user) {
    return null;
  }
  const roleIds = await listRoles(user.id);
  return format(user, roleIds);
};

// 件数取得
export const count = async (): Promise<number> => {
  const repository = repositoryContainer.getAdminUserRepository();
  return await repository.count();
};
