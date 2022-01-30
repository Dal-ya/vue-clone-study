import { createStore } from 'vuex';
import mockUsers from '@/store/mockUsers';

export default createStore({
  modules: {
    mockUsers,
  },
});
