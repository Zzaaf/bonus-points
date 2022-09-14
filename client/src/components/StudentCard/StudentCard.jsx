import React from 'react';

function StudentCard({ student }) {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{student.name}</td>
      <td>{student.points}</td>
    </tr>
  );
}

export default StudentCard;