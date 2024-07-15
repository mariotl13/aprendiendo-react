import { Card } from "../../components/CardList/CardDetail/CardDetail.model";
import CardList from "../../components/CardList/CardList";
import DataSection from "../../components/DataSection/DataSection";
import "./AccountsCardsPage.scss";

export default function AccountsCardsPage() {
	const CARDS: Card[] = [
		{
			title: "Pago nóminas",
			iban: "*5493",
			amount: 28329398,
			available: 2322,
		},
		{
			title: "Pago nóminas",
			iban: "*5493",
			amount: 28329398,
			available: 2322,
		},
		{
			title: "Pago nóminas",
			iban: "*5493",
			amount: 28329398,
			available: 2322,
		},
	];
	return (
		<>
			<DataSection title="Cuentas"></DataSection>
			<CardList cards={CARDS}></CardList>
		</>
	);
}
