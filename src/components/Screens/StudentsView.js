import React from 'react'
import { useParams } from 'react-router-dom'

function StudentsView() {
    const {id} = useParams()
    return (
<h1>my id is {id}</h1>
    )
}

export default StudentsView
