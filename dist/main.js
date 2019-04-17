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

$('#buttonSave').on('click', async function () {
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

$('#guests-container').on('click', '.rsvp-guest', async function () {
    let guestID = $(this).closest('.guest').data().id
    await manager.rsvpGuest(guestID)
    renderer.renderGuests(manager.guests)
})
$('#guests-container').on('click', '.remove-guest', async function () {
    let guestID = $(this).closest('.guest').data().id
    await manager.removeGuest(guestID)
    renderer.renderGuests(manager.guests)
})

$('#guests-container').on('click', '.add-note', async function () {
    let guestID = $(this).closest('.guest').data().id
    $(`[data-id='${guestID}']`).append('<input class="note-input"><button id="save-noteInput">save</button>')
})


$('#guests-container').on('click', '#save-noteInput', async function () {
    let noteInput = $(this).closest('.guest').find('.note-input').val()
    let guestID = $(this).closest('.guest').data().id
    await manager.saveNote(noteInput, guestID)
    renderer.renderGuests(manager.guests)
})

$('.saveDate').on('click', async function () {
    let dateInput = $('.dateInput').val()
    // console.log(dateInput)
    await manager.saveDate(dateInput)
    console.log(manager.date)
    renderer.renderDate(manager.date)
})

loadPage()
loadGuests()