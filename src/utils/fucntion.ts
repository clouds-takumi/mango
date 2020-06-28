function func1(x: number, y: number): number {
    return x + y;
}
func1(2, 3);

let func2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
};
func2(2, 3);

let func22: (x: number, y: number) => number;
func22 = function(x: number, y: number): number {
    return x + y;
};
func22(2, 3);

let func3: (x: string) => void = x => {
    console.log('x');
};
func3('x');

let func33: (x: string) => void;
func33 = x => {
    console.log('x');
};
func33('x');

/**
 * ====================================================================
 */
interface X {
    name: string;
    age: number;
}

function a0(param: X) {
    return param.name;
}

interface SearchFunc {
    (source: string, target: string): boolean;
}

let a1: SearchFunc = function(source, target) {
    return source.search(target) !== -1;
};

let a2: SearchFunc = (source, target) => {
    return source.search(target) !== -1;
};

let func4: SearchFunc, func5: SearchFunc;
func4 = function(source: string, target: string) {
    return source.search(target) !== -1;
};
func4('abc', 'a');
func5 = (source, target) => {
    return source.search(target) !== -1;
};
func5('abc', 'a');

/**
 * ====================================================================
 */
function f1(x: number) {
    return x;
}

function f2(firstName: string, lastName?: string) {
    return firstName;
}
f2('x');

function f3(firstName: string, lastName: string = 'ccc') {
    return firstName + ' ' + lastName;
}
f3('x');

function f4(lastName: string = 'ccc', firstName: string, name?: string) {
    return firstName + ' ' + lastName;
}
f4(undefined, 'xx');
f4('x', 'xx');
f4('x', 'xx', 'xxx');

function f5(firstName: string, lastName: string = 'ccc', name?: string) {
    return firstName + ' ' + lastName;
}
f5('x');
f5('x', 'xx');
f5('x', 'xx', 'xxx');

/**
 * ====================================================================
 */

function append(arr: any[], ...items: any[]) {
    items.forEach(item => {
        arr.push(item);
    });
}
let a: [] = [];
append(a, 1, 2, 3);

/**
 * ====================================================================
 */

function reverse(x: number | string): number | string {
    let dst: number | string = 0 || '';
    if (typeof x === 'number') {
        dst = Number(
            x
                .toString()
                .split('')
                .reverse()
                .join(''),
        );
    } else if (typeof x === 'string') {
        dst = x
            .split('')
            .reverse()
            .join('');
    }
    return dst;
}

let r: (x: number | string) => number | string = x => {
    if (typeof x === 'number') {
        return Number(
            x
                .toString()
                .split('')
                .reverse()
                .join(''),
        );
    } else if (typeof x === 'string') {
        return x
            .split('')
            .reverse()
            .join('');
    }
    return 0 || '';
};

function reversex(x: number): number;
function reversex(x: string): string;
function reversex(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(
            x
                .toString()
                .split('')
                .reverse()
                .join(''),
        );
    } else if (typeof x === 'string') {
        return x
            .split('')
            .reverse()
            .join('');
    }
    return 0 || '';
}
