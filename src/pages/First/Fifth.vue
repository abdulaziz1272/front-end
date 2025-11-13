<template>
  <div class="page">
    <!-- Stepper -->
    <div class="stepper">
      <div v-for="(step, i) in steps" :key="i" class="step">
        <div
          class="circle"
          :class="{ active: i + 1 <= currentStep }"
        >
          {{ i + 1 }}
        </div>
        <div
          v-if="i < steps.length - 1"
          class="line"
          :class="{ active: i + 1 < currentStep }"
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

    <!-- Content box -->
    <div class="content-box">
      <h2>Создайте свою галерею</h2>
      <p class="subtitle">
        Добавьте запоминающийся контент в свою галерею, чтобы выделиться среди конкурентов.
      </p>

      <h3>Фотографии ворка</h3>
      <p class="note">
        Загрузите фотографии, которые описывают или имеют отношение к вашему ворку.
        Только файлы с расширением png, jpg, jpeg.
      </p>

      <!-- Photo upload -->
      <div class="photo-upload">
        <label class="photo-add">
          <div class="plus">＋</div>
          <span>Добавить фото</span>
          <input type="file" multiple @change="handlePhotoUpload" accept=".png,.jpg,.jpeg" hidden />
        </label>

        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="photo-preview"
        >
          <img :src="photo" alt="Фото" />
        </div>
      </div>

      <!-- YouTube link -->
      <div class="youtube-input">
        <label>Ссылка на видео Youtube</label>
        <input
          type="text"
          v-model="youtubeLink"
          placeholder="Placeholder"
        />
      </div>

      <h3>Документы ворка</h3>
      <p class="note">
        Мы рекомендуем добавлять файл документа только в том случае, если он дополнительно
        разъясняет услугу, которую вы будете предоставлять.
      </p>

      <!-- Document upload -->
      <div class="doc-upload">
        <label>
          <div class="doc-icon">📄</div>
          <div>Прикрепить документы</div>
          <input type="file" multiple @change="handleDocUpload" accept=".pdf,.doc,.docx" hidden />
        </label>
      </div>

      <!-- Uploaded docs -->
      <ul class="doc-list">
        <li v-for="(doc, i) in documents" :key="i">
          <span>{{ doc.name }}</span>
          <button @click="removeDoc(i)">✕</button>
        </li>
      </ul>

      <!-- Buttons -->
      <div class="buttons">
        <button class="back" @click="prevStep">Назад</button>
        <button class="next" @click="nextStep">Дальше</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const steps = [
  "Основные",
  "Стоимость и опции",
  "Описание",
  "Требования",
  "Галерея",
  "Публикация"
]

const currentStep = ref(5)

const photos = ref([])
const youtubeLink = ref("")
const documents = ref([])

function handlePhotoUpload(e) {
  const files = e.target.files
  for (let file of files) {
    const reader = new FileReader()
    reader.onload = ev => photos.value.push(ev.target.result)
    reader.readAsDataURL(file)
  }
}

function handleDocUpload(e) {
  documents.value.push(...Array.from(e.target.files))
}

function removeDoc(i) {
  documents.value.splice(i, 1)
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}

function nextStep() {
  if (currentStep.value < steps.length) currentStep.value++
}
</script>

<style scoped>
/* ===== Page Layout ===== */
.page {
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: "Inter", sans-serif;
}

/* ===== Stepper ===== */
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
  color: #fff;
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

/* ===== Step Titles ===== */
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

/* ===== Content Box ===== */
.content-box {
  background: #fff;
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
}
h3 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 25px;
}
.note {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 15px;
}

/* ===== Photo Upload ===== */
.photo-upload {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 25px;
}
.photo-add {
  width: 120px;
  height: 120px;
  background: #f3e8ff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #444;
  transition: 0.3s;
}
.photo-add:hover {
  background: #e9d5ff;
}
.photo-add .plus {
  font-size: 32px;
  color: #f97316;
}
.photo-preview {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}
.photo-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== Input ===== */
.youtube-input {
  margin-bottom: 25px;
}
.youtube-input label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.youtube-input input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  outline: none;
  transition: 0.2s;
}
.youtube-input input:focus {
  border-color: #22c55e;
}

/* ===== Docs ===== */
.doc-upload {
  background: #f3e8ff;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
}
.doc-upload:hover {
  background: #e9d5ff;
}
.doc-icon {
  font-size: 28px;
  color: #f97316;
  margin-bottom: 5px;
}
.doc-list {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}
.doc-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f3f4f6;
  color: #374151;
}
.doc-list button {
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 16px;
}

/* ===== Buttons ===== */
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
</style>
