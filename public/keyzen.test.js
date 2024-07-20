//const choose = require("./keyzen");
function choose(a) {
    var strategy=get_strategy();
    if (strategy==0)
    {
        return choose_random(a);
    }
    if (strategy==1)
    {
        return choose_random(a);
    }
    if (strategy==2)
    {
        return choose_random(a);
    }
}

function get_strategy()
{
    return 2;
}

function choose_random(a){
    return a[Math.floor(Math.random() * a.length)];
}

test("First Test", ()=>{
    expect(choose("ab")).toBe("a");
});