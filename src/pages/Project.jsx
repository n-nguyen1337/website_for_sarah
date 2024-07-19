import Cards from "../components/Cards";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  return (
    <div className="mb-24 h-[400px] w-full sm:mb-0 md:h-screen">
      <div>
        <p className="font-poppins mx-auto w-[50%] pb-10 pt-8 text-center text-2xl tracking-wider text-gray-900 lg:text-3xl">
          Some Snapshots of Last Year
        </p>
        <p className="font-poppins mx-auto w-[50%] pb-12 pt-8 text-center text-sm tracking-wider text-gray-900 lg:text-lg">
          We met around this time of year exactly a year ago. I've spent many moments with you and enjoyed every single one. You are so fun!
        </p>
      </div>
      <div className="mx-auto mb-2 grid w-[90%] grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
        <Cards />
      </div>
      <div className="mx-auto w-[90%]">
        <p className="flex cursor-pointer items-center gap-2 font-semibold leading-tight text-gray-900">
          <div
            class="font-poppins group relative"
            onClick={() => {
              navigate("/projectlist");
            }}
          >

          </div>
        </p>
      </div>
    </div>
  );
}

export default Project;
