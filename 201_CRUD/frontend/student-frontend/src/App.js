import React, { useEffect, useState } from "react";
import API from "./api";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Management</h2>

      <StudentForm
        selectedStudent={selectedStudent}
        refresh={fetchStudents}
        clear={() => setSelectedStudent(null)}
      />

      <StudentList
        students={students}
        onEdit={setSelectedStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;