import Link from "next/link";
import React from "react";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // 0 means don't use cache
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <div className="list-group">
      {tickets.length === 0 ? (
        <p className="text-center text-secondary mt-3" key={0}>
          There is no open ticket
        </p>
      ) : (
        tickets.map((ticket) => (
         <Link key={ticket.id} href={`/tickets/${ticket.id}`} className='noDecoration'> 
         <div className="list-group-item d-flex shadow my-1">
            <div className="ms-2 me-auto">
              <h5 className="fw-bold text-primary">{ticket.title}</h5>
              <p className="text-secondary mb-2">
                {ticket.body.slice(0, 200)}...
              </p>
              <div className="d-flex justify-content-end">
                <span className={`badge ${ticket.priority}`}>
                  {ticket.priority} Priority
                </span>
              </div>
            </div>
          </div>
         </Link>
        ))
      )}
    </div>
  );
}
