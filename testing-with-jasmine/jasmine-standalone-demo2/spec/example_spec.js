/**
 * Created by jcc on 9/29/15.
 */
describe("A Feature",function(){

    describe("someFunction",function() {
        it("should", function () {
            expect(someFunction()).toEqual(true)
        });

        it("should", function () {
            expect(someFunction()).toBeTruthy();
        });

        it("returns an array of names", function(){
            expect(anotherFunction()).toContain('james');
            expect(anotherFunction()).not.toContain('jamesy');
        })
    })
    ja
});