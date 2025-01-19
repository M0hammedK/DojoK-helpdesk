import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({children}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if(data.session) redirect('/')

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" href="/">
          DojoK Helpdesk
        </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/signup" className="nav-link text-secondary">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link text-secondary">
                Log in
              </Link>
            </li>
          </ul>
      </div>
    </nav>
    {children}
    </>
  );
}
