/* eslint-disable react/prop-types */

import ButtonPreview from "./ButtonPreview";
import TextPreview from "./TextPreview";

const PreviewWidgets = ({ widget }) => {
  return (
    <div key={widget.id} className=" flex flex-col ">
      <div>
        <p className="pb-4 ">{widget.title}</p>
        <div className="ml-8">
          {widget.type === "button" ? (
            <ButtonPreview widgetText={widget.textMessage} />
          ) : (
            <TextPreview widgetText={widget.textMessage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewWidgets;
