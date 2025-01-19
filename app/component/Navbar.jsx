import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container">
      {/* Brand */}
      <Link className="navbar-brand fw-bold text-primary" href="/">
        DojoK Helpdesk
      </Link>

      {/* Left Navigation: Dashboard and Tickets */}
      <ul className="navbar-nav me-auto">
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

      {/* Right Navigation: User Email and Logout */}
      <ul className="navbar-nav ms-auto">
        {user && (
          <li className="nav-item nav-link text-secondary">
            Hello, {user.email}
          </li>
        )}
        <li className="nav-item nav-link text-primary">
          <LogoutButton />
        </li>
      </ul>
    </div>
  </nav>
  );
}
