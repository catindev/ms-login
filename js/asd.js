function events() {
  let submit = document.getElementsByClassName('login-form__btn')[0];
  submit.addEventListener('click',function(){
    input_values()
  })
}


function input_values(){
  var input_phone = phone_text.value;
  var input_password = password.value;

  if (input_phone.length > 0 && input_password.length > 0) {
    let params = 'phone_text=' + input_phone + '&' + 'password='+input_password;
    send_request('http://127.0.0.1/ajax/',params);
    validation.innerHTML = 'Данные отправлены';
  }else {
    validation.innerHTML = 'Введите все данные';
  }
}

function send_request(url,params) {
  fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: params
    })
    .then(function (data) {
      console.log('Запрос отправлен', data);
    })
    .catch(function (error) {
      console.log('Ошибка при отпрвке запроса', error);
    });
}

events();
