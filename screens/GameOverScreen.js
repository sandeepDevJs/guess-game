import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import COLORS from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game Is Over</TitleText>

			<View style={styles.imgCtn}>
				<Image
					source={require("../assets/success.png")}
					// source={{
					// 	uri: "https://www.thelandofsnows.com/wp-content/uploads/2016/11/untitled20161859-1024x678.jpg",
					// }}
					style={styles.img}
				/>
			</View>

			<View style={styles.resultContainer}>
				<BodyText style={styles.resultText}>
					Your Phone Needed{" "}
					<Text style={styles.highLight}>{props.nrounds}</Text> rounds to guess
					the number <Text style={styles.highLight}>{props.userNumber}</Text>
				</BodyText>
			</View>

			<MainButton onPress={props.onRestart}>NEW GAME</MainButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		fontFamily: "poppins",
	},

	imgCtn: {
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: "black",
		borderRadius: 150,
		overflow: "hidden",
		marginVertical: 30,
	},

	img: {
		width: "100%",
		height: "100%",
	},

	highLight: {
		color: COLORS.primary,
		fontFamily: "poppins-bold",
	},

	resultContainer: {
		marginHorizontal: 30,
		marginVertical: 15,
	},

	resultText: {
		textAlign: "center",
		fontSize: 20,
	},
});
