import s from './Button.module.css'

const Button = ({title, onClick}) => {
	return <button onClick={onClick} className={s.button}>{title}</button>
}

export default Button 