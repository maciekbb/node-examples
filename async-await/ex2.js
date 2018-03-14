const resolveAfter = (time) => {
    return new Promise(resolve => setTimeout(() => {
        console.log(`${time} passed...`)
        resolve()
    }, time))
}

// Never do that!
const waitForAllSeq = async (promises) => {
    if (promises.length === 0) {
       console.log("No more promises!")
       return Promise.resolve()
    }

    await promises[0]

    // Recursion?
    return waitForAllSeq(promises.slice(1))
}


const p1 = resolveAfter(1000)
const p2 = resolveAfter(2000)
const p3 = resolveAfter(3000)


waitForAllSeq([p1, p2, p3]).then(() => {
    console.log("All done!")
})