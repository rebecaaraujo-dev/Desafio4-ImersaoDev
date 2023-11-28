//Desafio 4: Guilherme quer um aviso caso a pessoa coloque algo que não é uma imagem no input e também não aceitar esse input. Rafa quer que possa clicar no banner do filme e redirecionar para trailer no youtube. Paulo quer que mantenha uma lista de filmes adicionados, guardar em memória.

var listaNomesFilmes=[];
var listaImgFilmes=[];
var listaTrailerFilmes=[];

function adicionarFilme() {
    var nomeFilme = document.getElementById('nomeFilme').value;
    var ImgFilme = document.getElementById('imgFilme').value;
    var trailerFilme = document.getElementById('trailerFilme').value;

    if ((ImgFilme.endsWith('jpeg'))||(ImgFilme.endsWith('jpg'))||(ImgFilme.endsWith('png'))) {
        document.getElementById('mensagemDeErro').innerHTML='';
        //basicamente: se a imagem terminar com jpg, jpeg ou png, o filme selecionado vai poder entrar pra lista pra DEPOIS ser exibido em outra função que será criada logo em seguida, a saber função "recarregar filmes".A  escrita deve ser lida ao contrário, primeiro o nome da lista, depois o comando push para enviar o elemento para a lista, e então sim o elemento a ser enviado:
        listaNomesFilmes.push(nomeFilme);
        listaImgFilmes.push(ImgFilme);
        listaTrailerFilmes.push(trailerFilme);
        
        limpaCampos();
        //então ele finalmente executa o laço que será atribuído em outra função
        recarregarFilmes();
        } else {
            document.getElementById('mensagemDeErro').innerHTML='Endereço de imagem não é válido. Tente Novamente.';
            limpaCampos();
        }
}

//agora sim vamos criar outras duas funções que estarão funcionando dentro da função "principal" de adicionar filmes. dentro delas vamos criar os atributos e um laço de repetição

function recarregarFilmes() {
    //criamos uma variável para combinar os elementos de nome, imagem e trailer dos filmes. innerHTML é uma propriedade que permite acessar ou modificar o conteúdo HTML de um elemento. Essa propriedade retorna uma representação de string do conteúdo HTML dentro do elemento.
    var elementoListaFilmes=document.getElementById('listaFilmes');
    //para garantir que qualquer conteúdo anterior seja removido antes de adicionar os novos elementos. Se não fizerm essa etapa os novos elementos serão apenas anexados ao final do conteúdo atual, sem substituir ou limpar o que já estava lá.
    elementoListaFilmes.innerHTML='';
    //A variável i está sendo declarada e inicializada diretamente no cabeçalho do loop. Em JavaScript, é comum omitir a palavra-chave var ao declarar variáveis neste contexto.
    for (i=0;i<listaImgFilmes.length;i++) {
        //importante ressaltar o elemento += pois ele garante que os valores serão adicionados ao conteúdo existente
        elementoListaFilmes.innerHTML+=(`<a href="${listaTrailerFilmes[i]}"><img src="${listaImgFilmes[i]}"></a>` + `<p>${listaNomesFilmes[i]}</p>`);
        //SUPER IMPORTANTE não esquecer o uso de [i] ao final da variável. Se não for colocado, vai mostrar todos os elementos da lista simultaneamente, no caso de esquecermos o [i] só na lista de nomes por exemplo, apareceria embaixo não só o nome do filme correspondente ao banner, mas também todos os nomes dentro da lista. O [i] é responsável por "atrelar" os elementos entre sim, dessa forma vai mostrar a imagem número 1 da lista, com o nome número 1 da lista e com o trailer número 1 da lista. NÃO ESQUECER!!
        //ao puxar uma referencia ou link externo devemos colocar o elemento entre aspas, como em '<a href="">' e '<img src="">'
    }
}

//finalmente, essa última função irá limpar o input para que possa adicionar outros filmes sem precisar limpar manualmente
function limpaCampos() {
    document.getElementById('nomeFilme').value='';
    document.getElementById('imgFilme').value='';
    document.getElementById('trailerFilme').value='';
    //aqui usamos .value e definimos como null pois é utilizado para campos de formulário como o input
}

//Recapitulando: O método usado foi dividido em etapas e utilizando funções. Funções funcionam como componentes, onde você pode criar uma função e utilizar outras vezes durante o código sem precisar escrever tudo novamente. Funções recebem atributos e podemos colocar loop dentro delas e até mesmo outras funções. 
//1- No caso desse desafio, criou-se primeiro variáveis para armazenar o valor dos filmes (nome, imagem e trailer). Depois, criamos a primeira função, onde criamos variáveis separadas para cada elemento (nome, imagem e trailer) e o atribuímos a lista criada anteriormente no primeiro passo com a condição que as imagens terminassem com jpg, jpeg ou png, também definindo o valor nulo para que essas imagens não fossem armazenadas. Nesse caso ao rodar o código a mensagem de erro é nula pois não há erro kkk. Através desse trecho do código nós enviamos os elementos para a lista através de suas respectivas variáveis (nomeFilme, imgFilme e trailerFilme). Em seguida, já definimos que se a imagem não for nos formato especificado, é exibida uma mensagem de erro. Aqui usamos o inner.HTML pois vamos modificar o valor de nulo para a string definida, a saber "Endereço de imagem inválido. Tente Novamente." (getElementById é um elemento que faz parte do document e é utilizado para obter uma referência de um elemento HTML com base no valor "id", enquanto o innerHTML é uma propriedade que permite acessar ou alterar o conteúdo HTML interno de um elemento.). Depois de definir o que acontece se a imagem for válida OU não, podemos chamar outras funções que criamos nos passos 2 e 3, a de recarregar filmes e limpar os campos.
//2- criamos a função recarregar filmes, dentro dela criamos uma nova variável que está atrelada ao listaFilmes criado no HTML. Depois atribuímos valor nulo e iniciamos o nosso loop com a utilização de for. Depois modificamos o valor do elemento inserindo e finalmente atrelando os valores que atribuímos antes, com a utilização de [i] e também o operador de += para ADICIONAR elementosao invés de SUBSTITUÍ-LOS.
//3- por fim, criamos a função limpa campos para que não seja necessário limpar manualmente.