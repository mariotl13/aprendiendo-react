import { useTranslation } from "react-i18next";
import "./Header.scss";

export default function Header() {
	const { i18n } = useTranslation();

	const handleOnLangChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<div id="header">
			<div className="header-group header-group-small">
				<button>icon</button>
				<span>PRODUCTOS</span>
				<span>OPERATIVAS</span>
				<input type="text" />
			</div>
			<div className="header-group">
				<select
					name="lang"
					id="lang"
					onChange={handleOnLangChange}
					value={i18n.language}
				>
					<option value="es">Español</option>
					<option value="en">Inglés</option>
				</select>
				<span>Usuario</span>
				<button>LOGO</button>
			</div>
		</div>
	);
}
