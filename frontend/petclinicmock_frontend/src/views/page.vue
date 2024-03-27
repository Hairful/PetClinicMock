<template>
  <div class="page-container">
    <span class="page-text">
      <span>OOPS...</span>
      <br />
      <span>Something</span>
      <br />
      <span>Went</span>
      <br />
      <span>Wrong</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {},
  metaInfo: {
    title: 'Page - Roasted Rusty Swallow',
    meta: [
      {
        property: 'og:title',
        content: 'Page - Roasted Rusty Swallow',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page-text {
  color: var(--dl-color-danger-300);
  font-size: 200px;
  align-self: center;
  font-style: normal;
  font-weight: 600;
}
</style>
