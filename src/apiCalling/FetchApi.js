import axios from "axios";


export const getApi = async () => {
  const URL = process.env.REACT_APP_GET_API;
  try {
    const dta = await axios.get(URL);

    return dta;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (data) => {
  const URL = process.env.REACT_APP_GET_API;
  try {
    return await axios.post(URL, data);
  } catch (error) {
    console.log(error);
  }
};

// export default FetchApi;

const deletURL = process.env.REACT_APP_DELET_API;

export const deletUser = async (id) => {
  try {
    const res = await axios.delete(deletURL + id);
    return res;
  } catch (err) {
    console.log(err.body);
  }
};
const upDateURL = process.env.REACT_APP_UPDATE_API;
export const updateUser = async (id, data) => {
  
  try {
    return await axios.patch(upDateURL + id, data);
  } catch (error) {
    console.log(error);
  }
};

const urL = process.env.REACT_APP_GET_ID_API;
export const getById = async (id) => {
  try {
    return await axios.get(urL + id);
  } catch (err) {
    console.log(err);
  }
};
