import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="flex justify-around items-center bg-black p-4">
      <p className="text-white text-sm md:text-xl">
        Copyright to Mohamed Nabil
      </p>
      <span>
        <a
          href="https://www.linkedin.com/in/mohnabil-fend/"
          className="cursor-pointer"
        >
          <BsLinkedin size={30} color="white" />
        </a>
      </span>
    </div>
  );
};
