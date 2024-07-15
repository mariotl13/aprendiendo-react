import ContentPage from "../ContentPage/ContentPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import UserMenu from "../UserMenu/UserMenu";
import "./DashboardLayout.scss";

export default function DashboardLayout() {
	return (
		<>
			<Header />
			<div id="layout">
				<div id="main-content">
					<UserMenu />
					<ContentPage />
				</div>
				<Sidebar />
			</div>
			<Footer />
		</>
	);
}
