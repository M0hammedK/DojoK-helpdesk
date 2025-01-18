import Link from "next/link";

export default function AuthLayout({children}) {
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
