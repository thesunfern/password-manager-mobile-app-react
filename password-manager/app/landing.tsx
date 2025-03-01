import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { commonStyles } from "./utilities/common-styles";
import { constants } from "./utilities/constants";

const LandingScreen = () => {
	return (
		<View style={styles.MainView}>
			<View style={styles.ImageView}>
				<Image
					source={require("./../assets/images/landing.jpg")}
					style={styles.LandingImage}
				/>
			</View>
			<View style={styles.HeaderView}>
				<Text style={styles.HeaderText}>Password Manager</Text>
				<Text style={styles.SubText}>
					A secure open source Password Manager
				</Text>
				<View style={styles.ButtonView}>
					<Text style={styles.ButtonText}>Get Started</Text>
				</View>

				<Text style={styles.AlreadyAccountText}>
					Already have an account? Sign in{" "}
					<Text style={styles.HereText}>here</Text>.
				</Text>
			</View>
		</View>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	MainView: {
		height: "100%",
		width: "100%",
		backgroundColor: constants.PrimaryColor,
	},
	ImageView: {
		alignItems: "center",
	},
	LandingImage: {
		width: "100%",
		height: 500,
		marginTop: 50,
		resizeMode: "contain",
	},
	HeaderView: {
		padding: 20,
		backgroundColor: "white",
	},
	HeaderText: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		color: "black",
	},
	SubText: {
		fontSize: 15,
		textAlign: "center",
		color: "black",
		marginTop: 10,
	},
	ButtonView: {
		padding: 15,
		marginTop: 15,
		borderRadius: 10,
		backgroundColor: constants.PrimaryColor,
	},
	ButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	AlreadyAccountText: {
		color: constants.Gray,
		textAlign: "center",
		marginTop: 15,
	},
	HereText: {
		color: constants.Gray,
		textDecorationLine: "underline",
	},
});
