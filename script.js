const items = [
    {
        id: 0,
        nome: 'Camiseta',
        img: 'relogio.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Short',
        img: 'calca.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: 'sapato.jpg',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Terno',
        img: 'terno.jpg',
        quantidade: 0
    }
]


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
       containerProdutos.innerHTML+= `
       
       <div class="produto-single border d-flex flex-column align-items-center pb-3">
            <img src="./assets/img/`+val.img+`" />
            <div>
            <p class="m-1">`+val.nome+`</p>
            <a key="`+val.id+`" class="btn btn-primary" href="#carrinho">Adicionar ao carrinho!<a/>
            </div>
            
        </div>

       
       `;
    })
}

inicializarLoja();


atualizarCarrinho = () => {
   var containerCarrinho = document.getElementById('carrinho');
   containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
       containerCarrinho.innerHTML+= `
       
       <p class="d-flex align-items-end"><img class="carrinhoImg" src="./assets/img/${val.img}" alt=""> `+val.nome+` | quantidade: `+val.quantidade+`</p>
       <hr>

       
       `;
        }
    })
}


var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}



