// setup the vino views
async function setup() {
    await vinoStart([

        await newView('main', 'view1.html'),
        await newView('main2', 'view2.html')
        
    ]);
}
setup();