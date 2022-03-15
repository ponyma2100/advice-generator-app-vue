import { ref } from 'vue'

const getAdvice = () => {
  const adviceslip = ref([])

  const loadAdvice = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      const data = await res.json()

      adviceslip.value = data.slip


    } catch (error) {
      console.log(error)
    }

  }

  return { loadAdvice, adviceslip }
}


export default getAdvice