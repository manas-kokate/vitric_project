import React from 'react'

const skillstable = ({ skill }) => {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{skill.i + 1}</td>
            <td>{skill.ele.proficiency}</td>
            <td>{skill.ele.skill}</td>
        </tr>
    )
}

export default skillstable
