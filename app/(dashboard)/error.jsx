"use client";

export default function error({ error, reset }) {
  return (
    <main className="justify-self-center p-4">
      <h2 className="text-4x1 text-primary">Oh No!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="btn btn-primary mx-auto my-4">
        Maybe try again?
      </button>
    </main>
  );
}
