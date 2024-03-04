/* eslint-disable react/prop-types */
import { BsTextareaResize } from "react-icons/bs";
import { v4 } from "uuid";

const TextArea = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Hello world",
          title: "Text Area Field",
          name: "title",
          type: "text",
          isInputField: false,
          isRequired: true,
        });
      }}
      className="flex flex-col gap-2 justify-center items-center border overflow-hidden hover:bg-zinc-800 hover:cursor-grab border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <BsTextareaResize className="text-5xl" />
      <p>TextArea Field</p>
    </div>
  );
};

export default TextArea;
