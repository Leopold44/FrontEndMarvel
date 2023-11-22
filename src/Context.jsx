import { createContext } from "react";
import Cookies from "js-cookie";
import { useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [visibleAuthentication, setVisibleAuthentication] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [characters, setCharacters] = useState(
    (Cookies.get("characters") && Cookies.get("characters").split(",")) || []
  );
  const [comics, setComics] = useState(
    (Cookies.get("comics") && Cookies.get("comics").split(",")) || []
  );
  console.log(children);
  return (
    <AppContext.Provider
      value={{
        visibleAuthentication,
        setVisibleAuthentication,
        token,
        setToken,
        characters,
        setCharacters,
        comics,
        setComics,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
