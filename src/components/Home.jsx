import Loading from "./Loading";
import { addFavoris } from "../functions/addFavoris.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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

  return isLoading ? (
    <Loading />
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
              <FontAwesomeIcon
                icon={
                  characters.find((elem) => elem === x.id)
                    ? { faHeartSolid }
                    : { faHeartRegular }
                }
                className="heartRed"
                onClick={(event) => {
                  event.stopPropagation();
                  addFavoris(
                    token,
                    setVisibleAuthentication,
                    setCharacters,
                    x.id
                  );
                }}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Home;
