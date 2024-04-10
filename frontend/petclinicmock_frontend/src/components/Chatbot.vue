<!-- Chatbot.vue -->
<template>
    <div class="chatbot" :class="{ expanded: isExpanded }" @click="toggleChatbot">
        aaaaaa<!-- Your chatbot content goes here -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
        };
    },
    methods: {
        toggleChatbot() {
            this.isExpanded = !this.isExpanded;
        },
    },
};
</script>

<style scoped>
.chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
    /* Add your small logo styles here */
}

.chatbot.expanded {
    width: 300px;
    height: 500px;
    border: whitesmoke 1px solid;
    background-color: white;
}
</style>