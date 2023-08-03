import Image from "next/image";

const ThirdForm = () => {
  return (
    <div className="flex  ">
      <div className=" w-[600px]   mt-10 p-10  rounded-lg ms-12 bg-[#FFFFFF] me-[40px]  ">
        <h1 className="text-[22px] font-[600]">Form title</h1>
        <p className="leading-6 font-[300px]">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>

        <div className="mt-5">
          <div className="form-control">
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
            <div className="form-control w-full">
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
            </div>{" "}
          </div>
          <div className="flex gap-3 mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Label Title</span>
              </label>
              <input
                type="text"
                placeholder="Placeholder Content"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
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
          <div className="mt-5">
            {" "}
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <textarea
              className="p-3 border border-[#D4D4D4] rounded-lg"
              name=""
              id=""
              cols="50"
              placeholder="Placeholder Content"
              rows="10"></textarea>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[white] p-10 me-10">
        <h1 className="text-[22px] font-[600]">Form title</h1>
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Label Title</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder Content"
            className="input input-bordered"
          />
        </div>
        <div className="form-control w-[200px]  ">
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
              cols="25"
              placeholder="Placeholder Content"
              rows="10"></textarea>
          </div>
          <div className="flex justify-center mt-5">
            <button className="w-[250px] p-3 bg-[#2563EB] text-white rounded-md">
              Button title
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
