import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";

async function getTickets() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("Tickets").select();

  if (error) {
    console.log(error.message);
  }
  return data;
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
          <Link
            key={ticket.id}
            href={`/tickets/${ticket.id}`}
            className="noDecoration"
          >
            <div className="list-group-item d-flex shadow my-1">
              <div className="ms-2 me-auto w-100">
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
