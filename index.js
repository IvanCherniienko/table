let background = document.getElementsByClassName("background")
let massive = Array.from(background)

for (let i = 0; i < massive.length; i++) {
    const element = massive[i];
    element.style.backgroundColor = 'red'
}

