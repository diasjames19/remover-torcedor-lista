const vm = new Vue({ el:"#app",
    data:{
            teste:"James",
            torcedores:[],
            nomeRemove:'',
        },
    computed:{
        ultimoTorcedor(){
            let indice = this.torcedores.length - 1
            let texto = ' '

            texto += ' Torcedor: ' + this.torcedores[indice].nome
            texto += ' Idade: ' + this.torcedores[indice].idade
            texto += ' Time: ' + this.torcedores[indice].time
            
            return texto;
        },
        flitroTime(){
            return this.torcedores.filter(item => item.time === 'Bahia')
        },
        mostraUltimo(){
            if(this.torcedores.length > 0)
                return true
            else
                return false
        },
       
       
    },   
   
    methods:{
        adicionarTorcedor(){
            this.torcedores.push({
                nome:inputNome.value,
                idade:inputIdade.value,
                time:inputTime.value
            });
            this.etapa = true
        },
        removerTorcedor() {
            this.torcedores = this.torcedores.filter(item =>
              item.nome !== this.nomeRemove);
              this.telaRemove = 2
              this.nomeRemove = '';

          }
  
    },
});
