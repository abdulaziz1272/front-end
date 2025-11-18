<template>
  <div class="page">
    <!-- Stepper -->
    <div class="stepper">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <div
          class="circle"
          :class="{ active: index + 1 <= currentStep }"
        >
          {{ index + 1 }}
        </div>
        <div
          v-if="index < steps.length - 1"
          class="line"
          :class="{ active: index + 1 < currentStep }"
        ></div>
      </div>
    </div>

    <!-- Step titles -->
    <div class="step-titles">
      <span
        v-for="(s, i) in steps"
        :key="i"
        :class="{ current: i + 1 === currentStep }"
      >
        {{ s }}
      </span>
    </div>

    <!-- Content -->
    <div class="content-box">
      <h2>Расскажите покупателю, что вам нужно для начала работы над заказом.</h2>
      <p class="subtitle">
        Структурируйте свои инструкции для покупателя в виде произвольного текста.
      </p>

      <!-- Text Editor -->
      <div class="text-editor">
        <div class="toolbar">
          <button><b>B</b></button>
          <button><i>I</i></button>
          <button>😊</button>
          <button>🔗</button>
          <button>🖼</button>
          <button>📋</button>
        </div>
        <textarea
          v-model="requirements"
          placeholder="Кратко опишите требования"
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="buttons">
        <button class="back" @click="goToPrevPage">Назад</button>
        <button class="next" @click="goToNextPage">Дальше</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

import { useRouter } from 'vue-router'
const router = useRouter()

function goToNextPage() {
  router.push('/fifth')
}
function goToPrevPage() {
  router.push('/third')
}

const steps = [
  "Основные",
  "Стоимость и опции",
  "Описание",
  "Требования",
  "Галерея",
  "Публикация"
]

const currentStep = ref(4)
const requirements = ref("")

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}

function nextStep() {
  if (currentStep.value < steps.length) currentStep.value++
}
</script>

<style scoped>
/* ===== PAGE ===== */
.page {
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: "Inter", sans-serif;
}

/* ===== STEPPER ===== */
.stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.step {
  display: flex;
  align-items: center;
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #cbd5e1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: 0.3s;
}
.circle.active {
  background: #22c55e;
}
.line {
  width: 60px;
  height: 4px;
  background: #cbd5e1;
}
.line.active {
  background: #22c55e;
}

/* ===== STEP TITLES ===== */
.step-titles {
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-bottom: 40px;
  color: #6b7280;
  font-size: 14px;
  flex-wrap: wrap;
}
.step-titles .current {
  color: #111827;
  font-weight: 600;
}

/* ===== CONTENT BOX ===== */
.content-box {
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 750px;
}
.content-box h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}
.subtitle {
  color: #6b7280;
  margin-bottom: 25px;
  font-size: 14px;
}

/* ===== TEXT EDITOR ===== */
.text-editor {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}
.toolbar {
  display: flex;
  gap: 10px;
  background: #f3f4f6;
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;
}
.toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.2s;
}
.toolbar button:hover {
  color: #22c55e;
}
.text-editor textarea {
  width: 100%;
  height: 160px;
  border: none;
  padding: 12px;
  resize: none;
  outline: none;
  font-size: 14px;
  color: #374151;
}

/* ===== BUTTONS ===== */
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
button.back {
  background: #e5e7eb;
  border: none;
  border-radius: 25px;
  padding: 10px 28px;
  cursor: pointer;
  transition: 0.3s;
}
button.back:hover {
  background: #d1d5db;
}
button.next {
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 28px;
  cursor: pointer;
  transition: 0.3s;
}
button.next:hover {
  background: #16a34a;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .content-box {
    padding: 20px;
  }
  .step-titles {
    gap: 15px;
    font-size: 12px;
  }
  .circle {
    width: 32px;
    height: 32px;
  }
  .line {
    width: 40px;
  }
}
</style>
