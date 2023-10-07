import Task from "./task";

const Column = ({ state }) => {
  return (
    <div className="bg-gray-800 text-white h-80 font-bold w-1/3 max-w-xs my-0 mx-2 rounded p-2">
      <p className="">{state}</p>
      <Task title="todo" />
    </div>
  );
};

export default Column;
