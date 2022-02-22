<template>
  <div class="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
      <h2 class="font-semibold text-gray-800">Users</h2>
    </header>
    <div class="p-3">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Name</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Email</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Phone</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-center">Date Joined</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-gray-100">
            <tr
              v-for="user in users"
              :key="user.id"
            >
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                    <img class="rounded-full" :src="user.image" width="40" height="40" :alt="user.name" />
                  </div>
                  <div class="font-medium text-gray-800">{{user.name}}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                  <a class="text-blue-400" :href="`mailto:${ user.email }`" target="_blank">
                    {{ user.email }}
                  </a>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium text-green-500">{{user.phone}}</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{{user.updatedAt}}</div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Dummy from '../../images/user-36-05.svg'

export default {
  name: 'DashboardCard10',
  props: {
    users: {
      type: Array,
      default: [],
    }
  },
  setup() {
    const users = ref([
      {
        id: '0',
        image: Dummy,
        name: 'Alex Shatov',
        email: 'alexshatov@gmail.com',
        updatedAt: new Date().toLocaleString("en", {year: "numeric", month: "2-digit", day: "numeric"}),
        phone: '+12025550122',
      },
      {
        id: '1',
        image: Dummy,
        name: 'Philip Harbach',
        email: 'philip.h@gmail.com',
        updatedAt: new Date().toLocaleString("en", {year: "numeric", month: "2-digit", day: "numeric"}),
        phone: '+12025550155',
      },
      {
        id: '2',
        image: Dummy,
        name: 'Mirko Fisuk',
        email: 'mirkofisuk@gmail.com',
        updatedAt: new Date().toLocaleString("en", {year: "numeric", month: "2-digit", day: "numeric"}),
        phone: '+12025550123',
      },
      {
        id: '3',
        image: Dummy,
        name: 'Olga Semklo',
        email: 'olga.s@cool.design',
        updatedAt: new Date().toLocaleString("en", {year: "numeric", month: "2-digit", day: "numeric"}),
        phone: '+12025550177',
      },
      {
        id: '4',
        image: Dummy,
        name: 'Burak Long',
        email: 'longburak@gmail.com',
        updatedAt: new Date().toLocaleString("en", {year: "numeric", month: "2-digit", day: "numeric"}),
        phone: '+12025550142',
      },
    ])

    return {
      users,
    }
  }
}
</script>
