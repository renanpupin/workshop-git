module.exports = class Calculator {

    print(a, b) {
        return String("a = " + a, "b = " + b);
    }

    sum(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b > 0) {
            return a / b;
        } else {
            return new Error("b can not be <= 0");
        }
    }

    square(a) {
        return a * a;
    }

    pow(a,b) {
        return Math.pow(a,b);
    }
}