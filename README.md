# Failure Propagation Prototype

A static H5-style prototype for illustrating behaviour-taxonomy annotations in an agentic workflow.

The interface shows coordinator and expert execution blocks, lets annotators map behaviour mistakes to downstream affected blocks, and exports the current annotation as an interactive HTML file.

## Files

- `index.html` - main prototype page
- `styles.css` - visual styling for the execution blocks and annotation panels
- `app.js` - annotation logic, local persistence, relation drawing, and H5 export
- `tests/prototype-structure.test.ps1` - lightweight structure checks

## Usage

Open `index.html` in a browser. Add or edit mistake relations in the manual annotation panel, then use `Export H5` to generate a shareable interactive HTML file.
