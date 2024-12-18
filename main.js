$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<ul style="display: none"></ul>`)
        $(`
            <li>
                ${nomeTarefa}
            </li>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('table');
        $(novaTarefa).fadeIn();
        $('#nome-tarefa').val('');
    })

    $('table').click('<li>', function (e) {
        $('li').css('text-decoration', 'line-through');
    })
})