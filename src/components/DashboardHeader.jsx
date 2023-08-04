import Image from "next/image";

const DashboardHeader = () => {
  return (
    <div className="flex w-full flex-col sm:flex-row justify-start sm:justify-between p-5 bg-[#FFFFFF]">
      <div className="flex flex-col  md:flex-row     md:items-center gap-3">
        <h1 className="text-[22px] font-[600]">Add new post</h1>
        <h3> + Add Content</h3>
        <div className="flex gap-2">
          <Image
            src={"/black-settings.png"}
            width={16}
            height={16}
            alt="settings-icon"></Image>
          <h3>Settings</h3>
        </div>
      </div>

      <div className="flex items-center  me-3 mt-3 w-1/3 sm:1/3 relative">
        <input
          type="text"
          className="py-2 px-4 rounded-lg border flex-grow"
          placeholder="Search content.."
        />

        <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
          <Image
            src="/search.png"
            width={18}
            height={18}
            alt="search-icon"
            className="opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
