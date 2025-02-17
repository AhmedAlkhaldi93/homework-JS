const global = 'global';
function scopeTest() {
    console.log(functionScope); //it will not execute (undefined)
    console.log(global);
    const functionScope = 'functionScope';

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable';
    }

    tester();
    console.log(testerVariable); //it will not execute (undefined)
}

scopeTest();