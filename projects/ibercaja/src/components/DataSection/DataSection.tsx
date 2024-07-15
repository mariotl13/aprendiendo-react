import Switch from "../../UI/Switch/Switch";
import "./DataSection.scss";

export default function DataSection({ title }: { title: string }) {
	return (
		<div className="section">
			<h2 className="title">{title}</h2>
			<div className="switch-container">
				<span>Grid</span>
				<Switch></Switch>
				<span>Table</span>
			</div>
		</div>
	);
}
