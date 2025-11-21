import { useEffect, useState } from "react";
import Card from "../component/card";
import SectionCard from "../component/sectioncard";

import { AiOutlineLoading } from "react-icons/ai";
import { FaBlog, FaBriefcase, FaUsers, FaEye } from "react-icons/fa";

import useFetch from "../hooks/usefetch";
import API from "../endpoints/endpoints";

const DashBoard = () => {
  // Fetch totals
  const {
    data: totalData,
    loading: totalLoading,
    err: totalErr,
    doFetch: fetchTotal,
  } = useFetch();

  // Fetch blogs
  const {
    data: blogs,
    loading: blogsLoading,
    err: blogsErr,
    doFetch: fetchBlogs,
  } = useFetch();

  // Trigger fetches on component mount
  useEffect(() => {
    fetchTotal({ url: API.gettotal(), method: "GET" });
    fetchBlogs({ url: API.blogs(), method: "GET" });
  }, []);

  const isLoading = totalLoading || blogsLoading;

  const loadingIcon = (
    <AiOutlineLoading className="text-amber-600 animate-spin" />
  );

  const [content, setContent] = useState([
    {
      name: "TotalBlogs",
      logo: <FaBlog className="text-2xl text-blue-600" />,
      logostyle:
        "flex items-center justify-center bg-blue-100 size-15 rounded-2xl ",
      total: 0,
      description: "Blog Posts",
    },
    {
      name: "TotalPortfolio",
      logo: <FaBriefcase className="text-2xl text-green-600" />,
      logostyle:
        "flex items-center justify-center bg-green-100 size-15 rounded-2xl ",
      total: 0,
      description: "Portfolio Items",
    },
    {
      name: "TotalUsers",
      logo: <FaUsers className="text-2xl text-amber-600" />,
      logostyle:
        "flex items-center justify-center bg-amber-100 size-15 rounded-2xl ",
      total: 0,
      description: "Users",
    },
    {
      name: "TotalViews",
      logo: <FaEye className="text-2xl text-red-600" />,
      logostyle:
        "flex items-center justify-center bg-red-100 size-15 rounded-2xl ",
      total: 24, // static for now
      description: "Monthly Views",
    },
  ]);

  // Update totals when data changes
  useEffect(() => {
    if (totalData) {
      setContent((prev) =>
        prev.map((p) => ({
          ...p,
          total: totalData?.[p.name] ?? p.total,
        }))
      );
    }
  }, [totalData]);

  // Set dummy blog data
  const [dummyData, setDummyData] = useState([]);
  useEffect(() => {
    if (blogs) setDummyData(blogs);
  }, [blogs]);

  // Form field styles and options
  const inputStyle =
    "bg-amber-300 px-3 py-2 border border-amber-400 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-400";

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
    <div>
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

  return (
    <div className="bg-light rounded-2xl min-h-50 shadow-2xl p-6">
      <p className="text-4xl font-bold mb-4">Dashboard</p>

      <div className="flex flex-wrap gap-4 justify-center-safe">
        {content.map((item) => (
          <Card
            key={item.name}
            logo={item.logo}
            logostyle={item.logostyle}
            containerstyle="flex gap-4 h-35 w-57 items-center transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl bg-white p-6 rounded-2xl mb-2"
            total={isLoading ? loadingIcon : item.total}
            description={item.description}
          />
        ))}
      </div>

      <div>
        <SectionCard
          name="Recent Blog Posts"
          button="Add New Blog"
          thead={dummyData[0]}
          tbody={dummyData}
          fields={fields}
        />
      </div>
    </div>
  );
};

export default DashBoard;
