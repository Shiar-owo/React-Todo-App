# React Todo App

Aplicacion de tareas sencilla construida con React y Vite. Tema oscuro, interfaz limpia y funcional.

## Tecnologias

- React 19
- Vite 8
- CSS Modules
- ESLint

## Funcionalidades

- Agregar tareas (botón o Enter)
- Editar tareas (íziz pencil)
- Eliminar tareas (ícono X)
- Marcar como completada (checkbox)
- Contador de tareas pendientes y terminadas
- Tema oscuro

## Instalación

```bash
yarn install
```

## Scripts

```bash
yarn dev      # Servidor de desarrollo
yarn build    # Build de producción
yarn lint     # Ejecutar ESLint
yarn preview  # Vista previa del build
```

## Estructura del proyecto

```
src/
  main.jsx                    # Punto de entrada
  App.jsx                     # Componente raíz
  components/
    todo-app.jsx              # Contenedor principal
    todo.jsx                  # Item de tarea
    todo-controllers.jsx      # Input + botón agregar
    hooks/
      use-todo.jsx            # Lógica de estado y CRUD
  styles/
    global.css                # Variables del tema oscuro, resets
    todo-app.module.css       # Estilos del contenedor y footer
    todo.module.css           # Estilos del item y iconos
    todo-controllers.module.css # Estilos del input y botón
```

## Arquitectura

### Jerarquía de componentes

```
<main.jsx>
  └── <App>
        └── <TodoApp>              ← useTodo() hook
              ├── <TodoControllers>
              ├── <Todo /> ×n
              └── footer (contadores)
```

### Estado (useTodo hook)

| Estado | Tipo | Descripción |
|--------|------|-------------|
| `task` | `string` | Valor actual del input |
| `todos` | `Array<{id, text, complete}>` | Lista de tareas |

### Funciones expuestas

| Función | Descripción |
|---------|-------------|
| `addTodo()` | Crea tarea desde el input |
| `toggleComplete(id)` | Alterna estado completado |
| `deleteTodo(id)` | Elimina tarea por id |
| `editTodo(id, newText)` | Actualiza texto de la tarea |

### Variables CSS

| Variable | Valor | Uso |
|----------|-------|-----|
| `--bg-primary` | `#0a0a0f` | Fondo de página |
| `--bg-secondary` | `#111118` | Fondo de tarjeta |
| `--bg-surface` | `#18181f` | Fondo de item |
| `--accent` | `#6366f1` | Color acento (índigo) |
| `--danger` | `#ef4444` | Rojo para eliminar |
| `--success` | `#22c55e` | Verde para completado |
