<template>
    <div>
        <input type="text" v-model="inputChild" placeholder="Escribe tu mensaje">
        <button @click="sendText">Enviar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputChild: ''
        }
    },
    methods: {
        sendText() {
            this.$emit('send-text', this.inputChild);
            this.inputChild = '';
        }
    }
}
</script>