import React from 'react';
import { Link } from 'react-router-dom';

function Students() {
    const students = [
        {
            id: 1,
            name: "Anu"
        },
        {
            id: 2,
            name: "Manu"
        },
        {
            id: 3,
            name: "Vinu"
        },
        {
            id: 4,
            name: "Sinu"
        },
        {
            id: 5,
            name: "Meenu"
        }
    ];

    return (
        <div>
            {students.map((student) => (
                <>
                <h3 key={student.id}>{student.name}</h3>
                <Link to={`${student.id}`}>view</Link>
                </>
            ))}
        </div>
    );
}

export default Students;
