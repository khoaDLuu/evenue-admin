<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <!-- Icon -->
        <img src="../../images/icon-02.svg" width="32" height="32" alt="Icon 02" />
        <EditMenu align="right" class="relative inline-flex">
          <li>
            <a class="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 1</a>
          </li>
          <li>
            <a class="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 2</a>
          </li>
          <li>
            <a class="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" href="#0">Remove</a>
          </li>
        </EditMenu>
      </header>
      <h2 class="text-lg font-semibold text-gray-800 mb-2">Venues</h2>
      <div class="text-xs font-semibold text-gray-400 uppercase mb-1">Published</div>
      <div class="flex items-start">
        <div class="text-3xl font-bold text-gray-800 mr-2">{{ venues.length }}</div>
        <!-- <div class="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-14%</div> -->
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
      <!-- Change the height attribute to adjust the chart height -->
      <LineChart :data="chartData" width="389" height="128" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart01.vue'
import Icon from '../../images/icon-02.svg'
import EditMenu from '../../components/DropdownEditMenu.vue'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils'

import { Auth, API } from 'aws-amplify'
import { listVenues, listBookings } from "../../graphql/queries"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

const cslog = console.log

export default {
  name: 'DashboardCard01',
  components: {
    LineChart,
    EditMenu,
  },
  props: {
    venues: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      chartData: {},
    }
  },
  async created() {
    // const groupedByDate = [...this.venues].sort((u1, u2) => u1.createdAt > u2.createdAt ? 1 : -1).reduce(
    //   (entryMap, u) => entryMap.set(
    //     u.createdAt.split("T")[0],
    //     (entryMap.get(u.createdAt.split("T")[0]) || 0) + 1 // grouping logic
    //   ),
    //   new Map()
    // )
    // cslog(groupedByDate)
    // cslog([...groupedByDate.keys()].map(d => d.split("-").reverse().join("-")))

    this.chartData = {
      labels: ['12-01-2020', '01-01-2021', '02-01-2021','03-01-2021','04-01-2021','07-01-2021'],
      datasets: [
        {
          label: '',
          data: [1, 1, 1, 2, 1, 2],
          fill: true,
          backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
          borderColor: tailwindConfig().theme.colors.indigo[500],
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          clip: 20,
        },
      ],
    }
  }
}
</script>
