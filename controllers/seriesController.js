let series = [
    { "id" : 1,
         "title" : "peli 1",
         "description" : "lorem",
         "url" : "hjmgh1",
         "category" : "comedia",
         "chapterSerie" : "1"
    },
    { "id" : 2,
         "title" : "peli 2",
         "description" : "ipsum",
         "url" : "fgsdfg2",
         "category" : "drama",
         "chapterSerie" : "2"
    },
    { "id" : 3,
         "title" : "peli 3",
         "description" : "otro",
         "url" : "sgsd3",
         "category" : "terror",
         "chapterSerie" : "3"
    },
    { "id" : 4,
         "title" : "peli 4",
         "description" : "ulti",
         "url" : "dfgdf4",
         "category" : "suspenso",
         "chapterSerie" : "4"
    }
  ]


const getSerie = (req, res) => {
    console.log('Se obtuvo el listado de series')
    res
    .status(200)
    .send(series)           //CHEQUEAR EL NOMBRE QUE SE OBTIENE DESDE LA BD
}

const getSerie1 = (req, res) => {
    console.log('Se obtuvo una serie')
    const searchSerie = series.find((series) => series.id === parseInt(req.params.id))
    if (!searchSerie) {
        return res
                .status(404)
                .send(`No se encontró la serie`)
    } return res
                .status(200)
                .send(searchSerie);
}

const postSerie = (req, res) => {
    console.log('Se agregó una serie')
    const newSerie = { ...req.body, id: series.length + 1 };
    series.push(newSerie);
    res
    .status(201)
    .send(`Se ha agregado una serie`)
}

const putSerie = (req, res) => {
    console.log('Se actualizó una serie')
    let dataSerie = req.body
    let updateSerie = series.find((series) => series.id === parseInt(req.params.id));
    if (!updateSerie) {
        return res
            .status(404)
            .send(`No se ha encontrado la serie a actualizar`)
    } series = series.map((series) => series.id === parseInt(req.params.id)
    ? {...series, ...dataSerie}
    : series
    );
    res
    .status(201)
    .send(`La serie se ha actualizado correctamente`)
}

const deleteSerie = (req, res) => {
    console.log('Se eliminó una serie')
    let serieDelete = series.find((series) => series.id === parseInt(req.params.id));
    if (!serieDelete) {
        return res
        .status(404)
        .send('No se encontró la serie a eliminar')
    }  series = series.filter((series) => series.id !== parseInt(req.params.id));
    res
    .status(201)
    .send('La serie ha sido eliminada')
}

module.exports = {
    getSerie,
    getSerie1,
    postSerie,
    putSerie,
    deleteSerie,
}