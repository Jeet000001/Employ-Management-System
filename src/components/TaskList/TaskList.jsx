import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] flex items-center  justify-start gap-5 flex-nowrap md:mx-20 mx-10 md:pt-10 overflow-x-auto outline-none"
    >
      <div className="shrink-0 md:h-full h-80 w-[350px] md:w-[265px] bg-yellow-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20th Dec 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Content</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo amet maiores perspiciatis vitae quia est.</p>
      </div>

      <div className="shrink-0 md:h-full h-80 w-[350px] md:w-[265px] bg-blue-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20th Dec 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Content</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo amet maiores perspiciatis vitae quia est.</p>
      </div>

      <div className="shrink-0 md:h-full h-80 w-[350px] md:w-[265px] bg-green-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20th Dec 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Content</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo amet maiores perspiciatis vitae quia est.</p>
      </div>

      <div className="shrink-0 md:h-full h-80 w-[350px] md:w-[265px] bg-red-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20th Dec 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Content</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo amet maiores perspiciatis vitae quia est.</p>
      </div>

      <div className="shrink-0 md:h-full h-80 w-[350px] md:w-[265px] bg-fuchsia-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20th Dec 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Content</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo amet maiores perspiciatis vitae quia est.</p>
      </div>
    </div>
  );
};

export default TaskList;
