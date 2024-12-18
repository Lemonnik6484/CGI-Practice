let dateElement = document.getElementById("date");

function updateDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    dateElement.innerText = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateDate, 1000);

fetch('./photos.json')
.then(responce => responce.json())
.then(data => {
    genTable(data);
    console.log(data)
})
.catch(error => {
    console.error(error);
})

function genTable(data) {
    let table = document.createElement("table");

    Object.keys(data).forEach(line => {
        console.log(line)
        let row = table.insertRow();
        Object.keys(data[line]).forEach(photoKey => {
            console.log(photoKey)
            let photo = data[line][photoKey];

            let Cell = row.insertCell();
            let img = document.createElement("img");
            img.src = photo.image;
            img.alt = photo.desc;
            
            let desc = document.createElement("p");
            desc.classList.add("center");
            desc.innerText = photo.desc;

            Cell.appendChild(img);
            Cell.appendChild(desc);
        })
    })

    document.getElementById("data-center").appendChild(table);
}