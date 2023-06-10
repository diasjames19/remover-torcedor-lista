const vm = new Vue({ el:"#app",
data:{
        teste:"James",
        torcedores:[],
    },

methods:{
    adicionarTorcedor(){
        this.torcedores.push({
            nome:inputNome.value,
            idade:inputIdade.value,
            time:inputTime.value
        });
    }
    
},
});

