import Switch from "../../UI/Switch/Switch";
import "./DataSection.scss";

export default function DataSection({
	title,
	onChange,
}: {
	title: string;
	onChange: (value: boolean) => void;
}) {
	return (
		<div className="section">
			<h2 className="title">{title}</h2>
			<div className="switch-container">
				<span>Grid</span>
				<Switch onChange={onChange}></Switch>
				<span>Table</span>
			</div>
		</div>
	);
}
