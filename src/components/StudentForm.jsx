import React from "react";

export default function StudentForm({ formData, setFormData, onSave, onCancel }) {
  return (
    <div className="container">

      <div className="form-card">
        <h2 style={{ textAlign: "center", color: "#2563eb", marginBottom: "20px" }}>
          {formData.id ? "Edit Student" : "Add Student"}
        </h2>

        <input
          placeholder="Name"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          placeholder="Section"
          value={formData.section || ""}
          onChange={(e) => setFormData({ ...formData, section: e.target.value })}
        />

        <input
          placeholder="Marks"
          type="number"
          value={formData.marks || ""}
          onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
        />

        <input
          placeholder="Grade"
          value={formData.grade || ""}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-green" style={{ flex: 1 }} onClick={onSave}>
            Save
          </button>

          <button className="btn-light" style={{ flex: 1 }} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>

    </div>
  );
}
