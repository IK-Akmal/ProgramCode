type ArrFunction = (arr: number[]) => number[]

function Compare(...fns: ArrFunction[]) {
    return (arg: number[]) => {
        return fns.reduce((composed, fn) => fn(composed), arg);
    }
}



function ExitCondition(preLength: number, compare: ArrFunction) {

    return function (array: number[]) {
        if (array.length <= 1 || array.length === preLength) {
            return array;
        }
        else {
            return compare(array);
        }
    }

}

function Reverse(array: number[]) {
    return array.map(value => Number([...value.toString()].reverse().join('')));
}

function Square(array: number[]) {
    return array.map(value => value * value);
}
function OutputInConsole(array: number[]) {
    console.log(array);

    return array;
}

function NumberToArrayDigit(a: number): number[] {
    const array: number[] = [];
    do {
        array.push(a % 10);
        a = Math.trunc(a / 10);
    } while (a >= 1)

    return array;
}



function IsIntersection(a: number, b: number): boolean {
    const argA = NumberToArrayDigit(Math.abs(a));
    const argB = NumberToArrayDigit(Math.abs(b));
    return argA.some((a) => argB.includes(a));
}




function Coincidences(array: number[]) {
    const deleteIndexs = new Map<number, number>();
    let flag = false;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (!(deleteIndexs.has(i) || deleteIndexs.has(j)) && IsIntersection(array[i], array[j])) {
                flag = true
                deleteIndexs.set(j, j);
            }
        }

        if (flag) {
            deleteIndexs.set(i, i);
            flag = false;
        }
    }



    return array.filter((_, index) => !deleteIndexs.has(index));
}


function Sort(array: number[]): number[] {
    return [...array].sort((a, b) => a - b);
}

function main(array: number[]) {
    const preLength = array.length
    return Compare(
        Sort,
        Coincidences,
        OutputInConsole,
        ExitCondition(
            preLength,
            Compare(
                Reverse,
                Square,
                main
            )
        )
    )(array)
}

main([41, 55, 61, 1, 8, 27, 37, 39]);
main([-41, 55, 61, 1, 8, -27, 37, 39]);
