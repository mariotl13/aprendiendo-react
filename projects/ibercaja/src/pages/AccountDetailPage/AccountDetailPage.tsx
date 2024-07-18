import { useParams } from "react-router-dom";

export default function AccountDetailPage() {
	let params = useParams();

	return <>AccountDetailPage: {params.cardId}</>;
}
