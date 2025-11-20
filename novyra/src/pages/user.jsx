import React from "react";
import SectionCard from "../component/sectioncard";

function User() {
  const dummyData = [
    {
      Name: "John Doe",
      Email: "john.doe@example.com",
      Role: "Admin",
      Status: "Active",
      "Last Login": "2025-01-14 09:22",
    },
    {
      Name: "Sarah Adams",
      Email: "sarah.adams@example.com",
      Role: "Editor",
      Status: "Inactive",
      "Last Login": "2025-01-10 14:55",
    },
    {
      Name: "Michael Brown",
      Email: "michael.brown@example.com",
      Role: "Viewer",
      Status: "Active",
      "Last Login": "2025-01-17 11:08",
    },
    {
      Name: "Emily Carter",
      Email: "emily.carter@example.com",
      Role: "Editor",
      Status: "Dormant",
      "Last Login": "2024-12-28 18:42",
    },
  ];
  const roles = ["admin", "viewer", "editor"];

  const inputStyle =
    "bg-amber-400 px-3 py-2 border border-amber-500 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500";

  const userFields = [
    <div className="w-full">
      <label className="font-semibold mb-1 block">Username</label>
      <input placeholder="Username" className={inputStyle} />
    </div>,
    <div className="w-full">
      <label className="font-semibold mb-1 block">First Name</label>
      <input placeholder="First Name" className={inputStyle} />
    </div>,
    <div className="w-full">
      <label className="font-semibold mb-1 block">Last Name</label>
      <input placeholder="Last Name" className={inputStyle} />
    </div>,
    <div className="w-full">
      <label className="font-semibold mb-1 block">Email</label>
      <input type="email" placeholder="Email" className={inputStyle} />
    </div>,
    <div className="w-full">
      <label className="font-semibold mb-1 block">Password</label>
      <input type="password" placeholder="Password" className={inputStyle} />
    </div>,
    <div className="w-full">
      <label className="font-semibold mb-1 block">Role</label>
      <select className={inputStyle} defaultValue="">
        <option value="" disabled>
          Select Role
        </option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>,
  ];

  return (
    <>
      <div className=" bg-light rounded-2xl min-h-50 shadow-2xl p-6 ">
        <div>
          <SectionCard
            name={"Users"}
            button={"Add New User"}
            thead={dummyData[0]}
            tbody={dummyData}
            fields={userFields}
          />
        </div>
      </div>
    </>
  );
}

export default User;
