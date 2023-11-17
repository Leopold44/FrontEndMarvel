import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import axios from "axios";
import { useEffect, useState } from "react";

const Comics = ({ token, setVisibleAuthentication, comics, setComics }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `http://localhost:3000/comics/?page=${page}`,
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
      <Navbar setSearch={setSearch} page={page} setPage={setPage} />
      <section>
        {data.map((x) => {
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
export default Comics;
