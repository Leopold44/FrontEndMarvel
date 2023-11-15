import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/character/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Page en-cours de chargement</p>
  ) : (
    <main className="characters">
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
export default Character;
