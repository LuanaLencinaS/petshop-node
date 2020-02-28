//importando pacote http
//pacotes nativos é importado pelo nome, sem o caminho
const http = require('http');
const url = require("url");

//importo modulo criado, passando o caminho
const petshop = require("./petshop");

//criando o servidor
//parametros: primeiro a requisição depois a resposta
http.createServer( (request, response) => {

    let urlCompleta = url.parse(request.url, true);
    //true transforma a query num objeto
    console.log(urlCompleta);

    if(urlCompleta.pathname == "/") {
        response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
        response.write("Você está na pagina inicial");
        response.end();
    } else if(urlCompleta.pathname == "/home") {
        response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
        response.write("Você está na Home do petshop!");
        response.end();
    } else if(urlCompleta.pathname == "/pet/adicionar") {
        if (petshop.adicionaPet(urlCompleta.query.nome)){
            response.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
            response.end("O pet foi cadastrado com sucesso");
        } else {
            response.writeHead(401, {"Content-type":"text/html; charset=utf-8"});
            response.end("Erro ao tentar cadastrar o pet");
        }
    }
}).listen(3000, "localhost");
//o listem especifica a porta que o servidor ficará escutando (pois é onde receberá algo)
//todas as informações saem e entram pelas portas
//localhost: um dns fixo na máquina (que é o mesmo que um ip fixo que toda maquina tem)
//metodo write Especifica uma resposta
//end termina o envio

/*ou...
let server = http.createServer( (request, response) => {
    console.log("Estou em um servidor");
})
server.listen(3000, "localhost");
*/

//pacote que ao salvar o arquivo automaticamente atualiza o servidor: nodemon 
//npm install nodemon --save -D //o -D marque que é importante para o projeto rodar
//npx nodemon index.js //comando que executa o pacote especificado

//pacote url separa o que é url e o que é a queryString, e transforma num objeto, e o valor enviado na url se tirna um atributo
