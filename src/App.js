import './App.css';
import Rightside from './Component/RightSide_Column/Rightside';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <div className="container-fluid pt-3 h-100">
        <div className="row flex-grow-1  h-100">
          <Sidebar />
          <Rightside />
        </div>
      </div>
    </div>
  );
}

export default App;
