
const TaskStatus = () => {
  return (
    <div className="md:flex md:mt-10 md:justify-between gap-5 px-10 md:px-20 w-scren">

      <div className="md:w-full flex gap-5 mb-5 md:mb-0">

        <div className="rounded-xl w-[50%] py-6 px-9 bg-red-400">
          <h2 className="text-3xl font-bold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>

        <div className="rounded-xl w-[50%] py-6 px-9 bg-blue-400">
          <h2 className="text-3xl font-bold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>

      </div>

      <div className="md:w-full flex gap-5">

      <div className="rounded-xl w-[50%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl w-[50%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      </div>

    </div>
  );
};

export default TaskStatus;
