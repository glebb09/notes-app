
import Icon from '../../atoms/icon/Icon';
import { MenuIcon, NoteIcon } from '../../../data';

import s from './Navbar.module.scss';

const Navbar = () => {

  return (
    <nav className={s.container}>
      <div className={s.content}>
        <div className={s.leftItems}>
          <a href='#' className={s.iconWithTitle}>
            <NoteIcon />
            Note
          </a>
        </div>

        <div className={s.rightItems}>
          <MenuIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;