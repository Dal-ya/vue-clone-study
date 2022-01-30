<template>
  <main>
    <ProfileCardContainer />
  </main>
</template>

<script>
import ProfileCardContainer from '@/containers/ProfileCardContainer';

export default {
  components: { ProfileCardContainer },
};
</script>

<style lang="scss" scoped>
@import '../styles/ProfileCardPage.scss';
</style>
