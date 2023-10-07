import Column from "./components/column";

const App = () => {
  return (
    <div
      className="bg-gray-700 min-h-screen flex justify-center items-start
    ">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
};

export default App;
