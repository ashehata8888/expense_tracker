import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from 'react';
import DynamicTable from "./DynamicTable";

function App() {

  const [budget,setBudget] = useState("")

  const d = new Date();
let month = d.getMonth() + 1 ;

const currMonth = (m) =>{
  if(m === 1){
    return "Jan"
  } else if (m === 2){
    return "Feb"
  } else if (m === 3){
    return "Mar"
  } else if (m === 4){
    return "Apr"
  } else if (m === 5){
    return "May"
  } else if (m === 6){
    return "Jun"
  } else if (m === 7){
    return "Jul"
  } else if (m === 8){
    return "Aug"
  } else if (m === 9){
    return "Sep"
  } else if (m === 10){
    return "Oct"
  } else if (m === 11){
    return "Nov"
  } else if (m === 12){
    return "Dec"
  }
   
} 







  return (
    <div className="App">
      <header className="App-header">
       Expenses Tracker
      </header>
        
        <div className="budget">
         <span>{currMonth(month)}</span>  Budget <span>
          <input
          className="budgetTxt"
          placeholder='Monthly budget'
         type='text'
         onChange={(e)=>setBudget(e.target.value)}
         value={budget}
         ></input>
         </span>
        </div>

        <DynamicTable />

    </div>
  );
}



export default App;
