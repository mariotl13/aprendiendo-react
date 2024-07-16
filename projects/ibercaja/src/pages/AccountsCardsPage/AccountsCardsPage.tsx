import { useState, useEffect } from "react";
import { Card } from "../../components/CardList/CardDetail/CardDetail.model";
import CardList from "../../components/CardList/CardList";
import DataSection from "../../components/DataSection/DataSection";
import "./AccountsCardsPage.scss";

export default function AccountsCardsPage() {
	const [isTable, setIsTable] = useState(false);
	const [cuentas, setCuentas] = useState<Card[]>([]);

	useEffect(() => {
		async function getCuentas() {
			const response = await fetch("/assets/api/cuentas.json");
			const data = await response.json();
			setCuentas(data);
		}

		getCuentas();
	}, []);

	const handleOnChangeSwitch = (newValue: boolean) => {
		setIsTable(newValue);
	};

	return (
		<>
			<DataSection
				title="Cuentas"
				onChange={handleOnChangeSwitch}
			></DataSection>
			<CardList cards={cuentas} isTable={isTable}></CardList>
		</>
	);
}
