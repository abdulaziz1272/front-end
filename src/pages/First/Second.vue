<template>
  <div class="form-container">
    <!-- Step indicator -->
    <div class="steps">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="['step', { active: currentStep === index + 1 }]"
      >
        <div class="circle">{{ index + 1 }}</div>
        <div class="label">{{ step }}</div>
      </div>
    </div>

    <!-- Packages section -->
    <h3>Пакеты</h3>
    <div class="packages">
      <div
        v-for="(pkg, i) in packages"
        :key="i"
        class="package-card"
      >
        <h4>{{ pkg.name }}</h4>

        <div class="pkg-field">
          <label>Описание пакета</label>
          <input v-model="pkg.description" placeholder="Placeholder" />
        </div>
        <div class="pkg-field">
          <label>Срок выполнения</label>
          <input v-model="pkg.duration" placeholder="Placeholder" />
        </div>
        <div class="pkg-field">
          <label>Количество доработок</label>
          <input v-model="pkg.revisions" placeholder="Placeholder" />
        </div>
        <div class="pkg-field">
          <label>Стоимость в тенге</label>
          <input v-model="pkg.price" placeholder="Placeholder" />
        </div>

        <button class="add-option">Добавить опцию</button>
      </div>
    </div>

    <!-- Additional options -->
    <h3>Дополнительные опции</h3>
    <div class="additional-options">
      <div
        v-for="(opt, i) in extraOptions"
        :key="i"
        class="option-card"
      >
        <div class="pkg-field">
          <label>Название</label>
          <input v-model="opt.name" placeholder="Placeholder" />
        </div>
        <div class="pkg-field">
          <label>Подсказка для покупателя</label>
          <input v-model="opt.hint" placeholder="Placeholder" />
        </div>
        <div class="option-row">
          <div class="pkg-field small">
            <label>Срок выполнения</label>
            <input v-model="opt.duration" placeholder="Placeholder" />
          </div>
          <div class="pkg-field small">
            <label>Цена в тенге</label>
            <input v-model="opt.price" placeholder="Placeholder" />
          </div>
        </div>
        <button class="delete-btn" @click="removeOption(i)">Удалить</button>
      </div>

      <div class="add-new" @click="addOption">
        <div class="plus">+</div>
        <p>Добавить новую опцию</p>
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="nav-buttons">
      <button class="back-btn" @click="goToPrevPage">Назад</button>
      <button class="next-btn" @click="goToNextPage">Дальше</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

function goToNextPage() {
  router.push('/third')
}
function goToPrevPage() {
  router.push('/first')
}

const steps = [
  "Основные",
  "Стоимость и опции",
  "Описание",
  "Требования",
  "Галерея",
  "Публикация",
]

const currentStep = ref(2)

const packages = ref([
  { name: "Эконом", description: "", duration: "", revisions: "", price: "" },
  { name: "Стандарт", description: "", duration: "", revisions: "", price: "" },
  { name: "Бизнес", description: "", duration: "", revisions: "", price: "" },
])

const extraOptions = ref([{ name: "", hint: "", duration: "", price: "" }])

function addOption() {
  extraOptions.value.push({ name: "", hint: "", duration: "", price: "" })
}

function removeOption(index) {
  extraOptions.value.splice(index, 1)
}

function nextStep() {
  if (currentStep.value < steps.length) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}
</script>

<style scoped>
/* --- umumiy konteyner --- */
.form-container {
  width: 900px;
  margin: 40px auto;
  font-family: "Inter", sans-serif;
  background-color: #fafafa;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
}

/* --- step indicator --- */
.steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;
  font-size: 14px;
  transition: color 0.3s;
}

.step.active {
  color: #1abc9c;
  font-weight: 600;
}

.circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: 500;
}

/* --- packages --- */
.packages {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
}

.package-card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
}

.package-card:hover {
  transform: translateY(-3px);
}

.package-card h4 {
  text-align: center;
  color: #333;
  margin-bottom: 15px;
}

.pkg-field {
  margin-bottom: 15px;
}

.pkg-field label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.pkg-field input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.pkg-field input:focus {
  border-color: #1abc9c;
  outline: none;
}

/* --- add option button --- */
.add-option {
  width: 100%;
  background-color: #f3ecff;
  color: #7d5fff;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

.add-option:hover {
  background-color: #e5d9ff;
}

/* --- additional options --- */
.additional-options {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.option-card {
  flex: 1 1 380px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: 0.2s;
}

.option-card:hover {
  transform: translateY(-3px);
}

.option-row {
  display: flex;
  gap: 20px;
}

.small {
  flex: 1;
}

/* --- delete button --- */
.delete-btn {
  margin-top: 10px;
  background: #ffeaea;
  color: #e57373;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

.delete-btn:hover {
  background-color: #ffc9c9;
}

/* --- add new option --- */
.add-new {
  flex: 1 1 220px;
  background-color: #f9f6ff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
}

.add-new:hover {
  background-color: #f0e8ff;
}

.add-new .plus {
  background-color: #ff914d;
  color: white;
  font-size: 28px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 8px;
}

/* --- nav buttons --- */
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.back-btn,
.next-btn {
  padding: 10px 30px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
}

.back-btn {
  background-color: #f0f0f0;
  color: #555;
}

.back-btn:hover {
  background-color: #e0e0e0;
}

.next-btn {
  background-color: #1abc9c;
  color: white;
}

.next-btn:hover {
  background-color: #17a98a;
}
</style>
