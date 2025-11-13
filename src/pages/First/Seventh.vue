<template>
  <div class="page">
    <div class="form-card">
      <h2>Опубликуйте ваш заказ</h2>

      <form @submit.prevent="submitForm">
        <!-- Название -->
        <div class="form-group">
          <label>Название</label>
          <input type="text" v-model="form.title" placeholder="Placeholder" />
        </div>

        <!-- Описание -->
        <div class="form-group">
          <label>Описание</label>
          <textarea
            v-model="form.description"
            placeholder="Кратко опишите свой заказ"
          ></textarea>
        </div>

        <!-- Категории -->
        <div class="form-row">
          <div class="form-group">
            <label>Категория</label>
            <select v-model="form.category">
              <option value="" disabled selected>Placeholder</option>
              <option>Дизайн</option>
              <option>Разработка</option>
              <option>Маркетинг</option>
            </select>
          </div>
          <div class="form-group">
            <label>Подкатегория</label>
            <select v-model="form.subcategory">
              <option value="" disabled selected>Placeholder</option>
              <option>UI/UX</option>
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </div>
        </div>

        <!-- Срок -->
        <div class="form-group">
          <label>Срок выполнения работы в днях</label>
          <input type="number" v-model="form.days" />
        </div>

        <!-- Бюджет -->
        <div class="form-group">
          <label>Бюджет в тенге</label>
          <input type="number" v-model="form.budget" />
        </div>

        <!-- Документы -->
        <div class="form-group">
          <label>Документы</label>
          <div class="file-upload">
            <input
              type="file"
              @change="handleFiles"
              multiple
              accept=".jpg,.jpeg,.png,.pdf"
            />
            <p>Перетащите файлы сюда или нажмите, чтобы выбрать</p>
          </div>
          <ul class="file-list">
            <li v-for="file in files" :key="file.name">
              📄 {{ file.name }}
            </li>
          </ul>
        </div>

        <!-- Buttons -->
        <div class="buttons">
          <button type="button" class="back">Назад</button>
          <button type="submit" class="publish">Опубликовать</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  title: '',
  description: '',
  category: '',
  subcategory: '',
  days: 14,
  budget: 250000
})

const files = ref([])

function handleFiles(event) {
  files.value = Array.from(event.target.files)
}

function submitForm() {
  alert('Форма отправлена! 🎉')
  console.log(form.value, files.value)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
}

.form-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 500;
  margin-bottom: 6px;
}

input,
textarea,
select {
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #7e22ce;
  box-shadow: 0 0 0 2px rgba(126, 34, 206, 0.2);
}

textarea {
  resize: none;
  min-height: 80px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.file-upload {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  text-align: center;
  padding: 30px;
  color: #6b7280;
  cursor: pointer;
  transition: 0.3s;
}

.file-upload:hover {
  background: #f3f4f6;
}

.file-list {
  margin-top: 10px;
  list-style: none;
  padding: 0;
  color: #374151;
  font-size: 14px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  padding: 10px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
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
