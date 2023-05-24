import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const title = ["Mr.", "Mrs."];

const DropdownTitle = () => {
  const [option, setOption] = useState(false);
  const [title, setTitle] = useState("");

  const hanldeOnClick = () => {
    setOption(!option);
  };

  const handleOptions = (newTitle) => {
    setTitle(newTitle);
    setOption(false);
  };

  return (
    <div className="flex justify-between">
      <input
        type="text"
        value={title}
        className="text-base focus:outline-none"
      />
      {!option ? (
        <IoIosArrowDown className="text-blue-500" onClick={hanldeOnClick} />
      ) : (
        <div className="relative">
          <Options setter={handleOptions} />
        </div>
      )}
    </div>
  );
};

const Options = ({ setter }) => {
  const hanldeOnClick = (item) => {
    setter(item);
  };

  return (
    <div className="absolute right-0 px-5 overflow-auto bg-white shadow-md touch-pan-y h-52 w-fit">
      {title.map((item, index) => (
        <p
          key={index}
          onClick={() => hanldeOnClick(item)}
          className="hover:cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default DropdownTitle;
