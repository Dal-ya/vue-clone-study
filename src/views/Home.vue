<template>
  <div class="home">
    <h1>Vue.js Clone Study🚀</h1>
    <div class="list">
      <ul>
        <li>
          <router-link to="/profile-card">Profile Card</router-link>
        </li>
        <li>
          <router-link to="/qrcode-card">QrCode Card</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.list {
  display: flex;
  justify-content: center;
}
</style>
