const http = require('http')
const nanostate = require('nanostate')
const open = require('opn')
const Viz = require('viz.js')

const machine = nanostate('green', {
  green: { timer: 'yellow' },
  yellow: { timer: 'red' },
  red: { timer: 'green' },
})

function toDot(machine) {
  let lines = ['digraph G {']
  const { transitions } = machine
  for (let [from, transition] of Object.entries(transitions)) {
    for (let [label, to] of Object.entries(transition)) {
      lines.push(`${quote(from)} -> ${quote(to)} [label=${quote(label)}];`)
    }
  }
  lines.push(`${quote(machine.state)} [shape=doublecircle];`)
  lines.push('}')
  return lines.join('\n')
}

function quote(name) {
  return JSON.stringify(name)
}

function graph(machine, format = 'svg') {
  const dot = toDot(machine)
  const svg = Viz(dot, { format })
  return svg
}

http
  .createServer((req, res) => {
    res.end(graph(machine))
  })
  .listen(1234, () => {
    open('http://localhost:1234')
  })
