const frasesDoDiaRealistas = [
    "Desconecte-se um pouco para reconectar-se com o seu sistema principal: você mesmo.", // doming
    "Qual a sua primeira linha de código para um dia produtivo e significativo hoje?", // segunda
    "Em meio ao fluxo de informações, encontre seu ponto de ancoragem.", // terca
    "Antes de 'desligar', salve as lições aprendidas esta semana.", // quarta
    "Seus algoritmos diários estão te levando para onde você realmente quer ir?", // quinta
    "A tecnologia pode ampliar sua voz. Use-a para construir, não para distorcer.", // sexta
    "Explore o 'mundo real' com a mesma curiosidade que você explora novas interfaces." // sabado
];

function exibirFraseDoDia() {
    const elementoFrase = document.getElementById('frase-do-dia');

    if (elementoFrase) {

        const hoje = new Date(); 
        const diaDaSemana = hoje.getDay();
        if (diaDaSemana >= 0 && diaDaSemana < frasesDoDiaRealistas.length) {
            const fraseParaExibir = frasesDoDiaRealistas[diaDaSemana];
            elementoFrase.textContent = fraseParaExibir; 
        } else {
            console.error("Erro ao obter o dia da semana ou o array de frases está incompleto.");
            elementoFrase.textContent = "Não foi possível carregar a reflexão do dia. Tente recarregar.";
        }

    } else {
        console.error("Elemento com ID 'frase-do-dia' não encontrado no HTML!");
    }
}
document.addEventListener('DOMContentLoaded', exibirFraseDoDia);

