let renderer = new Renderer()
const manager = new Manager()

const loadPage = async function(){
    await manager.getBabyFromDB()
    renderer.render(manager.baby)
}

const loadGuests = async function(){
    await manager.getGuestsFromDB()
    renderer.renderGuests(manager.guests)

}

const loadTasks = async function(){
    await manager.getTasksFromDB()
    renderer.renderTasks(manager.tasks)

}

$('#buttonSave').on('click', async function(){
    let inputName = $("#inputName").val()
    let baby = await manager.saveBaby(inputName)
    await manager.getBabyFromDB()
    renderer.render(manager.baby)
}) 

const searchName = async function(){
    let inputGender = $("#inputGender").val()
    let inputPopular = $("#inputPopular").val()
    let inputFL = $("#inputFL").val()
    await manager.getNameSuggestions(inputFL,inputPopular,inputGender)
    console.log(manager.babiesList)
    renderer.renderBabyList(manager.babiesList)
}

$('#addGuest').on('click', async function(){
    let guestInput = $('#inputGuest').val()
    await manager.saveGuest(guestInput)
    renderer.renderGuests(manager.guests)
})

$('#guests-container').on('click', '.rsvp-guest', async function(){
    let guestID = $(this).closest('.guest').data().id
    await manager.rsvpGuest(guestID)
    renderer.renderGuests(manager.guests)
})
$('#guests-container').on('click', '.remove-guest' ,async function(){
    let guestID = $(this).closest('.guest').data().id
    await manager.removeGuest(guestID)
    renderer.renderGuests(manager.guests)
})

$('#guests-container').on('click', '.add-note' , async function(){
    let guestID = $(this).closest('.guest').data().id
    $(`[data-id='${guestID}']`).append('<input class="note-input"><button id="save-noteInput">save</button>')
})


$('#guests-container').on('click', '#save-noteInput', async function(){
    let noteInput = $(this).closest('.guest').find('.note-input').val()
    let guestID = $(this).closest('.guest').data().id
    await manager.saveNote(noteInput,guestID)
    renderer.renderGuests(manager.guests)
})

$('#addTask').on('click', async function(){
    let taskInput = $('#inputTask').val()
    await manager.saveTasks(taskInput)
    renderer.renderTasks(manager.tasks)
})

$('#task-container').on('click', '.checked-task', async function(){
    debugger
    let taskID = $(this).closest('.task').data().id
    await manager.checkedTask(taskID)
    renderer.renderTasks(manager.tasks)
})

$('#task-container').on('click', '.remove-task' ,async function(){
    debugger
    let taskID = $(this).closest('.task').data().id
    await manager.removeTask(taskID)
    renderer.renderTasks(manager.tasks)
})

// $('#tasks-container').on('click', '.cost-task' , async function(){
//     let taskID = $(this).closest('.task').data().idTask
//     $(`[data-idTask='${taskID}']`).append('<input class="cost-input" placeholder="$$$"><button id="save-costInput">save</button>')
// })

loadPage()
loadGuests()
loadTasks()