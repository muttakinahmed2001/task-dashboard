import Image from "next/image";
import "./SecondForm.css";

const SecondForm = () => {
  return (
    <div className="mt-10 p-10  rounded-lg ms-12 bg-[#FFFFFF] max-w-[870px]">
      <h1 className="text-[22px] font-[600]">Form title</h1>
      <p className="leading-6 font-[300px]">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim.
      </p>
      <div className="flex gap-2 mt-3 max-w-fit">
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
      <form className="mt-5">
        <div className="form-control  sm:w-full ">
          <label className="label">
            <span className="label-text">Label Title</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder Content"
            className="input input-bordered"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 max-w-fit">
          <div className="form-control max-w-fit ">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>

            <div className="input-group relative  ">
              <select className="select select-bordered w-[300px] rounded-lg font-normal">
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
          <div className="form-control max-w-fit">
            <label className="label">
              <span className="label-text">Label Title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>{" "}
          <div className="form-control max-w-fit">
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
        <div className="flex flex-col sm:flex-row gap-3 mt-5 max-w-fit">
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
            cols="70"
            placeholder="Placeholder Content"
            rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;