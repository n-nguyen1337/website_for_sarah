import { UserData } from "../data/UserData";

function Poem() {
  const { FooterLink } = UserData;
  return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="pb-6 pt-12 text-center text-3xl tracking-wider text-violet-500 lg:text-5xl">
          Now for a quick poem
        </h2>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        Happy birthday, Sarah, oh so divine,
        The woman of my dreams, with a heart that shines.
        </p>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        Your intelligence sparkles like the morning dew,
        A radiant beauty, but shittt we already knew.
        </p>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        You're so strong, I can't compete,
        Every time we tickle fight, I face defeat.
        </p>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        Your care and compassion, a gentle breeze,
        It soothes the soul, and I'm like geeez.
        </p>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        Your feistiness, a spice that adds flair,
        A sparkle in your eyes, beyond compare.
        </p>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        From your bright smile to your lovely hair,
        You light up the world, beyond compare.
        </p>
        <p className="font-poppins mx-auto px-10 pb-6 text-center text-xxl tracking-wider text-violet-500 lg:w-[50%]">
        On your special day, I want to say,
        You're the sunshine that brightens up my day.
        </p>
      </div>
    </div>
  );
}

export default Poem;
