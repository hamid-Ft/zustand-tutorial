import { useStore } from "../store";
import Task from "./task";
import { shallow } from "zustand/shallow";
import "./column.css";
import { useState } from "react";
//import { useMemo } from "react";

// eslint-disable-next-line react/prop-types
const Column = ({ state }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
    // * Commparison func instead of useMemo & zustand shallow func
    /*  (prev, next) => {
      const longest = prev.length > next.length ? prev.length : next.length;
      for (let i = 0; i < longest.length; i++) {
        if (!prev[i] || !next[i]) return false;
        if (prev[i] !== next[i]) return false;
      }
      return true;
    } */
  );

  // const filtered = useMemo(
  //   () => tasks.filter((task) => task.state === state),
  //   [tasks, state]
  // );
  const addTask = useStore((store) => store.addTask);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-800 text-white h-80 font-bold w-1/3 max-w-xs my-0 mx-2 rounded p-2">
        <div className="flex justify-between items-center ">
          <p>{state}</p>
          <button
            onClick={() => setOpen(true)}
            className="text-black bg-white p-2 rounded h-fit mb-2  transition-all duration-600 ease-in-out hover:bg-gray-400 cursor-pointer">
            Add
          </button>
        </div>
        {tasks.map((task) => (
          <Task
            title={task.title}
            key={task.title} /* key is not good if user add same titles */
          />
        ))}
      </div>
      {open && (
        <div className="absolute bg-black opacity-80 h-full top-0 left-50 mx-auto rounded ">
          <div className="flex bg-white absolute z-10 p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded">
            <input
              className="bg-gray-600 mr-2 text-white rounded"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              className="bg-blue-600 rounded p-1.5 text-white"
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Column;
