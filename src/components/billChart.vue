<template>
    <div>
        <p>*Note* If you have added or edited any bills, please refresh the page before opening the chart</p>
        <button class="btn btn-primary" @click="showChart = ! showChart">Show me the chart!</button>
        <vue-chart v-if="showChart" type="bar" :data="chartData" :options="options"></vue-chart>
    </div>
</template>
 
<script>
import VueChart from 'vue-chart-js'
 
export default {
name: 'billChart',
components: {
    VueChart,
},

props: [
    "billData",
    "billLabels",
],

data() {
    return ({
    showChart: false,
    chartData: {
        labels: this.billLabels,
        datasets: [
            {
                label: 'Amount',
                data: this.billData,
                backgroundColor: "#FF0000",
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    beginAtZero: true
                        }
                    }]
                }
            }
    })},
}
</script>