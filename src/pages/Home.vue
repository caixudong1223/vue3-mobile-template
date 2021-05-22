<template>
  <div>home123121</div>
  <button @click="toHello">toHello</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    // const route = useRoute()
    const router = useRouter();

    const toHello = () => {
      router.push({
        name: "HelloWorld",
      });
    };

    return {
      toHello,
    };
  },
};
</script>