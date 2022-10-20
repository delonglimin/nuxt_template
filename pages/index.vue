<template>
  <div>
    <NuxtLogo></NuxtLogo>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue';
export default {
  name: "IndexPage",
  async asyncData(context) {
  },
  components: { NuxtLogo }
}
</script>
