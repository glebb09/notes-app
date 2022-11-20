
import InputSearch from '../../atoms/inputs/input-search/InputSearch';

import s from './MainContent.module.scss';

const MainContent = () => {

  return (
    <main className={s.container}>
      <div className={s.headerMain}>
        
        <div className={s.searchBar}>
          <InputSearch />
        </div>
      </div>
    </main>
  )
}

export default MainContent;