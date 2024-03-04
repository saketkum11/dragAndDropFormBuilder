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
      className=" col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1  overflow-hidden hover:bg-zinc-800 hover:cursor-grab hover:overflow-hidden border border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <div className="flex flex-col gap-2 justify-center  items-center">
        <LuHeading1 className="text-5xl" />
        <p className="text-center">Title Field</p>
      </div>
    </div>
  );
};

export default HeadingTitle;
