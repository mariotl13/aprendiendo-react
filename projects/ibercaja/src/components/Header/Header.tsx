import { useTranslation } from "react-i18next";
import classes from "./Header.module.scss";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

export default function Header() {
	const { i18n } = useTranslation();
	const { name } = useContext(UserContext);

	const handleOnLangChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<div className={classes.header}>
			<div
				className={`${classes["header-group"]} ${classes["header-group-small"]}`}
			>
				<button>icon</button>
				<span>PRODUCTOS</span>
				<span>OPERATIVAS</span>
				<input type="text" />
			</div>
			<div className={classes["header-group"]}>
				<select
					name="lang"
					id="lang"
					onChange={handleOnLangChange}
					value={i18n.language}
				>
					<option value="es">Español</option>
					<option value="en">Inglés</option>
				</select>
				<span>{name}</span>
				<button>LOGO</button>
			</div>
		</div>
	);
}
