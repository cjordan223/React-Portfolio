import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './css/style.css'
import GridComponent from './components/GridComponent';
import Layout from "./components/Layout";



function App() {
  return (
    <div className="App">
        <Layout> <GridComponent />
        <div id="space-guy"></div></Layout>
    </div>
  );
}

export default App;
