return (

    <View style={styles.container}>
        <View style={styles.box1}>
            <Text style={styles.text}>What Would You Like To Focus On?</Text>
        </View>

        <View style={styles.box2}>
            <TextInput
                style={styles.inputField}

                placeholder="Enter your wish" />

            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton}>
                <Text>+</Text>
            </TouchableOpacity>

        </View>

    </View>
);


export default App;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    box1: {
        paddingTop: 20,
        flexDirection: 'column'
    },

    box2: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row'

    },
    inputField: {
        borderWidth: 3,
        borderRadius: 15,
        width: '80%',
        padding: 5,
        backgroundColor: 'white'
    },

    text: {
        color: 'black',
        fontSize: 22,
        marginLeft: 25,
        fontWeight: 'bold'
    },

    roundButton: {
        marginLeft: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        backgroundColor: 'orange',
    },

});
