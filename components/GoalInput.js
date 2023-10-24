import { useState } from 'react';
import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';

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
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Add your goals'
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<Button
						title='Cancel'
						onPress={cancelGoal}
						color='#f41282'
					/>
					<Button
						title='Add Goal'
						onPress={addGoal}
						color='#b180f0'
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
		backgroundColor: '#311b6b',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		width: '100%',
		padding: 15,
		color: '#120438',
		borderRadius: 6,
	},
	buttonContainer: {
		width: '80%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	image: {
		width: 100,
		height: 100,
		margin: 30,
	},
});
