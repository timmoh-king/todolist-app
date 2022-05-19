/**
 * @Author: Your name
 * @Date:   2022-05-13 17:24:46
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-05-15 23:52:54
 */

const Button = ({color, text, onClick}) => {
  return (
    <button className="btn btn-sm" style={{backgroundColor:color}} onClick={onClick}>{text}</button>
      
  )
}

export default Button