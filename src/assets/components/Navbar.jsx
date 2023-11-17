import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setSearch, page, setPage }) => {
  return (
    <section>
      <input
        type="text"
        id="search"
        placeholder="Quel personnage recherches-tu ?"
        onChange={(elem) => {
          setSearch(elem.target.value);
          setPage(1);
        }}
      />

      <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
      <div>
        {page !== 1 && (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            page précédente
          </button>
        )}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          page suivante
        </button>
      </div>
    </section>
  );
};
export default Navbar;
