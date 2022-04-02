<template>
  <div class="wrapper">
    <div class="container">
      <div
        v-for="(panel, idx) in panels"
        :key="idx"
        :class="`panel card-${panel.className} ${
          panel.isActive ? 'active' : ''
        }`"
        @click="active(idx)"
      >
        <h3>{{ panel.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExapandingCard',
  data() {
    return {
      panels: [
        { title: 'Exapanding Card', className: 'one', isActive: true },
        { title: 'Hello World', className: 'two', isActive: false },
        { title: 'Sunny Beach', className: 'three', isActive: false },
        { title: 'City on Winter', className: 'four', isActive: false },
        { title: 'Mountains Clouds', className: 'five', isActive: false },
      ],
    };
  },
  methods: {
    active(idx) {
      this.panels.forEach(panel => {
        panel.isActive = false;
      });

      this.panels[idx].isActive = true;
    },
  },
};
</script>

<style scoped>
@import url('../assets/css/expending_card.css');
</style>
