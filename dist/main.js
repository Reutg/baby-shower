let renderer = new Renderer()
const manager = new Manager()

const loadPage = async function(){
    await manager.getBabyFromDB()
    renderer.render(manager.baby)
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
    renderer.render(manager.data)
}

loadPage()