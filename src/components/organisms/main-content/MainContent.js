
import InputSearch from '../../atoms/inputs/input-search/InputSearch';
import ModalNote from '../modal/ModalNote';

import { SearchIcon } from '../../../data';

import s from './MainContent.module.scss';

const MainContent = () => {

  return (
    <main className={s.container}>
      <div className={s.headerMain}>
        <div className={s.searchBar}>
          <span>
            <SearchIcon className={s.iconSearch} />
          </span>
          
          <InputSearch />
        </div>
      </div>

      <div>
        <ModalNote />
      </div>
    </main>
  )
}

export default MainContent;