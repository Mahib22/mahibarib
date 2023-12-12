export default function Footer() {
  const getYear = new Date();

  return (
    <footer className="container mx-auto justify-center flex pb-4 2xl:pb-5">
      <p className="font-medium 2xl:text-lg">
        © {getYear.getFullYear()} - Muhammad Mahib Arib
      </p>
    </footer>
  );
}
