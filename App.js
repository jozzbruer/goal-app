import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};
	const addGoalHandler = () => {
		setCourseGoals([...courseGoals, enteredGoalText]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Add your goals'
					onChangeText={goalInputHandler}
				/>
				<Button
					title='Add Goal'
					onPress={addGoalHandler}
				/>
			</View>
			<View style={styles.goalsContainer}>
				{courseGoals.map((goal, idx) => (
					<Text key={idx}>{goal}</Text>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'top',
		marginTop: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '75%',
		padding: 10,
	},
	goalsContainer: {
		flex: 9,
	},
});
