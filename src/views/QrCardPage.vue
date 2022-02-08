<template>
  <main>
    <QrCodeCard />
  </main>
</template>

<script>
import QrCodeCard from '@/components/QrCodeCard';

export default {
  components: { QrCodeCard },
};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: #2c3e50;
  padding-top: 40px;
  display: flex;
  justify-content: center;
}
</style>
