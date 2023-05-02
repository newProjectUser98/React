
import React from 'react'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './customtable.scss'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    CircularProgress,
    Avatar,
    TableSortLabel,
 } from '@material-ui/core';

const CustomTable = (props) => {
    const { tablehead, tabledata,setActionData, setReSentInvite } = props
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState(tablehead[0].id)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const useStyles = makeStyles((theme) => ({
        table: {
          minWidth: 650,
          backgroundColor: '#F7F7F7',
          fontfamily: 'Poppins',
          overflow:'hidden'
        },
        tableContainer: {
            borderRadius: 40,
            
        },
        tableHead:{
            background: 'linear-gradient(270deg, #BBE2E4 8.66%, #B68FE7 103.05%)'
        },
        tableHeaderCell: {
            fontWeight: 500,
            background: 'transparent',
            color: theme.palette.getContrastText(theme.palette.primary.dark),
            fontfamily: 'Poppins', 
        },
      }));
    const classes = useStyles()
    const numberformat = (index)=> {
        index = index + 1
        return index < 10 ? `0${index}` : index
    }
    const handleRequestSort = (event, property)=>{
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }
    const createSortHandler = (property)=>(event)=>{
        handleRequestSort(event,property)
    }
    const descendingComparator = (a,b, orderBy)=>{
        if(b[orderBy] < a[orderBy]){
            return -1
        }
        if(b[orderBy] > a[orderBy]){
            return 1
        }
        return 0
    }
    const getComparator = (order, orderBy)=>{
        return order === "desc"
        ? (a,b) => descendingComparator(a,b, orderBy)
        : (a,b) => -descendingComparator(a,b, orderBy)
    }
    const sortedRowInformation = (rowArray, comparator) =>{
        const stabilizedRowArray = rowArray.map((el,index)=> [el,index])
        stabilizedRowArray.sort((a,b)=>{
            const order = comparator(a[0],b[0])
            if(order !==0) return order
            return a[1] - b[1]
        })
        return stabilizedRowArray.map((el) => el[0])
    }
    return (
        <div>
            <TableContainer className={classes.tableContainer}>
                <Table aria-label='simple pagination table sticky' stickyHeader className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                        {tablehead.map((column) => (
                            <TableCell key={column.id} align='center' className={classes.tableHeaderCell}>
                                {
                                    (column.id !== 'action' && column.id !== 'serial_no' && column.id !== 'address' && column.id !== 'device_mobile_number' && column.id !== 'device_name'&& column.id !== 'device_serial_number' && column.id !== 'status' && column.id !== 'contact_no') ?
                                        <TableSortLabel
                                            active={true}
                                            direction={valueToOrderBy === column.id ? orderDirection : 'asc'}
                                            onClick={createSortHandler(column.id)}
                                            className="text-white"
                                        >
                                            {column.name}
                                        </TableSortLabel>
                                    :
                                        column.name
                                }
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        tabledata ? 
                            tabledata?.length === 0 ? 
                                <TableRow> 
                                    <TableCell colSpan={12}>
                                        <div className="flex justify-center w-full items-center">
                                            <p className="mx-4">No Data Found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            :
                                sortedRowInformation(tabledata, getComparator(orderDirection,valueToOrderBy))?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row,index) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {
                                            tablehead?.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                column.id !=='action' ?
                                                <TableCell key={column.id} align='center'>
                                                {
                                                    typeof(value) === 'object'?
                                                    <ul>
                                                        {
                                                            value?.map((item,index) => {
                                                                return(
                                                                    <li key={index}>{item}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    :
                                                    column.id ==='serial_no' ?
                                                        <span className='font-normal text-xs'>{numberformat(index)}</span>
                                                    :
                                                    column.id ==='username' ? 
                                                        <div className="flex items-center justify-start">
                                                            <Avatar src={row['avatar']}/>
                                                            <p className="mx-4 text-xs">{value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</p>
                                                        </div>
                                                    :
                                                    column.id ==='status' ? 
                                                        <>
                                                            <p className={value === true || value === 1 ? 'text-green-500 font-medium text-xs' : value === false || value === 2 || value === -1 ?'text-red-500 font-medium text-xs' : value === 0 ? 'text-orange-500 font-medium text-xs' : ''}>{value=== true ? 'Active' : value === false || value === -1 ? 'Inactive' : value === 0? 'Invite Sent' : value === 1 ? 'Invite accepted and Active' : value === 2 ? 'Invite Expired' : ''}</p>
                                                            {
                                                                value === 2 && 
                                                                <button className='p-2 border-solid font-medium text-xs border-primary-color border-2 my-3 rounded-md hover:bg-primary-color hover:text-white'
                                                                onClick={()=>{
                                                                    setReSentInvite(row['serial_no'])
                                                                }}>Resend Invitation</button>
                                                            }
                                                        </>
                                                    :
                                                    <span className='text-xs'>{value}</span>
                                                }
                                                </TableCell>
                                                :
                                                <TableCell key={column.id}>
                                                    <div className="flex items-center gap-5 justify-center">
                                                        {
                                                            column.options.includes('view') ? <VisibilityIcon onClick={()=> setActionData({id:row['serial_no'],action:'view'})} fontSize='small' className='cursor-pointer'/> : ''
                                                        }
                                                        {
                                                            column.options.includes('edit') ? <BorderColorOutlinedIcon onClick={()=> setActionData({id:row['serial_no'],action:'edit'})} fontSize='small' className='cursor-pointer'/> : ''
                                                        }
                                                        {
                                                            column.options.includes('delete') ? <DeleteOutlineRoundedIcon onClick={()=> setActionData({id:row['serial_no'],action:'delete'})} fontSize='small' className='cursor-pointer'/> : ''
                                                        }
                                                        {
                                                            column.options.includes('block') ? <button onClick={()=> setActionData({id:row['serial_no'],action:'block'})} fontSize='small' className='ml-5 py-2 px-5 border-2 hover:text-white rounded-xl text-xs font-medium hover:bg-text-title'>{
                                                                row['status'] === -1 ? 'Blocked' : 'Block'
                                                            }{}</button> : ''
                                                        }
                                                    </div>
                                                </TableCell>
                                            );
                                            })
                                        }
                                    </TableRow>
                                    );
                                })
                        :
                        <TableRow> 
                            <TableCell colSpan={12}>
                                <div className="flex justify-center w-full items-center">
                                    <CircularProgress size={30} thickness={5}/> <p className="mx-4">Loading..</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                tabledata?.length > 0 ? <TablePagination 
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                component="div"
                count={tabledata?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
                : null
            }
        </div>
    )
}

export default CustomTable