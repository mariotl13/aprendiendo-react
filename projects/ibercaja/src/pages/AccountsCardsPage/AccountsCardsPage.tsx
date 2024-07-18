import { useState } from "react";
import { Card } from "../../components/CardList/CardDetail/CardDetail.model";
import CardList from "../../components/CardList/CardList";
import DataSection from "../../components/DataSection/DataSection";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

export default function AccountsCardsPage() {
	const { t } = useTranslation();

	const [isTable, setIsTable] = useState(false);

	const cuentas = useLoaderData() as Card[];

	const handleOnChangeSwitch = (newValue: boolean) => {
		setIsTable(newValue);
	};

	return (
		<>
			<DataSection
				title={t("accounts.accounts")}
				onChange={handleOnChangeSwitch}
			></DataSection>
			<CardList cards={cuentas} isTable={isTable}></CardList>
		</>
	);
}

export async function loader() {
	const response = await fetch("/assets/api/cuentas.json");

	if (!response.ok) {
		throw new Error("No se han podido cargar los datos.");
	} else {
		const data = await response.json();
		return data;
	}
}
