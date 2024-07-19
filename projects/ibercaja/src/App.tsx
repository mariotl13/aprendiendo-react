import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import UserProvider from "./store/UserContext";

function App() {
	return (
		<UserProvider>
			<DashboardLayout />
		</UserProvider>
	);
}

export default App;
