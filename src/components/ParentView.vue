<template>
    <div>
        <h1>Texto recibido de ChildView:</h1>
        <div>
            <ul>
                <li v-for="(item, index) in receivedText" :key="index" data-test="text-item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <ChildView @send-text="handleReceivedText" />
    </div>
</template>

<script>
import ChildView from "./ChildView.vue";

export default {
    name: "ParentView",
    components: {
        ChildView
    },
    data() {
        return {
            receivedText: []
        };
    },
    methods: {
        handleReceivedText(text) {
            this.receivedText.push(text);
        }
    }
}
</script>