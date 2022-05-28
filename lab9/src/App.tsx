import React from 'react';
import './App.css';
import Catalog from './components/Catalog';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
      <>
        <SignUpForm title={"MyForm"}/>
        <Catalog/>
      </>
  );
}
export default App;
