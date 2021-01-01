const interval = setInterval(() => {
    const now = new Date();

    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR');

    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
}, 1000);

VanillaTilt.init(document.querySelectorAll(".calculator"), {
    max: 20,
    speed: 350,
    perspective: 700,
    transition: true,
    glare: true,
    "max-glare": 0.2

});
