import axios from "axios";
import Loading from "../components/Loading";
import Box from "../components/Box";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";

const Favoris = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characters, comics } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `https://site--marvel--nlvzpbyz5k82.code.run/favorite`,
        {
          char: characters,
          comics: comics,
        }
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characters, comics]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="favoris">
      <section>
        <h1>Tes personnages préférés</h1>
        <div className="caroussel">
          {!data.characters.length ? (
            <div className="emptyFav">
              <h2>Aucun personnage ajouté aux favoris</h2>
            </div>
          ) : (
            data.characters.map((x) => {
              return (
                <div
                  key={x.id}
                  className="characterBox"
                  onClick={() => {
                    navigate(`/character/${x.id}`);
                  }}
                >
                  <Box x={x} type="characters" />
                </div>
              );
            })
          )}
        </div>

        <section>
          <h1>Tes comics préférés</h1>
          <div className="caroussel">
            {!data.comics.length ? (
              <div className="emptyFav">
                <h2>Aucun comics ajouté aux favoris</h2>
              </div>
            ) : (
              data.comics.map((x) => {
                return (
                  <div key={x.id} className="characterBox">
                    <Box x={x} type="comics" />
                  </div>
                );
              })
            )}
          </div>
        </section>
      </section>
    </main>
  );
};
export default Favoris;
