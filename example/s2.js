exportModule("s2", function(lvl,...msgs){
    switch(lvl) {
        case 1:
            console.log(...msgs);
            break;
        case 2:
            console.info(...msgs);
            break;
        case 3:
            console.warn(...msgs);
            break;
        case 4:
            console.error(...msgs);
            break;
        default:
            throw new Error("lvl out of range");
    }
});