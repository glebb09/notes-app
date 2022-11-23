
import s from './FieldContent.module.scss';

const FieldContent = ({
  children
}) => {

  return (
    <div className={s.container}>
      {children}
    </div>
  )
}

export default FieldContent;