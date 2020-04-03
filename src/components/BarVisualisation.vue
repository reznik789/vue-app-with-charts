<template>
  <div>
    <div class="container">
      <bar-chart :chartdata="chartData"></bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart";
export default {
  name: "BarVisualization",
  components: { BarChart },
  data: function() {
    return {
      chartData: {
        labels: ["Healt", "Strength", "Magic"],
        datasets: [
          {
            data: [15, 27, 40],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 200px;
  margin: 0 auto;
}
</style>
