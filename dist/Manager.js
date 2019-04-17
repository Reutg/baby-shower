class Manager {
    constructor() {
        this.baby
        this.babiesList = []
        this.guests = []
        this.date
    }

    async getNameSuggestions(firstLetter, popularity, gender) {
        let babies = await $.get(`/babyNames/${firstLetter}/${popularity}/${gender}`)
        let babyListNames = babies[0].map(b => { return { name: b.name } })
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

    async getGuestsFromDB(){
        let guests = await $.get('/guests')
        this.guests = guests
    }

    async saveGuest(newGuest){
        let savedGuest = await $.post('/guests', {name: newGuest})
        this.guests.push(savedGuest)
    }

    async removeGuest(id){
        await $.ajax({
            method: "DELETE",
            url: `/guests/${id}`
        })

        this.guests = this.guests.filter(guest => guest._id != id)
    }

    //todo: change the route to ajax and change the route name to be different than the saveNote route
    async rsvpGuest(guestID){
        let guestIndex = this.guests.findIndex(guest => guest._id == guestID)
        await $.put('/guests', this.guests[guestIndex])
        this.guests[guestIndex].rsvp = true
    }

    async rsvpGuest(guestID){
        let guestIndex = this.guests.findIndex(guest => guest._id == guestID)
        let upatedGuest = await $.ajax({
            type: "PUT",
            url: `guests/${guestID}/rsvp`,
            data: {rsvp: true}
        })
        this.guests[guestIndex] = upatedGuest
        
    }

    async saveNote(note,guestID){
        let guestIndex = this.guests.findIndex(guest => guest._id == guestID)
        let updatedGuest = await $.ajax({
            type: "PUT",
            url: `/guests/${guestID}`,
            data: {note}
        })
        this.guests[guestIndex] = updatedGuest
    }

    async getDateFromDB(){
        let date = await $.get('/date')
        this.date = date
    }

    async saveDate(date){
        // console.log(date)
        await $.post(`/date/:${date}`)
        this.date = date
    }

    async removeDate(){
        await $.ajax({
            method: "DELETE",
            url: '/date'
        })
    }

    

    
}