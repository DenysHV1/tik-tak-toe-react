import s from './Button.module.css'
import { VscDebugRestart } from "react-icons/vsc";
const Button = ({ onClick}) => {
	return <button onClick={onClick} className={s.button}><VscDebugRestart className={s.btnSvg}/></button>
}

export default Button 