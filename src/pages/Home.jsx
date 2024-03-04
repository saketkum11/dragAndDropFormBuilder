import { FaPlus } from "react-icons/fa6";
import HeadingTitle from "../components/HeadingTitle";
import HeadingSubtitle from "../components/HeadingSubtitle";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import DateField from "../components/DateField";
import CheckBox from "../components/CheckBox";
import NumberField from "../components/NumberField";
import { useState } from "react";
import Widgets from "../components/Widgets";
import Button from "../components/Button";
import Password from "../components/Password";
import EmailField from "../components/EmailField";
const Home = () => {
  const [widgets, setWidgets] = useState([]);
  const [dateStore, setDateStore] = useState({});
  const [dragItemStartIndex, setDagItemStartIndex] = useState(0);
  const [dragItemEnterIndex, setDragItemEnterIndex] = useState(0);
  const handleDrop = () => {
    if (!dateStore) return;
    setWidgets((prev) => {
      return [...prev, dateStore];
    });
    setDateStore(null);
  };
  const handleOnDrag = (name) => {
    setDateStore(name);
  };
  const handleOnDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleChange = (e, itemId) => {
    const itemMapped = [...widgets]?.map((item) => {
      if (item.id === itemId) {
        return { ...item, [e.target.name]: e.target.value };
      }
      return item;
    });
    setWidgets(itemMapped);
  };
  const handleRemoveField = (itemId) => {
    const deleteItem = [...widgets].filter((item) => item.id !== itemId);
    setWidgets(deleteItem);
  };

  return (
    <div className="bg-zinc-900 text-white  relative min-h-screen">
      <main className="block  lg:grid  lg:grid-cols-12 gap-4  ">
        <div className="col-span-9 p-4">
          <div className="border-2 border-dashed border-white  rounded-lg text-center lg:min-h-screen flex justify-center items-center">
            <div
              onDrop={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleDrop();
              }}
              onDragOver={(e) => handleOnDragOver(e)}
              className=" bg-zinc-950 rounded-lg w-full max-w-lg  max-h-96 overflow-auto  flex justify-center  p-4 "
            >
              <div className=" flex flex-col gap-4 w-full min-h-96 ">
                {widgets.length !== 0 ? (
                  widgets.map((item, index) => {
                    return (
                      <Widgets
                        key={item.id}
                        widget={item}
                        index={index}
                        setWidgets={setWidgets}
                        removeWidgets={handleRemoveField}
                        handleChange={handleChange}
                        allWidgets={widgets}
                        setDagItemStartIndex={setDagItemStartIndex}
                        setDragItemEnterIndex={setDragItemEnterIndex}
                        dragItemStartIndex={dragItemStartIndex}
                        dragItemEnterIndex={dragItemEnterIndex}
                      />
                    );
                  })
                ) : (
                  <div className=" rounded-xl shadow-lg m-auto min-h-96 flex justify-center items-center">
                    <FaPlus className="text-8xl " />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <aside className="block bg-black rounded-lg   md:col-span-3">
          <div className="overflow-hidden  grid grid-cols-2 p-8 gap-4  lg:overflow-auto   max-h-screen ">
            <HeadingTitle setWidgets={setWidgets} handleOnDrag={handleOnDrag} />
            <HeadingSubtitle handleOnDrag={handleOnDrag} />
            <Input handleOnDrag={handleOnDrag} />
            <TextArea handleOnDrag={handleOnDrag} />
            <DateField handleOnDrag={handleOnDrag} />
            <CheckBox handleOnDrag={handleOnDrag} />
            <NumberField handleOnDrag={handleOnDrag} />
            <Button handleOnDrag={handleOnDrag} />
            <Password handleOnDrag={handleOnDrag} />
            <EmailField handleOnDrag={handleOnDrag} />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
