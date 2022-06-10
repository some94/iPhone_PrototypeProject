// call - observer
const Call = (function() {
    function Call() {
        this.observers = [];
    }
    Call.prototype.register = function(obs) {
        this.observers.push(obs);
    }
    Call.prototype.makeAPhone = function() {
        return `전화 신호를 보냅니다...`;
    };
    Call.prototype.pickUpPhone = function() {
        console.log("전화 신호를 받았습니다...");
        this.observers.forEach((obs) => {
            try {
                console.log(obs.callUpdate());
            } catch {
                return 0;
            }
        });
    }
    return Call;
})();

const CallObserver = (function() {
    function CallObserver() {}
    CallObserver.prototype.callUpdate = function() {};
    return CallObserver;
})();

const Screen = (function() {
    function Screen() {}
    Screen.prototype.callUpdate = function() {
        return `[현재 화면을 전화 화면으로 전환합니다.]`;
    }
    return Screen;
})();
const Sound = (function() {
    function Sound() {}
    Sound.prototype.callUpdate = function() {
        return `[컬러링이 울립니다.]`;
    }
    return Sound;
})();

Screen.__proto__ = new CallObserver();
Sound.__proto__ = new CallObserver();

// testcode
var call = new Call();
var screen = new Screen();
var sound = new Sound();

call.register(screen);
call.register(sound);

call.pickUpPhone();
