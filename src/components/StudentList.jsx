import React, { useState } from "react";
import "./../App.css";

export default function StudentList({
  students,
  loadStudents,
  onAdd,
  onEdit,
  onDelete,
  onView,
}) {
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* HEADER BOX */}
      <div className="header-box enhanced-header">
        <h1 className="header-title">Student Result Dashboard</h1>
        <p className="header-sub">View, Manage & Organize Student Records</p>
      </div>

      {/* SEARCH ONLY */}
      <div className="controls">
        <input
          placeholder="🔍 Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btn-green" onClick={onAdd}>
          + Add Student
        </button>
      </div>

      {/* LOAD BUTTON */}
      <button
        className="btn-load"
        onClick={loadStudents}
      >
        Load Students
      </button>

      {/* RECORDS TABLE */}
      <div className="table-box beautify-table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td className="name-col">
                  <span className="student-avatar">
                    {s.name.charAt(0).toUpperCase()}
                  </span>
                  {s.name}
                </td>

                <td>{s.section}</td>
                <td>{s.marks}</td>

                <td>
                  <button className="btn-light" onClick={() => onView(s)}>
                    View
                  </button>
                  <button className="btn-yellow" onClick={() => onEdit(s)}>
                    Edit
                  </button>
                  <button className="btn-red" onClick={() => onDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="empty-msg">
                  No student found with this name
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
