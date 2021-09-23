import './App.css';
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
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
    return (
        <div className="App">
            {/*<Accordion items={items}/>*/}
            {/*<Search/>*/}
            <Dropdown/>
        </div>

    );
}

export default App;
