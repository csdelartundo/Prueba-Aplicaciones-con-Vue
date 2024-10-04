import { shallowMount } from '@vue/test-utils';
import { store } from '@/store/store';
import PrimerEjercicio from '@/components/PrimerEjercicio.vue';

describe('PrimerEjercicio.vue', () => {
  test('debería recibir el valor inicial del contador', () => {
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.find('.counter').text()).toBe('0');
  });

  test('incrementa el contador cuando se hace clic en el botón +1', async () => {
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store]
      }
    });
    await wrapper.find('button.primary').trigger('click');
    expect(wrapper.find('.counter').text()).toBe('1');
  });

  test('disminuye el contador cuando se hace clic en el botón -1', async () => {
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store]
      }
    });
    await wrapper.find('button.warning').trigger('click');
    expect(wrapper.find('.counter').text()).toBe('-1');
  });
});
