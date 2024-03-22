import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Screens/Home";
import About from "./components/Screens/About";
import Contact from "./components/Screens/Contact";
import Nav from "./components/includes/Nav";
import NoMatch from "./components/Screens/NoMatch";
import Students from "./components/Screens/Students";
import StudentsView from "./components/Screens/StudentsView";




class App extends React.Component{
  render (){
return (
  <Router>
    <Nav/>
<Routes>
  <Route path="/" element ={<Home/>}/>
  <Route path="/about" element ={<About/>}/>
  <Route path="/contact" element ={<Contact/>}/>
  <Route path="students" element ={<Students/>}/>
  <Route path="students/:id" element ={<StudentsView/>}/>
  <Route path="*" element ={<NoMatch/>}/>
</Routes>
  </Router>

)
  };
}


export default App
