const graph = {}

graph.start = {}
graph.start.a = 5
graph.start.b = 2

graph.a = {}
graph.a.c = 4
graph.a.d = 2

graph.b = {}
graph.b.a = 8
graph.b.d = 7

graph.c = {}
graph.c.fin = 3
graph.c.d = 6

graph.d = {}
graph.d.fin = 1

graph.fin = {}

const search = (graph) => {
    const processed = []
    const costs = {}
    const parents = {}

    for (let n in graph.start) {
        costs[n] = graph.start[n]
        parents[n] = 'start'
    }

    for (let n in graph) {
        if (n !== 'start' && costs[n] === undefined) {
            costs[n] = Infinity
            parents[n] = null
        }
    }

    let node = findLowestCostNode(costs)

    while (node) {
        const cost = costs[node]
        const neighbors = graph[node]

        for (let n in neighbors) {
            const newCost = cost + neighbors[n]

            if (costs[n] > newCost) {
                costs[n] = newCost
                parents[n] = node
            }
        }
        processed.push(node)
        node = findLowestCostNode(costs)
    }

    return {costs, parents}

    function findLowestCostNode(costs) {
        let lowestCost = Infinity
        let lowestCostNode = null

        for (let node in costs) {
            const cost = costs[node]
            if (cost < lowestCost && !processed.includes(node)) {
                lowestCost = cost
                lowestCostNode = node
            }
        }
        return lowestCostNode
    }
}

console.log(search(graph))