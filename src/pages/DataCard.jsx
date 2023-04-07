import React from "react";
import "./data.css";
import { Link } from "react-router-dom";
import { deletUser } from "../apiCalling/FetchApi";
import { useNavigate } from "react-router-dom";
import Update from "./Update";


function DataCard({ _id, Name, email, password }) {
  const Navigator = useNavigate();

  const DeletData = async () => {
    const iddata = _id;
    const res = await deletUser(iddata).then(window.location.reload(true));
    window.alert(res.data)
  };

 

  return (
    <div className="main">
      <table>
        <tr className="tr">
          <td className="id">{_id}</td>
        </tr>
        <tr className="tr">
          <td>{Name}</td>
        </tr>
        <tr className="tr">
          <td>{email}</td>
        </tr>
        <tr className="tr">
          <td className="pass ">{password}</td>
        </tr>
        <tr className="tr">
          <td>
            <i className="fa-solid fa-trash icon delet" onClick={DeletData}></i>
            <Link to={`/Update/${_id}`} className="update">
              {" "}
              <i className="fa-solid fa-pen icon"  ></i>
            </Link>
          </td>
        </tr>
      </table>
      <hr></hr>
    </div>
  );
}

export default DataCard;
