function AddSpace(countLength: number, maxLength: number): string {
    return ' '.repeat(maxLength - countLength).toString()
}


function Draw(array: number[][]) {
    const count = array.length;
    const log = console.log;
    const maxLength = array.length.toString().length;

    if (count !== 0) {
        log(`${AddSpace(1, maxLength)}N | ` + array[0].join("\t"));
        log(`${AddSpace(1, maxLength)}  | ` + Array(count).fill('-').join("\t"));
    }

    for (let index = 0; index < array.length; index++) {
        log(`${AddSpace(array[index][0].toString().length, maxLength) + array[index][0]} | ` + array[index].join("\t"));
    }

    
}

function CreateMatrix(size: number): number[][] {
    return Array<number[]>
        .from(Array(size),
            (_, index) =>
                Array<number>
                    .from({ length: size }, (_, i) => (i + 1) * (index + 1))

        );
}


function multiplicationTable(size: number) {
    Draw(CreateMatrix(size));
}

//O(2*n^2)
//M(n^2)
multiplicationTable(5);


