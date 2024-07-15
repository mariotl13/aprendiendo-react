import CardDetail from "./CardDetail/CardDetail";
import { Card } from "./CardDetail/CardDetail.model";
import "./CardList.scss";

export default function CardList({
	cards,
	isTable = false,
}: {
	cards: Card[];
	isTable?: boolean;
}) {
	return (
		<div className={`card-list ${isTable ? "table" : ""}`}>
			{cards.map((card: Card) => (
				<CardDetail
					key={card.iban}
					card={card}
					isTable={isTable}
				></CardDetail>
			))}
		</div>
	);
}
