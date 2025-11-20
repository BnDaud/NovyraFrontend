import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Modal from "./modal";

function SectionCard({ name, thead, button, tbody, fields }) {
  const [indexStatus, setIndexStatus] = useState();
  const statusStyle = {
    Published:
      "rounded-2xl bg-green-100 text-green-600 px-2 text-center text-sm font-bold py-0.5",
    Draft:
      "rounded-2xl bg-amber-100 text-amber-600 px-2 text-center text-sm font-bold py-0.5",
    Inactive:
      "rounded-2xl bg-amber-100 text-amber-600 px-2 text-center text-sm font-bold py-0.5",
    Active:
      "rounded-2xl bg-green-100 text-green-600 px-2 text-center text-sm font-bold py-0.5",
  };

  const [addNew, setAddNew] = useState(false);
  const toggleaddnew = () => {
    setAddNew(!addNew);
  };

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (thead) {
      const k = Object.keys(thead);
      const index = k.findIndex((p) => p.toLowerCase() === "status");
      setIndexStatus(index);
      setKeys(k);
    }
  }, [thead]);

  const pullValues = (obj) => {
    return Object.values(obj);
  };
  return (
    <>
      {addNew ? <Modal togglestate={toggleaddnew} fields={fields} /> : null}
      <div className="flex flex-wrap justify-between gap-6 mt-2 mb-5 border-b pb-5 border-gray/30">
        {" "}
        <p className="text-3xl font-bold">{name}</p>{" "}
        <div
          className="bg-blue-700 text-white p-2 rounded hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-0.2  hover:shadow-2xl"
          onClick={toggleaddnew}
        >
          {button}
        </div>
      </div>
      <div className="w-full h-60 overflow-auto">
        {tbody.length > 0 ? (
          <table className="table-auto min-w-max md:w-full">
            <thead className="bg-gray/5 h-12">
              <tr className="mx-2">
                {keys.map((p) => (
                  <th>{p}</th>
                ))}
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {tbody.map((obj, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 border-b border-gray-200 h-15"
                >
                  {pullValues(obj).map((content, index) => (
                    <td
                      key={index}
                      className="px-4 py-2 max-w-xs" // fixed or max width required for truncate
                    >
                      <div
                        className={`truncate overflow-hidden whitespace-nowrap ${
                          index === indexStatus ? statusStyle[content] : ""
                        }`}
                        title={content} // shows full text on hover
                      >
                        {content}
                      </div>
                    </td>
                  ))}

                  {/* Action buttons */}
                  <td className="flex items-center gap-2 px-4 py-2">
                    <div className="border px-3 py-1 font-bold text-blue-700 text-sm border-blue-700 hover:cursor-pointer hover:text-white hover:bg-blue-700 rounded transition-all duration-200">
                      Edit
                    </div>
                    <div className="border px-3 py-1 font-bold text-white bg-red-700 text-sm border-red-700 hover:cursor-pointer rounded transition-all hover:-translate-y-0.5 duration-300 hover:shadow-2xl">
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center h-full w-full  ">
            {" "}
            <AiOutlineLoading className="text-3xl text-amber-600 animate-spin" />{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default SectionCard;
