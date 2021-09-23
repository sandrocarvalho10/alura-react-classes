export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(categoria, titulo, texto){
        const novaNota = new Nota(categoria, titulo, texto)

        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNotas(indice){
        this.notas.splice(indice, 1)
        this.notificar();
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func =>{ 
            func(this.notas);
        })
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }
}

class Nota {
    constructor(categoria, titulo, texto){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}