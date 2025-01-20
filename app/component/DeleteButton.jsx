"use client";

import { useTransition } from "react";
import { deleteButton } from "../(dashboard)/tickets/actions";

export default function DeleteButton({ id }) {
  const [isLoading, startTransition] = useTransition()

  return (
    <button
      className="btn btn-danger"
      onClick={()=>startTransition(()=>deleteButton(id))}
      disabled={isLoading}
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}
