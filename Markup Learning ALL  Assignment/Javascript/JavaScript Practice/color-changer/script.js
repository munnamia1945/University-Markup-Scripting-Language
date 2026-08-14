function changeColor() {
    let colors = ["lightblue", "lightgreen", "lightyellow", "lightpink"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
