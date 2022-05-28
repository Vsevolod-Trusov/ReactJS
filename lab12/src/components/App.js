import React from "react";
import Catalog from "./Catalog.jsx";
import "../index.css";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="main">
        <div >
            <SignUpForm />
        </div>
        <div>
            <Catalog />
        </div>
    </div>
  );
}

export default App;
