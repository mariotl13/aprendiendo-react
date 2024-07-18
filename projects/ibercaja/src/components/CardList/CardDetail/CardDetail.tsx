import { Card } from "./CardDetail.model";
import "./CardDetail.scss";
import { currencyFormatter } from "../../../utils/formatting";
import { useNavigate } from "react-router-dom";

export default function CardDetail({
	card,
	isTable = false,
}: {
	card: Card;
	isTable?: boolean;
}) {
	const navigate = useNavigate();
	const handleOnClickCard = () => {
		navigate(`/accounts/${card.iban}`);
	};

	return (
		<div
			className={`card-detail ${isTable ? "table" : ""}`}
			onClick={handleOnClickCard}
		>
			<p>{card.title}</p>
			<p>{card.iban}</p>
			<p className="amount">{currencyFormatter.format(card.amount)}</p>
			<p className="available">
				Disponible: <b>{currencyFormatter.format(card.available)}</b>
			</p>
		</div>
	);
}
