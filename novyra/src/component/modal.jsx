import React from "react";

function Modal({ togglestate, fields = [] }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 overflow-auto p-4"
      onClick={togglestate}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-y-auto max-h-[80vh] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.length > 0 ? (
            fields.map((field, index) => (
              <div key={index} className="w-full">
                {field}
              </div>
            ))
          ) : (
            <p className="text-red-500 text-center text-2xl capitalize col-span-2">
              Empty Form
            </p>
          )}
        </div>

        {fields.length > 0 ? (
          <div className="mt-4 w-full flex justify-center md:justify-end">
            <button
              type="submit"
              className="bg-amber-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-amber-600 transition w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Modal;
