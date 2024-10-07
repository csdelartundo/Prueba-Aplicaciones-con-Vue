import { shallowMount } from "@vue/test-utils";
import ParentView from "@/components/ParentView.vue";
import ChildView from "@/components/ChildView.vue";

describe("ParentView.vue", () => {
    test("agrega texto recibido de ChildView a la lista", async () => {
    // Montamos el componente ParentView
    const wrapper = shallowMount(ParentView);

    // Encontramos el componente ChildView
    const childWrapper = wrapper.findComponent(ChildView);

    // Simulamos que el componente hijo emita el evento con un texto
    const testText = "Hola, este es un mensaje de prueba";
    await childWrapper.vm.$emit("send-text", testText);

    // Verificamos que el texto se haya agregado al arreglo en ParentView
    const listItem = wrapper.find('[data-test="text-item"]');
    expect(listItem.text()).toBe(testText);
    });

    test("envía el texto al hacer clic en el botón de ChildView", async () => {
    // Montamos el componente ChildView
    const wrapper = shallowMount(ChildView);

    // Establecemos el valor del input
    const input = wrapper.find("input");
    await input.setValue("Prueba de texto");

    // Simulamos un clic en el botón
    await wrapper.find("button").trigger("click");

    // Verificamos que el evento se haya emitido
    const emittedEvents = wrapper.emitted("send-text");
    expect(emittedEvents).not.toBeUndefined();

    // Verificamos que el primer argumento del evento sea 'Prueba de texto'
    expect(emittedEvents[0][0]).toBe("Prueba de texto");
    });
});
