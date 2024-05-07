import { useState } from "react";
import { useRecoilValue } from "recoil";
import { textData } from "./atoms/textContent-atom";
import ArticleContent from "../ArticleContent";
import SearchBar from "./SearchBar";
import { textOccurrence } from "./atoms/textOccurence-atom";

const TextArea = () => {
  const textContent = useRecoilValue(textData);
  const Occurrence = useRecoilValue(textOccurrence);
  const [searchTerm, setSearchTerm] = useState("");
  const wordCount = textContent.split(/\s+/).filter(Boolean).length;
  const letterCount = textContent.length;

  return (
    <div className="container w-1/2">
      <div className="  justify-between border-b-2 flex items-center ">
        <div className="flex gap-10">
          <div className="p-4 text-center">
            <p className="text-gray-400 ">Words</p>
            <p className="text-4xl text-gray-700">{wordCount}</p>
          </div>
          <div className="p-4 text-center">
            <p className="text-gray-400 ">Characters</p>
            <p className="text-4xl text-gray-700">{letterCount}</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {searchTerm && (
            <p className="px-4">Total Occurrence : {Occurrence}</p>
          )}
        </div>
      </div>
      <ArticleContent searchTerm={searchTerm} />
    </div>
  );
};

export default TextArea;
