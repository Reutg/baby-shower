class Renderer {

renderSelectedBaby(babyName){
    let source = $('#babySelected-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({name: babyName[babyName.length-1].name})
    $('#savedName-container').empty().append(newHTML)
}

renderBabyList(babynames){
    let source = $('#babyList-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({babynames})
    $('#babyList-container').empty().append(newHTML)
}

render(name){
    this.renderBabyList(name)
    this.renderSelectedBaby(name)
}

}