import { mount, shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import Contador from '@/components/Contador.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Child from '@/components/Child.vue';
import { createRouter, createWebHistory } from 'vue-router';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('Contador.vue', () => {
  const store = createStore({
    state() {
      return {
        count: 0,
      };
    },
    mutations: {
      incrementar(state) {
        state.count++;
      },
      decrementar(state) {
        state.count--;
      },
    },
  });

  const wrapper = shallowMount(Contador, {
    global: {
      plugins: [store],
    },
  });

  it('Verificar que se reciba un valor inicial en el contador', async () => {
    expect(await wrapper.find('span').text()).toBe('0');
  });

  it('Probar la funcionalidad de incremento', async () => {
    await wrapper.find('.incrementar').trigger('click');
    const valor = await wrapper.find('span').text();
    expect(valor).toBe('1');
  });
});

describe('HomeView', () => {
  it('Probando la existencia de HomeView', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'HomeView',
          component: HomeView,
        },
      ],
    });
    router.push('/');
    await router.isReady();
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});

describe('AboutView', () => {
  it('Probando la existencia de AboutView', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about',
          name: 'AboutView',
          component: AboutView,
        },
      ],
    });
    router.push('/about');
    await router.isReady();
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

describe('Parent.vue', () => {
  it('Validar comunicación desde hijo a padre', async () => {
    const wrapper = shallowMount(Child);
    const input = wrapper.find('input');
    await input.setValue('Hola Mundo');
    expect(input.element.value).toBe('Hola Mundo');
  });
});
