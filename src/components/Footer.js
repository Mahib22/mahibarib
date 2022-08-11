export default function Footer() {
  const getYear = new Date();

  return (
    <div className="container mx-auto md:mt-8 p-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-600 dark:text-slate-300 text-sm text-center sm:text-left">
        © {getYear.getFullYear()} • Muhammad Mahib Arib
      </p>
      <p className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-600 dark:text-slate-300 text-sm">
        Made with 💖 from Indonesia
      </p>
    </div>
  );
}
