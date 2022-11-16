import { Delete, Edit } from '@mui/icons-material';
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import '../styles/Table.css'

export const TableComponent = ({ columnas, filas }) => {

    const columns = useMemo(() => columnas, []);
    const data = useMemo(() => filas, [])

    const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow, state } = useTable({
        columns,
        data
    }, useFilters)


    const AbrirEditar = (id) => {
        console.log(id)
    }

    const AbrirDelete = (id) => {
        console.log(id)
    }

    return (
        <TableContainer className='container' component={Paper}>
            <Table sx={{ minWidth: 650 }} {...getTableProps()} aria-label="simple table">
                <TableHead sx={{ minWidth: 650, backgroundColor: 'third.main', fontWeight: 'bold' }} >
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell sx={{ fontWeight: 'bold', fontFamily: '', fontSize: 15, color: 'primary.blanco' }}  
                                {...column.getHeaderProps()}>{column.render('Header')}
                                    <Grid>{column.canFilter ? "" : null}</Grid></TableCell>

                            ))
                            }
                            <TableCell sx={{ fontWeight: 'bold', fontFamily: '', fontSize: 15, color: 'primary.blanco' }}>Acciones</TableCell>
                        </TableRow>
                    ))
                    }
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cells) => {

                                    return <TableCell {...cells.getCellProps()}>{cells.render('Cell')}</TableCell>
                                })}
                                <TableCell><IconButton sx={{
                                    color: 'secondary.main',
                                    backgroundColor: 'white',
                                    ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                }} onClick={() => AbrirEditar(row.original.id)}><Edit sx={{ fontSize: 22 }}></Edit></IconButton>
                                    <IconButton sx={{
                                        color: 'error.main',
                                        backgroundColor: 'white',
                                        ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                    }} onClick={() => AbrirDelete(row.original.id)}><Delete></Delete></IconButton></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
