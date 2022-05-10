function email_check(email) {

	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(email);

}

function submit(){
    const csrf_token = $('[name=csrfmiddlewaretoken]').val();

    const email = $('#email').val();

    if(email_check(email)) {
        $.ajax({
        url: './Newsletter',
        type: 'post',
        data: {
            email: $('#email').val(),
        },
        headers: {'X-CSRFToken': csrf_token},
        dataType: 'json',
        });
    }
    else{
        alert("이메일 형식을 확인해주세요!");
    }
}