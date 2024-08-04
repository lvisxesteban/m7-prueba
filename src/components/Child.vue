<template>
  <div>
    <h2>Componente Hijo</h2>
    <input v-model="message" />
    <button @click="sendMessage">Enviar mensaje</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    sendMessage() {
      this.$emit('childMessage', this.message);
      this.message = '';
    },
  },
};
</script>
