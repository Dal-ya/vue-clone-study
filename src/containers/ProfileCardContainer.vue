<template>
  <div>
    <div v-if="getIsLoading">Loading...</div>
    <div v-else-if="getError">{{ getError }}</div>
    <ProfileCard
      v-else-if="getUsers"
      v-for="user in getUsers"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProfileCard from '@/components/ProfileCard';

export default {
  components: { ProfileCard },
  methods: {
    ...mapActions('mockUsers', ['FETCH_USERS']),
  },
  computed: {
    ...mapGetters('mockUsers', ['getUsers', 'getIsLoading', 'getError']),
  },
  async created() {
    await this.FETCH_USERS();
  },
};
</script>

<style scoped></style>
