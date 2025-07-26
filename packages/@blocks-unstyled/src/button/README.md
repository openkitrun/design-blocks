# Button

A flexible and accessible button component built with a composable architecture that provides full control over styling and behavior.

## Features

- **Fully accessible** - WCAG compliant
- **Complete style control** - No predefined styles
- **Loading states** - Native loading state support
- **Keyboard navigation** - Works with screen readers
- **Composable architecture** - Mix and match sub-components as needed
- **Mobile optimized** - Works perfectly with React Native

## Installation

```bash
npm install @design-blocks/unstyled
# or
yarn add @design-blocks/unstyled
# or
pnpm add @design-blocks/unstyled
```

## Basic Usage

```tsx
import { Button } from '@design-blocks/unstyled';

function App() {
  return (
    <Button.Root onPress={() => console.log('Pressed!')}>
      <Button.Label>Press me</Button.Label>
    </Button.Root>
  );
}
```

## Examples

### Simple Button

```tsx
<Button.Root onPress={handlePress}>
  <Button.Label>Simple Button</Button.Label>
</Button.Root>
```

### Button with Loading State

```tsx
<Button.Root loading onPress={handlePress}>
  <Button.Label>Saving...</Button.Label>
  <Button.Loading />
</Button.Root>
```

### Button with Custom Indicator

```tsx
const CustomSpinner = () => (
  <View style={{ marginLeft: 8 }}>
    <Text>🔄</Text>
  </View>
);

<Button.Root loading onPress={handlePress}>
  <Button.Label>Processing</Button.Label>
  <Button.Loading indicatorComponent={CustomSpinner} />
</Button.Root>
```

### Button that Hides Label During Loading

```tsx
<Button.Root loading hideLabelOnLoading onPress={handlePress}>
  <Button.Label>Submit</Button.Label>
  <Button.Loading />
</Button.Root>
```

### Disabled Button

```tsx
<Button.Root disabled onPress={handlePress}>
  <Button.Label>Not Available</Button.Label>
</Button.Root>
```

## API Reference

### Button.Root

The main component that wraps the entire button.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onPress` | `() => void` | No | Function called when button is pressed |
| `disabled` | `boolean` | No | Disables the button and prevents interactions |
| `loading` | `boolean` | No | Shows loading state and disables interactions |
| `hideLabelOnLoading` | `boolean` | No | Hides the label when `loading` is `true` |
| `testID` | `string` | No | Test identifier |
| `nativeID` | `string` | No | Native element ID |
| `accessible` | `boolean` | No | Controls element accessibility (default: `true`) |
| `accessibilityLabel` | `string` | No | Custom label for screen readers |
| `accessibilityHint` | `string` | No | Additional description for screen readers |

### Button.Label

Component that renders the button text.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | Yes | Label content |
| `style` | `StyleProp<TextStyle>` | No | Custom styles for the text |

### Button.Loading

Component that displays the loading indicator.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `indicatorComponent` | `React.ElementType` | No | Custom component to show during loading |
| `style` | `StyleProp<ViewStyle>` | No | Styles for the indicator container |

## Accessibility States

The component automatically handles the following accessibility states:

- **`accessibilityRole`**: `"button"` - Identifies the element as a button
- **`accessibilityState.disabled`**: Activated when `disabled={true}`
- **`accessibilityState.busy`**: Activated when `loading={true}`
- **`aria-pressed`**: Changes during press interactions

## Interaction Events

### Press States

The button automatically handles visual states during interaction:

```tsx
// The component internally handles:
// - pressIn: aria-pressed becomes true
// - pressOut: aria-pressed becomes false
```

### Multiple Press Prevention

When the button is in `loading` or `disabled` state, `onPress` calls are automatically prevented.

## Style Customization

The component includes no predefined styles, allowing full control:

```tsx
const buttonStyles = StyleSheet.create({
  root: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: '#E5E5EA',
  },
  disabledLabel: {
    color: '#8E8E93',
  },
});

<Button.Root
  style={[buttonStyles.root, disabled && buttonStyles.disabled]}
  disabled={disabled}
  onPress={handlePress}
>
  <Button.Label style={[buttonStyles.label, disabled && buttonStyles.disabledLabel]}>
    My Button
  </Button.Label>
</Button.Root>
```

## Best Practices

### Accessibility

1. **Always provide descriptive labels**:
```tsx
<Button.Root accessibilityLabel="Save profile changes">
  <Button.Label>Save</Button.Label>
</Button.Root>
```

2. **Use accessibilityHint for complex actions**:
```tsx
<Button.Root
  accessibilityLabel="Delete account"
  accessibilityHint="This action is irreversible and will delete all your data"
>
  <Button.Label>Delete</Button.Label>
</Button.Root>
```

3. **Handle loading states appropriately**:
```tsx
<Button.Root loading accessibilityLabel="Saving changes, please wait">
  <Button.Label>Saving...</Button.Label>
  <Button.Loading />
</Button.Root>
```

### Performance

1. **Use useCallback for onPress**:
```tsx
const handlePress = useCallback(() => {
  // Your logic here
}, [dependencies]);
```

2. **Memoize complex styles**:
```tsx
const buttonStyle = useMemo(() => [
  baseStyle,
  isActive && activeStyle,
  disabled && disabledStyle
], [isActive, disabled]);
```

## Testing

The component includes full testing support:

```tsx
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Button } from '@design-blocks/unstyled';

it('should call onPress when pressed', () => {
  const onPress = jest.fn();

  render(
    <Button.Root onPress={onPress} testID="my-button">
      <Button.Label>Test Button</Button.Label>
    </Button.Root>
  );

  const button = screen.getByTestId('my-button');
  fireEvent.press(button);

  expect(onPress).toHaveBeenCalled();
});
```
