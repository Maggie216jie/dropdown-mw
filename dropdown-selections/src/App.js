import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import DropdownSelection from './Dropdown/DropdownSelection';

function App() {
  return (
    <div>
      <DropdownSelection 
        //selectType has two values: "single" and "mulitiple". Mulitiple is the default one.
        selectType ={"single"}
        //option
        options= {[{value:"apple", lable:"Apple"},{value:"orange", lable:"Orange"}, {value:"banana", lable:"Banana"}]}
      />
    </div>
  );
}

export default App;
