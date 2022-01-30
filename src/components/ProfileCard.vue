<template>
  <div class="card">
    <div class="avatar"></div>
    <div class="top"></div>
    <div class="mid">
      <div class="profile">
        <p class="name">
          {{ user.name }} <span class="age">{{ user.age }}</span>
        </p>
        <p class="address">{{ user.address }}</p>
      </div>
    </div>
    <div class="bottom">
      <div class="info">
        <div class="info-child followers">
          <p class="number">{{ _1000toK(user.followers) }}</p>
          <p class="text">Followers</p>
        </div>
        <div class="info-child likes">
          <p class="number">{{ _1000toK(user.likes) }}</p>
          <p class="text">Likes</p>
        </div>
        <div class="info-child photos">
          <p class="number">{{ _1000toK(user.photos) }}</p>
          <p class="text">Photos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nFormatter } from '@/utils/filters';

export default {
  props: {
    user: Object,
  },
  methods: {
    _1000toK(num) {
      return nFormatter(num, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/ProfileCard.scss';
</style>
