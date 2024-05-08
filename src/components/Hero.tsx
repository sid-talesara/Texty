const Hero = () => {
  return (
    <div className="pt-28 md:pt-36">
      <nav className="fixed text-black top-0 left-0  bg-gray-400 w-56 md:w-96 mx-auto rounded-full h-10 md:h-16 flex items-center  mt-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 right-0 p-4 md:text-3xl gap-3 text-center  justify-center font-Montserrat">
        TEXTY
      </nav>

      <div className="text-center  ">
        <h1 className="text-5xl md:text-7xl text-gray-800 p-4 font-Montserrat">
          Effortless Text File Exploration
        </h1>
        <p className="text-xl md:text-3xl font-light py-4 pb-10 font-Montserrat">
          Search, Count, and Explore Words with Ease!
        </p>
      </div>
    </div>
  );
};

export default Hero;
