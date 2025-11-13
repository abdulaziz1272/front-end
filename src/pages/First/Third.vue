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

    <!-- Description -->
    <h3>Описание</h3>
    <div class="editor-toolbar">
      <button
        v-for="(icon, i) in toolbarIcons"
        :key="i"
        class="toolbar-btn"
      >
        {{ icon }}
      </button>
    </div>

    <textarea
      v-model="description"
      placeholder="Кратко опишите свой ворк"
      class="description-textarea"
      rows="6"
    ></textarea>

    <!-- FAQ Section -->
    <h3>Часто задаваемые вопросы</h3>

    <div class="faq-section">
      <div
        v-for="(faq, i) in faqs"
        :key="i"
        class="faq-card"
      >
        <div class="faq-field">
          <label>Вопрос</label>
          <input v-model="faq.question" placeholder="Введите вопрос" />
        </div>
        <div class="faq-field">
          <label>Ответ</label>
          <input v-model="faq.answer" placeholder="Введите ответ" />
        </div>
        <button class="delete-btn" @click="removeFaq(i)">Удалить</button>
      </div>

      <div class="add-faq" @click="addFaq">
        <div class="plus">+</div>
        <p>Добавить вопрос-ответ</p>
      </div>
    </div>

    <!-- Navigation -->
    <div class="nav-buttons">
      <button class="back-btn" @click="prevStep">Назад</button>
      <button class="next-btn" @click="nextStep">Дальше</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = [
  "Основные",
  "Стоимость и опции",
  "Описание",
  "Требования",
  "Галерея",
  "Публикация",
]

const currentStep = ref(3)
const description = ref("")
const toolbarIcons = ["B", "I", "@", "¶", "–", "•", "« »", "🔗", "🖼", "📷", "▦"]

const faqs = ref([{ question: "", answer: "" }])

function addFaq() {
  faqs.value.push({ question: "", answer: "" })
}

function removeFaq(index) {
  faqs.value.splice(index, 1)
}

function nextStep() {
  if (currentStep.value < steps.length) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}
</script>

<style scoped>
.form-container {
  width: 800px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #fafafa;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

/* Steps */
.steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
  transition: color 0.3s;
}

.step.active {
  color: #1abc9c;
}

.circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

/* Toolbar */
.editor-toolbar {
  background: #f3ecff;
  border-radius: 8px;
  padding: 6px;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.toolbar-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  transition: 0.2s;
}

.toolbar-btn:hover {
  color: #7d5fff;
}

/* Textarea */
.description-textarea {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  resize: none;
  margin-bottom: 40px;
  font-family: inherit;
  font-size: 14px;
}

/* FAQ section */
.faq-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.faq-card {
  flex: 1 1 360px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
}

.faq-card:hover {
  transform: translateY(-3px);
}

.faq-field {
  margin-bottom: 15px;
}

.faq-field label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.faq-field input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  transition: border-color 0.2s;
}

.faq-field input:focus {
  border-color: #1abc9c;
  outline: none;
}

/* Add new FAQ card */
.add-faq {
  flex: 1 1 220px;
  background-color: #f9f6ff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  padding: 20px;
  transition: 0.2s;
}

.add-faq:hover {
  background-color: #f0e8ff;
}

.add-faq .plus {
  background-color: #ff914d;
  color: white;
  font-size: 28px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 8px;
}

/* Delete button */
.delete-btn {
  margin-top: 10px;
  background: #ffeaea;
  color: #e57373;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
}

.delete-btn:hover {
  background-color: #ffc9c9;
}

/* Navigation buttons */
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.back-btn,
.next-btn {
  padding: 10px 25px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.back-btn {
  background-color: #f5f5f5;
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
