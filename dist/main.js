let renderer = new Renderer()
const manager = new Manager()

const loadPage = async function () {
    await manager.getBabyFromDB()
    renderer.render(manager.baby)
    if(manager.date){
        //never gets here
        loadDate()
    }

}

const loadDate = async function(){
    await manager.getDateFromDB()
    renderer.renderDate(manager.date)
}

const loadGuests = async function () {
    await manager.getGuestsFromDB()
    renderer.renderGuests(manager.guests)

}

const loadTasks = async function(){
    await manager.getTasksFromDB()
    renderer.renderTasks(manager.tasks)

}

const loadBudget = async function(){
    await manager.getBudget()
    renderer.renderBudget(manager.budget)
}

$('#buttonSave').on('click', async function(){
    let inputName = $("#inputName").val()
    let baby = await manager.saveBaby(inputName)
    await manager.getBabyFromDB()
    renderer.render(manager.baby)
})

const searchName = async function () {
    let inputGender = $("#inputGender").val()
    let inputPopular = $("#inputPopular").val()
    let inputFL = $("#inputFL").val()
    await manager.getNameSuggestions(inputFL, inputPopular, inputGender)
    console.log(manager.babiesList)
    renderer.renderBabyList(manager.babiesList)
}

$('#addGuest').on('click', async function () {
    let guestInput = $('#inputGuest').val()
    await manager.saveGuest(guestInput)
    renderer.renderGuests(manager.guests)
})


$('#guests-container').on('click','#rsvp-guest', async function(){
    let guestID = $(this).closest('.guest').data().id
    await manager.rsvpGuest(guestID)
    renderer.renderGuests(manager.guests)
})

$('#guests-container').on('click','#remove-guest' ,async function(){
    let guestID = $(this).closest('.guest').data().id
    await manager.removeGuest(guestID)
    renderer.renderGuests(manager.guests)
})


$('#guests-container').on('click','#add-note' , async function(){
    let guestID = $(this).closest('.guest').data().id
    $(`[data-id='${guestID}']`).find('.notes').append('<div class="row"><input class="col s10 note-input"><button id="save-noteInput" class="col s2 waves-effect btn-flat"><i class="far fa-save"></i></button></div>')
})



$('#guests-container').on('click','#save-noteInput', async function(){
    let noteInput = $(this).closest('.guest').find('.note-input').val()
    let guestID = $(this).closest('.guest').data().id
    await manager.saveNote(noteInput, guestID)
    renderer.renderGuests(manager.guests)
})

$('#addTask').on('click', async function(){
    let taskInput = $('#inputTask').val()
    let costInput= $('#inputCost').val()
    console.log(costInput)
    await manager.saveTasks(taskInput,costInput)
    renderer.renderTasks(manager.tasks)
})

$('#task-container').on('click', '.checked-task', async function(){
    let taskID = $(this).closest('.task').data().id
    await manager.checkedTask(taskID)
    renderer.renderTasks(manager.tasks)
})

$('#task-container').on('click', '.remove-task' ,async function(){
    let taskID = $(this).closest('.task').data().id
    await manager.removeTask(taskID)
    renderer.renderTasks(manager.tasks)
})

$('#save-budget').on('click', async function(){
    let budgetInput = $("#budgetInput").val()
    await manager.saveBudget(budgetInput)
    renderer.renderBudget(manager.budget)
})


$('.saveDate').on('click', async function () {
    let dateInput = $('#date-input').val()
    // console.log(dateInput)
    await manager.saveDate(dateInput)
    console.log(manager.date)
    renderer.renderDate(manager.date)
})
let fullBudget = manager.budget
let sum =

loadPage()
loadGuests()
loadTasks()
loadBudget()