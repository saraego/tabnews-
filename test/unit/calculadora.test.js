const calculador = require("../../models/calculadora.js")

test('somar 2 + 2 deveria ser 4', () => { 
  const resultado = calculador.somar(2,2)
  expect(resultado).toBe(4)
})

test('somar 5 + 100 deveria ser 105', () => { 
  const resultado = calculador.somar(5,100)
  expect(resultado).toBe(105)
})

test('somar Banana + 100 deve retorna Erro', () => { 
  const resultado = calculador.somar('Banana',100)
  expect(resultado).toBe('Error')
})