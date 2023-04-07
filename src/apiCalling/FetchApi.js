import axios from "axios";

export const getApi = async () => {
  const GET_URL = "http://localhost:8080/data";
  try {
    const dta = await axios.get(GET_URL);

    return dta;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (data) => {
  const URL = "http://localhost:8080/data";
  try {
    return await axios.post(URL, data);
  } catch (error) {
    console.log(error);
  }
};

// export default FetchApi;

const deletURL = "http://localhost:8080/data/";

export const deletUser = async (id) => {
  try {
    const res = await axios.delete(deletURL + id);
    return res;
  } catch (err) {
    console.log(err.body);
  }
};
const upDateURL = "http://localhost:8080/data/";
export const updateUser = async (id, data) => {
  try {
    return await axios.patch(upDateURL + id, data);
  } catch (error) {
    console.log(error);
  }
};

const urL = "http://localhost:8080/data/";
export const getById = async (id) => {
  try {
    return await axios.get(urL + id);
  } catch (err) {
    console.log(err);
  }
};
