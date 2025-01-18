import Loading from "../loading";
import TicketList from "./TicketList";
import { Suspense } from "react";
export default function Tickets() {
  return (
    <main className="bg-light py-5">
      <div className="container">
        {/* Page Header */}
        <div className="mb-4">
          <h2 className="fw-bold text-primary">Tickets</h2>
          <p className="text-secondary">
            <small>Currently open tickets</small>
          </p>
        </div>

        {/* Ticket List */}
        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
      </div>
    </main>
  );
}
