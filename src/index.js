import reactDOM from "react-dom";
import Root from "./App";
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

reactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
document.getElementById("root"));