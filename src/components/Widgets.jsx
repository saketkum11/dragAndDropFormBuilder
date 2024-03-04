/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RxCrossCircled } from "react-icons/rx";
import { useRef, useState } from "react";
const Widgets = ({
  widget,
  setWidgets,
  handleChange,
  removeWidgets,
  allWidgets,
  index,
  setDagItemStartIndex,
  setDragItemEnterIndex,
  dragItemStartIndex,
  dragItemEnterIndex,
}) => {
  const onDragStart = (index) => {
    setDagItemStartIndex(index);
  };
  const onDragEnter = (index) => {
    setDragItemEnterIndex(index);
  };

  const onDragEnd = () => {
    /// copy array of item
    const dragItem = [...allWidgets];
    // filter the item which will be  dragged
    const itemToBeDragged = dragItem[dragItemStartIndex];
    // swap the array element
    dragItem[dragItemStartIndex] = dragItem[dragItemEnterIndex];
    dragItem[dragItemEnterIndex] = itemToBeDragged;
    setWidgets(dragItem);
  };
  return (
    <>
      {widget.isInputField ? (
        <div
          draggable
          onDragStart={() => onDragStart(index)}
          onDragEnter={() => onDragEnter(index)}
          onDragEnd={onDragEnd}
          onDragOver={(e) => e.preventDefault()}
          className="w-full flexflex-col gap-4 text-start border bg-zinc-900 border-zinc-500 border-solid  rounded-md p-4 relative"
        >
          {widget.type !== "button" && (
            <input
              className="w-full bg-transparent px-4 py-2 outline-none border-b"
              value={widget.title}
              type="text"
              name="title"
              onChange={(e) => handleChange(e, widget.id)}
            />
          )}
          <input
            value={widget.textMessage}
            type={widget.type}
            required={widget.isRequired}
            name="textMessage"
            onChange={(e) => handleChange(e, widget.id)}
            className={
              widget.type === "button"
                ? `bg-white text-zinc-800 py-2 rounded-lg mt-10 w-full`
                : `w-full bg-transparent px-4 py-2 outline-none border-b`
            }
          />
          <button
            className="absolute top-4 right-4"
            onClick={() => removeWidgets(widget.id)}
          >
            <RxCrossCircled className="text-2xl" />
          </button>
        </div>
      ) : (
        <div
          draggable
          onDragStart={(e) => onDragStart(index)}
          onDragEnter={(e) => onDragEnter(index)}
          onDragEnd={onDragEnd}
          onDragOver={(e) => e.preventDefault()}
          className="w-full flex flex-col gap-4 text-start border bg-zinc-900 border-zinc-500 border-solid min-h-12 rounded-md p-4 relative"
        >
          <input
            className="w-full bg-transparent px-4 py-2 outline-none border-b"
            value={widget.title}
            type="text"
            name="title"
            onChange={(e) => handleChange(e, widget.id)}
          />
          <textarea
            className="outline-none bg-transparent border border-dashed border-white p-4 rounded-md "
            rows="3"
            value={widget.textMessage}
            name="textMessage"
            onChange={(e) => handleChange(e, widget.id)}
          >
            {widget.textMessage}
          </textarea>
          <button
            className="absolute top-4 right-4"
            onClick={() => removeWidgets(widget.id)}
          >
            <RxCrossCircled className="text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default Widgets;
