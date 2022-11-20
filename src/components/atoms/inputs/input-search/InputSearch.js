
import s from './InputSearch.module.scss';

const InputSearch = () => {

  const container = s.input;

  return (
    <input className={container} type='text' placeholder='Search'/>
  )
}

export default InputSearch;