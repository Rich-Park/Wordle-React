import { useContext } from "react";
import { AppContext } from "../../App";

// Style imports
import "./Key.scss";

const Key = ({ keyVal, bigKey }) => {
  const { selectLetter, deleteLetter, onEnter } = useContext(AppContext);

  // CLICKING KEYBOARD LOGIC
  const clickLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      deleteLetter();
    } else {
      selectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={clickLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
