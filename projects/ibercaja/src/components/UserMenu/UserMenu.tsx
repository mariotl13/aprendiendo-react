import { useTranslation } from "react-i18next";
import Tabs from "../../UI/Tabs/Tabs";
import "./UserMenu.scss";

export default function UserMenu() {
	const { t } = useTranslation();

	const TABS = [
		{ title: t("user-menu.accounts").toUpperCase() },
		{ title: t("user-menu.financing").toUpperCase() },
		{ title: t("user-menu.trade").toUpperCase() },
		{ title: t("user-menu.payments").toUpperCase() },
	];

	return (
		<div id="user-menu">
			<h3>{t("user-menu.morning")}, Mario</h3>
			<Tabs tabs={TABS}></Tabs>
		</div>
	);
}
