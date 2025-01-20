"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile/i.test(userAgent));
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Brand */}
        <Link href="/" className="navbar-brand fw-bold text-primary">
          DojoK Helpdesk
        </Link>

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleDrawer}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}

        {/* Navigation Menu */}
        <div
          hidden={isDrawerOpen === isMobile}
          className={`${isMobile ? "navbar-collapse show" : "d-flex w-100"}`}
          id="navbarNav"
        >
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
                Hello, {user.email.split("@")[0]}
              </li>
            )}
            <li className="nav-item nav-link text-primary">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}