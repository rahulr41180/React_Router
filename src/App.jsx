
import './App.css';

import { About } from './components/About';

import { Home } from './components/Home';

import { Login } from "./components/Login";

import { Navbar } from "./components/Navbar";

import { User } from "./components/User"

import { PrivateComponent } from "./components/PrivateComponents"

import { UserList } from "./components/UserList";

import { UserDetails } from "./components/UserDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route path = "/userslist" element = {<UserList />}></Route>
        <Route path = "/users" element = {<User />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/usersdetails/:id" element = {
        <PrivateComponent>
          <UserDetails />
        </PrivateComponent>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
