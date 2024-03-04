/* eslint-disable react/prop-types */
import { v4 } from "uuid";
import { LuRectangleHorizontal } from "react-icons/lu";
const Button = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Submit",
          title: "Button Field",
          name: "title",
          type: "button",
          isInputField: true,
          isRequired: true,
        });
      }}
      className="col-span-2  sm:col-span-1 lg:col-span-2 2xl:col-span-1   flex flex-col gap-2 overflow-hidden justify-center items-center hover:bg-zinc-800 hover:cursor-grab border border-zinc-500 border-solid px-4 py-8 rounded-lg relative"
    >
      <LuRectangleHorizontal className="text-5xl" />
      <p className="text-center">Button Field</p>
    </div>
  );
};

export default Button;
