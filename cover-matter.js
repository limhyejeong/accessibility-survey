const canvas = document.querySelector('.canvas')

window.addEventListener('load', () => {
    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create(), world = engine.world;

    // create a renderer
    var render = Render.create({
        element: canvas,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            showAngleIndicator: false,
            wireframes: false,
            background: 'rgb(255,255,255)',
            pixelRatio: window.devicePixelRatio
        }
    });

    // run the renderer
    Render.run(render);

    // add bodies
    var offset = 0,
        options = {
            isStatic: true,
            render: {
                // fillStyle: 'white',
                // strokeStyle: 'white',
            }
        };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        Bodies.rectangle(400, 0, window.innerWidth, 10, options),
        Bodies.rectangle(500, 600, window.innerWidth, 10, options),
        Bodies.rectangle(window.innerHeight, 300, 10, window.innerHeight, options),
        Bodies.rectangle(0, 300, 10, window.innerHeight, options)
    ]);

    var size = 100;
    if (window.innerWidth < 1024) {
        size = 50
    }
    var fillColor = '';

    var stack = Composites.stack(20, 20, 4, 3, 0, 0, function (x, y) {
        var random = Common.random();
        if (random > 0.6) {
            fillColor = '#4156cb';
        } else if (random > 0.3) {
            fillColor = '#5980db';
        } else {
            fillColor = '#5ecac9';
        }
        return Bodies.circle(x, y, size, {
            render: {
                fillStyle: fillColor,
            }
        })
    });

    Composite.add(world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 1000, y: 600 }
    });

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
})