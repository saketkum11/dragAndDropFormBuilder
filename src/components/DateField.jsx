/* eslint-disable react/prop-types */
import { CiCalendarDate } from "react-icons/ci";
import { v4 } from "uuid";

const DateField = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Hello world",
          title: "Date Field",
          name: "title",
          type: "date",
          isInputField: true,
          isRequired: true,
        });
      }}
      className=" col-span-2  sm:col-span-1 lg:col-span-2 2xl:col-span-1  flex flex-col gap-2 overflow-hidden justify-center items-center hover:bg-zinc-800 hover:cursor-grab border border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <CiCalendarDate className="text-5xl" />
      <p className="text-center">Date Field</p>
    </div>
  );
};

export default DateField;
