var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("I'm Rayhan Al Shorif")
    .pauseFor(2500)
    .deleteAll()
    .typeString('Full Stack Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Working In Laravel Framework')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Working In Laravel Framework')
    .pauseFor(2500)
    .start();