import { shallowMount } from '@vue/test-utils';
import { store } from '@/store/store';
import PrimerEjercicio from '@/components/PrimerEjercicio.vue';

describe('PrimerEjercicio.vue', () => {
  // Bloque de pruebas para el componente PrimerEjercicio

  test('debería recibir el valor inicial del contador', () => {
    // Primera prueba: Verifica que el valor inicial del contador sea '0'
    
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store] // Inyecta el store de Vuex al componente
      }
    });
    
    // Verifica que el texto en el elemento con clase .counter sea '0'
    expect(wrapper.find('.counter').text()).toBe('0');
  });

  test('incrementa el contador cuando se hace clic en el botón +1', async () => {
    // Segunda prueba: Verifica que al hacer clic en el botón de incrementar, el contador aumente
    
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

  test('disminuye el contador cuando se hace clic en el botón -1', async () => {
    // Tercera prueba: Verifica que al hacer clic en el botón de disminuir, el contador baje
    
    const wrapper = shallowMount(PrimerEjercicio, {
      global: {
        plugins: [store] // Inyecta el store de Vuex al componente
      }
    });
    
    // Simula un clic en el botón con clase 'warning' (el botón de decremento)
    await wrapper.find('button.warning').trigger('click');
    
    // Verifica que el texto en el elemento con clase .counter sea '-1' después del clic
    expect(wrapper.find('.counter').text()).toBe('-1');
  });
});