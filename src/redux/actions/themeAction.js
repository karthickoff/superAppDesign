
const APPTHEME = 'APPTHEME';
const LIGHTTHEME = 'LIGHTTHEME';
const DARKTHEME = 'DARKTHEME';
const USERNAME = 'USERNAME';


export function storeAppTheme(data) {
    console.log("inside Action storeAppTheme ", data);
    return {
        type: APPTHEME,
        payload: data
    }
}
export function storeLightAppTheme() {
    console.log("inside Action storeLightAppTheme ",);

    return {
        type: LIGHTTHEME,
        payload: '',
    }
}
export function storeDarkAppTheme() {
    console.log("inside Action storeDarkAppTheme ",);

    return {
        type: DARKTHEME,
        payload: '',

    }
}
export function storeUserData(data) {
    console.log("inside Action storeUserData ",);
    return {
        type: USERNAME,
        payload: data
    }


}