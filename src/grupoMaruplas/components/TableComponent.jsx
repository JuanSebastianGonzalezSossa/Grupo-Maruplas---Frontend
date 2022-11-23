import { Delete, Edit } from '@mui/icons-material';
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import Swal from 'sweetalert2';
import { useServices } from '../../hooks/UseServices';
import { useUiStore } from '../../hooks/useUiStore';
import '../styles/Table.css'

export const TableComponent = ({ columnas, filas, api }) => {

    const columns = useMemo(() => columnas, []);
    const data = useMemo(() => filas, [])

    const { OpenSuccess, updateNow } = useUiStore();

    const { startDeletingRuta } = useServices();

    const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow, state } = useTable({
        columns,
        data
    }, useFilters)

    const AbrirEditar = (actual) => {
        updateNow(actual)
        OpenSuccess()
    }

    const AbrirDelete = (actual) => {
        updateNow(actual)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                    startDeletingRuta(actual,api);
            }
        })
    }


    return (
        <TableContainer className='container' component={Paper}>
            <Table sx={{ minWidth: 650 }} {...getTableProps()} aria-label="simple table">
                <TableHead sx={{ minWidth: 650, backgroundColor: 'third.main', fontWeight: 'bold' }} >
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 15, color: 'primary.blanco' }}
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
                                }} onClick={() => AbrirEditar(row.original)}><Edit sx={{ fontSize: 22 }}></Edit></IconButton>
                                    <IconButton sx={{
                                        color: 'error.main',
                                        backgroundColor: 'white',
                                        ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                    }} onClick={() => AbrirDelete(row.original)}><Delete></Delete></IconButton></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
