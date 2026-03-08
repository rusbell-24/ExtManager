# ExtManager

Aplicación web moderna para gestionar y administrar extensiones con soporte para tema oscuro/claro.

## Descripción

**ExtManager** es una aplicación de gestión de extensiones desarrollada con React y TypeScript. Permite a los usuarios:

- ✅ Ver una lista completa de extensiones disponibles
- ✅ Activar y desactivar extensiones con un toggle
- ✅ Eliminar extensiones del listado
- ✅ Filtrar por estado (Todas, Activas, Inactivas)
- ✅ Cambiar entre tema claro y oscuro

## Características Principales

- **Interfaz responsiva**: Diseño adaptable para mobile, tablet y desktop
- **Gestión de estado centralizada**: Context API para estado global
- **Dark Mode persistente**: Tema oscuro/claro con localStorage
- **Componentes reutilizables**: Architecture modular y escalable
- **TypeScript**: Tipado estático para mayor seguridad
- **Optimización de rendimiento**: useCallback y useMemo implementados
- **Accesibilidad**: Atributos ARIA y semántica HTML

## Tecnologías

| Tecnología       | Propósito                   |
| ---------------- | --------------------------- |
| **React 18**     | Framework UI                |
| **TypeScript**   | Tipado estático             |
| **Vite**         | Build tool y dev server     |
| **Tailwind CSS** | Estilos y diseño responsivo |
| **Context API**  | Gestión de estado global    |
| **rsuite**       | Componentes de UI (Toggle)  |

## Patrones y Principios

### Patrones Implementados

- **Context Pattern**: Gestión centralizada de estado (`ExtensionsContext`)
- **Container/Presentational**: Componentes para lógica y presentación
- **Custom Hooks**: `useExtensions` para acceso al contexto

### Principios SOLID

- **Single Responsibility**: Cada componente tiene una responsabilidad clara
- **DRY (Don't Repeat Yourself)**: Eliminación de código duplicado con `map()` y arrays de configuración
- **KISS (Keep It Simple, Stupid)**: Código simple y legible

### Prácticas de Performance

- **useCallback**: Optimización de funciones callback
- **useMemo**: Optimización de cálculos costosos
- **Keys adecuadas**: Identificadores únicos en listas

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button/          # Botón personalizado
│   ├── Card/            # Tarjeta de extensión
│   ├── CardContainer/   # Contenedor tipo grid
│   ├── Filters/         # Filtros de estado
│   └── Header/          # Encabezado con tema
├── context/             # Gestión de estado global
│   ├── extensions.ts    # Tipos del contexto
│   ├── extensionsContext.tsx  # Proveedor del contexto
│   └── useExtensions.ts # Hook personalizado
├── types/               # Tipos TypeScript
│   └── cardType.ts      # Tipo CardType
├── App.tsx              # Componente raíz
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Instalación

### Requisitos Previos

- **Node.js** >= 16.x
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/rusbell-24/ExtManager.git
cd ExtManager
```

2. **Instalar dependencias**

```bash
npm install
# o con yarn
yarn install
```

## Ejecución

### Desarrollo

Ejecuta el servidor de desarrollo con hot reload:

```bash
npm run dev
# o con yarn
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de Producción

Genera una versión optimizada:

```bash
npm run build
# o con yarn
yarn build
```

### Preview de Build

Visualiza la versión de producción localmente:

```bash
npm run preview
```

## Gestión de Estado

### Contexto Global (ExtensionsContext)

El contexto maneja:

- **extensions**: Array de extensiones
- **filter**: Filtro actual (All | Active | Inactive)
- **setExtensions**: Actualiza la lista de extensiones
- **setFilter**: Cambia el filtro

**Uso en componentes:**

```typescript
const { extensions, filter, setExtensions, setFilter } = useExtensions();
```

## Scripts Disponibles

| Script            | Descripción                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo |
| `npm run build`   | Genera build de producción    |
| `npm run preview` | Preview del build             |
| `npm run lint`    | Ejecuta ESLint                |

## Próximas Mejoras

- [ ] Conectar con API real para persistencia de datos
- [ ] Tests unitarios e integración
- [ ] Animaciones y transiciones
- [ ] Soporte para búsqueda
- [ ] Ordenamiento de extensiones

## Licencia

MIT

## Autor

Desarrollado como proyecto personal de Rusbell Ruiz Portocarrero en base a la guia de proyectos de la pagina Frontend Mentor
