/* eslint-disable react/prop-types */
import { MdFormatListNumbered } from "react-icons/md";
import { v4 } from "uuid";
const NumberField = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: 45212,
          title: "Number Field",
          name: "title",
          type: "number",
          isInputField: true,
          isRequired: true,
        });
      }}
      className="col-span-2 sm:col-span-1 lg:col-span-2 2xl:col-span-1   flex flex-col gap-2 overflow-hidden justify-center items-center border border-zinc-500 border-solid px-4 py-8 rounded-lg hover:bg-zinc-800 hover:cursor-grab"
    >
      <MdFormatListNumbered className="text-5xl" />
      <p className="text-center">Number Field</p>
    </div>
  );
};

export default NumberField;
