import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
export default function Customer(p) {
    return (
        <TableRow>
            <TableCell>{p.id}</TableCell>
            <TableCell><img src={p.image} alt="pic"/></TableCell>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.gender}</TableCell>
            <TableCell>{p.birthday}</TableCell>
            <TableCell>{p.job}</TableCell>
        </TableRow>
    )
} 
 