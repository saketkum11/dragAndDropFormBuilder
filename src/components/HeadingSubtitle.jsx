/* eslint-disable react/prop-types */
import { LuHeading2 } from "react-icons/lu";
import { v4 } from "uuid";
const HeadingSubtitle = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Hello world",
          title: "SubTitle Field",
          name: "title",
          type: "text",
          isInputField: true,
          isRequired: true,
        });
      }}
      className="flex flex-col  gap-2 overflow-hidden justify-center items-center hover:bg-zinc-800 hover:cursor-grab border border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <LuHeading2 className="text-5xl" />
      <p>SubTitle Field</p>
    </div>
  );
};

export default HeadingSubtitle;
