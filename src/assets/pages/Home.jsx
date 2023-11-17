import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import axios from "axios";
import { useEffect, useState } from "react";
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
  }, [search, page]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="characters">
      <Navbar setSearch={setSearch} page={page} setPage={setPage} />
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
              <Box
                x={x}
                characters={characters}
                token={token}
                setVisibleAuthentication={setVisibleAuthentication}
                setCharacters={setCharacters}
                type="characters"
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Home;
