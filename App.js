import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
                <Button title="ADD" color="#463f3a" />
            </View>

            <View style={styles.taskContainer}>
                <View style={styles.card}>
                    <Text style={styles.taskText}>Living</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.taskText}>Cocina</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.taskText}>Comedor</Text>
                </View>
                <View style={styles.card} >
                    <Text style={styles.taskText}>Dormitorio</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.taskText}>Espacios especiales</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.taskText}>Galeria exterior</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.taskText}>Jardin</Text>
                </View>
                <View style={styles.card} >
                    <Text style={styles.taskText}>Terraza</Text>
                </View>
                <View style={styles.card} >
                    <Text style={styles.taskText}>Verdes</Text>
                </View>
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: "#f4f3ee",
        flex: 1
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: 250,
        fontSize: 16
    },
    taskContainer: {
        borderWidth: 1,
        marginTop: 15,
        alignItems: "center",
        width: "90%",
        paddingVertical: 10
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#bcb8b1",
        width: "90%",
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 5
    },
    taskText: {
        fontWeight: "bold",
        fontSize: 17
    },
})