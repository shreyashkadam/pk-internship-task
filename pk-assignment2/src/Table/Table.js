import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './Table.css'

const Table = () => {

    const [tableData, setTableData] = useState([])
    let maleCount = 0;
    let femaleCount = 0;

    useEffect(() => {
        fetch("https://gorest.co.in/public/v2/users")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    }, [])

    for (let row of tableData) {
        if (row.gender === 'male') {
            maleCount++;
        } else if (row.gender === 'female') {
            femaleCount++;
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'email', headerName: 'E-Mail', width: 600 },
        { field: 'gender', headerName: 'Gender', width: 300 },
        { field: 'status', headerName: 'Status', width: 300 }
    ]


    return (
        <div className='Table'>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    color="primary"
                    rows={tableData}
                    columns={columns}
                    rowsPerPageOptions={[10]}
                    pageSize={10}
                />
            </div>

            <div className='counts'>
                <div className='male-count'>
                    Male : {maleCount}
                </div>
                <div className='female-count'>
                    Female : {femaleCount}
                </div>
            </div>
        </div>



    )
}

export default Table