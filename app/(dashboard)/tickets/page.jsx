import Link from "next/link";
import Loading from "../loading";
import TicketList from "./TicketList";
import { Suspense } from "react";

export const metadata = {
  title: "DojoK Helpdesk | Tickets",
};

export default function Tickets() {
  return (
    <main className="bg-light py-5">
      <div className="container">
        {/* Page Header */}
        <div className="d-flex w-100 justify-content-between">
        <div>
          <h2 className="fw-bold text-primary">Tickets</h2>
          <p className="text-secondary">
            <small>Currently open tickets</small>
          </p>
        </div>
        <div>
          <Link
            href="/tickets/create"
            className="d-flex justify-content-end w-100"
            >
            <button className="text-white bg-primary p-2 my-4">
              Add New Ticket
            </button>
          </Link>
            </div>
        </div>

        {/* Ticket List */}
        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
      </div>
    </main>
  );
}
