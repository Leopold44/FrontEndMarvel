import logo from "/logo.png";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = ({
  token,
  setVisibleAuthentication,
  characters,
  setCharacters,
}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(`http://localhost:3000/?page=${page}`, {
        title: search,
      });
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  const addFavoris = async (charId) => {
    try {
      if (!token) {
        setVisibleAuthentication("signIn");
      } else {
        const response = await axios.post(
          `http://localhost:3000/character/${charId}`,
          { token }
        );
        Cookies.set("characters", response.data.characters);
        setCharacters(response.data.characters);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return isLoading ? (
    <motion.div
      className="transition"
      animate={{
        scale: [1, 2, 2, 2, 1],
        rotate: [0, 90, 90, 180, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <img src={logo} alt="" />
    </motion.div>
  ) : (
    <main className="characters">
      <section>
        <input
          type="text"
          id="search"
          placeholder="Quel personnage recherches-tu ?"
          onChange={(elem) => {
            setSearch(elem.target.value);
          }}
        />

        <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
      </section>
      <section>
        {data.map((x) => {
          return (
            <div
              key={x.id}
              className="characterBox"
              onClick={() => {
                navigate(`/character/${x.id}`);
              }}
            >
              <img src={x.picture} alt="pictureCharacter" />
              <h2>{x.name}</h2>
              <p>{x.description}</p>
              {characters.find((elem) => elem === x.id) ? (
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  className="heartRed"
                  onClick={(event) => {
                    event.stopPropagation();
                    addFavoris(x.id);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartRegular}
                  className="heartWhite"
                  onClick={(event) => {
                    event.stopPropagation();
                    addFavoris(x.id);
                  }}
                />
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Home;
