export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    //adiciona os eventos para depois serem notificados  impedindo que todos os componenentes sejam atualizados gerando um gargalo
    inscrever(func){
        this._inscritos.push(func);
    }

    //Notifica os componentes que realmente precisam ser atualizados
    notificar(){
        this._inscritos.forEach(func =>{ 
            func(this.categorias);
        })
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar()
    }

}