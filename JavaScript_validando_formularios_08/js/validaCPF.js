export function ehUmCpf(campo) {
  const cpf = campo.value.replace(/\.|-/g, '');
  if (validaNumerosIguais(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
    campo.setCustomValidity('Este cpf não é válido')
  }
}

function validaNumerosIguais(cpf) {
  const numerosIguais = cpf[0].repeat(cpf.length);
  return numerosIguais === cpf;
}

function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 2;

  for (let tamanho = 8; tamanho >= 0; tamanho--) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador++;
  }

  let resto = soma % 11;
  let digitoVerificador = 11 - resto;

  if (digitoVerificador >= 10) {
    digitoVerificador = 0;
  }

  return digitoVerificador !== Number(cpf[9]);
}

function validaSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 2;

  for (let tamanho = 9; tamanho >= 0; tamanho--) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador++;
  }

  let resto = soma % 11;
  let digitoVerificador = 11 - resto;

  if (digitoVerificador >= 10) {
    digitoVerificador = 0;
  }

  return digitoVerificador !== Number(cpf[10]);
}
