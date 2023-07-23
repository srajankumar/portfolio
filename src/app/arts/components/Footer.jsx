import Link from "@/components/Links";
const Footer = () => {
  return (
    <footer className="mx-auto py-6 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <div className="flex items-center">
        © 2023
        <Link
          className="pl-1 hover:text-blue-200"
          href="https://www.instagram.com/reoarts/"
        >
          Reo Arts
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
