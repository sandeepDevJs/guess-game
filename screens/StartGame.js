import {
	StyleSheet,
	View,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import React, { useState } from "react";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

import COLORS from "../constants/colors";
import TitleText from "../components/TitleText";

const StartGame = ({ onStartGame }) => {
	const [enteredValue, setenteredValue] = useState("");
	const [isConirmed, setisConirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = (text) =>
		setenteredValue(text.replace(/[^0-9]/g, ""));

	const resetHandler = () => {
		setenteredValue("");
		setisConirmed(false);
	};
	const conirmHandler = () => {
		const choosenNumber = parseInt(enteredValue);

		if (
			Number.isNaN(choosenNumber) ||
			choosenNumber <= 0 ||
			choosenNumber > 99
		) {
			Alert.alert(
				"Invalid Number!",
				"Number has to be a number between 0 to 99",
				[{ text: "Okay", style: "destructive", onPress: resetHandler }]
			);
			return;
		}

		setisConirmed(true);
		setSelectedNumber(choosenNumber);
		setenteredValue("");
	};

	let confirmedOutput;

	if (isConirmed) {
		confirmedOutput = (
			<Card style={styles.confirmedOutputCtn}>
				<BodyText>You Selected</BodyText>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<MainButton onPress={() => onStartGame(selectedNumber)}>
					START GAME
				</MainButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<TitleText style={styles.title}>The Game Screen</TitleText>
				<Card style={styles.dtCtn}>
					<BodyText>Select A Number</BodyText>
					<Input
						style={styles.input}
						keyboardType="number-pad"
						maxLength={2}
						blurOnSubmit
						value={enteredValue}
						onChangeText={numberInputHandler}
					/>
					<View style={styles.btnCtn}>
						<View style={styles.btn}>
							<Button
								title="Reset"
								color={COLORS.accent}
								onPress={resetHandler}
							/>
						</View>
						<View style={styles.btn}>
							<Button
								title="Confirm"
								color={COLORS.primary}
								onPress={conirmHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},

	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: "poppins-bold",
	},
	dtCtn: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
		fontFamily: "poppins",
	},

	text: {
		fontFamily: "poppins",
	},

	btnCtn: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	btn: {
		width: 90,
		fontFamily: "poppins",
	},
	input: {
		width: "50%",
		textAlign: "center",
		fontFamily: "poppins",
	},

	confirmedOutputCtn: {
		marginTop: 20,
		alignItems: "center",
	},
});
