
// ちょ～適当

const imageGen = (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.fillStyle = document.querySelector("#color").value;
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
