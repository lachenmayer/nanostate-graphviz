# nanostate-graphviz

Proof of concept for visualizing a [nanostate](https://www.npmjs.com/package/nanostate) as a graphviz graph.
Doesn't currently handle anything except very simple state machines (ie. no submachines, or parallel).

## Usage:

1. Download the repo
2. Install dependencies using `npm`/`yarn`.
3. Run `node index.js`.
4. Your browser will open at `http://localhost:1234` with an example graph.
5. Edit the `nanostate` machine in `index.js` to draw a different graph.
