import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Contacts from './components/Contacts/Contacts';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
        <Info />
        <Contacts />
        <Education />
      </div>
      
    </div>
  );
}

export default App;
