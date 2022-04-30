import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names=['dima','alex']
  const user=[{name:'dima'}, {name:'alex'}]
  const el=user.map((u,index)=><li key={index}>{index}-{u.name}</li>)
  return (
    <div className="App">
     <ul>
       {el}
     </ul>
    </div>
  );
}

export default App;
