import { Mailbox, Newspaper } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 absolute top-0 px-20">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Newspaper />
          BuzzBlend
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="blog" className="flex gap-1">
              <Mailbox />
              Blog
            </Link>
          </li>
          {/* <li> */}
          {/*   <details> */}
          {/*     <summary>Contact</summary> */}
          {/*     <ul className="p-2 bg-base-100 rounded-t-none"> */}
          {/*       <li> */}
          {/*         <a>Link 1</a> */}
          {/*       </li> */}
          {/*       <li> */}
          {/*         <a>Link 2</a> */}
          {/*       </li> */}
          {/*     </ul> */}
          {/*   </details> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
}
