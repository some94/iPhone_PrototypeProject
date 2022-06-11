import {notification} from "../iPhone/hardware/module/notification/notification.js";

const iPad = (function () {
    function Pad() {
        this.notificationObserver = new notification();
        const macbook = {
            notify: (title, change) => {
                console.log("\"Mac\"에서 알림이 울립니다.");
                console.log(`${title}\n${change}`);
            }
        };
        this.notificationObserver.subscribe(macbook);
    }

    Pad.prototype.start = function () {

    };
    Pad.prototype.component = function () {

    };
    return Pad;
})();

const iPad1 = new iPad();