import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="items-center text-center ">
      <div className="size-56 m-auto pt-5 ">
        <img src="../../public/assets/images/banner.png" alt="" />
      </div>
      <div>
        <h1 className="font-extrabold text-3xl">
          I do code and <br /> make content <span className="text-[#FF8660]">about it!</span>
        </h1>
      </div>
      <div className="p-5 max-w-4xl m-auto text-xl">
        <p>
          I am a seasoned full-stack software engineer with over <br /> 8 years of
          professional experience, specializing in backend development. <br /> My
          expertise lies in crafting robust and scalable SaaS-based <br /> 
          architectures on the Amazon AWS platform.
        </p>
      </div>
      <div className="flex justify-center gap-5 m-5">
        <Button text="Get In Touch" />
        <Button text="Download CV" />
      </div>
      <div className="text-center text-white m-5 p-5">
        <h1 className="text-[#C5C5C5] text-3xl">EXPERIENCE WITH</h1>
        <img className="m-auto mt-9 hover:cursor-pointer" src="../../public/images/assets/Logos.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
