import classNames from "classnames";

import "./task.css";

const Task = ({ title }) => {
  const STATUS = "DONE";
  return (
    <div className="bg-white rounded min-h-[5rem] text-black p-2 flex flex-col justify-between">
      <div>{title}</div>
      <div className="flex justify-between">
        <div></div>
        <div className={classNames("status", STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
