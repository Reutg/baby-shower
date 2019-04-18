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
renderDate(date){
    let source = $('#date-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({date: date})
    $('#dateConainer').empty().append(newHTML)
}

renderBudget(budget){
    let source = $('#budget-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template({budget: budget[0].budget})
    $('#budget-container').empty().append(newHTML)
}
}
