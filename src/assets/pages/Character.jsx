import Box from "../components/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel--nlvzpbyz5k82.code.run/character/${id}`
      );
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
              <Box x={x} type="comics" />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Character;
