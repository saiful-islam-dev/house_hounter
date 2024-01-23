import Search from "../Shared/Search";

const Banear = () => {
  return (
    <div
      className="bg-cover w-full h-[500px] rounded-lg"
      style={{
        backgroundImage:
          "url(https://www.trulia.com/images/app-shopping/homePage/extraLarge.webp)",
      }}
    >
      <div className="text-center m-auto text-gray-200 w-2/4 pt-44 ">
        <h1 className="text-4xl font-bold pb-6">
          Your Ideal Living Space Awaits Exploration
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default Banear;
