let renderer = new Renderer()
const Manager = new Manager()

const loadPage = async function(){
    await Manager.getDataFromDB()
    renderer.render(Manager.data)
}
const saveName = async function(){
    let inputName = $("#inputName").val()
    await Manager.getNameData(inputName)
    renderer.render(Manager.data)
}
const searchName = async function(){
    let inputGender = $("#inputGender").val()
    let inputPopular = $("#inputPopular").val()
    let inputFL = $("#inputFL").val()
    await Manager.getNameList(inputGender,inputPopular,inputFL)
    renderer.render(Manager.data)
}

loadPage()