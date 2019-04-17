class Renderer {

renderSelectedBaby(babyName){
    let source = $('#babySelected-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({name: babyName[babyName.length-1].name})
    $('#savedName-container').empty().append(newHTML)
}

renderBabyList(babyNames){
    let source = $('#babyList-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({babyNames})
    $('#babyList-container').empty().append(newHTML)
}

render(name){
    this.renderSelectedBaby(name)
}

renderGuests(guests){
    let source = $('#guests-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({guests})
    $('#guests-container').empty().append(newHTML)
}

renderTasks(tasks){
    let source = $('#todolist-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({tasks})
    $('#task-container').empty().append(newHTML)
}

}