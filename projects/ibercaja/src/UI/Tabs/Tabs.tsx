import { NavLink } from "react-router-dom";
import { Tab } from "./Tabs.model";
import "./Tabs.scss";

export default function Tabs({ tabs }: { tabs: Tab[] }) {
	return (
		<div className="tabs">
			{tabs.map((tab) => (
				<span key={tab.title}>
					<NavLink
						to={tab.url}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						{tab.title}
					</NavLink>
				</span>
			))}
		</div>
	);
}
