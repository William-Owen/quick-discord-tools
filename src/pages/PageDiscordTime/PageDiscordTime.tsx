import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"
import style from "./PageDiscordTime.module.sass"

const PageDiscordTime: React.FC = () => {

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageDiscordTime}>

			<h1>Discord Time</h1>

			<FieldInputDate />
			<FieldInputTime />

		</div>

	)

}

export default PageDiscordTime