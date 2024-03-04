/* eslint-disable react/prop-types */
import { TbInputAi } from "react-icons/tb";
import { v4 } from "uuid";

const Input = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Hello world",
          title: "Input Field",
          name: "title",
          type: "text",
          isInputField: true,
          isRequired: true,
        });
      }}
      className="flex flex-col gap-2 overflow-hidden justify-center items-center hover:bg-zinc-800 hover:cursor-grab border border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <TbInputAi className="text-5xl" />
      <p>Input Field</p>
    </div>
  );
};

export default Input;
