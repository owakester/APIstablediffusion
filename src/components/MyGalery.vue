<script setup>
import { ref, watch, computed, reactive } from "vue";
import BrowserImage from "./BrowserImage.vue";
import { useCounterStore } from "../stores/counter";
import LoadingStatus from "./LoadingStatus.vue";

const useCounter = useCounterStore();
const colecciones = ref([]);
const filtro = ref([]);
const animar = ref("");
const load=ref(false);
const animate = ref(
  `block object-cover object-center saturate-150 ... w-full h-full rounded-lg border `
);

/* console.log(colecciones.value)
console.log(useCounter.inputFind)

  const url = ref(` https://lexica.art/api/v1/search?q=${useCounter.inputFind}`)
  console.log(url) */

// fetch immediately

// ...then watch for url change

const username = ref(useCounter.inputFind);

watch(username, (newUsername) => {
  filtro.value = [];
  load.value=true
  setTimeout(() => {
    load.value=false
    const url = ref(` https://lexica.art/api/v1/search?q=${username.value}`);
    console.log(url.value);
    fetch(url.value)
      .then((response) => response.json())
      .then((data) => resizeImage(data.images));

    const resizeImage = (data) => {
      data.forEach((element) => {
        if (element.height == 512 && element.width == 512) {
          filtro.value.push(element);
        }
      });
    };
  }, 3000);
});

/* fetch(url)
  .then((response) => response.json())
  .then((data) => resizeImage(data.images));
  inputFind.value=""
const resizeImage = (data) => {
  data.forEach((element) => {
    if (element.height == 512 && element.width == 512) {
      filtro.value.push(element);
    }
  });
}; */

const mouseover = (dato, coleccion) => {
  filtro.value[
    dato
  ].animar = `animate__animated animate__pulse  ${animate.value}`;
};

const mouseleave = (dato) => {
  filtro.value[dato].animar = animate.value;
};
</script>

<template>


  <div>


    <label
      for="search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >Your Email</label
    >
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        v-model.lazy="username"
        type="search"
        id="search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
      />
      <button
        @click="fetchData"
        type="submit"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>

      
    </div>

    <section class="overflow-hidden text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-18">
        
        <div   v-if="load">
          <LoadingStatus ></LoadingStatus>
        </div>
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="grid md:grid-cols-4  sm:grid-cols-2 gap-4">
            <div
              v-for="(coleccion, index) in filtro.slice(0,12)"
              :key="index"
              class="p-1 md:p-2"
            >
              <img
                v-on:mouseover="mouseover(index, coleccion)"
                v-on:mouseleave="mouseleave(index, coleccion)"
                alt="gallery"
                :class="coleccion.animar"
                :src="coleccion.src"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
