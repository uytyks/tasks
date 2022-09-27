/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        const oneE = [...numbers, ...numbers];
        return oneE;
    } else {
        const twoE = [numbers[0], numbers[numbers.length - 1]];
        return twoE;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((n: number): number => n * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((s: string): number => Number(s));
    const intsN = ints.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return intsN;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nums = amounts.map((s: string): string => s.replace("$", ""));
    const ints = nums.map((s: string): number => Number(s));
    const intsN = ints.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return intsN;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQues = messages.filter(
        (m: string): boolean => m.lastIndexOf("?") !== m.length - 1
    );
    const shouts = noQues.map((m: string): string =>
        m.lastIndexOf("!") === m.length - 1 ? m.toUpperCase() : m
    );
    return shouts;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const small = words.filter((m: string): boolean => m.length < 4);
    return small.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const colorCount = colors.reduce(
        (n: number, c: string) =>
            c === "red" || c === "blue" || c === "green" ? n + 1 : n,
        0
    );
    if (colorCount === colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((s: number, a: number) => s + a, 0);
    if (addends.length === 0) {
        return "0=0";
    }
    const sumString = addends.reduce(
        (s: string, a: number) => (s === `${sum}=` ? s + `${a}` : s + `+${a}`),
        `${sum}=`
    );
    return sumString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negatives = values.filter((value: number): boolean => value < 0);
    if (negatives.length < 1) {
        const sum = values.reduce((sum: number, i: number) => sum + i, 0);
        const fin = [...values, sum];
        return fin;
    } else {
        const n = values.indexOf(negatives[0]);
        const sumarr = values.slice(0, n);
        const addSum = sumarr.reduce((sum: number, i: number) => sum + i, 0);
        const final = [...values];
        final.splice(n + 1, 0, addSum);
        return final;
    }
}
