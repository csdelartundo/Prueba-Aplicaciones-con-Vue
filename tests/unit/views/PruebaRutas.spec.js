import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

describe('Vistas HomeView y AboutView', () => {
    // Grupo de pruebas para las vistas HomeView y AboutView

    test('Probando existencia de vista HomeView', async () => {
        // Prueba para verificar la existencia de la vista 'HomeView'

        const router = createRouter({
            history: createWebHistory(), // Crea un historial web usando Vue Router
            routes: [
                {
                    path: '/', // Ruta para la vista Home
                    name: 'home', // Nombre de la ruta
                    component: HomeView // Componente HomeView
                }
            ]
        })
        router.push('/') // Navega a la ruta '/'
        await router.isReady() // Espera que el router esté listo
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router] // Agrega el router como plugin global
            }
        })
        // Verifica que el componente HomeView exista en el DOM
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })

    test('Probando existencia de vista AboutView', async () => {
        // Prueba para verificar la existencia de la vista 'AboutView'
    
        const router = createRouter({
            history: createWebHistory(), // Crea un historial web usando Vue Router
            routes: [
                {
                    path: '/about', // Ruta para la vista About
                    name: 'about', // Nombre de la ruta
                    component: AboutView // Componente AboutView
                }
            ]
        })
        
        // Navega a la ruta '/about'
        router.push('/about') 
        await router.isReady() // Espera que el router esté listo
    
        // Monta un componente de vista que contenga el router
        const wrapper = mount({
            template: '<router-view></router-view>', // Usar un router-view para renderizar la vista
        }, {
            global: {
                plugins: [router] // Agrega el router como plugin global
            }
        })
    
        // Verifica que el componente AboutView exista en el DOM
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })    
})
