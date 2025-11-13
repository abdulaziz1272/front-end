<template>
  <div class="search-container">
    <div class="search-box">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Какую работу ищете?"
        class="search-input"
      />
      <button class="search-btn">Найти</button>
    </div>

    <div class="price-filter">
      <input
        v-model.number="minPrice"
        type="number"
        placeholder="Минимальная цена"
        class="price-input"
      />
      <span>—</span>
      <input
        v-model.number="maxPrice"
        type="number"
        placeholder="Максимальная цена"
        class="price-input"
      />
    </div>

    <div class="sort-dropdown">
      <select v-model="sortOption" class="sort-select">
        <option value="asc">По возрастанию цены</option>
        <option value="desc">По убыванию цены</option>
      </select>
    </div>
  </div>

  <div class="tags">
    <span class="tag">🎨 Дизайн</span>
    <span class="tag removable">
      Дизайн сайтов <span class="remove-tag" @click="removeTag">✕</span>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const minPrice = ref('')
const maxPrice = ref('')
const sortOption = ref('asc')

const removeTag = () => {
  console.log('Тег удалён')
}
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: #f7f7fc;
  padding: 1rem 2rem;
  border-radius: 12px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-input {
  padding: 0.6rem 1rem;
  border-radius: 20px;
  border: none;
  background-color: #f2f2f9;
  width: 220px;
  outline: none;
}

.search-btn {
  background-color: #ffa85c;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-weight: 500;
}

.price-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-input {
  width: 130px;
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;
}

.sort-dropdown {
  margin-left: auto;
}

.sort-select {
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: none;
  background-color: #f2f2f9;
  outline: none;
}

.tags {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.tag {
  font-size: 14px;
  color: #4CAF50;
}

.tag.removable {
  background-color: #fef3f3;
  color: #ff6b6b;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.remove-tag {
  cursor: pointer;
  font-weight: bold;
}
</style>
