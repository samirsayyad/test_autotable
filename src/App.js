import kaloomLogo from './kaloomLogo.png';
import './styles/App.css';
import TableGenerator from './components/TableGenerator';
import { tableData } from './data/tableData';
function App() {
  return (
    <div className="App">
      <img src={kaloomLogo} className="App-logo" alt="logo" />
      <header className="App-header">
        <p>
          Technical assessment of Samir Sayyad
        </p>
        
      </header>
      <TableGenerator data={tableData} />        
    </div>
  );
}

export default App;
