# Prueba de Desarrollo de Aplicaciones con Vue.js

## Descripción

En esta prueba, se aplicarán los conceptos y herramientas aprendidas hasta ahora para desarrollar un conjunto de ejercicios. Los objetivos incluyen la integración de Vue Router, Vuex, y la implementación de pruebas unitarias con Jest. Cada ejercicio deberá ser resuelto en un componente específico, y el código debe estar documentado con comentarios que expliquen la lógica implementada.

## Requerimientos

### Ejercicio 1 - Manejo del estado con Vuex

- **Objetivo**: Configurar Vuex para gestionar el estado de un contador.
- **Funcionalidades**:
  - El contador debe iniciar en 0.
  - Implementar funciones para incrementar y decrementar el valor del contador.
  
- **Pruebas unitarias**:
  - Verificar que se reciba un valor inicial en el contador.
  - Probar la funcionalidad de incremento y decremento del contador.

### Ejercicio 2 - Navegación con Vue Router

- **Objetivo**: Validar la existencia de componentes que controlen las vistas generadas por Vue Router.
  
- **Pruebas unitarias**:
  - Asegurarse de que los componentes para cada vista están presentes y se cargan correctamente.

### Ejercicio 3 - Comunicación entre componentes

- **Objetivo**: Crear dos componentes: `ParentView.vue` y `ChildView.vue`.
  - En `ChildView.vue`, habrá un campo de texto y un botón.
  - Al hacer clic en el botón, el texto ingresado se enviará al componente `ParentView.vue`, que mostrará el resultado en pantalla.
  
- **Pruebas unitarias**:
  - Validar que al hacer clic en el botón del componente `ChildView`, se envíe el texto al componente `ParentView`.

### Ejercicio 4 - Despliegue en Firebase Hosting

- **Objetivo**: Generar el build de producción de la aplicación y desplegarla utilizando Firebase Hosting.

## Instala las dependencias

```sh
npm install
```

### Ejecuta la aplicación en modo desarrollo:

```sh
npm run dev
```
### Para ejecutar las pruebas unitarias:

```sh
npm run test:unit
```

## Comandos Firebase Hosting
```sh
npm install -g firebase-tools
firebase login
firebase init hosting  # (Inicializa Hosting)
npm run build   # (Genera la carpeta de build)
firebase deploy  # (Despliega la aplicación)
```
