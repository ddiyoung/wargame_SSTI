function submit(){
    const csrf_token = $('[name=csrfmiddlewaretoken]').val();

    $.ajax({
        url: './Newsletter',
        type: 'post',
        data: {
            username: $('#email').val(),
        },
        headers: {'X-CSRFToken': csrf_token},
        dataType: 'json',
    })
}