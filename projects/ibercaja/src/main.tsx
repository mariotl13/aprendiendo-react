import "./index.css";
import "./i18n";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import AccountsCardsPage, {
	loader as CardsLoader,
} from "./pages/AccountsCardsPage/AccountsCardsPage.tsx";
import FinancingPage from "./pages/FinancingPage/FinancingPage.tsx";
import TradePage from "./pages/TradePage/TradePage.tsx";
// import PaymentsPage from "./pages/PaymentsPage/PaymentsPage.tsx";
import AccountDetailPage from "./pages/AccountDetailPage/AccountDetailPage.tsx";

const PaymentsPage = lazy(
	() => import("./pages/PaymentsPage/PaymentsPage.tsx")
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Navigate to="/accounts" replace />,
			},
			{
				path: "accounts",
				element: <AccountsCardsPage />,
				loader: CardsLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: "accounts/:cardId",
				element: <AccountDetailPage />,
			},
			{
				path: "financing",
				element: <FinancingPage />,
			},
			{
				path: "trade",
				element: <TradePage />,
			},
			{
				path: "payments",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PaymentsPage />
					</Suspense>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
