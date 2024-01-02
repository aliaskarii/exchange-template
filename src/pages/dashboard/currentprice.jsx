import { Grid  } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Paper, Pagination, Stack } from '@mui/material'
import Chart from 'react-apexcharts'
import Skeleton from '@mui/material/Skeleton'
import chartdata from '../../data/chart-config'
import { symbols } from '../../data/currencielist'
import fetchSymbolPrices from '../../lib/fetchSymbolPrices'
import numberWithCommas from '../../lib/numberWithCommas'


function CurrentPrice() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [symbolprice, setSymbolPrice] = useState([])
  const rowsPerPage = 5

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  useEffect(() => {
    setLoading(true)
    Promise.all(
      symbols
        .slice((page - 1) * rowsPerPage, page * rowsPerPage)
        .map((name) => fetchSymbolPrices(name))
    ).then((res) => {
      setSymbolPrice(res)
      setLoading(false)
    })
  }, [page])

  if (loading) {
    return (
      <>
        <Skeleton
          sx={{ height: 50, mb: 3, borderRadius: 3 }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, mb: 3, borderRadius: 3 }}
          animation="wave"
          variant="rectangular"
        />
      </>
    )
  }

  return (
    <Grid sx={{pt:20}}>
      <Paper>
        <Table sx={{ mb: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Price(Rials)</TableCell>
              <TableCell>Chart</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
      <Paper sx={{ mb: 3 }}>
        <Table sx={{ mb: 3 }}>
          <TableBody>
            {symbolprice.map((symbol, index) => (
              <TableRow key={index}>
                <TableCell>{symbol.name}</TableCell>
                <TableCell>
                  {numberWithCommas(parseFloat(symbol.price[49]).toFixed(2))}
                </TableCell>
                <TableCell>
                  {numberWithCommas(parseInt(symbol.price[49] * 500000))} Rial
                </TableCell>
                <TableCell>
                  <Chart
                    {...chartdata}
                    series={[{ name: symbol.name, data: symbol.price }]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack spacing={2} alignItems={'center'} padding={2}>
          <Pagination
            count={Math.ceil(symbols.length / rowsPerPage)}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Paper>
    </Grid>
  )
}
export default CurrentPrice
