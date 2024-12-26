$(document).ready(function(){
    $('#form-Tarefa').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val().trim();

        if (nomeTarefa === "") {
            alert("Por favor,insira o nome da tarefa")
            return;
        }

        const novaTarefa = $(`
            <li style="display: none">
                ${nomeTarefa}
            </li>`);
        $(novaTarefa).appendTo('#lista-tarefas').fadein();
        $('#nome-tarefa').val('');
    })

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');
    });
})