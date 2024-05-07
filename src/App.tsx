import UploadFile from "./components/UploadFile";
import TextArea from "./components/TextArea";
import { textData } from "./components/atoms/textContent-atom";
import { useRecoilValue } from "recoil";
function App() {
  const textContent = useRecoilValue(textData);
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen">
      <UploadFile />
      <br />
      {textContent && <TextArea />}
    </div>
  );
}

export default App;
