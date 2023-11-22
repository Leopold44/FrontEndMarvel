import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `https://site--marvel--nlvzpbyz5k82.code.run/?page=${page}`,
        {
          title: search,
        }
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search, page]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="characters">
      {console.log("hello")}
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
              <Box x={x} type="characters" />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Home;
