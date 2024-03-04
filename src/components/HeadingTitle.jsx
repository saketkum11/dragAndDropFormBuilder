/* eslint-disable react/prop-types */
import { LuHeading1 } from "react-icons/lu";
import { v4 } from "uuid";
const HeadingTitle = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Hello world",
          title: "Title Field",
          name: "title",
          type: "text",
          isInputField: true,
          isRequired: true,
        });
      }}
      className="flex flex-col gap-2 justify-center overflow-hidden items-center hover:bg-zinc-800 hover:cursor-grab hover:overflow-hidden border border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <LuHeading1 className="text-5xl" />
      <p>Title Field</p>
    </div>
  );
};

export default HeadingTitle;
