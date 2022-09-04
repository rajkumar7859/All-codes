import { useContext } from "react";
import UserProfile from "./Components/UserProfile";
// import { ThemeContextProvider } from "./Context/ThemeContext";
import "./styles.css";

export default function App() {
  // const { isTheme } = useContext(ThemeContextProvider);

  return (
    <div className={`App`}>
      <UserProfile />
    </div>
  );
}
