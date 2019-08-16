<template>
  <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading"
  >指令方式</el-button>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false
    };
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    }    
  }
};
</script>