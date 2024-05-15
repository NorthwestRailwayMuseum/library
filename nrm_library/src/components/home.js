// src/components/Home.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

// Mock data - replace this with actual data fetching logic
const literatureData = [
    { id: 1, title: "1984", author: "George Orwell", year: "1949" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: "1925" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960" },
    // Add more entries as needed
];

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = literatureData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
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
        </div>
    );
}

export default Home;