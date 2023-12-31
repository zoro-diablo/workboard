import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Card, Title , Badge } from '@tremor/react'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(name, section, tax) {
  return { name, section, tax }
}

 const toprows1 = [
   createData('Sundaravadivel Balasubramanian', '194J(a)', '46,800.00'),
   createData('Senthilkumar Rajendran', '194J(a)', '10,110.00'),
   createData('Vanitha Ramaswamy', '194J(a)', '7,110.00'),
  //  createData('Srinivasan Raghunathan', '194J(a)', '5,110.00'),
  //  createData('Prakash Poornesh', '194J(a)', '3,110.00'),
   createData('Doon ', '194J(a)', '1,110.00'),

 ]




const TopDeductees = () => {
  return (
    <Card className='mt-5 badge mb-4'>
      <div className='flex justify-between'>
        <Title className='mb-6'>Top Deductees for FY 2023-24 </Title>
        <Badge className='w-[100px] h-[20px] font-bold text-lg bg-gray-300 text-black border-2 border-black py-4 shadow mr-5'>
          Form 26Q
        </Badge>
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 550, minHeight: 270 }}
          aria-label='customized table'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Name</StyledTableCell>
              <StyledTableCell align='center'>Section</StyledTableCell>
              <StyledTableCell align='center'>Tax Deducted</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toprows1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align='center' style={{ minWidth: 222 }}>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='center' style={{ minWidth: 222 }}>
                  {row.section}
                </StyledTableCell>
                <StyledTableCell align='center' style={{ minWidth: 222 }}>
                  {row.tax}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}



export default TopDeductees
