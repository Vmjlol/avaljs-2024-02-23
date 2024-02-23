let ex01 = () => {
    document.getElementById('ex01').innerText = "Clicou!"
}

let ex02 = () => {
    document.body.style.background = "green"
}

let ex03 = () => {
    let number = document.getElementById('number').value;
    let value = document.getElementById('value');
    console.log(number);
    if (number % 2 == 0) {
        if (number == 0) {
            value.innerText = `Número 0 ou vazio`
        } else {
        value.innerText = `O número ${number} é par`
    }
    } else {
        value.innerText = `O número ${number} é impar`
    }
}

let ex04 = () => {
    let answer = +document.getElementById('answer').value;
    let reply = document.getElementById('jsReply')
    if (answer == 1995) {
        reply.style.color = "green";
        reply.innerText = "Parabéns, você acertou!";
    } else {
            reply.style.color = "red";
            reply.innerText = "Errou, tente novamente";
    }

}

let ex05 = () => {
    let val1 = +document.getElementById('value1').value;
    let val2 = +document.getElementById('value2').value;
    let reply = document.getElementById('jsReply');
    console.log(val1, val2);

    if (val1 > val2) {
        reply.innerText = `O número ${val1} é maior que ${val2}`
    } else if (val1 < val2) {
        reply.innerText = `O número ${val1} é menor que ${val2}`
    } else {
        reply.innerText = "Os números são iguais."
    }
}

let ex06 = () => {
    let img = document.getElementById('img');
    img.setAttribute('src','https://images.pexels.com/photos/957010/milky-way-starry-sky-night-sky-star-957010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
}

let ex07Mostra = () => {
    let img = document.getElementById('img');
    img.style.visibility = 'visible';
}

let ex07Esconde = () => {
    let img = document.getElementById('img');
    img.style.visibility = 'hidden';
}

let ex08 = () => {

}