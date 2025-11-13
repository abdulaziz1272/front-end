<template>
  <div class="orders">
    <h2 class="title">Мои <span class="highlight">заказы</span></h2>

    <div class="header">
      <p>Всего {{ orders.length }} заявок</p>
      <select v-model="sortOption" class="sort-select">
        <option value="asc">По возрастанию цены</option>
        <option value="desc">По убыванию цены</option>
      </select>
    </div>

    <div class="order-list">
      <div class="order-card" v-for="(order, i) in sortedOrders" :key="i">
        <div class="order-main">
          <div class="order-info">
            <h3 class="order-title">{{ order.title }}</h3>
            <p class="order-desc">{{ order.description }}</p>
            <span
              class="order-status"
              :class="{
                open: order.status === 'Прием ставок',
                done: order.status === 'Завершено',
                closed: order.status === 'Закрыт',
              }"
            >
              {{ order.status }}
            </span>
          </div>

          <div class="order-side">
            <p class="budget">
              Бюджет:
              <span>{{ order.budget }} тенге</span>
            </p>
            <p class="time">{{ order.time }}</p>
            <p class="offers">Предложений: {{ order.offers }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';

const sortOption = ref('asc')

const orders = ref([
  {
    title: 'Нужно сделать Дизайн сайта по тематике авто',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mius volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse...',
    budget: 50000,
    time: '4 часа 28 минут назад',
    offers: 50,
    status: 'Прием ставок',
  },
  {
    title: 'Нужно сделать Дизайн сайта по тематике авто',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mius volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse...',
    budget: 50000,
    time: '4 часа 28 минут назад',
    offers: 50,
    status: 'Завершено',
  },
  {
    title: 'Нужно сделать Дизайн сайта по тематике авто',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mius volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse...',
    budget: 50000,
    time: '4 часа 28 минут назад',
    offers: 50,
    status: 'Закрыт',
  },
  {
    title: 'Нужно сделать Дизайн сайта по тематике авто',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mius volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse...',
    budget: 50000,
    time: '4 часа 28 минут назад',
    offers: 50,
    status: 'Завершено',
  },
])

const sortedOrders = computed(() => {
  return [...orders.value].sort((a, b) =>
    sortOption.value === 'asc' ? a.budget - b.budget : b.budget - a.budget
  )
})
</script>



<style scoped>
.orders {
  background-color: #f8f9ff;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  color: #333;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.highlight {
  color: #ffa85c;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 15px;
}

.sort-select {
  padding: 0.5rem 0.8rem;
  border-radius: 12px;
  border: none;
  background: #f1f1f7;
  font-size: 14px;
  cursor: pointer;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.order-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.order-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

.order-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.order-desc {
  color: #777;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  max-width: 600px;
}
.order-status {
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
}

.order-status.open {
  color: #27ae60;
}

.order-status.done {
  color: #27ae60;
}

.order-status.closed {
  color: #ff5c5c;
}

.order-side {
  text-align: right;
  min-width: 180px;
}

.budget {
  font-size: 14px;
  color: #333;
}

.budget span {
  color: #27ae60;
  font-weight: 600;
}

.time {
  color: #999;
  font-size: 13px;
  margin-top: 0.3rem;
}

.offers {
  color: #777;
  font-size: 13px;
  margin-top: 0.5rem;
}
</style>