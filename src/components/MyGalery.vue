<script setup>
import { ref, watch, computed, reactive } from "vue";
import BrowserImage from "./BrowserImage.vue";
import { useCounterStore } from "../stores/counter";
import LoadingStatus from "./LoadingStatus.vue";
import { RouterLink } from "vue-router";

const useCounter = useCounterStore();
const colecciones = ref([]);
const filtro = ref([]);
const animar = ref("");
const load = ref(false);
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
  load.value = true;
  setTimeout(() => {
    load.value = false;
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
    <h2 class="  sm:text-sm md:text-3xl md:mx-36 text-gray-700 text-center ">
     Disfruta de esta coleccion de imagenes creadas por Stable Diffusion y compartida a traves de la API de <strong class="text-indigo-500"><a href="http://">lexica.art</a></strong> 
    </h2>
    <label
      for="search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >Your Email</label
    >
    <div class="relative  md:bottom-96   flex flex-col items-center     ">
      <!-- <div
        class="flex relative  inset-y-16 right-96  items-center pr-80 pointer-events-none"
      >

      <svg  class="fill-gray-500 hover:fill-indigo-500 cursor-cell"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>      </div>
      <input
        v-model.lazy="username"
        type="search"
        id="search"
        class="  p-4 pl-14 w-10/12 mr-2 sm:text-sm md:text-3xl text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Buscas fotos realizadas por Stablediffusion"
        required
      />

 -->

      <div class="flex items-center">   
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                
                           <svg  aria-hidden="true" class="absolute w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
             
            </div>
            <div>
            <input  v-model.lazy="username" size="30"   type="text" id="simple-search"   class="  divide-y divide-slate-200 md:text-5xl  bg-gray-100 border border-gray-300 text-gray-500 sm:text-sm  rounded-3xl focus:ring-blue-500 focus:border-blue-500 block pl-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca imagenes creadas por Stable Diffusion" required="">
          </div>
          </div>



       <button   @click="fetchData" type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="sr-only">Search</span>
        </button> 
    </div>
    






      
      
    </div>

    <section class="overflow-hidden text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-18">
        <div v-if="load">
          <LoadingStatus></LoadingStatus>
        </div>
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="mb-8 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            <div
              v-for="(coleccion, index) in filtro.slice(0, 100)"
              :key="index"
              class="p-1 md:p-2"
            >
              <router-link :to="`/galeria/${coleccion.id}`">
              
                <img
                  v-on:mouseover="mouseover(index, coleccion)"
                  v-on:mouseleave="mouseleave(index, coleccion)"
                  @click="useCounter.getData(coleccion)"
                  alt="gallery"
                  :class="coleccion.animar"
                  :src="coleccion.src"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
