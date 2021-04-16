import logo from './logo.svg';
import './App.css';
import Leftside from './Leftside';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Creatementor from './creatementor';
import Createstudent from './createstudent';
import Mentor from './mentor';
import Student from './student';
import Useredit from './useredit';

function App() {
  return (<>
    <Router>
      <Switch>
        <Route path="/" exact="true">
        <Leftside></Leftside></Route>
        <Route path="/creatementor" exact="true">
        <Creatementor></Creatementor></Route>
        <Route path="/createstudent" exact="true">
        <Createstudent></Createstudent></Route>
        <Route path="/mentor/:id" exact="true">
        <Mentor></Mentor></Route>
        <Route path="/student/:id" exact="true">
         <Student></Student></Route>
         <Route path="/useredit/:id" exact="true">
         <Useredit></Useredit></Route>
      </Switch>
    </Router></>
  );
}

export default App;
