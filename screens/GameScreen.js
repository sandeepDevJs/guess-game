import {
	StyleSheet,
	Text,
	View,
	Alert,
	ScrollView,
	FlatList,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

import DefaultStyles from "../constants/default-stylesheet";

const renderItem = (listLength, itemData) => (
	<View style={styles.listItems}>
		<BodyText>#{listLength - itemData.index}</BodyText>
		<BodyText>{itemData.item}</BodyText>
	</View>
);
// const renderItem = (v, i) => (
// 	<View key={i} style={styles.listItems}>
// 		<BodyText>#{i}</BodyText>
// 		<BodyText>{v}</BodyText>
// 	</View>
// );

const generateNumberBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateNumberBetween(min, max, exclude);
	}

	return randomNumber;
};

const GameScreen = (props) => {
	const initialGuess = generateNumberBetween(1, 100, props.userChoice);
	const [currentGuess, setcurrentGuess] = useState(initialGuess);

	const [pastGuesses, setpastGuesses] = useState([initialGuess]);

	const currentLower = useRef(1);
	const currentHigher = useRef(100);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "LOWER" && currentGuess < props.userChoice) ||
			(direction === "HIGHER" && currentGuess > props.userChoice)
		) {
			Alert.alert("Dont lie!", "You Know that is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "LOWER") {
			currentHigher.current = currentGuess;
		} else {
			currentLower.current = currentGuess + 1;
		}

		const nextNumber = generateNumberBetween(
			currentLower.current,
			currentHigher.current,
			currentGuess
		);
		setcurrentGuess(nextNumber);
		setpastGuesses((prev) => [nextNumber, ...prev]);
	};

	useEffect(() => {
		if (currentGuess === props.userChoice) {
			props.onGameOver(pastGuesses.length);
		}
	}, [currentGuess, props.userChoice]);

	return (
		<View style={styles.screen}>
			<Text style={DefaultStyles.title}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.btnCtn}>
				<MainButton onPress={nextGuessHandler.bind(this, "LOWER")}>
					<Ionicons name="md-remove" size={24} color={"white"} />
				</MainButton>
				<MainButton onPress={nextGuessHandler.bind(this, "HIGHER")}>
					<Ionicons name="md-add" size={24} color={"white"} />
				</MainButton>
			</Card>

			<View style={styles.listContainer}>
				{/* <ScrollView contentContainerStyle={styles.list}>
					{pastGuesses.map((g, i, arr) => renderItem(g, arr.length - i))}
				</ScrollView> */}

				<FlatList
					keyExtractor={(item) => item}
					data={pastGuesses}
					renderItem={renderItem.bind(this, pastGuesses.length)}
					contentContainerStyle={styles.list}
				/>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},

	btnCtn: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
		width: 340,
		maxWidth: "90%",
	},

	listContainer: {
		flex: 1,
		width: "60%",
	},

	list: {
		flexGrow: 1,
		// alignItems: "center",
		justifyContent: "flex-end",
	},

	listItems: {
		// width: "80%",
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 15,
		marginVertical: 10,
		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
