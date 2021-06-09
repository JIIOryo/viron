import { Link, PageProps } from 'gatsby';
import React from 'react';
import Drawer, { useDrawer } from '$components/drawer';
import Modal, { useModal } from '$components/modal';
import Popover, { usePopover } from '$components/popover';
import useTheme from '$hooks/theme';
import Layout from '$layouts/index';

type Props = PageProps;
const SamplePage: React.FC<Props> = () => {
  useTheme();

  const popover = usePopover<HTMLButtonElement>({ placement: 'Bottom' });
  const handlePopoverOpenClick = function () {
    popover.open();
  };
  const handlePopoverCloseClick = function () {
    popover.requestClose();
  };

  const modal = useModal();
  const handleModalOpenClick = function () {
    modal.open();
  };
  const handleModalCloseClick = function () {
    modal.requestClose();
  };

  const drawer = useDrawer();
  const handleDrawerOpenClick = function () {
    drawer.open();
  };
  const handleDrawerCloseClick = function () {
    drawer.requestClose();
  };

  return (
    <Layout>
      <div>
        <p>ThemeとDarkModeのテスト</p>
        <p className="bg-primary-l dark:bg-primary-d">color-primary</p>
        <p className="bg-secondary-l dark:bg-secondary-d">color-secondary</p>
        <p className="bg-tertiary-l dark:bg-tertiary-d">color-tertiary</p>
      </div>
      <button onClick={handleModalOpenClick}>[open modal]</button>
      <button ref={popover.targetRef} onClick={handlePopoverOpenClick}>
        [open popover]
      </button>
      <button onClick={handleDrawerOpenClick}>[drawer drawer]</button>
      <Link to="/">TOP</Link>
      <Popover {...popover.bind}>
        <button onClick={handlePopoverCloseClick}>close</button>
      </Popover>
      <Modal {...modal.bind}>
        <button onClick={handleModalCloseClick}>close</button>
      </Modal>
      <Drawer {...drawer.bind}>
        <button onClick={handleDrawerCloseClick}>toggle drawer</button>
      </Drawer>
    </Layout>
  );
};

export default SamplePage;
