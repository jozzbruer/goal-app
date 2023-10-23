import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoal = () => {
		if (!enteredGoalText) {
			return;
		}
		onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder='Add your goals'
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button
				title='Add Goal'
				onPress={addGoal}
			/>
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '75%',
		padding: 5,
	},
});
