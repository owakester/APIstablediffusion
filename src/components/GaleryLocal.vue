
<script setup>

    import {ref,computed} from 'vue'
    import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const myPicture = [
  { id: 1, url: "	https://i.ibb.co/4KJ9Z7h/actus.jpg	" },
  {
    id: 2,
    url: "	https://i.ibb.co/PrGWMmM/2022-10-06-23-44-38-1-549398058-scale10-00-k-euler-a-1.jpg	",
  },
  {
    id: 3,
    url: "	https://i.ibb.co/R7TXnMt/2022-10-06-09-22-51-1-1110086147-scale10-00-k-euler-a-1.jpg	",
  },
  {
    id: 4,
    url: "	https://i.ibb.co/Ks144ck/2022-10-05-11-39-18-1-116744930-scale11-00-k-euler-a-1.jpg	",
  },
 
  {
    id: 5,
    url: "	https://i.ibb.co/PjHbQJg/2022-10-03-20-20-46-03-341705471-scale11-00-ddim-03.jpg	",
  },
  {
    id: 6,
    url: "	https://i.ibb.co/j4VKL8P/2022-10-01-20-00-56-4-1545106731-scale11-00-ddim-4.jpg	",
  },
  {
    id: 7,
    url: "	https://i.ibb.co/KWBTWpb/2022-09-29-17-57-56-3-1983225205-scale11-50-k-euler-a-3.jpg	",
  },
  {
    id: 8,
    url: "	https://i.ibb.co/FH1HJxW/2022-10-04-19-13-24-10-258207826-scale11-00-k-euler-a-10.png	",
  },
  {
    id: 9,
    url: "	https://i.ibb.co/CWVph0h/2022-10-04-20-49-19-07-1673147236-scale11-00-k-euler-a-07.png	",
  },
  {
    id: 10,
    url: "	https://i.ibb.co/xChJ1hP/2022-10-04-20-38-25-01-1673147231-scale11-00-k-euler-a-01.png	",
  },
  {
    id: 11,
    url: "	https://i.ibb.co/g9DkvRv/2022-10-05-14-05-37-3-1259066137-scale10-00-k-euler-a-3.png	",
  },
  {
    id: 12,
    url: "	https://i.ibb.co/58230LN/2022-10-06-12-06-49-07-1424537678-scale10-00-k-euler-a-07.png	",
  },
  
  {
    id: 13,
    url: "	https://i.ibb.co/RyTQSKj/2022-10-06-23-44-38-1-549398058-scale10-00-k-euler-a-1.png	",
  },
  {
    id: 14,
    url: "	https://i.ibb.co/7kJm93V/2022-10-03-10-20-23-25-925221498-scale11-00-ddim-25.jpg	",
  },
  {
    id: 15,
    url: "	https://i.ibb.co/vd6Fz8G/2022-10-03-23-51-37-1-1956051161-scale11-00-ddim-1.jpg	",
  },
  {
    id: 16,
    url: "	https://i.ibb.co/5nWcBLS/2022-10-03-17-02-50-12-1974028611-scale11-00-ddim-12.jpg	",
  },
  {
    id: 17,
    url: "	https://i.ibb.co/xJ7XD5W/2022-10-02-11-25-16-3-1108187832-scale11-00-ddim-3.jpg	",
  },
  {
    id: 18,
    url: "	https://i.ibb.co/rdgb6rK/2022-10-01-22-36-24-28-1432787632-scale11-00-ddim-28.jpg	",
  },
  {
    id: 19,
    url: "	https://i.ibb.co/5cy1gKv/2022-09-29-18-17-05-2-1171524308-scale11-50-k-euler-a-2.jpg	",
  },
  {
    id: 20,
    url: "	https://i.ibb.co/HdMQhbG/2022-09-29-18-16-36-1-1171524307-scale11-50-k-euler-a-1.jpg	",
  },
  {
    id: 21,
    url: "	https://i.ibb.co/CwKMGVH/2022-09-29-17-58-24-4-1983225206-scale11-50-k-euler-a-4.jpg	",
  },
  {
    id: 22,
    url: "	https://i.ibb.co/T0hK1tC/2022-09-29-17-44-33-1-1741795296-scale11-50-k-euler-a-1.jpg	",
  },
  {
    id: 23,
    url: "	https://i.ibb.co/q9g7LNL/2022-09-29-14-49-16-3-1808551929-scale11-50-plms-3.jpg	",
  },
  {
    id: 24,
    url: "	https://i.ibb.co/2cCP5zd/2022-09-29-15-27-22-2-1561273879-scale11-50-plms-2.jpg	",
  },
  {
    id: 25,
    url: "	https://i.ibb.co/Sm2MBpc/2022-09-29-12-40-31-2-1489684059-scale11-50-k-dpm-2-a-2.jpg	",
  },
  {
    id: 26,
    url: "	https://i.ibb.co/R6Q3QnX/2022-09-29-12-32-27-1-1489684058-scale11-50-k-dpm-2-a-1.jpg	",
  },
];

const ini=ref(0)
const habilitar=ref("bg-gray-500")
const nImages=ref(4)
const fin=ref(ini.value + nImages.value)


const next=()=>{


if (fin.value>=myPicture.length){ 
 habilitar.value="bg-gray-500"
} else {
  
    ini.value=ini.value+nImages.value
fin.value=fin.value+nImages.value
}



}



const previous=()=>{
 
    if (ini.value==0) {

 } else {
    ini.value=ini.value-nImages.value
fin.value=fin.value-nImages.value

 }   
 


}

/* const blockNumber = computed(() => {
   if (fin.value>=myPicture.length){
    return habilitar.value=true
} else if(ini.value==0){
    return habilitar.value=false
}});
 */


</script>

<template>
    <div>
 <h3 class=" sm:text-sm md:text-3xl mx-36 text-gray-700 text-center my-8">Mi colección de fotos</h3>
 <p class=" sm:text-sm md:text-xl mx-36 text-gray-700 text-center my-8">Recopilacion de imagenes creadas por Stable Diffusion version GUI - NMKD</p>
  <div>
  <ul  class="grid  sm:grid-cols-2 md:grid-cols-4 gap-4 m-4 ">
      <li  v-for="picture in myPicture.slice(ini,fin)"><img class="rounded-md  shadow-md h-96 w-96" :src="picture.url" alt=""></li>
  </ul>

  <div class=" flex justify-center m-4">
    <button @click="previous" :disabled="blockNumber" class= "inline-flex items-center py-2 px-4 text-lg font-medium text-gray-500 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-indigo-700  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&lt;</button>
    <button @click="next"  :disabled="blockNumber" class="inline-flex items-center py-2 px-4 ml-3 text-lg font-medium text-gray-500 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-indigo-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">></button>
    <!-- Previous Button -->


  </div>


  
</div>
 
  
  
    </div>
  </template>
  