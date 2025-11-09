import React from 'react'

const AdminDashboardForm = () => {
  return (
    <div>
        <form action="">
          <div className="md:flex md:justify-between md:w-screen md:px-50">
            <div>
              <div className="mb-3">
                <h3 className="mb-2 required text-lg font-bold md:text-xl">Title</h3>
                <input
                  className="outline-none border px-3 py-1 rounded-md w-53 md:w-100 md:px-4 md:py-3"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <h3 className="mb-2 required text-lg font-bold">Description</h3>
                <textarea className="outline-none border px-3 py-1 rounded-md w-53 h-25 md:w-100 md:h-37 resize-none" placeholder="Task details"></textarea>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <h3 className="mb-2 required text-lg font-bold md:text-xl">Date</h3>
                <input
                  className="outline-none border px-3 py-1 rounded-md w-53 md:w-100 md:px-4 md:py-3"
                  type="date"
                />
              </div>
              <div className="mb-3">
                <h3 className="mb-2 required text-lg font-bold md:text-xl">Asign to</h3>
                <input
                  className="outline-none border px-3 py-1 rounded-md w-53 md:w-100 md:px-4 md:py-3"
                  type="text"
                  placeholder="Employ name"
                />
              </div>
              <div className="mb-5 md:mb-12">
                <h3 className="mb-2 required text-lg font-bold md:text-xl">Category</h3>
                <input
                  className="outline-none border px-3 py-1 rounded-md w-53 md:w-100 md:px-4 md:py-3"
                  type="text"
                  placeholder="Type of work"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <button className="text-white font-medium bg-blue-500 px-4 py-1 rounded-md md:text-xl md:font-bold md:px-4 md:py-3">
              Create Task 
            </button>
          </div>
        </form>
    </div>
  )
}

export default AdminDashboardForm