import "./Header.scss";

export default function Header() {
	return (
		<div id="header">
			<div className="header-group">
				<button>icon</button>
				<span>PRODUCTOS</span>
				<span>OPERATIVAS</span>
				<input type="text" />
			</div>
			<div className="header-group">
				<span>Usuario</span>
				<button>LOGO</button>
			</div>
		</div>
	);
}
