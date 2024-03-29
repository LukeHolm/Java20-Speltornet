{/*Testobjekt för att spara ner data*/}
const formObject = {
    minTitel: "Speltitel",
    bytesTitel: "Annan speltitel",
    rubrik: "text",
    slitage: true,
    komponentSaknas: true,
    hälsning: "text"
}

{/*Komponent för att spara data:
Obs!! Se föreläsning 3 med Henning för ett annat sätt att skirva med fetch*/}
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

download(JSON.stringify(formObject), "data.json", "application/json");