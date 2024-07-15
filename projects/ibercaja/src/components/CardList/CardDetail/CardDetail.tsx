import { Card } from "./CardDetail.model";
import "./CardDetail.scss";
import { currencyFormatter } from "../../../utils/formatting";

export default function CardDetail({
	card,
	isTable = false,
}: {
	card: Card;
	isTable?: boolean;
}) {
	return (
		<div className={`card-detail ${isTable ? "table" : ""}`}>
			<p>{card.title}</p>
			<p>{card.iban}</p>
			<p className="amount">{currencyFormatter.format(card.amount)}</p>
			<p className="available">
				Disponible: <b>{currencyFormatter.format(card.available)}</b>
			</p>
		</div>
	);
}
