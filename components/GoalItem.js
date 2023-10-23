import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ key, data }) => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalItemText}>{data}</Text>
		</View>
	);
};

export default GoalItem;
const styles = StyleSheet.create({
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
