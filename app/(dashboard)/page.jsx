import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-light py-5">
      <div className="container">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="fw-bold text-primary">Dashboard</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            repellendus tempore, exercitationem odit quasi dolore...
          </p>
          <Link href="/tickets" className="btn btn-primary px-4">View Tickets</Link>
        </div>

        {/* Company Updates Section */}
        <div>
          <h4 className="fw-bold text-primary">Company Updates</h4>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  New member of the web dev team...
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">New website live!</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
