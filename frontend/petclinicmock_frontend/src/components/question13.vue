<template>
  <div class="question13-container">
    <span class="question13-text heading3">{{ question }}</span>
    <span class="bodySmall">{{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: 'Question13',
  props: {
    question: {
      type: String,
      default: 'What types of cars do you sell?',
    },
    answer: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
    },
  },
}
</script>

<style scoped>
.question13-container {
  gap: var(--dl-space-space-unit);
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.question13-text {
  font-weight: 700;
}
</style>
