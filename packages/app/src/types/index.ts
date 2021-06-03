import { Document, Paths } from '$types/oas';

export type URL = string;
export type Pathname = string;
export type EMail = string;

export type EndpointID = string;

export type Endpoint = {
  id: EndpointID;
  url: URL;
  isPrivate: boolean;
  authConfigs: AuthConfig[];
  document: Document | null;
};

export type ClassName = string;

export type AuthConfig = {
  type: 'email' | 'oauth' | 'signout';
  provider: 'viron' | 'google' | 'signout';
  // This object contains only one key-value pair.
  pathObject: Paths;
};

export type AuthConfigEmailFormData = {
  email: EMail;
  password: string;
};
