"use client"

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="d-grid">
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? 'Sbmitting...' : "Submit"}
    </button>
  </div>
  );
}
