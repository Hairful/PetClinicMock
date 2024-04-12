<template>
    <div class="chatbot" :class="{ expanded: isExpanded }" @click="toggleChatbot">
        <div>
    <iframe :src="externalLink" width="100%" height="500px" frameborder="0"></iframe>
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
            externalLink: 'https://share.fastgpt.in/chat/share?shareId=yzk07q9v4sq8yzcihvyh7sil'
        };
    },
    methods: {
        toggleChatbot() {
            if (!this.isExpanded) {
                // Redirect to external link when expanding chatbot
                window.location.href = this.externalLink;
            }
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
    z-index: 9999; /* Set a high value to ensure it's in front */
    /* Add your small logo styles here */
}

.chatbot.expanded {
    width: 300px;
    height: 500px;
    border: whitesmoke 1px solid;
    background-color: white;
    z-index: 9999; /* Ensure the expanded chatbot is also in front */
}
</style>
