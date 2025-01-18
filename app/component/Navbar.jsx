import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" href="/">
          DojoK Helpdesk
        </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link text-secondary">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tickets" className="nav-link text-secondary">
                Tickets
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}
