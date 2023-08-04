import Image from "next/image";
import "./FirstForm.css";

const FirstForm = () => {
  return (
    <div
      style={{ width: "100%" }}
      className="mt-10 p-10  rounded-lg ms-12 bg-[#FFFFFF] me-[40px]">
      <h1 className="text-[22px] font-[600]">Form title</h1>
      <p className="leading-6 font-[300px]">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim.
      </p>
      <div className="flex gap-2 border border-red-500 p-[15px] mt-5 rounded-lg bg-[#FEF2F2] ">
        <Image
          src="/info-circle.png"
          width={24}
          height={24}
          alt="info-circle"></Image>
        <p>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
      </div>
      <div className="overflow-x-auto mt-10 rounded-lg ">
        <table className="table w-full table-xs  px-3 py-5 border border-[#c9baba] rounded-[10px]">
          <thead>
            <tr className="  text-[18px] ">
              <th className="text-center border-r-[1px] border-[#c9baba]  px-3 py-5">
                Table Title
              </th>
              <th className="text-center border-r-[1px] border-[#c9baba]  px-3 py-5">
                Table Title
              </th>
              <th className="text-center border-r-[1px] border-[#c9baba]  px-3 py-5">
                {" "}
                Table Title
              </th>
              <th className="text-center  ">Table Title</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 sm:w-1/4 leading-6">
                Etiam purus in
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 sm:w-1/4 leading-6">
                Curabitur donec duis
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 sm:w-1/4 leading-6">
                Morbi pharetra, accumsan
              </td>
              <td className="flex   gap-2  px-3 py-5 sm:w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 sm:w-1/4 leading-6">
                Duis eget habitant
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                At amet odio
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Commodo eget scelerisque
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Aliquam velit lacus
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Pellentesque egestas placerat
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Tortor habitant sit
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Fermentum scelerisque ultricies
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Morbi sagittis nulla
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Quam semper quis
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Integer semper pellentesque
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Neque turpis enim
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Egestas non sociis
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Parturient at id
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Sem neque, mattis
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Pellentesque facilisis massa
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Pellentesque facilisis massa
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                In ipsum volutpat
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Ut feugiat egestas
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Risus consequat sollicitudin
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Adipiscing odio nulla
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Pharetra id sit
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Risus consequat sollicitudin
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Adipiscing odio nulla
              </td>
              <td className="border-r-[1px] border-[#c9baba]  px-3 py-5 w-1/4 leading-6">
                Pharetra id sit
              </td>
              <td className="flex   gap-2  px-3 py-5 w-1/4">
                <button className="btn bg-[#1D4ED8] text-white btn-xs">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Edit
                </button>
                <button className="btn  text-white btn-xs bg-[#D97706]">
                  <Image
                    src="/edit.png"
                    width={18}
                    height={18}
                    alt="edit-icon"></Image>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-center items-center gap-3 mt-5">
          <Image
            style={{ height: "18px", width: "18px" }}
            src="/expand-left.png"
            width={18}
            height={18}
            alt="expand_left"></Image>
          <button className="border p-5 rounded-md w-[35px] h-[35px] flex justify-center items-center">
            1
          </button>
          <button className="border p-5 rounded-md w-[35px] h-[35px] flex justify-center items-center bg-[#2563EB] text-white">
            2
          </button>
          <button className="border p-5 rounded-md w-[35px] h-[35px] flex justify-center items-center">
            3
          </button>
          <button className="border p-5 rounded-md w-[35px] h-[35px] flex justify-center items-center">
            4
          </button>
          <button className="border p-5 rounded-md w-[35px] h-[35px] flex justify-center items-center">
            5
          </button>
          <Image
            style={{ height: "18px", width: "18px" }}
            src="/expand-right.png"
            width={18}
            height={18}
            alt="expand_right"></Image>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
