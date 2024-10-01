import { jumbo } from "../constants";

const Jumbotron = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden mt-20">
      {/* Background image fixed only within the Jumbotron */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/img/other-concerts-tickets.jpg')`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Content area with text */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center p-4 w-full h-full">
        <h1 className="text-black text-4xl font-semibold">
          {jumbo.jumboTitle}
          <span>!</span>
        </h1>
        <p className="lead text-lg text-black mt-4">{jumbo.jumboTxt}</p>
        <a href="/booking" className="btn btn-dark px-4 mt-6">
          {jumbo.jumboBtn}
        </a>
      </div>
    </div>
  );
}
export default Jumbotron