import React from "react";

export default function StudentDetails({ student, onBack }) {
  return (
    <div className="container">

      <div className="details-card">
        <h2 style={{ textAlign: "center", color: "#2563eb", marginBottom: "20px" }}>
          Student Details
        </h2>

        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Marks:</strong> {student.marks}</p>
        <p><strong>Grade:</strong> {student.grade}</p>

        <button
          className="btn-light"
          style={{ marginTop: "20px", width: "100%" }}
          onClick={onBack}
        >
          Back
        </button>
      </div>

    </div>
  );
}
