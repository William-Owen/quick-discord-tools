import FieldInputDate from "../../components/FieldInputDate"
import style from "./PageDiscordTime.module.sass"

const PageDiscordTime: React.FC = () => {

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageDiscordTime}>

			<h1>Discord Time</h1>

			<FieldInputDate />

		</div>

	)

}

export default PageDiscordTime