function getManagers() {
    console.log("getManagers");
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/managers';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = () => {
        updateElement('managers', Http.responseText);
    }
}

function updateElement(id, text){
    document.getElementById(id).innerHTML = text; 
}
