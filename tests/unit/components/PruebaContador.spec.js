import { shallowMount } from '@vue/test-utils';
import { store } from '@/store/store';
import PrimerEjercicio from '@/components/PrimerEjercicio.vue';

describe('PrimerEjercicio.vue', () => {
  // Bloque de pruebas para el componente PrimerEjercicio

  test('debería recibir el valor inicial del contador', () => {
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store] // Inyecta el store de Vuex al componente
      }
    });

    // Verifica que el texto en el elemento con clase .counter sea '0'
    expect(wrapper.find('.counter').text()).toBe('0');
  });

  test('incrementa el contador cuando se hace clic en el botón +1', async () => {
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store] // Inyecta el store de Vuex al componente
      }
    });

    // Simula un clic en el botón con clase 'primary' (el botón de incremento)
    await wrapper.find('button.primary').trigger('click');

    // Verifica que el texto en el elemento con clase .counter sea '1' después del clic
    expect(wrapper.find('.counter').text()).toBe('1');
  });

  test('no disminuye el contador por debajo de 0', async () => {
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store] // Inyecta el store de Vuex al componente
      }
    });

    // Intentar disminuir el contador cuando está en 0
    await wrapper.find('button.warning').trigger('click');

    // Verifica que el texto en el elemento con clase .counter siga siendo '0'
    expect(wrapper.find('.counter').text()).toBe('0');

    // Aumentar el contador
    await wrapper.find('button.primary').trigger('click');

    // Verificar que el contador sea 1 después de incrementar
    expect(wrapper.find('.counter').text()).toBe('1');

    // Disminuir el contador
    await wrapper.find('button.warning').trigger('click');

    // Verifica que el texto en el elemento con clase .counter sea '0' después de decrementar
    expect(wrapper.find('.counter').text()).toBe('0');
  });
});
