// f: (x : T[]) -> T[]

const resolveAfter = (time, result) => {
    return new Promise(resolve => setTimeout(() => {
        console.log(`${time} passed...`)
        resolve(result)
    }, time))
}



const flatten = (arr) => {
    if (arr.length === 0) {
        return []
    }

    if(Array.isArray(arr[0])) {
        return [...flatten(arr[0]), ...flatten(arr.slice(1))]
    }

    return [arr[0], ...flatten(arr.slice(1))]
}


const p1 = resolveAfter(500, [1, 2, 3])
const p2 = Promise.reject(new Error("booo..."))
const p3 = resolveAfter(1000, [7, 8, 9])

Promise.all(
    [p1, p2, p3].map((p) => p.catch((e) => []))
).then((...res) => {
    console.log(flatten(res))
})

// Task
// 1. Fetch data from multiple APIs in parallel
// 2. Write flatMap