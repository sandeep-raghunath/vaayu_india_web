import Hero from "@/components/home/Hero";
import EnergyConsiderations from "@/components/home/EnergyConsiderations";
import Advantages from "@/components/home/Advantages";
import CustomApplications from "@/components/home/CustomApplications";
import Performance from "@/components/home/Performance";
import Efficiency from "@/components/home/Efficiency";
// import TraditionalCooling from "@/components/home/TraditionalCooling";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
// import WhyVaayu from "@/components/home/WhyVaayu";
// import Testimonials from "@/components/home/Testimonials";
// import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <EnergyConsiderations />
      <Advantages />
      <CustomApplications />
      <Performance />
      <Efficiency />
      {/* <TraditionalCooling /> */}
      <Impact />
      <Partners />
      {/* <WhyVaayu /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </>
  );
}
