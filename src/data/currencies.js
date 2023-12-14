import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Pagination, Stack } from '@mui/material';
import Chart from 'react-apexcharts'
import Skeleton from '@mui/material/Skeleton';

export default function Orders() {

    const series = [
        {
            name: 'ROI',
            data: [1123, 123, 43, 5, 546, 657, 6, 87]
        },
    ]

    const chartdata = {
        type: 'line',
        height: 80,
        width: 200,
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false
                },
            },
            grid: {
                show: false,
                borderColor: '#dddddd',
                strokeDashArray: 0,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: 'dark',
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#5FBC69'],
            stroke: {
                lineCap: 'round',
            },
            markers: {
                size: 5,
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                name: 'income',
            },
        },
    }

    const [loading, setloading] = useState(true);
    const [page, setPage] = useState(0);
    const [symbolprice, setsymbolprice] = useState([])
    const rowperpage = 6

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleSymbolprice = (prop) => {
        const array = symbolprice
        array.push(prop)
        setsymbolprice(array)
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    // "symbol": "BTCUSDT",
    // "interval": "1M",
    // "startTime": "2021-11",
    // "endTime": "2023-11",
    // "limit": 500,
    const symbols = ['BTCUSDT', 'BNBUSDT', 'LTCUSDT', 'XRPUSDT', 'STMXUSDT']
    useEffect(() => {
        async function fetchCurrencyData(name) {
            const response = await fetch(`https://api.binance.us/api/v3/klines?interval=1M&symbol=${name}&limit=10`)
            const currencyData = await response.json()
            const array = []
            for (let index = 0; index < currencyData.length; index++) {
                array.push(currencyData[index][4])
            }
            handleSymbolprice({ name: name, price: array })
        }
        if (symbols) {
            let requests = symbols.map(name => fetchCurrencyData(name))
            Promise.all(requests)
                .then(
                    setloading(false),
                );
            console.log(loading)
        }
        console.log(symbolprice)
    }, [])

    if (loading) {
        return (
            <>
                <Skeleton sx={{ height: 50, mb: 3, borderRadius: 3 }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ height: 190, mb: 3, borderRadius: 3 }} animation="wave" variant="rectangular" />
            </>
        )
    }
    return (
        <React.Fragment>
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
                        {(symbolprice > 0
                            ? symbolprice.slice(page * rowperpage, page * rowperpage + rowperpage)
                            : symbolprice
                        ).map((symbol, index) => (
                            <TableRow key={index}>
                                <TableCell>{symbol.name}</TableCell>
                                <TableCell>{numberWithCommas(symbol.price[9])}</TableCell>
                                <TableCell>{numberWithCommas(symbol.price[9] * 50000)} Rial</TableCell>
                                <TableCell>
                                    <Chart
                                        {...chartdata}
                                        series={series}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Stack spacing={2} alignItems={'center'} padding={2}>
                    <Pagination count={symbols.length} variant="outlined" shape="rounded" page={page} onChange={handleChangePage} />
                </Stack>
            </Paper>
        </React.Fragment>
    );
}