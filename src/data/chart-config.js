const chartdata = {
    type: 'line',
    height: 100,
    width: 250,
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
            xaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: 0,
            },
        },
        fill: {
            opacity: 0.5,
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
            show:false,
            size: 1,
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
            name: 'chart',
        },
    },
}
export default chartdata
