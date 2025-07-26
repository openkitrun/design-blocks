import { Button, RadioGroup } from "@design-blocks/unstyled";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
	const [value, setValue] = useState();
	const [selectedPayment, setSelectedPayment] = useState();

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
  <RadioGroup.Radio value="card" style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
    <RadioGroup.Input accessibilityLabel="Pagar con tarjeta" style={[styles.checkboxBase]}>
      <RadioGroup.Indicator style={styles.circle}  />
    </RadioGroup.Input>
    <RadioGroup.Label 	style={{
								height: 20,
							}}>Tarjeta de Crédito</RadioGroup.Label>
  </RadioGroup.Radio>

  <RadioGroup.Radio value="paypal" disabled style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
    <RadioGroup.Input accessibilityLabel="PayPal no disponible" style={[styles.checkboxBase]}>
      <RadioGroup.Indicator style={styles.circle}  />
    </RadioGroup.Input>
    <RadioGroup.Label 	style={{
								height: 20,
							}}>PayPal (No disponible)</RadioGroup.Label>
  </RadioGroup.Radio>
</RadioGroup.Root>



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
});
