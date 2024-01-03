import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Paper, Pagination, Stack } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import { SymbolsList } from '../../data/SymbolsList'
import FetchSymbolPrices from '../../lib/FetchSymbolPrices'
import NumberWithCommas from '../../lib/NumberWithCommas'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

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
      SymbolsList
        .slice((page - 1) * rowsPerPage, page * rowsPerPage)
        .map((name) => FetchSymbolPrices(name))
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
    <Grid sx={{ pt: 20 }}>
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
                  {NumberWithCommas(parseFloat(symbol.price[49]).toFixed(2))}
                </TableCell>
                <TableCell>
                  {NumberWithCommas(parseInt(symbol.price[49] * 500000))} Rial
                </TableCell>
                <TableCell>
                  <ResponsiveContainer width="100%" height="100%">
                    {console.log([{ name: symbol.name, data: symbol.price }])}
                    <AreaChart
                      width={200}
                      height={60}
                      data={[{ name: symbol.name, price: symbol.price }]}
                      margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer>
                  {/* <Chart
                    {...chartdata}
                    series={[{ name: symbol.name, data: symbol.price }]}
                  /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack spacing={2} alignItems={'center'} padding={2}>
          <Pagination
            count={Math.ceil(SymbolsList.length / rowsPerPage)}
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
