class Jogador{

    constructor(){
        this.indice = null;
        this.distancia = 0;
        this.nome = null;
        this.ranking = null;
    }

    obterContagem(){
        var contagemJogadoresRef = bancoDados.ref('playerCount');
        contagemJogadoresRef.on("value", (data)=>{
            contagemJogadores = data.val();
        })
    }

    atualizarContagem(contagem){
        bancoDados.ref('/').update({
            playerCount: contagem
        })
    }

    atualizarDados(){
        var indiceJogador = "players/player" + this.indice;
        bancoDados.ref(indiceJogador).set({
            nome: this.nome,
            distancia: this.distancia
        })
    }

    obterRanking(){
        bancoDados.ref('CarsAtEnd').on('value', (data)=>{
            this.ranking = data.val();
        })
    }

    static atualizarRanking(ranking){
        bancoDados.ref('/').update({
            CarsAtEnd: ranking
        })
    }

    static obterInfoJogadores(){
        var infoJogadoresRef = bancoDados.ref('players');
        infoJogadoresRef.on("value",(data)=>{
            todosJogadores = data.val();
        })
    }
}