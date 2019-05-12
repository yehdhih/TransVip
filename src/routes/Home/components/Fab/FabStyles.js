const styles = {
    fabContainer: {
        borderColor: "#CEA413",
        borderWidth: 1,
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 100,
        right:20,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor:"#0b0c10"
    },
    disabledState:{       
        backgroundColor: "#D7D7D7",
    },
    activeState: {
        backgroundColor:"#0b0c10",
    },
    btnText: {
        fontSize: 18,
       fontWeight:"bold",
        color:"#CEA413",
    },
    amount:{
        fontWeight:"bold",
        fontSize: 12
    }
};

export default styles;
