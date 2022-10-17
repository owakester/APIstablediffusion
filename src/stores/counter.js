import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const filtro=ref([])
  const inputFind = ref("");
  const doubleCount = computed(() => count.value * 2)
  const info=ref({})
  
  
  const getData=(dato)=>{

info.value=dato


  }
  function increment() {
    count.value++
  }

/* 
  const getFiltro=async()=>{
inputFind.value="house"
  const dat = await fetch(` https://lexica.art/api/v1/search?q=${inputFind.value}`)
  .then((response) => response.json())
  .then((data) => resizeImage((data.images)));
  }
  getFiltro()
const resizeImage = (data) => {
  data.forEach((element) => {
    if (element.height == 512 && element.width == 512) {
      filtro.value.push(element);
    }
  });
};
 */





  

  return { count, doubleCount, increment, filtro,inputFind,getData,info}
})
