import { dbPool } from "./db";
import { getAllStudents, addStudent, updateStudentEmail, deleteStudent } from "./student";

async function main() {
    const students = await getAllStudents();
    console.log("All Students:", students);

    const newStudent = await addStudent("John", "Doe", "john.doe@example.com", "2023-01-01");
    console.log("Added Student:", newStudent);

    const updatedStudent = await updateStudentEmail(newStudent.student_id, "john.new@example.com");
    console.log("Updated Student Email:", updatedStudent);

    const deletedStudent = await deleteStudent(newStudent.student_id);
    console.log("Deleted Student:", deletedStudent);
    
    await dbPool.end(); // close connection
}

main().catch((err) => {
    console.error("Error in main execution:", err);
    process.exit(1);
});