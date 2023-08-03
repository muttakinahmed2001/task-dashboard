import Image from "next/image";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between w-[1060px] items-center p-5   bg-[#FFFFFF] ">
      <div className="flex items-center gap-3">
        <h1 className="text-[22px] font-[600]">Add new post</h1>
        <h3> + Add Content</h3>
        <div className="flex gap-2">
          <Image
            src={"/black-settings.png"}
            width={18}
            height={18}
            alt="settings-icon"></Image>
          <h3>Settings</h3>
        </div>
      </div>

      <div className="relative me-3">
        <input
          type="text"
          className="w-[200px] py-2 pl-4   rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search content.."
        />
        <Image
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
          src="/search.png"
          width={18}
          height={18}
          alt="search-icon"></Image>
      </div>
    </div>
  );
};

export default DashboardHeader;
