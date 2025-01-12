import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFFA6] flex items-center justify-between custom-nav-shadow-box-style px-24 h-20 fixed w-full">
      <img src="/img/mawared-logo.png" alt="logo" />

      <div className="flex items-center justify-between gap-10">
        <div className="font-medium text-xl text-[#313030]">Home</div>
        <div className="font-medium text-xl text-[#313030]">Features</div>
        <div className="font-medium text-xl text-[#313030]">FAQ</div>
        <div className="font-medium text-xl text-[#313030]">Plans</div>
        <div className="font-medium text-xl text-[#313030]">About</div>
      </div>

      <Button className="custom-nav-btn-style font-medium text-lg">
        Book a live demo
      </Button>
    </div>
  );
};

export default Navbar;
