const stage = document.querySelector('.stage');
const image_data = document.querySelector('.images')

function render(room) {
    stage.innerHTML = '';
    stage.style.gridTemplateColumns = `repeat(${room.width}, 1fr)`;
    stage.style.gridTemplateRows = `repeat(${room.height}, 1fr)`;

    for (y = 0; y < bedroom.tile_data.length; y++) {
        for (x = 0; x < bedroom.tile_data[y].length; x++) {
            let image_path = tile_data[bedroom.tile_data[y][x]].image;
            let img = document.createElement('img');
            img.src = image_path;
            img.style.width = `32px`;
            stage.appendChild(img);
        }
    }
}