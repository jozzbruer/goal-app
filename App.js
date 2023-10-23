import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

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
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<View
								key={itemData.index}
								style={styles.goalItem}>
								<Text style={styles.goalItemText}>{itemData.item}</Text>
							</View>
						);
					}}
				/>
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
		alignItems: 'center',
		marginTop: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '75%',
		padding: 5,
	},
	goalsContainer: {
		flex: 9,
	},
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		padding: 8,
	},
	goalItemText: {
		color: '#fff',
	},
});
