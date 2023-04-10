const valorMaximoParcelado = calcularValorParcelaMaxima(dividaTotal, valorMaximoDisponivel) * MAX_PARCELAS;
const valorParcelar = Math.min(dividaTotal, valorMaximoParcelado);
const valorParcelaMaxima = valorParcelar / MAX_PARCELAS;
