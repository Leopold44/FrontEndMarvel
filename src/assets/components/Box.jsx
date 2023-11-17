import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import addFavoris from "../functions/addFavoris";

const Box = ({
  x,
  characters,
  token,
  setVisibleAuthentication,
  setCharacters,
  type,
}) => {
  console.log(x.name);
  return (
    <>
      <img src={x.picture} alt="pictureCharacter" />
      <h2>{x.name}</h2>
      <p>{x.description}</p>
      <FontAwesomeIcon
        icon={
          characters.find((elem) => elem === x.id)
            ? faHeartSolid
            : faHeartRegular
        }
        className={
          characters.find((elem) => elem === x.id) ? "heartRed" : "heartWhite"
        }
        onClick={(event) => {
          event.stopPropagation();
          addFavoris(
            token,
            setVisibleAuthentication,
            setCharacters,
            x.id,
            type
          );
        }}
      />
    </>
  );
};
export default Box;
