
<script setup>
import {useRoute} from 'vue-router'
import { useCounterStore } from "../stores/counter";

const useCounter = useCounterStore();

const route=useRoute()
/* const getData=async()=>{
    await fetch(`https://lexica.art/api/v1/search?q=${route.params.id}`)
.then (response => response.json())
.then (data => console.log(data))
}
getData() */
console.log(useCounter.info)
</script>



<template>
  
    <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-indigo-600 dark:text-white">ID : {{$route.params.id}}</h5>

<div class="flex justify-center ...">


    <a  href="#" class=" mb-8 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
     
     <img :src="useCounter.info.src" alt="">
     
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-600 dark:text-white">Category: {{useCounter.info.model}}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400"><strong class="text-indigo-500">Prompt:</strong> {{useCounter.info.prompt}}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400"><strong class="text-indigo-500">Tamaño:</strong> {{useCounter.info.height}}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400"><strong class="text-indigo-500">Seed:</strong> {{useCounter.info.seed}}</p>
    </a>
  
</div>

<button class="bg-indigo-500">Volver</button>
</template>
