import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import DropdownSelection from './Dropdown/DropdownSelection';

function App() {

  let onChange =(value)=>{

    console.log(value)

  }


  return (
    <div>
      <DropdownSelection 
        //selectType has two values: "single" and "mulitiple". Mulitiple is the default one.
        selectType ={"mulitiple"}
        //option
        options= {[{value:"apple", lable:"Apple"},{value:"orange", lable:"Orange"}, {value:"banana", lable:"Banana"}]}
        // for "single" only one value
        preSelect ={["apple","orange"]}
        onChange = {onChange}

      />
    </div>
  );
}

export default App;
