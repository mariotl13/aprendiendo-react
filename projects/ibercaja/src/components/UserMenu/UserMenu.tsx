import { useTranslation } from "react-i18next";
import Tabs from "../../UI/Tabs/Tabs";
import "./UserMenu.scss";
import { Tab } from "../../UI/Tabs/Tabs.model";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

export default function UserMenu() {
	const { t } = useTranslation();
	const { name } = useContext(UserContext);

	const TABS: Tab[] = [
		{ title: t("user-menu.accounts").toUpperCase(), url: "accounts" },
		{ title: t("user-menu.financing").toUpperCase(), url: "financing" },
		{ title: t("user-menu.trade").toUpperCase(), url: "trade" },
		{ title: t("user-menu.payments").toUpperCase(), url: "payments" },
	];

	return (
		<div id="user-menu">
			<h3>
				{t("user-menu.morning")}, {name}
			</h3>
			<Tabs tabs={TABS}></Tabs>
		</div>
	);
}
