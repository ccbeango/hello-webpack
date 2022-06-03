// import axios from 'axios'

axios.get('http://httpbin.org/get').then(res => {
  console.log('axios res', res)
})