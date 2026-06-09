function Hero() {
  return (
    <section className="container bg-rose-400  max-[450]:bg-cover max-[450]:bg-center bg-contain bg-no-repeat h-screen max-[450]:text-black">
      <div className="text-center text-white pt-[10rem] ">
        <h3 className="text-[2rem] text-white">Basic - SaaS landing page</h3>
        <h2 className="text-[2rem] mb-[2rem] font-semibold">
          Kickstart Your SaaS or App site
        </h2>
        <p className="mb-[2rem] text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum
          quod vero incidunt doloremque.
        </p>
        <button className="px-[1.6rem] py-[0.8rem] bg-teal-400 hover:bg-teal-500 rounded-lg">
          Get Started
        </button>
        <img
          className="w-[45%] mx-auto mt-[2rem]"
          src="images/header/header-hero.png"
          alt="image of screen"
        />
      </div>
    </section>
  );
}


export default Hero;