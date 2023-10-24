import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ data, onDeleteGoalItem }) => {
	// console.log(data);
	return (
		<View style={styles.goalItem}>
			<Pressable
				// android_ripple={{ color: '#210641' }}
				onPress={() => onDeleteGoalItem(data.id)}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalItemText}>{data.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;
const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalItemText: {
		color: '#fff',
		padding: 8,
	},

	pressedItem: {
		opacity: 0.5,
	},
});
