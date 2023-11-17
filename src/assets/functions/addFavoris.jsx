import axios from "axios";
import Cookies from "js-cookie";

const addFavoris = async (
  token,
  setVisibleAuthentication,
  setFavoris,
  id,
  type
) => {
  try {
    if (!token) {
      setVisibleAuthentication("signIn");
    } else {
      const response = await axios.post(`http://localhost:3000/${type}/${id}`, {
        token,
      });
      Cookies.set(`${type}`, response.data[type]);
      setFavoris(response.data[type]);
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
export default addFavoris;
