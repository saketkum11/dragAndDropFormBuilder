/* eslint-disable react/prop-types */
import { v4 } from "uuid";
import { MdOutlinePassword } from "react-icons/md";
const Password = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "Hello world",
          title: "Password Field",
          name: "title",
          type: "password",
          isInputField: true,
          isReadAble: true,
          isRequired: true,
        });
      }}
      className="flex flex-col gap-2 overflow-hidden justify-center items-center hover:bg-zinc-800 hover:cursor-grab border border-zinc-500 border-solid px-4 py-8 rounded-lg"
    >
      <MdOutlinePassword className="text-5xl" />
      <p>Password Field</p>
    </div>
  );
};

export default Password;
