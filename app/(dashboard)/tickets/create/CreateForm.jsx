"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmt = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    const ticket = {
        title, body, priority, user_email:'mphammed@gmail.com'
    }

    const res = await fetch('http://localhost:4000/tickets',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(ticket)
    })

    if(res.status === 201){
      router.refresh()
      router.push('/tickets')
    }
  }
  return (
    <form onSubmit={handleSubmt} className="w-1/2">
      Title:
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      Body:
      <input
        type="text"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      Priority:
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option value="low">Low</option>
        <option value="medium">mMdium</option>
        <option value="high">High</option>
      </select>

      <button className="btn btn-primary" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span> }
      </button>
    </form>
  );
}
