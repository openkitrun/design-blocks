![design-blocks](./docs/preview_beta.png)

<h1 align="center">
  Build your mobile applications React Native with blocks
</h1>

An open source library with tools for creating dynamic user interfaces for applications written in React Native, focused on the developer experience.

You can use these components as the base layer of your design system or adopt them incrementally.

### Packages

- [🏄‍♀️ `@design-blocks/unstyled`](https://github.com/openkitrun/design-blocks/tree/main/packages/%40blocks-unstyled) -
  Accessible, style-agnostic components, ideal for integration in any Design Blocks project. Maximizes accessibility and design flexibility.

#### Future Packages (In Planning)

- [🔥 @design-blocks/primitives] - Layout components (Box, Stack, Text)

<br/>

## Documentation

For detailed information and usage instructions, visit our [official documentation](https://designblocks.dev). (Work in Progress)

## 📚 Current Package

### **@design-blocks/unstyled**

This package provides essential UI components without style opinions:

- **Form Controls**: Button, Checkbox, RadioGroup, Switch
- **Full Accessibility**: Screen reader support, keyboard navigation, ARIA attributes
- **Composable API**: Inspired by Radix UI's compound component pattern
- **TypeScript**: Complete type safety and excellent IntelliSense
- **Tree-shakeable**: Import only the components you use

```tsx
import { Button, Checkbox, RadioGroup, Switch } from '@design-blocks/unstyled';
```

### 🚀 Quick Start

```bash
npm install @design-blocks/unstyled
```

```tsx
import { Button, Checkbox, RadioGroup } from '@design-blocks/unstyled';

// Button with loading state
<Button.Root loading={loading} onPress={handlePress} style={styles.button}>
  <Button.Label>Submit</Button.Label>
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
    <RadioGroup.Label>Basic Plan</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```
## Contributing

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## Authors

- Jorge Luis Calleja A. ([@wootsbot](https://twitter.com/wootsbot))

⭐ [Estrella en GitHub](https://github.com/openkitrun/design-blocks) • Construido con ❤️ para React Native
