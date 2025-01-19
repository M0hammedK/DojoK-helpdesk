import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound, PageNotFoundError } from "next/navigation";
import { cookies } from "next/headers";
import DeleteButton from "@/app/component/DeleteButton";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: ticket } = await supabase
    .from("Tickets")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `DojoK Helpdesk | ${ticket?.title || "Ticket not found"}`,
  };
}

const getTicket = async (id) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();
  if (!data) {
    notFound();
  }
  return data;
};

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

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

        {/* Priority Badge */}
        {data.session.user.email === ticket.user_email && (
          <div className={`badge px-3 py-2`}>
            <DeleteButton id={ticket.id} />
          </div>
        )}
      </div>
    </main>
  );
}
