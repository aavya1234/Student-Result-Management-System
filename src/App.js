import React, { useState } from "react";

import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

export default function App() {
  const [screen, setScreen] = useState("list");
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState(null);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const saveStudent = async () => {
    if (formData.id) await updateStudent(formData.id, formData);
    else await addStudent(formData);

    alert("Saved!");
    setScreen("list");
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    alert("Deleted!");
    loadStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      {screen === "list" && (
        <StudentList
          students={students}
          loadStudents={loadStudents}
          onAdd={() => { setFormData({}); setScreen("form"); }}
          onEdit={(s) => { setFormData(s); setScreen("form"); }}
          onDelete={handleDelete}
          onView={(s) => { setSelected(s); setScreen("details"); }}
        />
      )}

      {screen === "form" && (
        <StudentForm
          formData={formData}
          setFormData={setFormData}
          onSave={saveStudent}
          onCancel={() => setScreen("list")}
        />
      )}

      {screen === "details" && (
        <StudentDetails student={selected} onBack={() => setScreen("list")} />
      )}
    </div>
  );
}
