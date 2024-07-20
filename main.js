
const form = document.getElementById('formContatos');

var linhas = '';
Contatos = [];
telephone = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    const NomeCompleto = document.getElementById('NomeCompleto');
    const Telefone = document.getElementById('Telefone');
    const AlertarM = document.getElementById('alertar');

    if (telephone.includes(Telefone.value)){

        var AlertMsg = `+${Telefone.value} Ja foi Agendado verifique em seus agendamentos<img src="img/stop_23748.ico" alt="">`;
        AlertarM.innerHTML = AlertMsg;
        AlertarM.style.display = 'flex';
        
    }
    else{
        if (isNaN(Telefone.value)){
            
            var AlertMsg = `+${Telefone.value} Não é um Numero de Telefone<img src="img/stop_23748.ico" alt="">`;
            AlertarM.innerHTML = AlertMsg;
            AlertarM.style.display = 'flex';
        }
        else{
            
            Contatos.push(NomeCompleto.value);
            telephone.push(Telefone.value);

            var linha = '<tr>';
            linha += `<td>${NomeCompleto.value}</td>`;
            linha += `<td>+${Telefone.value}</td>`;
            linha += `</tr>`;
            linhas += linha;

            const tbody = document.querySelector('tbody');
            tbody.innerHTML = linhas;
        }

    }

    NomeCompleto.value = '';
    Telefone.value ='';

});




function AlertarSome(){
    const AlertarM = document.getElementById('alertar');
    AlertarM.style.display = 'none';
}