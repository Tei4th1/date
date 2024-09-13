const output = document.getElementById("output")
const fullBtn = document.getElementById("full")
const dateBtn = document.getElementById("date")
const timeBtn = document.getElementById("time")
let mode = 'full'
const now = new Date()

function bindMode(name) {
    return function() {
        mode = name 
        update()
    }
}
fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

function update() {
    output.textContent = format(mode)
}

update()

setInterval(update, 1000)

function format(formatMode) {
    switch(formatMode) {
        case 'time':
             return now.toLocaleTimeString()
        case 'date':
             return now.toLocaleDateString()
        case 'full':
             return now.toLocaleDateString() + ' ' +  now.toLocaleTimeString()
        default: return now.toLocaleDateString     
    }
}