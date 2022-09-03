
// ちょ～適当

const imageGen = (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0,0,width,height);
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "empty.png";
    link.click();
}

const gen = () => {
    imageGen(document.querySelector("#width").value,document.querySelector("#height").value);
}
