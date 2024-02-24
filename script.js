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
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let reply = document.getElementById('jsReply');

    let imc = weight / (height * height);
    imc = imc.toFixed(2);

    if (imc >= 40) {
        reply.innerText = `IMC de ${imc}: Obesidade 3`;
    } else if (imc >= 35) {
        reply.innerText = `IMC de ${imc}: Obesidade 2`;
    } else if (imc >= 30) {
        reply.innerText = `IMC de ${imc}: Obesidade 1`;
    } else if (imc >= 25) {
        reply.innerText = `IMC de ${imc}: Sobrepeso`;
    } else if (imc >= 18.6) {
        reply.innerText = `IMC de ${imc}: Normal`;
    } else {
        reply.innerText = `IMC de ${imc}: Abaixo do peso`;
    }
}

let ex09 = () => {
    let number = +document.getElementById('number').value;
    let reply = document.getElementById('jsReply');
    let html = ``;

    // reply.innerText = "";

    for (let i = 1; i <= 10; i++) {
        html += `${number} x ${i}: ${number * i}\n`;
    }
    reply.innerHTML = html;
}

let ex10 = () => {
    let getName = document.getElementById('name').value;
    let getEmail = document.getElementById('email').value;
    let emailTest = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    let getTel = document.getElementById('cel').value;

    if (getName == '') {
        document.getElementById('name').placeholder = 'Erro, nome em branco';
    }
    
    if (getTel == ''){
        document.getElementById('cel').placeholder = 'Erro, telefone em branco';
    }

    if(getEmail == '') { 
        document.getElementById('email').placeholder = 'Erro, email vazio';
        return false; 
    }

    if(getEmail !== '' && !emailTest.test(getEmail)) { 
        alert('E-mail não preenchido adequadamente');
    }

    if (getName !== '' && emailTest.test(getEmail) && getTel !== '') {
        localStorage.setItem("name", getName);
        localStorage.setItem("email", getEmail);
        localStorage.setItem("cel", getTel);
    }

}