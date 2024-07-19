import { createContext } from "react";

const DEFAULT_USER = {
	name: "",
};

export const UserContext = createContext(DEFAULT_USER);

function UserProvider({ children }) {
	const FAKE_USER = {
		name: "Mario",
	};

	return (
		<UserContext.Provider value={FAKE_USER}>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
