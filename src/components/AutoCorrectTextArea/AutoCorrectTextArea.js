import React, { useState } from "react";
import { correctionObj } from "../../util/Constant";

const AutoCorrectTextArea = () => {
  const [value, setValue] = useState("");

  // correction works only for keys that are available in correctionObj
  const handleTextChange = (e) => {
    let input = e.target.value;
    const wordArr = input.split(" ");
    let correctionObjkeys = Object.keys(correctionObj);
    let lastWord = wordArr[wordArr.length - 1];
    if (correctionObjkeys.find((key) => key == lastWord)) {
      wordArr[wordArr.length - 1] = correctionObj[lastWord];
    }
    let newWord = wordArr.join(" ");
    setValue(newWord);
  };

  return (
    <div>
      <textarea
        style={{ height: "150px", width: "250px" }}
        onChange={handleTextChange}
        value={value}
      />
    </div>
  );
};

export default AutoCorrectTextArea;
