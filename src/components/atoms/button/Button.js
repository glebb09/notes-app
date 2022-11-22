
import s from './Button.module.scss';

const Button = ({
  children,
  newClassName,
  ...rest
}) => {

  let buttonClass = s.button;

  // if (newClassName) {
  //   buttonClass += `${buttonClass} ${newClassName}`.trim();
  // }

  return (
    <button className={buttonClass} {...rest}>
        {children}
    </button>
  )
}

export default Button;