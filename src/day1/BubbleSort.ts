export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp: number = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }

        }

    }
}