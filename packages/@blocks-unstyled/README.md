# @design-blocks/unstyled

A React Native unstyled component library designed to provide fundamental building blocks that accelerate development while maintaining complete customization flexibility.

<div align="center">

[![npm version](https://badge.fury.io/js/@design-blocks%2Funstyled.svg)](https://badge.fury.io/js/@design-blocks%2Funstyled)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

</div>

## Why Design Blocks Unstyled?

**Design Blocks Unstyled** provides accessible and style-agnostic components, ideal for integration into any project. Maximizes accessibility and design flexibility without imposing visual decisions.

### 🎯 **Philosophy**

- **No predefined styles**: Complete control over appearance
- **Composable architecture**: Combine sub-components according to your needs
- **Native accessibility**: WCAG standards compliance from day one
- **Developer Experience**: Intuitive APIs and comprehensive documentation
- **Performance**: Optimized for React Native

### ✨ **Key Features**

- 🎨 **Complete style control** - No CSS-in-JS, no predefined themes
- ♿ **Full accessibility** - States, roles, and keyboard navigation
- 🧩 **Composable components** - Maximum composition flexibility
- 📱 **Mobile optimized** - Specifically designed for React Native
- 🔧 **Native TypeScript** - Type safety and autocompletion
- 🚀 **Tree-shakeable** - Only import what you need

## Installation

```bash
npm install @design-blocks/unstyled
```

```bash
yarn add @design-blocks/unstyled
```

```bash
pnpm add @design-blocks/unstyled
```

### Dependencies

This package requires React Native and React as peer dependencies:

```json
{
  "react": ">=19.0.0",
  "react-native": ">=0.79.0"
}
```

## Quick Start

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, RadioGroup } from '@design-blocks/unstyled';

function App() {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState('card');

  const handlePress = async () => {
    setLoading(true);
    // Your logic here
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* Button with loading state */}
      <Button.Root
        onPress={handlePress}
        loading={loading}
        style={styles.button}
      >
        <Button.Label style={styles.buttonText}>
          {loading ? 'Processing...' : 'Process Payment'}
        </Button.Label>
        <Button.Loading />
      </Button.Root>

      {/* RadioGroup for selection */}
      <RadioGroup.Root
        value={payment}
        onValueChange={setPayment}
        style={styles.radioGroup}
      >
        <RadioGroup.Radio value="card" style={styles.radioOption}>
          <RadioGroup.Input style={styles.radioInput}>
            <RadioGroup.Indicator style={styles.radioIndicator} />
          </RadioGroup.Input>
          <RadioGroup.Label style={styles.radioLabel}>
            Credit Card
          </RadioGroup.Label>
        </RadioGroup.Radio>

        <RadioGroup.Radio value="paypal" style={styles.radioOption}>
          <RadioGroup.Input style={styles.radioInput}>
            <RadioGroup.Indicator style={styles.radioIndicator} />
          </RadioGroup.Input>
          <RadioGroup.Label style={styles.radioLabel}>
            PayPal
          </RadioGroup.Label>
        </RadioGroup.Radio>
      </RadioGroup.Root>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  radioGroup: {
    gap: 16,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  radioInput: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
```

## Available Components

<!-- Check the [complete documentation](./docs) to see all available components and their detailed APIs. -->

Each component includes:
- ✅ **Complete accessibility** - Roles, states, and navigation
- 🎨 **Style agnostic** - Complete control over appearance
- 🧩 **Composable architecture** - Combinable sub-components
- 📱 **Mobile optimization** - Touch areas and native gestures
- 🔧 **TypeScript** - Type safety and autocompletion
- 🧪 **Testable** - TestIDs and testing helpers

## Design Principles

### 🎨 **No Predefined Styles**

Each component comes without styles, giving you complete control:

```tsx
// ❌ Other libraries
<Button variant="primary" size="large" />

// ✅ Design Blocks
<Button.Root style={myCustomButtonStyle}>
  <Button.Label style={myCustomTextStyle}>
    My Button
  </Button.Label>
</Button.Root>
```

### 🧩 **Composable Architecture**

Combine sub-components to create exactly what you need:

```tsx
// Simple button
<Button.Root>
  <Button.Label>Simple</Button.Label>
</Button.Root>

// Button with loading
<Button.Root loading>
  <Button.Label>Loading</Button.Label>
  <Button.Loading />
</Button.Root>

// Button with custom indicator
<Button.Root loading>
  <Button.Label>Uploading</Button.Label>
  <Button.Loading indicatorComponent={CustomSpinner} />
</Button.Root>
```

### ♿ **Accessibility by Default**

All components include complete accessibility support:

```tsx
<Button.Root
  accessibilityLabel="Save document"
  accessibilityHint="Saves the changes made"
>
  <Button.Label>Save</Button.Label>
</Button.Root>
```

### 📱 **Mobile-First**

Optimized for React Native best practices:

- Adequate touch areas
- Optimized performance
- Screen reader compatibility
- Native gesture support

## Best Practices

### 🎯 **Composition over Configuration**

```tsx
// ❌ Avoid: many boolean props
<Button loading disabled primary large />

// ✅ Prefer: clear composition
<Button.Root loading disabled style={styles.primaryLarge}>
  <Button.Label>My Button</Button.Label>
  <Button.Loading />
</Button.Root>
```

### 🎨 **Style Management**

Organize your styles consistently:

```tsx
const styles = StyleSheet.create({
  // Base components
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  // Variants
  buttonPrimary: {
    backgroundColor: '#007AFF',
  },

  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },

  // States
  buttonDisabled: {
    opacity: 0.5,
  },

  // Text
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },

  buttonTextPrimary: {
    color: 'white',
  },

  buttonTextSecondary: {
    color: '#007AFF',
  },
});
```

### ⚡ **Performance**

Optimize performance with good practices:

```tsx
// Use useCallback for handlers
const handlePress = useCallback(() => {
  onSubmit(formData);
}, [formData, onSubmit]);

// Memoize complex styles
const buttonStyle = useMemo(() => [
  styles.button,
  variant === 'primary' && styles.buttonPrimary,
  disabled && styles.buttonDisabled
], [variant, disabled]);

// Avoid creating inline objects
<Button.Root style={buttonStyle} onPress={handlePress}>
  <Button.Label>Submit</Button.Label>
</Button.Root>
```

### 🧪 **Testing**

All components include testIDs and complete testing support:

```tsx
import { render, fireEvent } from '@testing-library/react-native';

test('should call onPress when button is pressed', () => {
  const onPress = jest.fn();

  render(
    <Button.Root onPress={onPress} testID="submit-button">
      <Button.Label>Submit</Button.Label>
    </Button.Root>
  );

  fireEvent.press(screen.getByTestId('submit-button'));
  expect(onPress).toHaveBeenCalled();
});
```

### 🎨 **Design System Integration**

Create your own design system on top of Design Blocks:

```tsx
// components/Button.tsx
export const PrimaryButton = ({ children, ...props }) => (
  <Button.Root style={designSystem.button.primary} {...props}>
    <Button.Label style={designSystem.text.buttonPrimary}>
      {children}
    </Button.Label>
  </Button.Root>
);

export const SecondaryButton = ({ children, ...props }) => (
  <Button.Root style={designSystem.button.secondary} {...props}>
    <Button.Label style={designSystem.text.buttonSecondary}>
      {children}
    </Button.Label>
  </Button.Root>
);

// Usage
<PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
<SecondaryButton onPress={handleCancel}>Cancel</SecondaryButton>
```
