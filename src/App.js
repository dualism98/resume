import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Contacts from './components/Contacts/Contacts';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, flexWrap: 'wrap'}}>
        <Info />
        <Contacts />
        <Education />
      </div>
      <Projects />
    </div>
  );
}

export default App;
