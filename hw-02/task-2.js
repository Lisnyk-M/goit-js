const calculateEngravingPrice = function (message, pricePerWord) {
    // твой код
    const Words = message.split(' ');
    return Words.length * pricePerWord;
}

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
