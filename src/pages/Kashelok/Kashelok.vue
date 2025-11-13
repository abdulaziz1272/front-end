<template>
  <div class="wallet">
    <h2 class="title">Мой <span class="highlight">кошелек</span></h2>

    <div class="stats-grid">
      <div class="stat-box" v-for="(item, i) in stats" :key="i">
        <p class="label">{{ item.label }}</p>
        <h3 class="value">{{ item.value }}</h3>
      </div>

      <div class="withdraw-box">
        <p>Доступна сумма для вывода</p>
        <h3 class="value green">{{ availableAmount }}</h3>
        <p class="withdraw-text">Вывести средства на</p>
        <div class="payment-methods">
          <img v-for="(img, i) in paymentIcons" :key="i" :src="img" alt="payment" />
        </div>
      </div>
    </div>

    <h3 class="history-title">История</h3>
    <table class="history-table">
      <thead>
        <tr>
          <th>Операция</th>
          <th>Дата операции</th>
          <th>Сумма</th>
          <th>Hash операции</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(op, i) in operations" :key="i">
          <td class="operation">
            <span class="icon" :style="{ backgroundColor: op.color }">{{ op.icon }}</span>
            {{ op.name }}
          </td>
          <td>{{ op.date }}</td>
          <td class="amount">{{ op.amount }}</td>
          <td>{{ op.hash }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Чистый доход', value: '1 000 000 тенге' },
  { label: 'Выведено', value: '500 000 тенге' },
  { label: 'Куплено', value: '40 000 тенге' },
  { label: 'Ожидает разрешения', value: '50 000 тенге' },
]

const availableAmount = '250 000 тенге'

const paymentIcons = [
]

const operations = [
  {
    icon: '+',
    name: 'Пополнение баланса',
    date: '22 октября, 2021 года',
    amount: '150 000 тенге',
    hash: 'c2d5abbb5d87eb9bd378e87f09df5a97df68',
    color: '#C9F7F5',
  },
  {
    icon: '✓',
    name: 'Вывод средств',
    date: '15 октября, 2021 года',
    amount: '300 000 тенге',
    hash: '826ad6a3c57f574304a07caff4e006ffafacd832',
    color: '#EEE5FF',
  },
  {
    icon: '🛒',
    name: 'Покупка услуги',
    date: '14 сентября, 2021 года',
    amount: '200 000 тенге',
    hash: '987923a30db628c8bb6b694a41edec6d93792aec',
    color: '#FFF4DE',
  },
]
</script>

<style scoped>
.wallet {
  padding: 2rem;
  background-color: #f8f9ff;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #2c2c2c;
}

.highlight {
  color: #ffa85c;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.stat-box,
.withdraw-box {
  background: #fff;
  border-radius: 16px;
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
}

.label {
  color: #8a8a8a;
  font-size: 14px;
}

.value {
  font-weight: 600;
  margin-top: 6px;
  color: #2d2d2d;
}

.value.green {
  color: #27ae60;
}

.withdraw-text {
  margin: 1rem 0 0.5rem;
  font-size: 14px;
  color: #555;
}

.payment-methods {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.payment-methods img {
  height: 30px;
  object-fit: contain;
}

.history-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
}

.history-table th,
.history-table td {
  padding: 1rem;
  text-align: left;
  font-size: 14px;
}

.history-table th {
  background-color: #fafafa;
  color: #777;
}

.operation {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
}

.amount {
  font-weight: 600;
}
</style>
