import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from 'react';
import DynamicTable from "./DynamicTable";

function App() {








  return (
    <div className="App">
      <header className="App-header">
       Unifi Todo App
      </header>
        
        

        <DynamicTable />

    </div>
  );
}



export default App;
