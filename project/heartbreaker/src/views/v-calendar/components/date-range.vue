<!--
 * @Author: Rikka
 * @Date: 2022-12-01 23:59:05
 * @LastEditTime: 2022-12-23 22:24:40
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\date-range.vue
-->
<template>
  <div>
    <h2 class="text-2xl text-center my-4">Popovers w/ Custom Slots</h2>
  </div>
  <div class="flex flex-row justify-center">
    <div class="w-full max-w-lg">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8" @submit.prevent>
        <div class="mb-4">
          <span class="block text-gray-600 text-sm text-left font-bold mb-2">Select Range</span>
          <date-picker v-model="range" mode="dateTime" :masks="masks" is-range>
            <template #default="{ inputValue, inputEvents, isDragging }">
              <div class="flex flex-col sm:flex-row justify-start items-center">
                <div class="relative flex-grow">
                  <svg
                    class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                  />
                </div>
                <span class="flex-shrink-0 m-2">
                  <svg class="w-4 h-4 stroke-current text-gray-600" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div class="relative flex-grow">
                  <svg
                    class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  />
                </div>
              </div>
            </template>
          </date-picker>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]DateRange"
};
</script>
<script lang="ts" setup>
import { DatePicker } from "v-calendar";

const range = {
  start: new Date(2020, 0, 6),
  end: new Date(2020, 0, 23)
};
const masks = {
  input: "YYYY-MM-DD h:mm A"
};
defineExpose({
  name: "[heartbreaker]DateRange"
});
</script>
<style lang="less" scoped></style>
