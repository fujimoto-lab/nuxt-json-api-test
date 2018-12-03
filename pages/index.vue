<template>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt-json-api-test
      </h1>
      <ul>
        <li>{{ symbol }}</li>
        <li>{{ price }}</li>
        <li>{{ change }}</li>
        <li>{{ change_percent }}</li>
        <li>{{ date }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      symbol: "0",
      price: 0,
      change: 0,
      change_percent: 0,
      date: new Date(),
    }
  },
  async asyncData() {
    const { data } = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=3658.T&apikey=NNFF3RB5O9TSTZB0`)
    return {
      symbol: data['Global Quote']['01. symbol'],
      price: data['Global Quote']['05. price'],
      change: data['Global Quote']['09. change'],
      change_percent: data['Global Quote']['10. change percent'],
      date: new Date(),
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
