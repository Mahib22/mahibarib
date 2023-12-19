import { NavLink } from "react-router-dom";

export default function Category() {
  const menus = [
    { title: "All" },
    { title: "Front End", slug: "front-end" },
    { title: "Full Stack", slug: "full-stack" },
  ];

  return (
    <div className="flex gap-4 md:justify-center overflow-x-auto hide-scroll-bar whitespace-nowrap">
      {menus.map((menu) => (
        <CategoryItem key={menu.title} {...menu} />
      ))}
    </div>
  );
}

const CategoryItem = ({ title, slug }) => {
  const normalStyle =
    "border-solid border-2 border-sky-500 rounded-3xl px-6 2xl:px-8 2xl:text-2xl";
  const activeStyle = `${normalStyle} bg-sky-500 text-gray-100`;
  const link = slug ? `/portofolio/${slug}` : "/portofolio";

  return (
    <NavLink
      end
      to={link}
      className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
    >
      {title}
    </NavLink>
  );
};
