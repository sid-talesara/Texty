import { IoCloudUploadOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { textData } from "./atoms/textContent-atom";

const UploadFile = () => {
  const [, setTextContent] = useRecoilState(textData);
  const handleFileRead = (content: string) => {
    setTextContent(content);
  };

  const handleFile = (file: File | null) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        if (fileReader.readyState === FileReader.DONE) {
          const content = fileReader.result as string;
          handleFileRead(content);
        }
      };
      fileReader.readAsText(file);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    handleFile(file);
  };

  return (
    <div className=" border-4  hover:bg-gray-100 border-dashed p-4 w-full  h-64 md:h-96 md:w-full  rounded-lg  flex flex-col justify-center items-center gap-5">
      <label
        htmlFor="file"
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <IoCloudUploadOutline className="h-24 md:h-44 w-44 text-gray-400" />
        <p className="text-gray-400 text-2xl md:text-3xl">
          Upload your files here
        </p>
        <p className="text-gray-400 text-base">Maximum file size: 1mb</p>
        <p className="text-gray-400 text-base">Supported files: .txt</p>
      </label>
      <input
        id="file"
        name="file"
        type="file"
        className="hidden"
        accept="text/plain"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default UploadFile;
