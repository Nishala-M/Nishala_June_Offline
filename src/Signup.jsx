import React from "react";
import{Link} from "react-router-dom"

export default function Signin() {
  return (
    <>
      <form id="f1">
        <center>
          <h2>Sign In</h2>
          Email: <input type="text" placeholder="Email" /><br /><br />
          Enter Password: <input type="password" placeholder="Password" /><br /><br />
          Confirm Password: <input type="password" placeholder="Password" /><br /><br />
          <button type="submit" id="bb">Signin</button><br/><br/>
        </center>
      </form>

    </>
  );
}
