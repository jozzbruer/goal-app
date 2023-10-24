import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAddGoal, isVisible, onCancel }) => {
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
	const cancelGoal = () => {
		onCancel();
		setEnteredGoalText('');
	};
	return (
		<Modal
			visible={isVisible}
			animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Add your goals'
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<Button
						title='Add Goal'
						onPress={addGoal}
					/>
					<Button
						title='Cancel'
						onPress={cancelGoal}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 5,
	},
	buttonContainer: {
		width: '80%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
