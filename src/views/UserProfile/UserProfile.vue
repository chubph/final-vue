<script>
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";

export default defineComponent({
  name: "LogIn",

  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
});
</script>

<template>
  <div class='container hero is-fullheight'></div>
</template>



<style scoped>

</style>