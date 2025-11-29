const API_URL = "http://localhost:3000/students";

export const getStudents = async () => {
  return fetch(API_URL).then((res) => res.json());
};

export const addStudent = async (data) => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateStudent = async (id, data) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteStudent = async (id) => {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
