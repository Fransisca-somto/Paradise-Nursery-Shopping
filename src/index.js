import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Homepage"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />)



