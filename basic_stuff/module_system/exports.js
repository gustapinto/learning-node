const obj = {
    id: 1,
    label: 'export object :D'
}

const newObj = {
    id: 2,
    label: 'not so happy export object :|'
}

// Export the created objects using the Node module system
module.exports = {
    obj,
    newObj
}