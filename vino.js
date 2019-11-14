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
// change hash will change the url if true
function display(viewName, changeHash = true) {
    if (!changeHash) {
        const found = views.find(v => v.name == viewName);
        document.getElementById("$vino").innerHTML = found.content;
    } else {
        window.location.hash = "#" + viewName;
    }
}

// sets up the vino pages app
// pass an array of views to this function to start
async function vinoStart(vs) {
    // merge the arrays
    Array.prototype.push.apply(views, vs);
    const def = document.getElementById("$vino").getAttribute("vino-default");
    // load either the default view or the supplied hash url
    if (!window.location.hash) {
        window.location.hash = "#" + def;
    } else {
        hashChanged();
    }
}
// is called when the hash in the url is changed,
// and then displays the correct view
function hashChanged() {
    var hash = window.location.hash.substring(1);
    display(hash, false);
}
window.onhashchange = hashChanged;