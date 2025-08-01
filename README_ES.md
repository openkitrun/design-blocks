![design-blocks](./docs/preview_beta.png)

<h1 align="center">
  Construye tus aplicaciones móviles React Native con bloques
</h1>

Una biblioteca open source con herramientas para crear interfaces de usuario dinámicas para aplicaciones escritas en React Native, enfocada en la experiencia del desarrollador.

Puedes usar estos componentes como la capa base de tu sistema de diseño o adoptarlos incrementalmente.

### Paquetes

- [🏄‍♀️ `@design-blocks/unstyled`](https://github.com/openkitrun/design-blocks/tree/main/packages/%40blocks-unstyled) -
  Componentes accesibles y agnósticos de estilo, ideales para integración en cualquier proyecto de Design Blocks. Maximiza la accesibilidad y flexibilidad de diseño.

#### Paquetes Futuros (En Planificación)

- [🔥 @design-blocks/primitives] - Componentes de layout (Box, Stack, Text)

<br/>

## Documentación

Para información detallada e instrucciones de uso, visita nuestra [documentación oficial](https://designblocks.dev). (Trabajo en Progreso)

## 📚 Paquete Actual

### **@design-blocks/unstyled**

Este paquete proporciona componentes UI esenciales sin opiniones de estilo:

- **Controles de Formulario**: Button, Checkbox, RadioGroup, Switch
- **Accesibilidad Completa**: Soporte para lectores de pantalla, navegación por teclado, atributos ARIA
- **API Componible**: Inspirada en el patrón de componentes compuestos de Radix UI
- **TypeScript**: Seguridad de tipos completa y excelente IntelliSense
- **Tree-shakeable**: Importa solo los componentes que uses

```tsx
import { Button, Checkbox, RadioGroup, Switch } from '@design-blocks/unstyled';
```

### 🚀 Inicio Rápido

```bash
npm install @design-blocks/unstyled
```

```tsx
import { Button, Checkbox, RadioGroup } from '@design-blocks/unstyled';

// Botón con estado de carga
<Button.Root loading={loading} onPress={handlePress} style={styles.button}>
  <Button.Label>Enviar</Button.Label>
  <Button.Loading />
</Button.Root>

// Checkbox
<Checkbox.Root checked={accepted} onCheckedChange={setAccepted}>
  <Checkbox.Indicator />
</Checkbox.Root>

// RadioGroup
<RadioGroup.Root value={plan} onValueChange={setPlan}>
  <RadioGroup.Radio value="basic">
    <RadioGroup.Input><RadioGroup.Indicator /></RadioGroup.Input>
    <RadioGroup.Label>Plan Básico</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

## Contribuir

Por favor sigue nuestras [guías de contribución](./.github/CONTRIBUTING.md).

## Autores

- Jorge Luis Calleja A. ([@wootsbot](https://twitter.com/wootsbot))

⭐ [Estrella en GitHub](https://github.com/openkitrun/design-blocks) • Construido con ❤️ para React Native

- **Controles de Formulario**: Button, Checkbox, RadioGroup, Switch
- **Accesibilidad Completa**: Soporte para lectores de pantalla, navegación por teclado, atributos ARIA
- **API Componible**: Inspirada en el patrón de componentes compuestos de Radix UI
- **TypeScript**: Seguridad de tipos completa y excelente IntelliSense
- **Tree-shakeable**: Importa solo los componentes que uses

```tsx
import { Button, Checkbox, RadioGroup, Switch } from '@design-blocks/unstyled';
```

### 🚀 Inicio Rápido

```bash
npm install @design-blocks/unstyled
```

```tsx
import { Button, Checkbox, RadioGroup } from '@design-blocks/unstyled';

// Botón con estado de carga
<Button.Root loading={loading} onPress={handlePress} style={styles.button}>
  <Button.Label>Enviar</Button.Label>
  <Button.Loading />
</Button.Root>

// Checkbox
<Checkbox.Root checked={accepted} onCheckedChange={setAccepted}>
  <Checkbox.Indicator />
</Checkbox.Root>

// RadioGroup
<RadioGroup.Root value={plan} onValueChange={setPlan}>
  <RadioGroup.Radio value="basic">
    <RadioGroup.Input><RadioGroup.Indicator /></RadioGroup.Input>
    <RadioGroup.Label>Plan Básico</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

## Contribuir

Por favor sigue nuestras [guías de contribución](./.github/CONTRIBUTING.md).

## Autores

- Jorge Luis Calleja A. ([@wootsbot](https://twitter.com/wootsbot))

⭐ [Estrella en GitHub](https://github.com/openkitrun/design-blocks) • Construido con ❤️ para React Native
