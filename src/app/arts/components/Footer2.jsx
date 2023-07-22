"use client";
import Link from "@/components/Links";
const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] text-black font-bold mx-auto py-6 flex flex-col items-center space-y-4 px-8 text-center">
      <div className="flex items-center">
        © 2023
        <Link
          className="pl-1 hover:text-blue-700"
          href="https://www.instagram.com/reoarts/"
        >
          Reo Arts
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
