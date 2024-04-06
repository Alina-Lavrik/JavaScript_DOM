// Работа с this
const checkThis = function() {
    console.log(this);
}
checkThis(); // Window {0: global, window: Window, self: Window,
// document: document, name: "", location: Location, …}

// Создадим такую функцию внутри пользовательского объекта:

const checkThisInObject = {
testProperty: true,
    checkThis: function () {
        console.log(this);
    },
};
checkThisInObject.checkThis(); // {testProperty: true, checkThis: ƒ}