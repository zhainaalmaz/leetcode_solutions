const closeSecondDives = (string) => {
  let unknown = "";
  let divCounter = 0;
  let fixedHtml = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "<") {
      for (let j = 1; j < 5; j++) {
        unknown += string[i + j];
      }
    }
    if (unknown === "div>") {
      divCounter++;
      if (divCounter % 2 === 0) {
        fixedHtml += string[i] + "/";
        unknown = "";
        continue;
      }
    }
    fixedHtml += string[i];
    unknown = "";
  }
  return fixedHtml;
};

console.log(closeSecondDives("<div><p>hello</p><div>"));
