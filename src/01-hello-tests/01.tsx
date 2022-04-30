export function sum(a: number, b: number) {
    return a + b
}


export function multi(a: number, b: number) {
    return a * b
}

export function splitIntoWards(sentence: string) {
    const words = sentence.toLowerCase().split(" ")
    return words.filter(w => w !== "")
        .map(w => w.replace("!", ""))
        .map(w => w.replace(".", ""))

}
