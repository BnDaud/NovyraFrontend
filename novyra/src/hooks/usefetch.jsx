import React, { useEffect, useState } from "react";

function useFetch({ url, method = "GET", body }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchdata = async () => {
      setLoading(true);
      try {
        const req = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "Application/json",
          },
          body: body ? JSON.stringify(body) : undefined,
        });
        if (!req.ok) throw new Error("Bad Request");

        const data = await req.json();
        if (!ignore) setData(data);
        //  console.log(data);
      } catch (e) {
        console.log(e);
        if (!ignore) setErr(e);
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchdata();

    return () => {
      ignore = true;
    };
  }, [url, method, body]);

  return { data, loading, err };
}

export default useFetch;
