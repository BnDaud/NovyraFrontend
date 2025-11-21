import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import useFetch from "../hooks/usefetch";

function Modal({
  togglestate,
  fields = [],
  payload,

  method = "GET",
  url,
  buttonstyle,
}) {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(!submit);
  };

  const { data, loading, err, success, doFetch } = useFetch();
  useEffect(() => {
    if (submit) {
      let body = undefined;

      // Only attach form if method supports body
      if (["POST", "PUT", "PATCH"].includes(method)) {
        body = new FormData();
        Object.entries(payload || {}).forEach(([key, value]) =>
          body.append(key, value)
        );
      }

      doFetch({
        url,
        method,
        body,
      });

      setSubmit(false);
    }
  }, [submit]);

  useEffect(() => {
    if (success) togglestate();
  }, [success]);

  return (
    <form
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
              className={buttonstyle}
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? (
                <div className="flex justify-center">
                  <AiOutlineLoading className="text-2xl animate-spin" />
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default Modal;
