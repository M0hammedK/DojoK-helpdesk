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
        title, body, priority, 
    }

    const res = await fetch('http://localhost:3000/api/tickets',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(ticket)
    })

    const json = await res.json()
    
    if(json.error){
      console.log(json.error)
    }
    if(json.data){
      router.refresh()
      router.push('/tickets')
    }

  }
  return (
    <form onSubmit={handleSubmt} className="bg-white p-4 rounded shadow-sm w-1/2 justify-self-center">
      <h4 className="text-primary fw-bold text-center mb-4">Add New Ticket</h4>

      {/* Title Input */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="Enter ticket title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>

      {/* Body Input */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label fw-semibold">
          Body
        </label>
        <textarea
          id="body"
          className="form-control"
          placeholder="Enter ticket details"
          rows="4"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
      </div>

      {/* Priority Dropdown */}
      <div className="mb-3">
        <label htmlFor="priority" className="form-label fw-semibold">
          Priority
        </label>
        <select
          id="priority"
          className="form-select"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          required
        >
          <option value="" disabled>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
        </button>
      </div>
    </form>
  );
}
