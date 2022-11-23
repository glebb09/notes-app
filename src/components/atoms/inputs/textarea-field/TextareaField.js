

import s from './TextareaField.module.scss';

const TextareaField = ({
  newClassName,
  ...rest
}) => {

  // const regExp = /#[0-9A-Za-zА-Яа-яё]+/gm;
  const { value: valueString } = rest;

  // if (regExp.test(valueString)) {
  //   valueString = valueString.replace(regExp, () => {
  //     return <a href="#">{valueString}</a>
  //   })
  // } 
  
  // if (regExp.test(text)) {
  //   setTagse(text.match(regExp));
  // }

  console.log("rest", rest);
  console.log("value", valueString);

  const classNameContainer = s.container;

  if (newClassName) {
    classNameContainer = `${classNameContainer} ${newClassName}`.trim();
  }

  return (
    <textarea 
      className={classNameContainer}
      {...rest} 
    >
    </textarea>
  )
}

export default TextareaField;