/**
 * Created by jcc on 8/30/15.
 */
describe("Calculator",function() {
    beforeEach(function () {
        Calculator.currentValue = 0;
    });
        describe("When adding numbers",function() {
            describe("Calculator", function () {
                it("should store the current value at all times", function () {
                    expect(Calculator.currentValue).toBeDefined();
                });
            });

            describe("Calculator", function () {
                it("should add numbers", function () {
                    expect(Calculator.add(5)).toEqual(5);
                    expect(Calculator.add(5)).toEqual(10);
                });
            });

            describe("Calculator", function () {
                it("should add numbers", function () {
                    expect(Calculator.add(5)).toEqual(5);
                    expect(Calculator.add(5)).toEqual(10);
                });
            });

            describe("Calculator", function () {
                it("should be able to add multiple numbers", function () {
                    expect(Calculator.add(1, 2, 3)).toEqual(6);
                    expect(Calculator.add(4, 5, 6)).toEqual(21);
                })
            });
        });
});
