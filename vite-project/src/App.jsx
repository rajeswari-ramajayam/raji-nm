import { useState } from "react";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState("");
  const [reason, setReason] = useState("");
  const [leaves, setLeaves] = useState([]);

  const applyLeave = () => {
    if (!employee || !reason) {
      alert("Please enter details");
      return;
    }

    const newLeave = {
      id: Date.now(),
      employee,
      reason,
      status: "Pending",
    };

    setLeaves([...leaves, newLeave]);
    setEmployee("");
    setReason("");
  };

  const updateStatus = (id, status) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status } : leave
      )
    );
  };

  return (
    <div className="container">
      <h1>HR Employee Leave Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <input
          type="text"
          placeholder="Leave Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button onClick={applyLeave}>Apply Leave</button>
      </div>

      <h2>Leave Requests</h2>

      {leaves.map((leave) => (
        <div className="card" key={leave.id}>
          <h3>{leave.employee}</h3>
          <p>Reason: {leave.reason}</p>
          <p>Status: {leave.status}</p>

          <button
            className="approve"
            onClick={() => updateStatus(leave.id, "Approved")}
          >
            Approve
          </button>

          <button
            className="reject"
            onClick={() => updateStatus(leave.id, "Rejected")}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;