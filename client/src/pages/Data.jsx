import React, { useEffect, useState } from "react";
import { getApi } from "../apiCalling/FetchApi.js";
import DataTable from "./DataCard.jsx";
import "./DataStyle.css";

function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  
  const getAllUser = async () => {
    const res = await getApi()
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <div className="data">
      {users.map(({_id , name , username ,password}) => (
        
        <DataTable
          _id={_id}
          Name={name}
          email={username}
          password={password}
        />
      ))}
    </div>
  );
}

export default Data;
