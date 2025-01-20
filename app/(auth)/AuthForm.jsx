"use client";

import { useState } from "react";

export default function AuthForm({ handleSubmit, isLoading, process }) {
  const split_process = process.split(' ')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="bg-white p-4 rounded shadow-sm"
    >
      {/* Email Input */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>

      {/* Password Input */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? `${split_process[0]}ing ${split_process[1]}...` : process }
        </button>
      </div>
    </form>
  );
}
