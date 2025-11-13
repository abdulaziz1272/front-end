<template>
  <div class="page">
    <!-- Progress bar -->
    <div class="steps">
      <div
        v-for="step in steps"
        :key="step.number"
        class="step"
      >
        <div
          class="circle"
          :class="{ active: step.number <= currentStep }"
        >
          {{ step.number }}
        </div>
        <span class="label">{{ step.label }}</span>
        <div
          v-if="step.number < steps.length"
          class="line"
          :class="{ active: step.number < currentStep }"
        ></div>
      </div>
    </div>

    <!-- Content -->
    <div class="card">
      <h2>Поздравляем!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et
        volutpat sagittis, turpis sed cum massa.
      </p>

      <div class="buttons">
        <button class="back">Назад</button>
        <button class="publish">Опубликовать</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentStep = 6
const steps = [
  { number: 1, label: 'Основные' },
  { number: 2, label: 'Стоимость и опции' },
  { number: 3, label: 'Описание' },
  { number: 4, label: 'Требования' },
  { number: 5, label: 'Галерея' },
  { number: 6, label: 'Публикация' }
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}

/* Progress bar */
.steps {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.step {
  display: flex;
  align-items: center;
  position: relative;
}

.circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #d1d5db;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: 0.3s;
}

.circle.active {
  background: #22c55e;
  color: white;
}

.label {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
}

.line {
  width: 40px;
  height: 2px;
  background: #d1d5db;
  margin: 0 12px;
  transition: 0.3s;
}

.line.active {
  background: #22c55e;
}

/* Card */
.card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.card p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
}

.illustration {
  width: 200px;
  margin: 0 auto 24px;
}

/* Buttons */
.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

button.back {
  background: #f3e8ff;
  color: #7e22ce;
}

button.back:hover {
  background: #e9d5ff;
}

button.publish {
  background: #22c55e;
  color: white;
}

button.publish:hover {
  background: #16a34a;
}
</style>
