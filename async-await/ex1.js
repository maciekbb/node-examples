const resolveAfter = (time) => {
    return new Promise(resolve => setTimeout(() => {
        console.log(`${time} passed...`)
        resolve()
    }, time))
}

const p1 = resolveAfter(1000)
const p2 = resolveAfter(2000)
const p3 = resolveAfter(3000)

Promise.all([p1, p2, p3]).then(() => {
    console.log("All promises resolved!")
})