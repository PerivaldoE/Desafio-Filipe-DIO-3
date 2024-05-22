document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const classe = document.getElementById('classe').value;

    // Define o ataque com base no tipo
    let ataque;
    switch (classe) {
        case 'guerreiro':
            ataque = 'atacou com espada';
            break;
        case 'mago':
            ataque = 'atacou com magia';
            break;
        case 'monge':
            ataque = 'atacou com artes marciais';
            break;
        case 'ninja':
            ataque = 'atacou com shuriken';
            break;
        default:
            ataque = 'atacou';
    }

    // Exibe os valores no elemento #characterDisplay
    document.getElementById('displayNome').textContent = nome;
    document.getElementById('displayIdade').textContent = idade;
    document.getElementById('displayClasse').textContent = classe;
    document.getElementById('displayAtaque').textContent = ataque;

    // Mostra a seção #characterDisplay
    document.getElementById('characterDisplay').classList.remove('hidden');
});
