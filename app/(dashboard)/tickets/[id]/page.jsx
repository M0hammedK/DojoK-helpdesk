import { notFound, PageNotFoundError } from "next/navigation";

export const dynamicParams = true;

export async function generateMetadata({params}) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json()
  return{
    title: `DojoK Helpdesk | ${ticket.title}` 
  }
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main className="bg-light py-5">
      <div className="container">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="fw-bold text-primary">{ticket.title}</h2>
          <p className="text-secondary">
            <small>Created by: {ticket.user_email}</small>
          </p>
        </div>

        {/* Ticket Body */}
        <div className="mb-4">
          <p>{ticket.body}</p>
        </div>

        {/* Priority Badge */}
        <div className={`badge ${ticket.priority} text-white px-3 py-2`}>
          {ticket.priority} Priority
        </div>
      </div>
    </main>
  );
}
