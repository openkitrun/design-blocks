import { Button, Checkbox, RadioGroup, Switch } from "@design-blocks/unstyled";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomCheck = () => (
  <View>
    <Text>✓</Text>
  </View>
);

export default function App() {
  const [selectedPayment, setSelectedPayment] = useState<string>();
  const [settings, setSettings] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Button.Root loading>
        <Button.Label>Button Click v2</Button.Label>
        <Button.Loading />
      </Button.Root>

      <Button.Root pressedStyle={{ backgroundColor: "red" }}>
        <Button.Label>Button Click v2</Button.Label>
        <Button.Loading />
      </Button.Root>

      <RadioGroup.Root
        value={selectedPayment}
        onValueChange={setSelectedPayment}
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        <RadioGroup.Radio
          value="card"
          accessibilityLabel="Pagar con tarjeta"
          style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
        >
          <RadioGroup.Input style={[styles.checkboxBase]}>
            <RadioGroup.Indicator style={styles.circle} />
          </RadioGroup.Input>
          <RadioGroup.Label
            style={{
              height: 20,
            }}
          >
            Tarjeta de Crédito
          </RadioGroup.Label>
        </RadioGroup.Radio>

        <RadioGroup.Radio
          value="paypal"
          accessibilityLabel="PayPal no disponible"
          style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
        >
          <RadioGroup.Input style={[styles.checkboxBase]}>
            <RadioGroup.Indicator indicatorComponent={CustomCheck} />
          </RadioGroup.Input>
          <RadioGroup.Label
            style={{
              height: 20,
            }}
          >
            PayPal (No disponible)
          </RadioGroup.Label>
        </RadioGroup.Radio>
      </RadioGroup.Root>

      <Switch.Root
        defaultChecked={false}
        checked={settings}
        onCheckedChange={(value) => setSettings(value)}
        style={[styles.switch, settings === true && styles.switchEnabled]}
      >
        <Switch.Thumb style={[styles.thumb, settings && styles.thumbEnabled]} />
      </Switch.Root>

      <View style={styles.checkboxRow}>
        <Checkbox.Root
          checked={accepted}
          onCheckedChange={setAccepted}
          style={[styles.checkbox, accepted && styles.checkboxChecked]}
          accessibilityLabel="Accept terms and conditions"
          accessibilityHint="Check to accept the terms and conditions"
        >
          <Checkbox.Indicator style={[styles.checkmark, accepted && styles.checkmarkVisible]} />
        </Checkbox.Root>

        <Text style={styles.checkboxLabel}>Accept terms and conditions</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },

  checkboxBase: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "red",
    width: 20,
    height: 20,
  },

  circle: {
    borderRadius: 50,
    backgroundColor: "blue",
    width: 20,
    height: 20,
  },

  darkContainer: {
    backgroundColor: "#1a1a1a",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  darkText: {
    color: "#fff",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  disabledLabel: {
    color: "#999",
  },

  // Switch styles
  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E5E5EA",
    padding: 2,
    justifyContent: "center",
  },
  switchEnabled: {
    backgroundColor: "#34C759",
  },
  switchDisabled: {
    backgroundColor: "#F2F2F7",
    opacity: 0.6,
  },

  // Thumb styles
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    transform: [{ translateX: 0 }],
  },
  thumbEnabled: {
    transform: [{ translateX: 20 }],
  },
  thumbDisabled: {
    backgroundColor: "#F8F8F8",
  },

  // Custom switch styles
  customSwitch: {
    width: 60,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#87CEEB",
    padding: 2,
    justifyContent: "center",
  },
  customSwitchDark: {
    backgroundColor: "#2C2C2E",
  },
  customThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    transform: [{ translateX: 0 }],
  },
  customThumbDark: {
    backgroundColor: "#1C1C1E",
    transform: [{ translateX: 28 }],
  },
  thumbIcon: {
    fontSize: 14,
  },

  checkboxContainer: {
    padding: 20,
    gap: 16,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },

  // Basic checkbox styles
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#3B82F6",
    borderColor: "#3B82F6",
  },
  checkboxDisabled: {
    backgroundColor: "#F3F4F6",
    borderColor: "#D1D5DB",
    opacity: 0.6,
  },
  checkboxRequired: {
    borderColor: "#EF4444",
  },

  // Checkmark styles
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: "white",
    borderRadius: 2,
  },
  checkmarkVisible: {
    backgroundColor: "white",
  },

  // Label styles
  checkboxLabel: {
    fontSize: 16,
    color: "#374151",
    flex: 1,
  },
  labelDisabled: {
    color: "#9CA3AF",
  },

  // Status
  status: {
    fontSize: 14,
    color: "#6B7280",
    fontStyle: "italic",
    marginTop: 8,
  },

  // Custom checkbox styles
  customCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  customCheckboxChecked: {
    backgroundColor: "#10B981",
    borderColor: "#10B981",
  },
  customIcon: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },

  // Form styles
  formFooter: {
    marginTop: 20,
    alignItems: "center",
  },
  submitButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 120,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  // Select all styles
  selectAllRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 12,
  },
  selectAllLabel: {
    fontWeight: "600",
  },
  selectAllIndicator: {
    width: 12,
    height: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  selectAllIcon: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
  checkboxIndeterminate: {
    backgroundColor: "#6B7280",
    borderColor: "#6B7280",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 8,
  },
});
