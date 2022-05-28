import React from 'react';
import BlockDifDate from "./BlockDifDate";
import BlockWorksMenu from "./BlockWorksMenu";


function App() {
  return (
    <div className="App">
        <BlockDifDate />
        <BlockDifDate format='12' timezone='+10:00' />
        <BlockDifDate format='24' timezone='+5:30'  />

        <BlockWorksMenu />
    </div>
  );
}

export default App;
