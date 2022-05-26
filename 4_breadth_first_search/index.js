const Queue = require('./que_class')

const graph = {}

graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

const search = (name) => {
    const searchQueue = new Queue()
    searchQueue.addItems(graph[name])
    const searched = [name]

    while (!searchQueue.isEmpty) {
        const person = searchQueue.dequeue()
        if (!searched.includes(person)) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller!`)
                return true
            }
            searchQueue.addItems(graph[person])
            searched.push(person)
        }
    }
    return false
}

console.log(search('you'))

function personIsSeller(name) {
    return name.slice(-1) === 'm'
}