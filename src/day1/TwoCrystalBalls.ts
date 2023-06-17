export default function two_crystal_balls(breaks: boolean[]): number {
    const mid = Math.floor(breaks.length / 2);
    const v = breaks[mid];

    let step = Math.floor(Math.sqrt(breaks.length));

    let i = step;

    for (; i < breaks.length; i += step) {
        if (breaks[i]) {
            break;
        }
    }

    for (let j = i - step; j < i; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    // naive solution:
    // if (v) {
    //     for (let i = 0; i < mid - 1; i++) {
    //         if (breaks[i]) {
    //             return i;
    //         }
    //     }
    // } else {
    //     for (let i = mid + 1; i < breaks.length; i++) {
    //         if (breaks[i]) {
    //             return i;
    //         }

    //     }
    // }

    return -1;
}