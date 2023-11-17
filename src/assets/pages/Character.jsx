import Box from "../components/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";

const Character = ({ token, setVisibleAuthentication, comics, setComics }) => {
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
  }, [id]);

  return isLoading ? (
    <p>Page en-cours de chargement</p>
  ) : (
    <main className="characters">
      <section>
        <h1>
          Comics liés au personnage <span>{data[1]}</span> :
        </h1>
      </section>
      <section>
        {data[0].map((x) => {
          return (
            <div key={x.id} className="characterBox">
              <Box
                x={x}
                characters={comics}
                token={token}
                setVisibleAuthentication={setVisibleAuthentication}
                setCharacters={setComics}
                type="comics"
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Character;
