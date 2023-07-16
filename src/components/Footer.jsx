import Link from "@/components/Links";

const Footer = () => {
  return (
    <footer className="mx-auto pb-6 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <p>
        © 2023 <Link href="https://github.com/srajankumar">Srajan Kumar</Link>
      </p>
    </footer>
  );
};

export default Footer;
