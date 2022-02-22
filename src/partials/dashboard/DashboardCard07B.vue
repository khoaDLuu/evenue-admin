<template>
  <div class="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
      <h2 class="font-semibold text-gray-800">Booking List</h2>
    </header>
    <div class="p-3">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
            <tr>
              <th class="p-2">
                <div class="font-semibold text-left">User</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Venue</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Time</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Total Charge</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Date Booked</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Status</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm font-medium divide-y divide-gray-100">
            <!-- Row -->
            <tr v-for="booking in bookings" :key="booking.id">
              <td class="p-2">
                <div class="">
                  <a class="text-blue-400" :href="`mailto:${ booking.user }`" target="_blank">
                  {{ booking.user }}
                  </a>
                </div>
              </td>
              <td class="p-2">
                <div class="">{{ booking.venue || "ABC" }}</div>
              </td>
              <td class="p-2">
                <div class="text-center">
                  {{ new Date(booking.checkIn).toLocaleString() }} - {{ new Date(booking.checkOut).toLocaleString() }}
                </div>
              </td>
              <td class="p-2">
                <div class="">${{ booking.totalCharge }}</div>
              </td>
              <td class="p-2">
                <div class="text-center">
                  {{ new Date(booking.createdAt).toLocaleString("en", {year: "numeric", month: "2-digit", day: "numeric"}) }}
                </div>
              </td>
              <td class="p-2">
                <div class="text-center text-light-blue-500"><a _target="blank" :href="`https://evenuefs.tk/venues/${booking.id}`">View</a></div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Paginator -->
        <div class="bg-white px-2 py-3 flex items-center justify-between border-t border-gray-200 sm:px-3">
        <div class="flex-1 flex justify-between sm:hidden">
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
          <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">{{ bookings.length > 10 ? 10 : bookings.length }}</span>
              of
              <span class="font-medium">{{ bookings.length }}</span>
              results
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Previous</span>
                <!-- Heroicon name: solid/chevron-left -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
              <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
              <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
              <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Next</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard07B',
  props: {
    bookings: {
      type: Array,
      default: [],
    }
  }
}
</script>
