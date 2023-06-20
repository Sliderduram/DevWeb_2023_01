import './App.css';
import Exemplo from './Components/Exemplo';
import Header from './Components/Header';

function App() {
    let teste = 'Rafael';
    return (
        <div className="App">
            <Header nome={teste}/>
            <Exemplo />
        </div>
    );
}

export default App;
