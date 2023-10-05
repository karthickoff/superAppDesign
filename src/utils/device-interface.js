import { useDispatch } from "react-redux";
import { storeAppTheme, storeLightAppTheme, storeDarkAppTheme, storeUserData } from "../redux/actions/themeAction";
class DeviceIdentifier {
    constructor() {
        this._userAgent = navigator.userAgent || "";
        this._platform = navigator.platform || "";
    }

    get isAndroid() {
        return /android/i.test(this._userAgent);
    }

    get isIos() {
        return /iPad|iPhone|iPod/.test(this._platform);
    }

    get isMobile() {
        return /android|iphone|kindle|ipad/i.test(this._userAgent);
    }

    get isDesktop() {
        return !this.isMobile
    }
}
let deviceIdentifier = new DeviceIdentifier();

let iosInterface = (window.webkit ? window.webkit.messageHandlers : {});
const __internalWindow = window;
var AndroidInterface = __internalWindow['Android'] ? __internalWindow['Android'] : {};


export function sendTheme() {
    if (deviceIdentifier.isIos) {
        console.log('sendTheme entered')
        iosInterface.sendTheme && iosInterface.sendTheme.postMessage("");
        // intializeGlobalVariable()
    } else if (deviceIdentifier.isAndroid) {
        console.log('sendTheme entered android')
        AndroidInterface.sendTheme && AndroidInterface.sendTheme("");
    }
    return true;
}
export function sendUserCredentials() {
    if (deviceIdentifier.isIos) {
        console.log('sendTheme entered')
        iosInterface.sendUserCredentials && iosInterface.sendUserCredentials.postMessage("");
        // intializeGlobalVariable()
    } else if (deviceIdentifier.isAndroid) {
        console.log('sendTheme entered android')
        AndroidInterface.sendUserCredentials && AndroidInterface.sendUserCredentials("");
    }
    return true;
}
export function HandleTheme() {
    const dispatch = useDispatch();
    if (!window.hasOwnProperty('getTheme')) {
        Object.defineProperty(window, 'getTheme', {
            value: (res) => {
                console.log("getTheme function called in web ", res);
                let response = JSON.parse(res)
                if (response.theme == 'custom') {
                    console.log('inside custom ');
                    dispatch(storeAppTheme(response.data))

                }
                else if (response.theme == 'light') {
                    console.log("inside light ");
                    dispatch(storeLightAppTheme())
                }
                else {
                    console.log("inside dark ");
                    dispatch(storeDarkAppTheme())

                }
            },
            writable: false,
        });
    }
    else {
        console.log("showing Cannot redefine property: handleTheme ");
    }
}
export function HandleUserCredentials() {
    const dispatch = useDispatch();

    if (!window.hasOwnProperty('getUserData')) {
        Object.defineProperty(window, 'getUserData', {
            value: (res) => {
                console.log("getUserData function called in web ", res);
                let response = JSON.parse(res)

                dispatch(storeUserData(response.name))

            },
            writable: false,
        });
    }
    else {
        console.log("showing Cannot redefine property: getUserData ");
    }
}





