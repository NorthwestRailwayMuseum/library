// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { getBooks } from '../api';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [literatureData, setLiteratureData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBooks();
            setLiteratureData(data);
        };

        fetchData();
    }, []);

    const filteredData = literatureData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container maxWidth="md" style={{ marginTop: 20 }}>
            <TextField
                label="Search Literature"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ marginBottom: 20 }}
            />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Home;