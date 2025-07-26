# RadioGroup

A fully accessible and customizable radio button group component built with a composable architecture that provides complete control over styling and behavior.

## Features

- **Fully accessible** - WCAG compliant
- **Complete style control** - No predefined styles
- **Single selection** - Native radio button behavior
- **Keyboard navigation** - Screen reader compatible
- **Composable architecture** - Mix and match sub-components as needed
- **Mobile optimized** - Designed for React Native
- **Controlled/uncontrolled** - Support for both patterns

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
import { RadioGroup } from '@design-blocks/unstyled';

function App() {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <RadioGroup.Root value={selectedValue} onValueChange={setSelectedValue}>
      <RadioGroup.Radio value="option1">
        <RadioGroup.Input>
          <RadioGroup.Indicator />
        </RadioGroup.Input>
        <RadioGroup.Label>Option 1</RadioGroup.Label>
      </RadioGroup.Radio>

      <RadioGroup.Radio value="option2">
        <RadioGroup.Input>
          <RadioGroup.Indicator />
        </RadioGroup.Input>
        <RadioGroup.Label>Option 2</RadioGroup.Label>
      </RadioGroup.Radio>
    </RadioGroup.Root>
  );
}
```

## Examples

### Uncontrolled RadioGroup

```tsx
<RadioGroup.Root defaultValue="medium" onValueChange={(value) => console.log(value)}>
  <RadioGroup.Radio value="small">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label>Small</RadioGroup.Label>
  </RadioGroup.Radio>

  <RadioGroup.Radio value="medium">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label>Medium</RadioGroup.Label>
  </RadioGroup.Radio>

  <RadioGroup.Radio value="large">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label>Large</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

### Controlled RadioGroup

```tsx
const [size, setSize] = useState('medium');

<RadioGroup.Root value={size} onValueChange={setSize}>
  <RadioGroup.Radio value="small">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label>Small</RadioGroup.Label>
  </RadioGroup.Radio>

  <RadioGroup.Radio value="medium">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label>Medium</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

### Real-world Payment Methods Example

```tsx
const [selectedPayment, setSelectedPayment] = useState('card');

<RadioGroup.Root
  value={selectedPayment}
  onValueChange={setSelectedPayment}
  style={{ display: "flex", flexDirection: "column", gap: 8 }}
>
  <RadioGroup.Radio
    value="card"
    accessibilityLabel="Pay with card"
    style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
  >
    <RadioGroup.Input style={styles.radioInput}>
      <RadioGroup.Indicator style={styles.circle} />
    </RadioGroup.Input>
    <RadioGroup.Label style={{ height: 20 }}>
      Credit Card
    </RadioGroup.Label>
  </RadioGroup.Radio>

  <RadioGroup.Radio
    value="paypal"
    disabled
    accessibilityLabel="PayPal not available"
    style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
  >
    <RadioGroup.Input style={styles.radioInput}>
      <RadioGroup.Indicator style={styles.circle} />
    </RadioGroup.Input>
    <RadioGroup.Label style={{ height: 20 }}>
      PayPal (Not available)
    </RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

### Disabled RadioGroup

```tsx
<RadioGroup.Root disabled onValueChange={() => {}}>
  <RadioGroup.Radio value="option1">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label>Unavailable option</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

### Custom Indicator

```tsx
const CustomCheck = () => (
  <View style={styles.customIndicator}>
    <Text>✓</Text>
  </View>
);

<RadioGroup.Root value={selectedValue} onValueChange={setSelectedValue}>
  <RadioGroup.Radio value="premium">
    <RadioGroup.Input>
      <RadioGroup.Indicator indicatorComponent={CustomCheck} />
    </RadioGroup.Input>
    <RadioGroup.Label>Premium Plan</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

### Non-interactive Label

```tsx
<RadioGroup.Root value={selectedValue} onValueChange={setSelectedValue}>
  <RadioGroup.Radio value="readonly">
    <RadioGroup.Input>
      <RadioGroup.Indicator />
    </RadioGroup.Input>
    <RadioGroup.Label disabledCheck>
      Read-only (not clickable)
    </RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

## API Reference

### RadioGroup.Root

Main container component that manages the group state.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `value` | `string \| null` | No | Currently selected value (controlled mode) |
| `defaultValue` | `string` | No | Initially selected value (uncontrolled mode) |
| `onValueChange` | `(value: string) => void` | Yes | Callback executed when selection changes |
| `disabled` | `boolean` | No | Disables the entire radio group |
| `required` | `boolean` | No | Marks the group as required |
| `accessible` | `boolean` | No | Controls accessibility (default: `true`) |
| `accessibilityLabel` | `string` | No | Label for screen readers |
| `accessibilityHint` | `string` | No | Additional description for accessibility |
| `accessibilityRole` | `string` | No | Accessibility role (default: `"radiogroup"`) |
| `style` | `StyleProp<ViewStyle>` | No | Custom styles |
| `testID` | `string` | No | Test identifier |

### RadioGroup.Radio

Individual container for each radio option. **Note**: `Input` and `Label` elements are siblings within `Radio`, not nested.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `value` | `string` | Yes | Unique value that identifies this option |
| `disabled` | `boolean` | No | Disables this specific option |
| `accessibilityLabel` | `string` | No | Specific label for this option |
| `accessibilityHint` | `string` | No | Specific description for this option |
| `style` | `StyleProp<ViewStyle>` | No | Custom styles |
| `testID` | `string` | No | Test identifier |

### RadioGroup.Input

Interactive element that receives touch events. Contains the `Indicator` as a child.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `accessibilityRole` | `string` | No | Accessibility role (default: `"radio"`) |
| `style` | `StyleProp<ViewStyle>` | No | Custom styles |
| `testID` | `string` | No | Test identifier |

### RadioGroup.Label

Component that displays the option text. Placed as a sibling to `Input`, not inside it.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | Yes | Label content |
| `disabledCheck` | `boolean` | No | If `true`, label won't be clickable |
| `accessibilityLabel` | `string` | No | Custom accessibility label |
| `accessibilityHint` | `string` | No | Additional accessibility description |
| `style` | `StyleProp<TextStyle>` | No | Custom text styles |
| `testID` | `string` | No | Test identifier |

### RadioGroup.Indicator

Visual component that shows if the option is selected. Placed **inside** the `Input`.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `indicatorComponent` | `React.ElementType` | No | Custom component to show when selected |
| `accessibilityLabel` | `string` | No | Label for the indicator (default: `"Selected"`) |
| `accessibilityHint` | `string` | No | Additional description for the indicator |
| `style` | `StyleProp<ViewStyle>` | No | Styles for the default indicator |
| `testID` | `string` | No | Test identifier |

## Component Structure

The correct structure is:

```tsx
<RadioGroup.Root>
  <RadioGroup.Radio>
    <RadioGroup.Input>         {/* Clickable element */}
      <RadioGroup.Indicator /> {/* Visual indicator inside Input */}
    </RadioGroup.Input>
    <RadioGroup.Label>         {/* Label as sibling to Input */}
      Option text
    </RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

## Accessibility States

The component automatically handles:

- **`accessibilityRole="radiogroup"`** on Root
- **`accessibilityRole="radio"`** on each Input
- **`accessibilityState.checked`** indicates if selected
- **`accessibilityState.disabled`** indicates if disabled
- **`accessibilityState.selected`** on Indicator when active

## Style Customization

With no predefined styles, you have complete control:

```tsx
const styles = StyleSheet.create({
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 16,
  },
  radioContainer: {
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
  radioInputChecked: {
    backgroundColor: '#007AFF',
  },
  radioIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
    height: 20,
  },
  radioLabelDisabled: {
    color: '#999',
  },
});

<RadioGroup.Root style={styles.radioGroup} value={value} onValueChange={setValue}>
  <RadioGroup.Radio
    value="option1"
    style={styles.radioContainer}
    accessibilityLabel="First option"
  >
    <RadioGroup.Input
      style={[
        styles.radioInput,
        isSelected && styles.radioInputChecked
      ]}
    >
      <RadioGroup.Indicator style={styles.radioIndicator} />
    </RadioGroup.Input>
    <RadioGroup.Label
      style={[
        styles.radioLabel,
        isDisabled && styles.radioLabelDisabled
      ]}
    >
      Option 1
    </RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>
```

## Usage Patterns

### Forms

```tsx
const [paymentMethod, setPaymentMethod] = useState('credit');

<RadioGroup.Root
  value={paymentMethod}
  onValueChange={setPaymentMethod}
  accessibilityLabel="Payment method"
  required
  style={styles.radioGroup}
>
```
