<template>
  <div>
    <p>
      Contador: <span>{{ count }}</span>
    </p>
    <button class="incrementar" @click="incrementar">Incrementar</button>
    &nbsp;
    <button class="decrementar" @click="decrementar">Decrementar</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    incrementar() {
      this.$store.commit('incrementar');
    },
    decrementar() {
      this.$store.commit('decrementar');
    },
  },
};
</script>
