import "./App.css";
import { Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import View from "./pages/View";
import About from "./pages/About";
//import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddEdit from "./pages/AddEdit";
//import AddUser from "./pages/AddUser";




function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <ToastContainer position  ="top-center"/>
        <Switch>
          <Route exact path  = "/" component ={Home}/>
          <Route path ="/add" component={AddEdit}/>
          <Route path = "/update/:id" component={AddEdit}/>
          <Route path = "/view/:id" component={View}/>
          <Route path = "/about" component={About}/>

        </Switch>
      </div>
    </>
  );
}

export default App;
