import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	const startAddGoalHandler = () => {
		setIsVisible(true);
	};
	const endAddGoalHanlder = () => {
		setIsVisible(false);
	};

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals([
			...courseGoals,
			{ id: Math.random().toString(), text: enteredGoalText },
		]);
		endAddGoalHanlder();
	};
	const deleteGoalHandler = (id) => {
		setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
	};
	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add new goal'
					color='#a065ec'
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					isVisible={isVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHanlder}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									onDeleteGoalItem={deleteGoalHandler}
									data={itemData.item}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 9,
	},
});
