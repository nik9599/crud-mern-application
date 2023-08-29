import axios from "axios";


const GET_URL = "https://crud-mern-application-api.vercel.app/data";

export const getApi = async () => {

  try {
    const dta = await axios.get(GET_URL);

    return dta;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (data) => {
  // const URL = "http://localhost:8080/data";
  const URL= "https://crud-mern-application-api.vercel.app/data";
  try {
    return await axios.post(URL, GET_URL);
  } catch (error) {
    console.log(error);
  }
};

// export default FetchApi;

// const deletURL = "http://localhost:8080/data/";
const deletURL= "https://crud-mern-application-api.vercel.app/data";

export const deletUser = async (id) => {
  try {
    const res = await axios.delete(GET_URL + id);
    return res;
  } catch (err) {
    console.log(err.body);
  }
};
// const upDateURL = "http://localhost:8080/data/";
const upDateURL= "https://crud-mern-application-api.vercel.app/data";
export const updateUser = async (id, data) => {
  try {
    return await axios.patch(GET_URL + id, data);
  } catch (error) {
    console.log(error);
  }
};

// const urL = "http://localhost:8080/data/";
const urL = "https://crud-mern-application-api.vercel.app/data";
export const getById = async (id) => {
  try {
    return await axios.get(GET_URL + id);
  } catch (err) {
    console.log(err);
  }
};
