import { UserData } from "../data/UserData";

function Poem() {
  const { FooterLink } = UserData;
  return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="pb-6 pt-12 text-center text-3xl tracking-wider text-gray-900 lg:text-5xl">
          Now for a quick poem
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
          you are so cute
        </p>
      </div>
    </div>
  );
}

export default Poem;
