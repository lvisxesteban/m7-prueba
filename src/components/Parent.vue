<template>
  <div>
    <h1>Componente Padre</h1>
    <p>Mensaje recibido desde el hijo: {{ messageFromChild }}</p>
    <Child @childMessage="updateMessage" />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      messageFromChild: '',
    };
  },
  methods: {
    updateMessage(message) {
      this.messageFromChild = message;
    },
  },
};
</script>
