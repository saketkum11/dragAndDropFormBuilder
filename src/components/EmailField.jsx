/* eslint-disable react/prop-types */
import { v4 } from "uuid";
import { MdOutlineAlternateEmail } from "react-icons/md";
const EmailField = ({ handleOnDrag }) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        handleOnDrag({
          id: v4(),
          textMessage: "helloworld@gmail.com",
          title: "Email Field",
          name: "title",
          type: "email",
          isInputField: true,
          isRequired: true,
        });
      }}
      className="flex flex-col gap-2 overflow-hidden justify-center items-center hover:bg-zinc-800 hover:cursor-grab border border-zinc-500 border-solid px-4 py-8 rounded-lg relative"
    >
      <MdOutlineAlternateEmail className="text-5xl" />
      <p className="text-center">Email Field</p>
    </div>
  );
};

export default EmailField;
