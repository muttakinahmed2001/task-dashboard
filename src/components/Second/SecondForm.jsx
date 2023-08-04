import Image from "next/image";
import "./SecondForm.css";

const SecondForm = () => {
  return (
    <div className="mt-10 p-6  rounded-lg ms-2 sm:ms-4border   bg-slate-50 w-full ">
      <h1 className="text-xl sm:text-2xl font-[600]">Form title</h1>
      <p className="leading-6 text-xs sm:text-base font-[300]">
        Sed tortor, sed velit ridiculus ipsum pharetra <br /> lacus odio gravida
        augue enim.
      </p>
      <div className="flex gap-2 mt-3 ">
        <button className="flex border-1 border-[#D97706] gap-2 border py-[5px] px-[10px] bg-[#FDE68A] rounded-lg">
          <Image
            src="/Flag.png"
            width={25}
            height={25}
            alt="language-button"></Image>
          English
        </button>

        <button className="flex gap-2 py-[5px] px-[10px] bg-[#D4D4D4] border border-[#b39494] rounded-lg">
          <Image
            src="/turki-flag.png"
            width={25}
            height={25}
            alt="language-button"></Image>
          Turkish
        </button>
      </div>
      <form className="mt-5 w-full">
        <div className="form-control w-1/2 sm:w-full  ">
          <label className="label">
            <span className="label-text">Label Title</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder Content"
            className="input input-bordered"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 ">
          <div className="form-control w-1/2 sm:w-full ">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>

            <div className="input-group relative  ">
              <select className="select select-bordered  w-full  rounded-lg font-normal">
                <option disabled selected>
                  Choose
                </option>
              </select>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                <Image
                  src="/choose.png"
                  width={12}
                  height={12}
                  alt="Choose-icon"></Image>
              </div>
            </div>
          </div>{" "}
          <div className="form-control w-1/2 sm:w-full">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control w-1/2 sm:w-full">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-5 ">
          <div className="form-control w-1/2 sm:w-full">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-1/2 sm:w-full">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="mt-5 w-1/2 sm:w-full">
          {" "}
          <label className="label">
            <span className="label-text">Label Title</span>
          </label>
          <textarea
            className="p-3 border border-[#D4D4D4] rounded-lg"
            name=""
            id=""
            placeholder="Placeholder Content"
            rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;
