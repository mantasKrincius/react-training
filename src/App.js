import './App.css';
import {useSelector} from "react-redux";
import {increment, decrement} from "./actions";
import {useDispatch} from "react-redux";


function App() {
    let hp = 10
    let logged = true
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>Counter: {counter} </h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <p>{hp - counter}</p>
            {hp === 2}

            {isLogged ? <h3>Valuable information </h3> : 'No Information'}

        </div>
    );
}

export default App;
