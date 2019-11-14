/**
 * Vino Axon Technologies
 * Matthew Kleitz, 2019
 */
const views = [];

// load the text of a page
async function newView(name, filePath) {
    var html = await (await fetch(filePath)).text();
    view = {
        name: name,
        content: html
    }
    return view;
}
// displays a view of a given name
function display(viewName) {
    const found = views.find(v => v.name == viewName);
    document.getElementById("$vino").innerHTML = found.content;
}

// sets up the vino pages app
// pass an array of views to this function to start
async function vinoStart(vs) {
    // merge the arrays
    Array.prototype.push.apply(views, vs);
    const def = document.getElementById("$vino").getAttribute("vino-default");
    display(def);
}