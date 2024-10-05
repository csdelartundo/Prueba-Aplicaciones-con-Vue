<template>
    <div>
        <h1>Texto recibido de ChildView: </h1>
        <p>{{ recivedText }}</p>
    <ChildView @send-text="recivedText"/> 
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
            recivedText: ""
        }
    },
    methods: {
        recivedText(text) {
            this.recivedText = text;
        }
    }
}
</script>