import { SidebarGroupActivity } from "./SidebarGroup.model";
import "./SidebarGroup.scss";
import { currencyFormatter } from "../../../utils/formatting";

export default function SidebarGroup({
	activity,
}: {
	activity: SidebarGroupActivity;
}) {
	const intlConfig = Intl.DateTimeFormat("es-ES");

	return (
		<div className="sidebar-group">
			<span className="chip">{intlConfig.format(activity.date)}</span>
			<div className="items">
				{activity.items.map((item) => (
					<div className="item" key={item.title + item.price}>
						<span>{item.title}</span>
						<div style={{ display: "flex", alignItems: "center" }}>
							<span>{currencyFormatter.format(item.price)}</span>
							<span
								className={`status ${
									item.price >= 0
										? "status-pos"
										: "status-neg"
								}`}
							></span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
