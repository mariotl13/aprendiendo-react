import { useState } from "react";
import { Card } from "../../components/CardList/CardDetail/CardDetail.model";
import CardList from "../../components/CardList/CardList";
import DataSection from "../../components/DataSection/DataSection";
import "./AccountsCardsPage.scss";

export default function AccountsCardsPage() {
	const [isTable, setIsTable] = useState(false);

	const CARDS: Card[] = [
		{
			title: "Pago nóminas",
			iban: "*5413",
			amount: 28329398,
			available: 2322,
		},
		{
			title: "Pago nóminas",
			iban: "*3975",
			amount: 28329398,
			available: 2322,
		},
		{
			title: "Pago nóminas",
			iban: "*1972",
			amount: 28329398,
			available: 2322,
		},
	];

	const handleOnChangeSwitch = (newValue: boolean) => {
		setIsTable(newValue);
	};
	return (
		<>
			<DataSection
				title="Cuentas"
				onChange={handleOnChangeSwitch}
			></DataSection>
			<CardList cards={CARDS} isTable={isTable}></CardList>
		</>
	);
}
