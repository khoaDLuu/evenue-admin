<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Dashboard actions -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">

            <!-- Left: Avatars -->
            <!-- <DashboardAvatars /> -->
            <div></div>

            <!-- Right: Actions -->
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

              <!-- Filter button -->
              <!-- <FilterButton align="right" /> -->
              <!-- Datepicker built with flatpickr -->
              <Datepicker align="left" />
              <!-- Add view button -->
              <!-- <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span class="hidden xs:block ml-2">Add view</span>
              </button> -->
            </div>

          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">

            <!-- Line chart (Users) -->
            <DashboardCard01 :users="allUsers" />
            <!-- Line chart (Venues) -->
            <DashboardCard02 :venues="allVenues" />
            <!-- Line chart (Bookings) -->
            <DashboardCard03 :bookings="allBookings" />
            <!-- Card (Recent Events) -->
            <!-- <DashboardCard12 /> -->
            <!-- Card (Recent Ratings) -->
            <!-- <DashboardCard13 /> -->
            <!-- Line chart (Booking Revenue) -->
            <!-- <DashboardCard08 /> -->
            <!-- Card (Bookings By Status)   -->
            <!-- <DashboardCard11 /> -->
            <!-- Doughnut chart (Top Venue Areas) -->
            <!-- <DashboardCard06 /> -->

          </div>

        </div>
      </main>
    </div>

  </div>
</template>

<script>
// import { ref, onMounted, reactive } from 'vue'
import Sidebar from '../partials/Sidebar.vue'
import Header from '../partials/Header.vue'
import DashboardAvatars from '../partials/dashboard/DashboardAvatars.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Datepicker from '../components/Datepicker.vue'
import DashboardCard01 from '../partials/dashboard/DashboardCard01.vue'
import DashboardCard02 from '../partials/dashboard/DashboardCard02.vue'
import DashboardCard03 from '../partials/dashboard/DashboardCard03.vue'
import DashboardCard04 from '../partials/dashboard/DashboardCard04.vue'
import DashboardCard05 from '../partials/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../partials/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../partials/dashboard/DashboardCard07.vue'
import DashboardCard08 from '../partials/dashboard/DashboardCard08.vue'
import DashboardCard09 from '../partials/dashboard/DashboardCard09.vue'
import DashboardCard10 from '../partials/dashboard/DashboardCard10.vue'
import DashboardCard11 from '../partials/dashboard/DashboardCard11.vue'
import DashboardCard12 from '../partials/dashboard/DashboardCard12.vue'
import DashboardCard13 from '../partials/dashboard/DashboardCard13.vue'
import { Auth, API } from 'aws-amplify'
import { listVenues, listBookings } from "../graphql/queries"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

const cslog = console.log

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,
    DashboardAvatars,
    FilterButton,
    Datepicker,
    DashboardCard01,
    DashboardCard02,
    DashboardCard03,
    DashboardCard04,
    DashboardCard05,
    DashboardCard06,
    DashboardCard07,
    DashboardCard08,
    DashboardCard09,
    DashboardCard10,
    DashboardCard11,
    DashboardCard12,
    DashboardCard13,
  },
  data() {
    return {
      username: "dangkhoa240899+admin1@gmail.com",
      password: "khoa12345678",
      email: "dangkhoa240899+admin1@gmail.com",
      phone_number: "",
      allUsers: [],
      allVenues: [],
      allBookings: [],
      sidebarOpen: false,
    }
  },
  async created() {
    await Promise.all([
      this.pullUsers(),
      this.pullData(listVenues, "listVenues"),
      this.pullData(listBookings, "listBookings"),
    ])
  },
  methods: {
    async pullUsers() {
      const apiName = 'AdminQueries'
      const path = '/listUsers'
      const myInit = {
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }
      }
      try {
        this.allUsers = (await API.get(apiName, path, myInit)).Users
        cslog(this.allUsers)
      }
      catch (e) {
        cslog(e)
      }
    },
    async pullData(query, queryName) {
      try {
        const res = await API.graphql({
          query: query,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        })
        const allData = res.data[queryName].items
        if (queryName === "listVenues") {
          this.allVenues = allData.filter(v => v.published)
        }
        else {
          this.allBookings = allData
        }
        cslog(allData)
      }
      catch (e) {
        cslog(e)
      }
    },
  },
}
</script>
