<template>
  <div>
    <div class="container">
      Google
      <bar-chart :data="chartData" ></bar-chart>

    </div>
    <ul v-if="errors && errors.length">
      <li v-for="error in errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
  function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

  import axios from 'axios';
  var moment = require('moment');

  export default {
    data: () => ({
      chartData: [{name: 'Container 1', data: {"CPU": 3, "Memory": 4}},
        {name: 'Container 2', data: {"CPU": 5, "Memory": 3}}],
      errors: [],
    }),

  }
</script>
