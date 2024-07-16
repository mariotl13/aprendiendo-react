import "./Sidebar.scss";
import SidebarGroup from "./SidebarGroup/SidebarGroup";
import { SidebarGroupActivity } from "./SidebarGroup/SidebarGroup.model";
import { useState, useEffect } from "react";

export default function Sidebar() {
	const [actividades, setActividades] = useState<SidebarGroupActivity[]>([]);

	// For medium screen only
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		async function getCuentas() {
			const response = await fetch("/assets/api/actividades.json");
			const data = await response.json();
			setActividades(data);
		}

		getCuentas();
	}, []);

	return (
		<div id="sidebar" className={opened ? "opened" : "closed"}>
			<div id="sidebar-content-closed">
				<button
					onClick={() => setOpened((currentValue) => !currentValue)}
				>
					{opened ? "X" : "<"}
				</button>
			</div>
			<div id="sidebar-content">
				<h3>Actividad reciente</h3>
				{actividades.map((activity) => (
					<SidebarGroup
						activity={activity}
						key={activity.date}
					></SidebarGroup>
				))}
			</div>
		</div>
	);
}
