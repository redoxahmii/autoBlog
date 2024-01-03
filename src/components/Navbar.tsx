import { tribuneTypes } from "@/types/types";
import { Mailbox, Newspaper } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-300 px-20">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-lg">
          <Newspaper size={19} />
          BuzzBlend
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/articles/pakistan" className="flex gap-1">
              <Mailbox size={19} />
              Pakistan News
            </Link>
          </li>
          <li>
            <Link href="/articles/foreign" className="flex gap-1">
              <Mailbox size={19} />
              International News
            </Link>
          </li>
          <li>
            <details className="dropdown">
              <summary>Categories</summary>
              <ul className="p-2 bg-base-200 dropdown-content z-20 rounded-t-none">
                <li>
                  <Link href="/articles/tribune">All Categories</Link>
                </li>
                {tribuneTypes.map((item) => (
                  <li key={item.param}>
                    <Link href={`/articles/tribune/${item.param}`}>
                      {item.param.toUpperCase().charAt(0) + item.param.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
}
