import { Button, RadioGroup } from "@design-blocks/unstyled";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const CustomCheck = () => (
  <View>
    <Text>✓</Text>
  </View>
);

export default function App() {
	const [selectedPayment, setSelectedPayment] = useState<string>();

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
