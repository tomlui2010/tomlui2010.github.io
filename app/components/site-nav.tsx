import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

type SiteNavProps = {
  currentPath?: string;
};

export default function SiteNav({ currentPath }: SiteNavProps) {
  return (
    <header className="header_area tl-page-header">
      <div className="container tl-page-header__inner">
        <Link className="tl-page-header__brand" href="/">
          Thomas Louis
        </Link>

        <nav aria-label="Primary" className="tl-page-header__nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className={`tl-page-header__link${
                currentPath === item.href ? " is-active" : ""
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
