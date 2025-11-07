import { dbPool } from "./db";

export async function getAllStudents() {
    const { rows } = await dbPool.query('SELECT * FROM students');
    return rows;
}

export async function addStudent(first_name: string, last_name: string, email: string, enrollment_date: string|null) {
    const { rows } = await dbPool.query(
        'INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4) RETURNING *',
        [first_name, last_name, email, enrollment_date]
    );
    return rows[0];
}

export async function updateStudentEmail(student_id: number, new_email: string) {
    const { rows } = await dbPool.query(
        `UPDATE students SET email = $1 WHERE student_id = $2 RETURNING *;`,
        [new_email, student_id]
    );
    return rows[0];
}

export async function deleteStudent(student_id: number) {
    const { rows } = await dbPool.query(
        `DELETE FROM students WHERE student_id = $1 RETURNING *;`,
        [student_id]
    );
    return rows[0];
}