const stations = {}
const states = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']

stations['kone'] = new Set(['id', 'nv', 'ut'])
stations['ktwo'] = new Set(['wa', 'id', 'mt'])
stations['kthree'] = new Set(['or', 'nv', 'ca'])
stations['kfour'] = new Set(['nv', 'ut'])
stations['kfive'] = new Set(['ca'])

const choseBestCoverage = (stations, states) => {
    let statesNeeded = new Set(states)
    const finalStations = new Set()

    while (statesNeeded.size) {
        let bestStation = null
        let statesCovered = new Set()

        for (let station in stations) {
            const covered = new Set([...statesNeeded].filter(state => stations[station].has(state)))

            if (covered.size > statesCovered.size) {
                bestStation = station
                statesCovered = covered
            }
        }

        if (!bestStation) return {finalStations}

        statesNeeded = new Set([...statesNeeded].filter(state => !statesCovered.has(state)))
        finalStations.add(bestStation)
    }

    return {finalStations}
}

console.log(choseBestCoverage(stations, states));