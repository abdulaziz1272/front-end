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

    <!-- Main form content -->
    <div class="form-content">
      <div class="form-group">
        <label>Название</label>
        <input type="text" v-model="form.name" placeholder="Placeholder" />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Категория</label>
          <select v-model="form.category">
            <option disabled value="">Placeholder</option>
            <option>Web</option>
            <option>Design</option>
          </select>
        </div>

        <div class="form-group">
          <label>Подкатегория</label>
          <select v-model="form.subcategory">
            <option disabled value="">Placeholder</option>
            <option>Frontend</option>
            <option>Backend</option>
          </select>
        </div>
      </div>

      <!-- Tags -->
      <div class="form-group">
        <label>Теги</label>
        <div class="tags">
          <div
            v-for="(tag, i) in form.tags"
            :key="i"
            class="tag"
          >
            {{ tag }}
            <span class="remove" @click="removeTag(i)">×</span>
          </div>
        </div>
      </div>

      <div class="form-group">
        <input
          v-model="newTag"
          type="text"
          placeholder="Добавить тег..."
          @keyup.enter="addTag"
        />
      </div>
    </div>

    <!-- Next button -->
    <button class="next-btn" @click="goToNextPage">Дальше</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

function goToNextPage() {
  router.push('/second')
}

const steps = ["Основные", "Стоимость и опции", "Описание", "Требования", "Галерея", "Публикация"];
const currentStep = ref(1);

const form = ref({
  name: "",
  category: "",
  subcategory: "",
  tags: ["Тег 1", "Тег 2", "Дизайн сайта"],
});

const newTag = ref("");

function addTag() {
  if (newTag.value.trim()) {
    form.value.tags.push(newTag.value.trim());
    newTag.value = "";
  }
}

function removeTag(index) {
  form.value.tags.splice(index, 1);
}

function nextStep() {
  if (currentStep.value < steps.length) currentStep.value++;
}
</script>

<style scoped>
.form-container {
  width: 600px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
}

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
}

.step.active {
  color: #4caf50;
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

.form-content {
  background: #f9fafc;
  padding: 20px;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #f0f0f0;
  border-radius: 6px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tag .remove {
  cursor: pointer;
  font-weight: bold;
}

.next-btn {
  margin-top: 20px;
  background-color: #1abc9c;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
}

.next-btn:hover {
  background-color: #17a589;
}
</style>