import UploadFile from "./components/UploadFile";
import TextArea from "./components/TextArea";
import { textData } from "./components/atoms/textContent-atom";
import { useRecoilValue } from "recoil";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
function App() {
  const textContent = useRecoilValue(textData);
  return (
    <div className="bg-white flex flex-col justify-center items-center  ">
      <div className="px-4">
        <Hero />

        <UploadFile />
        <br />
        {textContent && <TextArea />}
      </div>
      <Faq />
    </div>
  );
}

export default App;
