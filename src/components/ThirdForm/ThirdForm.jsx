import Image from "next/image";

const ThirdForm = () => {
  return (
    <div className="flex mt-10 gap-2 flex-col sm:flex-row w-full  bg-slate-50 ms-1 sm:ms-4">
      <div className="   mt-10 p-6 bg-slate-50 border  rounded-lg     ">
        <h1 className="text-xl sm:text-2xl font-[600]">Form title</h1>
        <p className="leading-6 text-sm sm:text-base font-[300px]">
          Sed tortor, sed velit ridiculus ipsum <br /> pharetra lacus odio
          gravida augue enim.
        </p>

        <form className="mt-5">
          <div className="form-control  w-1/2 sm:w-full">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>
          <div className="  mt-5">
            <div className="form-control w-1/2 sm:w-full">
              <label className="label">
                <span className="label-text">Label Title</span>
              </label>

              <div className="input-group relative  ">
                <select className="select select-bordered  w-full rounded-lg font-normal">
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
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Label Title</span>
              </label>
              <input
                type="text"
                placeholder="Placeholder Content"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
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

      <form className="mt-10 bg-slate-50 p-6 border w-full sm:w-[300px]">
        <h1 className="text-[22px] font-[600]">Form title</h1>
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
        <div className="form-control  w-1/2 sm:w-full">
          <label className="label">
            <span className="label-text">Label Title</span>
          </label>
          <div className="input-group relative  ">
            <select className="select select-bordered w-full rounded-lg font-normal">
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
          <div className="mt-5">
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
          <div className="flex justify-start sm:justify-center mt-5">
            <button className="  p-3 bg-[#2563EB] text-white rounded-md">
              Button title
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThirdForm;
