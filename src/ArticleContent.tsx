import React from "react";
import { textData } from "./components/atoms/textContent-atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { textOccurrence } from "./components/atoms/textOccurence-atom";
import { searchTermProp } from "./shared/types";

const ArticleContent: React.FC<searchTermProp> = ({ searchTerm }) => {
  const textContent = useRecoilValue(textData);
  const [, setOccurrence] = useRecoilState(textOccurrence);
  const highlightedText = getHighlightedText(
    textContent,
    searchTerm,
    setOccurrence
  );
  return (
    <div>
      <p className="py-10 text-gray-700">{highlightedText}</p>
    </div>
  );
};

export default ArticleContent;

const getHighlightedText = (
  text: string,
  highlight: string,
  setOccurrence: (value: number) => void
) => {
  // Split text on highlight term, include term itself into parts, ignore case
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  // Count occurrences
  const matches = text.match(regex) || [];
  if (highlight.length > 0) {
    setOccurrence(matches.length);
  } else {
    setOccurrence(0);
  }
  const highlightedText = parts.map((part: string, index: number) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === highlight.toLowerCase() ? (
        <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
  return highlightedText;
};
