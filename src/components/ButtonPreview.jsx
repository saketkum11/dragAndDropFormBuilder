/* eslint-disable react/prop-types */

const ButtonPreview = ({ widgetText }) => {
  return (
    <button className="bg-white text-zinc-800 py-2 rounded-lg mt-10 w-full">
      {widgetText}
    </button>
  );
};

export default ButtonPreview;
