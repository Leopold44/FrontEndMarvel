import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Comics = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics/?page=${page}`,
        {
          title: search,
        }
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Page en-cours de chargement</p>
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
        {data.map((char) => {
          return (
            <div key={char.id} className="characterBox">
              <img src={char.picture} alt="pictureCharacter" />
              <h2>{char.name}</h2>
              <p>{char.description}</p>
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Comics;
