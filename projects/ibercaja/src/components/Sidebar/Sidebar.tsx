import "./Sidebar.scss";
import SidebarGroup from "./SidebarGroup/SidebarGroup";
import { SidebarGroupActivity } from "./SidebarGroup/SidebarGroup.model";
import { useState, useEffect } from "react";

export default function Sidebar() {
	const [actividades, setActividades] = useState<SidebarGroupActivity[]>([]);

	useEffect(() => {
		async function getCuentas() {
			const response = await fetch("/assets/api/actividades.json");
			const data = await response.json();
			setActividades(data);
		}

		getCuentas();
	}, []);

	return (
		<div id="sidebar">
			<h3>Actividad reciente</h3>
			{actividades.map((activity) => (
				<SidebarGroup
					activity={activity}
					key={activity.date}
				></SidebarGroup>
			))}
		</div>
	);
}
