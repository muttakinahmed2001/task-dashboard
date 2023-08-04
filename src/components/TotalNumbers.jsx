import Image from "next/image";

const TotalNumbers = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5 p-10  max-w-fit">
      <div className="flex gap-3  bg-[white] p-[20px] w-[220px] rounded-lg ">
        <Image
          src="/shopping-bag.png"
          alt="Shopping-bag"
          width={45}
          height={45}></Image>
        <div>
          <p>Total Sales</p>
          <h1 className="text-[22px]">$3,326</h1>
        </div>
      </div>
      <div className="flex gap-3  bg-[white] p-[20px] w-[220px] rounded-lg">
        <Image
          src="/shop.png"
          alt="Shopping-icon"
          width={45}
          height={45}></Image>
        <div>
          <p>Total Expenses</p>
          <h1 className="text-[22px]">$2,456</h1>
        </div>
      </div>
      <div className="flex gap-3  bg-[white] p-[20px] w-[220px] rounded-lg">
        <Image
          src="/visitors.png"
          alt="visitors-icon"
          width={45}
          height={45}></Image>
        <div>
          <p>Total Visitors</p>
          <h1 className="text-[22px]">5,325</h1>
        </div>
      </div>
      <div className="flex gap-3  bg-[white] p-[20px] w-[220px] rounded-lg">
        <Image src="/order.png" alt="order-icon" width={45} height={45}></Image>
        <div>
          <p>Total Orders</p>
          <h1 className="text-[22px]">1,326</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalNumbers;
