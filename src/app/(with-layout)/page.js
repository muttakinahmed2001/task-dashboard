import DashboardHeader from "@/components/DashboardHeader";
import FirstForm from "@/components/FirstForm/FirstForm";
import SecondForm from "@/components/Second/SecondForm";
import ThirdForm from "@/components/ThirdForm/ThirdForm";
import TotalNumbers from "@/components/TotalNumbers";

const HomePage = () => {
  return (
    <div className="container mx-auto bg-slate-50">
      <DashboardHeader> </DashboardHeader>
      <TotalNumbers></TotalNumbers>
      <FirstForm></FirstForm>
      <SecondForm></SecondForm>
      <ThirdForm></ThirdForm>
    </div>
  );
};

export default HomePage;
