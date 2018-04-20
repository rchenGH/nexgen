$(document).ready(function(){

  // add class to current link
  $('[href]').each(function(){
    if(this.href == window.location.href){
      $(this).addClass('current');
    }
  });


  const firebaseRef = firebase.database().ref('client');

  $("#form-submit").on('click', function(){

    const $firstName = $("#input_first_name").val();
    const $lastName = $("#input_last_name").val();
    const $email = $("#input_email").val();
    const $phone = $("#input_phone").val();
    const $message = $("#input_message").val();

    alert("Form Submitted");
    firebaseRef.push( {first_name: $firstName,
                      last_name: $lastName,
                      phone_input: $phone,
                      email_input: $email,
                      message_input: $message
    });

    $('#input_first_name').val(" ");
    $('#input_last_name').val(" ");
    $('#input_email').val(" ");
    $('#input_phone').val(" ");
    $('#input_message').val(" ");
  });

  firebaseRef.on('child_added', function(data){
    $("#data_body").append(
    `<tr>
      <th scope="row"></th>
      <td class="form-data">${data.val().first_name}</td>
      <td class="form-data">${data.val().last_name}</td>
      <td class="form-data">${data.val().phone_input}</td>
      <td class="form-data">${data.val().email_input}</td>
      <td class="form-data">${data.val().message_input}</td>
    </tr>`
    )

  })


});
