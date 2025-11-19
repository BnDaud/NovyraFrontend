import React from "react";
import { useState } from "react";
function SocialMedia() {
  const [title, setTitle] = useState("hello");
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="font-semibold text-lg"> Facebook URL </p>
        <input
          className="px-3 py-2 w-full focus:outline-1 border border-gray-300 focus:outline-gray-300  rounded-lg "
          value={title}
          placeholder="https://"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-lg"> X URL </p>
        <input
          className="px-3 py-2 w-full focus:outline-1 border border-gray-300 focus:outline-gray-300  rounded-lg "
          value={title}
          placeholder="https://"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-lg"> Instagram URL </p>
        <input
          className="px-3 py-2 w-full focus:outline-1 border border-gray-300 focus:outline-gray-300  rounded-lg "
          value={title}
          placeholder="https://"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-lg"> Linkedin URL </p>
        <input
          className="px-3 py-2 w-full focus:outline-1 border border-gray-300 focus:outline-gray-300  rounded-lg "
          value={title}
          placeholder="https://"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SocialMedia;
