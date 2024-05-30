const {humanities, sciences, religious} = require ("./main");

describe("test-grading-system", ()=>{
    test("returns math, physics, chemistry scores", () => {
        { expect(sciences(80)).toEqual("A")}
        { expect(sciences(60)).toEqual("B")}
        { expect(sciences(55)).toEqual("C")}
        { expect(sciences(40)).toEqual("PASS")}
        { expect(sciences(38)).toEqual("SUP")}


});
    test("returns english, kiswahili, computer scores", () => {
        { expect(humanities(75)).toEqual("A")}
        { expect(humanities(65)).toEqual("B")}
        { expect(humanities(55)).toEqual("C")}
        { expect(humanities(45)).toEqual("PASS")}
        { expect(humanities(38)).toEqual("SUP")}

});
    test("returns cre scores ", () => {
        { expect(religious(80)).toEqual("A")}
        { expect(religious(70)).toEqual("B")}
        { expect(religious(60)).toEqual("C")}
        { expect(religious(50)).toEqual("PASS")}
        { expect(religious(38)).toEqual("SUP")}
});
});




