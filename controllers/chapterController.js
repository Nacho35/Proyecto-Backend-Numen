const getChapter = (req, res) => {
    console.log('Se obtuvo el listado de capitulos')
    res
    .status(200)
    .send(chapters)           //CHEQUEAR EL NOMBRE QUE SE OBTIENE DESDE LA BD
}

const getChapter1 = (req, res) => {
    console.log('Se obtuvo un capítulo')
    const searchChapter = chapters.find((chapters) => chapters.id === parseInt(req.params.id))
    if (!searchChapter) {
        return res
                .status(404)
                .send(`No se encontró el capitulo`)
    } return res
                .status(200)
                .send(searchChapter);
}

const postChapter = (req, res) => {
    console.log('Se agregó un capítulo')
    const newChapter = { ...req.body, id: chapters.length + 1 };
    chapters.push(newChapter);
    res
    .status(201)
    .send(`Se ha agregado un capítulo`)
}

const putChapter = (req, res) => {
    console.log('Se actualizó un capítulo')
    let dataChapter = req.body
    let updateChapter = chapters.find((chapters) => chapters.id === parseInt(req.params.id));
    if (!updateChapter) {
        return res
            .status(404)
            .send(`No se ha encontrado el capítulo a actualizar`)
    } chapters = chapters.map((chapters) => chapters.id === parseInt(req.params.id)
    ? {...chapters, ...dataChapter}
    : chapters
    );
    res
    .status(201)
    .send(`El capitulo se ha actualizado correctamente`)
}

const deleteChapter = (req, res) => {
    console.log('Se eliminó un capitulo')
    let chapterDelete = chapters.find((chapters) => chapters.id === parseInt(req.params.id));
    if (!chapterDelete) {
        return res
        .status(404)
        .send('No se encontró el capítulo a eliminar')
    }  chapters = chapters.filter((chapters) => chapters.id !== parseInt(req.params.id));
    res
    .status(201)
    .send('el capítulo ha sido eliminada')
}

module.exports = {
    getChapter,
    getChapter1,
    postChapter,
    putChapter,
    deleteChapter,
}