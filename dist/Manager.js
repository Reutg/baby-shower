class Manager {
    constructor() {
        this.baby
        this.babiesList = []
    }

    async getNameSuggestions(firstLetter, popularity, gender) {
        let babies = await $.get(`/babyNames/${firstLetter}/${popularity}/${gender}`)
        console.log(babies)

        let babyListNames = babies[0].map(b => { return { name: b.name } })
        console.log(babyListNames)
        // for (let b of babies){
        //     this.babiesList.push(b.name)

        // }
        // console.log(this.babiesList)
        this.babiesList = babyListNames

    }

    async getBabyFromDB() {
        let baby = await $.get('/baby')
        this.baby = baby
    }

    async saveBaby(inputName) {
        await $.post('/baby', { name: inputName })
        this.baby = inputName
    }

    async removeBaby(name) {
        await $.ajax({
            methode: "DELETE",
            url: `/baby/${name}`
        })
    }
}