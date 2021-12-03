import React, { useState} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

//author: Thao Vo-CSIS 473
function App() {
  const adminUser = {
    name: "Admin",
    email: "admin@change4cause.com",
    password: "P@ssword123!"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState(""); 

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password)
      console.log("Admin logged in");
      setUser({
        email: details.email
      });
    }

      // else {
      //   setError("Details do not match");    }
  

  const Logout = () => {
    setUser({ name: "", email: ""});
  }


   return (
    <div className="App">


      {(user.email != "") ? (
        <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        {/* <h2>Welcome, Admin</h2> */}
        <button onClick={Logout}>Logout</button>
        </div>
      ): (

      <LoginForm Login={Login} error={error} />
      )}
    </div>
  );

      }
export default App;
