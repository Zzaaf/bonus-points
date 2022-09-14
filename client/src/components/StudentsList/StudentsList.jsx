import React from 'react';
import StudentCard from '../StudentCard/StudentCard';

function StudentsList({ studentList }) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Студент</th>
          <th scope="col">Бонусные баллы</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((student) => <StudentCard student={student} />)}
      </tbody>
    </table>
  );
}

export default StudentsList;