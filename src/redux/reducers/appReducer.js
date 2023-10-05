const IntialState = {
    appTheme: {

        parent: {
            color: 'black',
            backgroundColor: "white",
        },
        conatinerarea: {
            color: 'black',
            backgroundColor: '#FAF9F6'
        },
        child: {
            color: '#279EFF',
            backgroundColor: "white",
        },
        name: 'l',

    },
    lightTheme: {

        parent: {
            color: 'black',
            backgroundColor: "white",
        },
        conatinerarea: {
            color: 'black',
            backgroundColor: '#FAF9F6'
        },
        child: {
            color: '#279EFF',
            backgroundColor: "white",
        },
        name: 'l',

    },
    darkTheme: {

        parent: {
            color: '#DCDCDC',
            backgroundColor: 'black'
        },
        conatinerarea: {
            color: '#DCDCDC',
            backgroundColor: 'black'
        },
        child:
        {
            color: '#DCDCDC',
            backgroundColor: '#5D3FD3',
            borderColor: 'none',

        },
        name: 'd',


    },
    userName: '',
};

export default function AppReducer(state = IntialState, action) {
    switch (action.type) {
        case 'APPTHEME':
            return { ...state, appTheme: action.payload }
        case 'LIGHTTHEME':
            return { ...state, appTheme: state.lightTheme }
        case 'DARKTHEME':
            return { ...state, appTheme: state.darkTheme }
        case 'USERNAME':
            return { ...state, userName: action.payload }
        default:
            return state;
    }

}