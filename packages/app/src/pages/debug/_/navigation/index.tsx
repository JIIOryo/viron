import classnames from 'classnames';
import React, { useCallback } from 'react';
import Logo from '$components/logo';
import Navigation, { Props as NavigationProps } from '$components/navigation';
import NavigationLinks from '$components/navigation/links';
import NavigationServices from '$components/navigation/services';
import NavigationVersion from '$components/navigation/version';
import { ON } from '$constants/index';
import { Props as LayoutProps } from '$layouts/index';

type Props = Parameters<NonNullable<LayoutProps['renderNavigation']>>[0];
const _Navigation: React.FC<Props> = ({ className }) => {
  const renderHead = useCallback<NonNullable<NavigationProps['renderHead']>>(
    () => (
      <div className="flex flex-col gap-2 items-center py-8">
        <Logo
          className="h-12 drop-shadow-01dp"
          left="text-thm-primary"
          right="text-thm-secondary"
        />
        <div className="text-thm-on-surface text-xs font-bold text-center">
          Give OAS, <br />
          Get GUI.
        </div>
      </div>
    ),
    []
  );

  const renderTail = useCallback<NonNullable<NavigationProps['renderTail']>>(
    () => (
      <div className="p-2">
        <div className="flex justify-center py-2 border-t border-dotted border-thm-on-surface-slight">
          <NavigationLinks on={ON.SURFACE} />
        </div>
        <div className="flex justify-center py-2 border-t border-dotted border-thm-on-surface-slight">
          <NavigationServices on={ON.SURFACE} />
        </div>
        <div className="flex justify-center py-2 border-t border-dotted border-thm-on-surface-slight">
          <NavigationVersion on={ON.SURFACE} />
        </div>
      </div>
    ),
    []
  );

  return (
    <Navigation
      on={ON.SURFACE}
      className={classnames(className, 'h-full')}
      renderHead={renderHead}
      renderTail={renderTail}
    />
  );
};
export default _Navigation;
