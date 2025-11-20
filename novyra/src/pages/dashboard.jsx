import { useEffect, useState } from "react";
import Card from "../component/card";

import { AiOutlineLoading } from "react-icons/ai";

import { FaBlog } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import SectionCard from "../component/sectioncard";
import useFetch from "../hooks/usefetch";
import { API } from "../endpoints/endpoints";

const DashBoard = () => {
  const { data, loading, err } = useFetch({
    url: API.gettotal(),
    method: "GET",
  });

  const { data: getblogs, loading: getblogloading } = useFetch({
    url: API.blogs(),
    method: "GET",
  });
  console.log(getblogs);

  const loadingIcon = (
    <AiOutlineLoading className="text-amber-600 animate-spin" />
  );

  const [content, setContent] = useState([
    {
      name: "TotalBlogs",
      logo: <FaBlog className="text-2xl text-blue-600" />,
      logostyle:
        "flex items-center justify-center bg-blue-100 size-15 rounded-2xl ",
      total: data?.TotalBlogs || 0,
      description: "Blog Posts",
    },
    {
      name: "TotalPortfolio",
      logo: <FaBriefcase className="text-2xl text-green-600" />,
      logostyle:
        "flex items-center justify-center bg-green-100 size-15 rounded-2xl ",
      total: data?.TotalPortfolio || 0,
      description: "Portfolio Items",
    },
    {
      name: "TotalUsers",
      logo: <FaUsers className="text-2xl text-amber-600" />,
      logostyle:
        "flex items-center justify-center bg-amber-100 size-15 rounded-2xl ",
      total: data?.TotalUsers || 0,
      description: "Users",
    },
    {
      name: "TotalViews",
      logo: <FaEye className="text-2xl text-red-600" />,
      logostyle:
        "flex items-center justify-center bg-red-100 size-15 rounded-2xl ",
      total: 24,
      description: "Monthly Views",
    },
  ]);
  const updateContent = () => {
    setContent((prev) =>
      prev.map((p) => ({
        ...p,
        total: data?.[p.name] ?? p.total,
      }))
    );
  };

  const [dummyData, setDummyData] = useState([]);

  const categories = [
    "DIGITAL MARKETING",
    "SEO OPTIMIZATION",
    "AI MARKETING",
    "BRAND STRATEGY",
    "WEB DESIGN",
    "SOCIAL MEDIA",
    "EMAIL CAMPAIGNS",
    "INFLUENCER MARKETING",
    "CONTENT CREATION",
    "PAID ADVERTISING",
  ];

  const statusOptions = ["Draft", "Published"];
  const inputStyle =
    "bg-amber-400 px-3 py-2 border border-amber-500 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500";

  const fields = [
    <div>
      <label className="font-semibold mb-1 block">Title</label>
      <input placeholder="Title" className={inputStyle} />
    </div>,
    <div>
      <label className="font-semibold mb-1 block">Author</label>
      <input placeholder="Author" className={inputStyle} />
    </div>,
    <div>
      <label className="font-semibold mb-1 block">Content</label>
      <textarea placeholder="Content" className={`${inputStyle} h-24`} />
    </div>,
    <div>
      <label className="font-semibold mb-1 block">Excerpt</label>
      <textarea placeholder="Excerpt" className={`${inputStyle} h-16`} />
    </div>,
    <div>
      <label className="font-semibold mb-1 block">Image</label>
      <input type="file" accept="image/*" className={inputStyle} />
    </div>,
    <div className="">
      <label className="font-semibold mb-1 block">Category</label>
      <select className={inputStyle} defaultValue="">
        <option value="" disabled>
          Select Category
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>,
    <div>
      <label className="font-semibold mb-1 block">Status</label>
      <select className={inputStyle} defaultValue="">
        <option value="" disabled>
          Select Status
        </option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>,
  ];

  useEffect(() => {
    updateContent();
  }, [loading, getblogloading]);

  useEffect(() => {
    if (getblogs) setDummyData(getblogs);
  }, [getblogs, getblogloading]);

  return (
    <>
      <div className=" bg-light rounded-2xl min-h-50 shadow-2xl p-6 ">
        <p className="text-4xl font-bold mb-4 "> Dashboard</p>
        <div className="flex flex-wrap gap-4   justify-center-safe">
          {loading
            ? content.map((item) => (
                <Card
                  logo={item.logo}
                  logostyle={item.logostyle}
                  containerstyle={
                    "flex gap-4 h-35 w-57 items-center transition  duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl bg-white p-6 rounded-2xl mb-2"
                  }
                  total={loadingIcon}
                  description={item.description}
                />
              ))
            : content.map((item) => (
                <Card
                  logo={item.logo}
                  logostyle={item.logostyle}
                  containerstyle={
                    "flex gap-4 h-35 w-57 items-center transition  duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl bg-white p-6 rounded-2xl mb-2"
                  }
                  total={item.total}
                  description={item.description}
                />
              ))}
        </div>
        <div>
          <SectionCard
            name={"Recents Blog Posts"}
            button={" Add New Blog"}
            thead={dummyData[0]}
            tbody={dummyData}
            fields={fields} // optional if form to be filled
          />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
/*


[
    {
      Title: "Example Title 1",
      Author: "Author A",
      Categories: "Category 1, Category 2",
      Date: "2025-01-10",
      Status: "Published",
    },
    {
      Title: "Example Title 2",
      Author: "Author B",
      Categories: "Category 3",
      Date: "2025-02-04",
      Status: "Draft",
    },
    {
      Title: "Example Title 3",
      Author: "Author C",
      Categories: "Category 1",
      Date: "2025-03-20",
      Status: "Draft",
    },
  ]; */
