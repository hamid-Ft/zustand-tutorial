import classNames from "classnames";
import trash from "../assets/trash.svg";
import "./task.css";
import { useStore } from "../store";

// eslint-disable-next-line react/prop-types
const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div className="bg-white rounded min-h-[5rem] text-black p-2 flex flex-col justify-between mb-2">
      <div>{task.title}</div>
      <div className="flex justify-between">
        <div>
          <img
            className="h-5 cursor-pointer"
            src={trash}
            alt="trash"
            onClick={() => deleteTask(task.title)}
          />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
