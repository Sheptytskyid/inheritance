'use strict'

function BaseClass(n) {
    this.data = n;
}

BaseClass.prototype.plus = function (...args) {
    this.data = args.reduce((acc, el) => acc + el, this.data);
    return this;
}

BaseClass.prototype.get = function () {
    return this.data;
}

class IntBuilder extends BaseClass {

    constructor(n) {
        super(n);
    }

    minus(...args) {
        this.data -= args.reduce((acc, el) => acc + el, 0);
        return this;
    }

    multiply(n = 1) {
        if (typeof n === "number") {
            this.data *= n;
        }
        return this;
    }

    divide(n = 1) {
        if (typeof n === "number") {
            this.data /= n;
        }
        return this;
    }

    mod(n = 1) {
        if (typeof n === "number") {
            this.data %= n;
        }
        return this;
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
}

function StringBuilder(str = "") {
    BaseClass.call(this, str);
}

StringBuilder.prototype = Object.create(BaseClass.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.minus = function (n = 0) {
    if (typeof n === "number") {
        this.data = this.data.slice(0, -n)
    }
    return this;
}
StringBuilder.prototype.multiply = function (n = 1) {
    if (typeof n === "number") {
        this.data = this.data.repeat(n);
    }
    return this;
}
StringBuilder.prototype.divide = function (n = 1) {
    if (typeof n === "number" && n !== 0) {
        let k = Math.floor(this.data.length / n);
        this.data = this.data.substr(0, k);
    }
    return this;
}
StringBuilder.prototype.remove = function (str = "") {
    str = str.toString();
    let len = str.length;
    let pos = this.data.search(str);
    let tmp = this.data.split("")
    tmp.splice(pos, len);
    this.data = tmp.join("");
    return this;
}
StringBuilder.prototype.sub = function (from = 0, n = 0) {
    this.data = this.data.substr(from, n);
    return this;
}
