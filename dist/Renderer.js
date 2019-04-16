class Renderer{
    renderBabyList(babynames){
        let source = $('#babySelected-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({babynames})
        $('#babyList-container').empty().append(newHTML)
    }

    renderSelectedBaby(babyName){
        let source = $('#savedName-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({babyName})
        $('#babyName-container').empty().append(newHTML)
    }


    render(){
        this.renderBabyList()
    }
}
