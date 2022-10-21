<template>
  <div>
    我要找活{{name}}
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $api }) {
    var result = await $api.cardDetail({id:16})
    return {
      name:result.jobUserCardPersonalBo.cardName
    }
  },
  mounted() {
  },
  components: {}
}
</script>
