function AddSpace(countLength: number, maxLength: number): string {
    return ' '.repeat(maxLength - countLength + 1).toString()
}

function AddSeperator(length: number) {
    return '-'.repeat(length);
}

function Draw(array: number[][]) {
    const count = array.length;
    const log = console.log;
    const maxLength = count.toString().length;

    if (count !== 0) {
        const head = array[0].map((value, i) => {
            return AddSpace(value.toString().length, array[count - 1][i].toString().length) + value.toString()
        })
            .join('')
        log(`${AddSpace(1, maxLength - 1)}N |` + head);
        log(`${AddSeperator(maxLength + 1)}|` + AddSeperator(head.length));
    }

    for (let index = 0; index < count; index++) {
        log(
            AddSpace(array[index][0].toString().length, maxLength - 1)
            + array[index][0]
            + " |"
            + array[index]
                .map((value, i) => {
                    return AddSpace(value.toString().length, array[count - 1][i].toString().length) + value.toString()
                })
                .join('')
        );
    }
    log('\n');
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


multiplicationTable(0);
multiplicationTable(1);
multiplicationTable(5);
multiplicationTable(10);
multiplicationTable(15);
