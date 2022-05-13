<template>
  <h1 v-if="msg" class="message" @click="log">
    {{ msg }}
  </h1>
  <Hello />
  <div></div>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue~!!!",
    };
  },
  methods: {
    log() {
      return;
    },
  },
};
</script>
