import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () =>
	Font.loadAsync({
		poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
		"poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
		"poppins-extra-bold": require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
	});

export default function App() {
	const [userNumber, setuserNumber] = useState();
	const [guesRounds, setGuessRounds] = useState(0);
	const [isLoaded, setisLoaded] = useState(false);

	if (!isLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={setisLoaded.bind(this, true)}
				onError={() => console.log(e)}
			/>
		);
	}

	const startGameHandler = (selectedNumber) => {
		setuserNumber(selectedNumber);
		setGuessRounds(0);
	};

	const gameOverHandler = (numberOfRounds) => {
		setGuessRounds(numberOfRounds);
	};

	const configureGameHandler = () => {
		setGuessRounds(0);
		setuserNumber();
	};

	let content = <StartGame onStartGame={startGameHandler} />;

	if (userNumber && guesRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guesRounds > 0) {
		content = (
			<GameOverScreen
				nrounds={guesRounds}
				userNumber={userNumber}
				onRestart={configureGameHandler}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<Header title="Guess A Number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
