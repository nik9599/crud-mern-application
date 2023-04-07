import "./Mainpage.css";
// import Value from "./data.js";
import FetchApi from "../apiCalling/FetchApi";
import { Link } from "react-router-dom";
import { getApi } from "../apiCalling/FetchApi";
import Data from "./Data.jsx";

export default function Mainpage() {
  
 
  return (
    <div className="App">
      <section className="Top-Bar">
        <h1>CRUD_Operation</h1>
        <p>Database Name</p>
        <Link to="/add" className="link">
          {" "}
          <button>ADD</button>
        </Link>
      </section>
      <section className="DatabaseContent">
        <hr></hr>
        <table>
          <tr>
            <th>id</th>
          </tr>
          <tr>
            <th>UserName</th>
          </tr>
          <tr>
            <th>Email</th>
          </tr>
          <tr>
            <th>Password</th>
          </tr>
          <tr>
            <th>operation</th>
          </tr>
        </table>
      </section>
     
      <Data/>
      
    </div>
  );
}
