
// ちょ～適当

const colorCodeToCSS = (colorCode, alpha) => {
    const red = colorCode.slice(1, 3), green = colorCode.slice(3, 5), blue = colorCode.slice(5, 7);
    return "rgba("+parseInt(red, 16)+","+parseInt(green, 16)+","+parseInt(blue, 16)+","+alpha+")";
}

const imageGen = (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.fillStyle = colorCodeToCSS(document.querySelector("#color").value, document.querySelector("#alpha").value);
    context.fillStyle
    context.fillRect(0, 0, width, height);
    
    let name = document.querySelector("#name").value.replace(/\.png/g, '');
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = name+".png";
    link.click();
}

const gen = () => {
    imageGen(document.querySelector("#width").value,document.querySelector("#height").value);
}

const update = () => {
    document.querySelector(".resolution").innerHTML = document.querySelector("#width").value + " x " + document.querySelector("#height").value;
    document.querySelector(".draw-area").setAttribute("style",
        "background-color: " + colorCodeToCSS(document.querySelector("#color").value, document.querySelector("#alpha").value) + ";"
    );
}

const originUpdate = (value) => {
    document.querySelector("#alphaPer").value = value * 100;
    document.querySelector("#alphaRange").value = value * 100;
}
document.querySelector("#alpha").addEventListener("input", (e) => {
    originUpdate(e.target.value);
});

const perUpdate = (value) => {
    document.querySelector("#alpha").value = value / 100;
    document.querySelector("#alphaRange").value = value * 1;
}
document.querySelector("#alphaPer").addEventListener("input", (e) => {
    perUpdate(e.target.value);
});

const rangeUpdate = (value) => {
    document.querySelector("#alphaPer").value = value * 1;
    document.querySelector("#alpha").value = value / 100;
}
document.querySelector("#alphaRange").addEventListener("input", (e) => {
    rangeUpdate(e.target.value);
});

document.querySelectorAll("input").forEach(e => {
    e.addEventListener("input", update);
});

update();