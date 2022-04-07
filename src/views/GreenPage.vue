<template>
  <div></div>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue';

const count = ref(0);
const obj = reactive({ msg: 'Hello' });

watchEffect(() => {
  console.log(count.value);
  console.log(obj.msg);
  console.log('-----------');
});

const add = () => {
  count.value += 1;
};

const changeMessage = () => {
  obj.msg = 'Hello World!!';
};

changeMessage();

add(); // 1
add(); // 2
add(); // 3
</script>

<style scoped></style>
