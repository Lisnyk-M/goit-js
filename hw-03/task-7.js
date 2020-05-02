/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */




const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  idGeneration() {
    let time = new Date().getTime() * Math.random();
    return time.toString();
  },

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      amount,
      typeTransaction: type,
      id: this.idGeneration()
    }

  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const tr = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(tr);
    console.log(this.transactions, this.balance);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert('снятие такой суммы не возможно, недостаточно средств');
    } else {
      const tr = this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.transactions.push(tr);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let key of this.transactions) {
      if (id === key.id)
        return key;
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let key of this.transactions) {
      if (type === key.typeTransaction)
        total += key.amount;
    }
    return total;
  },
};

const newAccount = Object.assign(account);
newAccount.deposit(1200);
newAccount.deposit(100);
newAccount.deposit(100);
newAccount.withdraw(1000);
console.log('текущий баланс:', newAccount.getBalance());
console.log(`количество средств для даного типа транзакции:`, newAccount.getTransactionTotal(Transaction.DEPOSIT));