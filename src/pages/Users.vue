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

            <!-- Left -->
            <div></div>

            <!-- Right: Actions -->
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

              <!-- Filter button -->
              <FilterButton align="right" />
              <!-- Datepicker built with flatpickr -->
              <Datepicker align="left" @date-range-picked="updateList" />
              <!-- Add view button -->
              <!-- <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span class="hidden xs:block ml-2">Add view</span>
              </button> -->
            </div>

          </div>

          <!-- User List -->
          <DashboardCard10 :users="usersShowned" />

        </div>
      </main>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../partials/Sidebar.vue'
import Header from '../partials/Header.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Datepicker from '../components/Datepicker.vue'
import DashboardCard10 from '../partials/dashboard/DashboardCard10.vue'
import { Auth, API } from 'aws-amplify'

const cslog = console.log

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,
    FilterButton,
    Datepicker,
    DashboardCard10,
  },
  data() {
    return {
      users: [],
      usersShowned: [],
    }
  },
  async created() {
    await this.pullUsers()
  },
  methods: {
    updateList([startDate, endDate]) {
      this.usersShowned = this.users.filter(v =>
        new Date(v.UserCreateDate).getTime() >= startDate.getTime()
        && new Date(v.UserCreateDate).getTime() <= endDate.getTime()
      )
    },
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
        this.users = (await API.get(apiName, path, myInit)).Users
        this.usersShowned = this.users
        cslog(this.users)
      }
      catch (e) {
        cslog(e)
      }
    },
  },
  setup() {
    const sidebarOpen = ref(false)
    return {
      sidebarOpen,
    }
  },
}
</script>
