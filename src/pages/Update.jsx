import React, { useState, useEffect } from "react";
import "./update.css";
import { updateUser, getById } from "../apiCalling/FetchApi";
import { useParams, useNavigate } from "react-router-dom";
// import { eventNames } from "../../../api/modules/skema/dataSchema";
function Update() {
  useEffect(() => {
    getRequest();
  }, []);

  const { id } = useParams();
  const navigator = useNavigate();

  const [value, setValue] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword  ,setConfirmPassword] = useState()

  const getRequest = async () => {
    const res = await getById(id);

    setEmail(res.data.email);
    setName(res.data.name);
    setPassword(res.data.password);
  };

  const upDate = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      
    };

    if(confirmPassword == password){

    const res = await updateUser(id, data).then(navigator('/'));
  }
  else{
    window.alert('Password not match')
  }
  
  };

  return (
    <div className="Update">
      <form>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="name"
        />
        <br />

        <input
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="email"
        />
        <br />

        <input
          placeholder="passowrd"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          id="password"
        />
        <br />

        <input placeholder="confirmPassword" id="confirmpassword" 
         onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}/>
      </form>
      <button type="submit" className="UpdateButton" onClick={upDate}>
        Update Value
      </button>
    </div>
  );
}

export default Update;
