import React from "react";
import{Link} from "react-router-dom"

export default function Signin() {
  return (
    <>
      <form id="f1">
        <center>
          <h2>Sign In</h2>
          Email: <input type="text" placeholder="Email" /><br /><br />
          Password: <input type="password" placeholder="Password" /><br /><br />
          <button type="submit" id="bb">Login</button><br/><br/>
          <p>Don't have an account?<Link to='/Signup'><button id="bs">Signup</button></Link></p>
        </center>
      </form>

    </>
  );
}
