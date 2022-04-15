

let randomValue = Math.floor() * 100 - 1;
console.log(randomValue);

$('#form-field').on("blur", function(){
    userGuess- $('#test').val();
    console.log(userGuess);
});
console.log(userGames);

function checkGuess(){
    if(userGuess > randomValue)
    {
        console.log("user is too high");
        $('.error-list').append('<p>User Guess of ${userGuess} is too high</p>');
        $('.error-list').css('color', '#9ac305');
    }
    else if(userGuess < randomValue)
    {
        console.log('user is too low');
        $('.error-list').append('<p>User Guess of ${userGuess} is too high</p>');
        $('.error-list').css('color', '#9ac305');
    }
    else
    {
        console.log('User wins!');
        $('.error-list').remove();
        $('input').remove();
        $('.label').remove();
        $('bg').css('background-color','green');
        $('.container').append('<p>User Guess of ${userGuess} is too high</p>');
        $('.container p').css('color', '#9ac305');
    
    }
}
