<template>
    <div class="chatbot" :class="{ expanded: isExpanded }" @click="toggleChatbot">
        <div>
            <div v-if="isExpanded">
                <body>
                   <!-- 使用style属性直接在HTML中实现 -->
                   <button style="float: right;"> X </button>
                </body>
            </div>
            <iframe v-if="isExpanded" :src="externalLink" width="100%" height="500px" frameborder="0"></iframe>
            <div v-else>
                <img src="../../public/img/chatbot.jpg" width="81.6111850866px" height="50px" alt="Chatbot" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
            externalLink: 'https://share.fastgpt.in/chat/share?shareId=pjjdzokpuqrs88dnl8e04g2g'
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
    z-index: 9999;
    /* Set a high value to ensure it's in front */
    /* Add your small logo styles here */
}

.chatbot.expanded {
    width: 300px;
    height: 500px;
    border: whitesmoke 1px solid;
    background-color: white;
    z-index: 9999;
    /* Ensure the expanded chatbot is also in front */
}
</style>
