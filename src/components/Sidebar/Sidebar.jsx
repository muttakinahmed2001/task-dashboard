"use client";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <aside className="   pt-[30px]    bg-[#262626] ">
      <div className="border-b-1">
        <button className="w-[200px] h-[47px] mx-3 mb-5 bg-[#E5E5E5] rounded-sm">
          {" "}
          + New Item
        </button>
      </div>

      <div className="border-t-[1.5px] border-y-black p-2">
        <details
          onClick={handleClick}
          className="dropdown   text-white block  ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Dashboard{" "}
              </div>

              {show ? (
                <Image
                  src="/Expand_up.png"
                  width={18}
                  height={18}
                  alt="expand_up"></Image>
              ) : (
                <Image
                  src="/Expand_down.png"
                  width={18}
                  height={18}
                  alt="expand_down"></Image>
              )}
            </div>
          </summary>

          <ul className="p-2 shadow menu   z-[1]   rounded-box  ">
            <li>
              <a>Commarce</a>
            </li>
            <li>
              <a>Analytics</a>
            </li>
            <li>
              <a>Cyrpto</a>
            </li>
            <li>
              <a>Helpdesk</a>
            </li>
            <li>
              <a>Monitoring</a>
            </li>
            <li>
              <a>Fitnes</a>
            </li>
          </ul>
        </details>
      </div>

      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block  ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Application{" "}
              </div>

              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>

      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Elements{" "}
              </div>
              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>

      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Forms{" "}
              </div>
              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>
      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Plugins{" "}
              </div>
              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>
      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Elements{" "}
              </div>

              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>
      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Datagrid{" "}
              </div>
              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>
      <div className=" border-t-[1.5px]   border-y-black p-2">
        <details className="dropdown   text-white block ">
          <summary className="m-1 list-none">
            {" "}
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/dashboard.png"
                  width={18}
                  height={18}
                  alt="dashboard-icon.png"></Image>
                Settings{" "}
              </div>
              <Image
                src="/Expand_down.png"
                width={18}
                height={18}
                alt="expand_down"></Image>
            </div>
          </summary>
        </details>
      </div>
    </aside>
  );
};

export default Sidebar;
