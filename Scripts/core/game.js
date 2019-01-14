// IIFE - Immediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self-executing function
    Anything in braces is in a closure. Won't go to a global namespace.
*/
(function () {
    function Init() {
        console.log("Initialization start");
        var x = 10;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map