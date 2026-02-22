import { useEffect, useState } from "react";
import API from "../api";
import "./UserProfile.css";

export default function UserProfile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    API.get("/students/me").then((res) => setStudent(res.data));
  }, []);

  if (!student) return <h3>No profile</h3>;

  return (
    <div className="user-profile">
      <h3>My Profile</h3>
      <p><span>Name:</span> {student.studentName}</p>
      <p><span>Parent:</span> {student.studentParentsName}</p>
      <p><span>Contact:</span> {student.studentParentContact}</p>
      <p><span>Address:</span> {student.studentAddress}</p>
      <p><span>Class:</span> {student.studentClass}</p>
    </div>
  );
}
