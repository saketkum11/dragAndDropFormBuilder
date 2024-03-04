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
      className="col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1  flex flex-col gap-2 justify-center items-center border overflow-hidden hover:bg-zinc-800 hover:cursor-grab border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <BsTextareaResize className="text-5xl" />
      <p className="text-center">TextArea Field</p>
    </div>
  );
};

export default TextArea;
