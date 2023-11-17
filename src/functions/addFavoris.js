import axios from "axios";
import Cookies from "js-cookie";

const addFavoris = async ({
  token,
  setVisibleAuthentication,
  setCharacters,
  id,
}) => {
  try {
    if (!token) {
      setVisibleAuthentication("signIn");
    } else {
      const response = await axios.post(
        `http://localhost:3000/character/${id}`,
        { token }
      );
      Cookies.set("characters", response.data.characters);
      setCharacters(response.data.characters);
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
export default addFavoris;
