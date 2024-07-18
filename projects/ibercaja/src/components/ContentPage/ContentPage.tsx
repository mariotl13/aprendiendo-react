import { Outlet } from "react-router-dom";
import "./ContentPage.scss";

export default function ContentPage() {
	return (
		<div id="content-page">
			<Outlet />
		</div>
	);
}
