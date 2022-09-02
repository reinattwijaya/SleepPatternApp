import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Chart from "./components/Chart";

export default function App() {
	const [text, onChangeText] = React.useState("");
	const [number, onChangeNumber] = React.useState(null);
	return (
		<View style={styles.container}>
			<Text>You should start to sleep at 10 pm</Text>
			<Chart></Chart>
			<Text>Sleep Disorder Check</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder="Name"
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChangeNumber}
				value={number}
				placeholder="Age"
				keyboardType="numeric"
			/>
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
	},
});
