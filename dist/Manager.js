class Manager {
    constructor() {
        this.baby
        this.babiesList = []
    }

    async getNameSuggestions(firstLetter,popularity,gender){
        let babies = await $.get(`/babyNames/${firstLetter}/${popularity}/${gender}`)
        this.babiesList.push(babies)
    }

    async getBabyFromDB() {
        let baby = await $.get('/baby')
        this.baby = baby
    }

    async saveBaby(inputName){
        await $.post('/baby', {name: inputName})
        this.baby = inputName
    }

    async removeBaby(name){
        await $.ajax({
            methode: "DELETE",
            url: `/baby/${name}`
        })
    }
}