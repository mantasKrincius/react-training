import './App.css';
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import {useState} from "react";
import Translate from "./Components/Translate";
import Accordion from "./Components/Accordion";
import Route from "./Components/Route";
import Header from "./Components/Header";

// import Accordion from "./Components/Accordion";

function App() {


    const items = [
        {
            title: "what is react?",
            content: "React is jS librray"
        },
        {
            title: "what is react?",
            content: "What better Vue or React"
        }, {
            title: "what is react?",
            content: "React redux"
        }
    ]

    const options = [
        {
            label: "Color RED",
            value: "red"
        },
        {
            label: "Color GREEN",
            value: "green"
        },
        {
            label: "Color BLUE",
            value: "blue"
        }
    ]
    

    const [selected, setSelected] = useState(options[0])
    return (
        <div className="App">
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select Color" options={options} onSelectedChange={setSelected} selected={selected}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>

    );
}

export default App;
