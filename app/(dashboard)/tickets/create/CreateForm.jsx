import { addTicket } from "../actions";
import SubmitButton from "@/app/component/SubmitButton";

export default function CreateForm() {

  return (
    <form
      action={addTicket}
     className="bg-white p-4 rounded shadow-sm w-1/2 justify-self-center"
    >

      {/* Title Input */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          placeholder="Enter ticket title"
          required
        />
      </div>

      {/* Body Input */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label fw-semibold">
          Body
        </label>
        <textarea
          name="body"
          className="form-control"
          placeholder="Enter ticket details"
          rows="4"
          required
        />
      </div>

      {/* Priority Dropdown */}
      <div className="mb-3">
        <label htmlFor="priority" className="form-label fw-semibold">
          Priority
        </label>
        <select name="priority" className="form-select" required>
          <option value="" disabled>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <SubmitButton />
    </form>
  );
}
