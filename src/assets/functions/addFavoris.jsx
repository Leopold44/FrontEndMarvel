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
      const response = await axios.post(
        `https://site--marvel--nlvzpbyz5k82.code.run/${type}/${id}`,
        {
          token,
        }
      );
      Cookies.set(`${type}`, response.data[type]);
      setFavoris(response.data[type]);
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
export default addFavoris;
