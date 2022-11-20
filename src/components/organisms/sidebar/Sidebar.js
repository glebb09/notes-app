
import { useContext } from 'react';

import { SidebarContext } from '../../../util/clickSidebar';

import { PlusIcon } from '../../../data';

import s from './Sidebar.module.scss';

const Sidebar = () => {

  const { open } = useContext(SidebarContext);

  return (
    <aside 
      className={s.container}
      side-open={open.toString()}
    >
      <div className={s.content}>
        <div className={s.sidebarWrapper}>
          <div className={s.sidebarTitle}>Menu</div>

          <div className={s.sidebarMenu}>
              <PlusIcon className={s.icon}/>
              New Note
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;