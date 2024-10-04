<template>
    <h2 class="titulo-principal">{{ tituloPorDefecto }}</h2>
    <p class="counter">{{ contador }} </p>
    <div>
        <button class="btn primary" @click="incrementar">+1</button>
        <button class="btn warning" @click="disminuir">-1</button>
        <button class="btn boton-enviar" @click="enviar">Enviar</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Contador',
    computed: {
        ...mapGetters(['contador']),
        tituloPorDefecto() {
            return this.titulo || 'Contador';
        }
    },
    methods: {
        ...mapActions(['incrementar', 'disminuir']),
    }
}
</script>
<style>
.btn {
    border-radius: 1rem;
    margin: 0 5px;
    width: 100px;
    padding: 5px;
    font-size: 1rem;
}

.primary {
    background-color: rgb(77, 77, 231);
    color: rgb(255, 255, 255);
}

.counter {
    font-size: 36px;
}

.warning {
    background-color: rgb(230, 53, 53);
    color: rgb(255, 255, 255);
}
</style>