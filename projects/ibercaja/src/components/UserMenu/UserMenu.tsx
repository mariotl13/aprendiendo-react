import Tabs from "../../UI/Tabs/Tabs";
import "./UserMenu.scss";

export default function UserMenu() {
	const TABS = [
		{ title: "CUENTAS TARJETAS Y TPVS" },
		{ title: "FINANCIACIÓN" },
		{ title: "COMERCIO EXTERIOR" },
		{ title: "COBROS Y PAGOS" },
	];

	return (
		<div id="user-menu">
			<h3>Buenos días, Mario</h3>
			<Tabs tabs={TABS}></Tabs>
		</div>
	);
}
