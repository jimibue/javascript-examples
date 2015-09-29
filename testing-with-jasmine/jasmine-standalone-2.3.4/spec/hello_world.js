/**
 * Created by jcc on 8/30/15.
 */
describe("ArraySum", function(){

    it("should be a function", function(){

        expect(typeof (ArraySum.add)).toEqual("function");
    });
    it("should sum the value of the array", function(){

        expect(ArraySum.each([1,2,3,4,5], ArraySum.add)).toEqual([1,3,6,10,15]);

        expect(ArraySum.sumArray([1,2,3,4,5])).toEqual([1,3,6,10,15]);
        expect(ArraySum.sumArray(ArraySum.sumArray([1,2,3,4,5]))).toEqual([1,4,10,20,35]);
    });
});