interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

function swim(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        (animal as Fish).swim();
    } else {
        (animal as Cat).run();
    }
}

const tom: Cat = {
    name: 'Tom',
    run() {
        console.log('run');
    },
};
swim(tom);

/**
 * =============================================
 */

class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}
function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}

interface ApiErrorX extends Error {
    code: number;
}
interface HttpErrorX extends Error {
    statusCode: number;
}
function isApiErrorX(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

/**
 * ======================================
 */

(window as any).foo = 1;

function getCacheData(key: string): any {
    return (window as any).cache[key];
}
interface Cat {
    name: string;
    run(): void;
}
const tomx = getCacheData('tom') as Cat;
tomx.run();

/**
 * =====================================
 */

interface Animal {
    name: string;
}

interface Cat {
    name: string;
    run(): void;
}

interface Animalx {
    name: string;
}
interface Catx extends Animal {
    run(): void;
}

let tomxx: Cat = {
    name: 'Tom',
    run: () => {
        console.log('run');
    },
};
let animal: Animal = tomxx;

function testAnimal(animal: Animal) {
    return animal as Cat;
}
function testCat(cat: Cat) {
    return cat as Animal;
}

/**
 * ======================================
 */

interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCatz(cat: Cat) {
    return (cat as any) as Fish;
}

/**
 * =====================================
 */

function toBoolean(something: any): boolean {
    return something as boolean;
}
toBoolean(1); // 1

function toBooleanx(something: any): boolean {
    return Boolean(something);
}
toBooleanx(1); // true

/**
 * =====================================
 */

function getCacheDataz(key: string): any {
    return (window as any).cache[key];
}

interface Catz {
    name: string;
    run(): void;
}

const tomz: Catz = getCacheDataz('tom');
tomz.run();

/**
 * =======================================
 */
function getCacheDatac<T>(key: string): T {
    return (window as any).cache[key];
}

interface Catc {
    name: string;
    run(): void;
}

const tomc = getCacheDatac<Catc>('tom');
tomc.run();
