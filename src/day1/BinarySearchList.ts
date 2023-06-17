export default function bs_list(haystack: number[], needle: number): boolean {
    // note: [l, h)
    let low: number = 0
    let high: number = haystack.length;

    do {

        const mid: number = Math.floor(low + (high - low) / 2)
        const v: number = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            high = mid;
        } else if (v < needle) {
            low = mid + 1;
        }
    } while (low !== high);

    return false
}