    <template>
  <div class="search-container">
    <div class="search-bar">
      <input
        v-model="query"
        type="text"
        placeholder="Какую работу ищете?"
        class="search-input"
      />
      <button class="search-btn">Найти</button>
    </div>

    <div class="price-filter">
      <input type="number" placeholder="Минимальная цена" v-model="minPrice" />
      <span>—</span>
      <input type="number" placeholder="Максимальная цена" v-model="maxPrice" />

      <select v-model="sortOrder">
        <option value="asc">По возрастанию цены</option>
        <option value="desc">По убыванию цены</option>
      </select>
    </div>

    <div class="categories">
      <button
        v-for="cat in categories"
        :key="cat"
        class="category-btn"
        :class="{ active: cat === activeCategory }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const query = ref("");
const minPrice = ref("");
const maxPrice = ref("");
const sortOrder = ref("asc");

const categories = [
  "Дизайн",
  "Дизайн сайтов",
  "Дизайн логотипа",
  "Арт и иллюстрации",
  "Флаеры и брошюры",
  "Дизайн визиток",
  "Баннеры и стенды",
  "Дизайн презентаций",
  "Все подкатегории",
];

const activeCategory = ref(categories[0]);
</script>

<style scoped>
.search-container {
  max-width: 1000px;
  margin: 40px auto;
  font-family: sans-serif;
}

.search-bar {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: #f5f3f9;
}

.search-btn {
  background-color: #ff9955;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
}

.price-filter {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
}

.price-filter input,
.price-filter select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
}

.category-btn {
  padding: 8px 14px;
  border: 1px solid #ffa45b;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.category-btn.active {
  background: #e6f5ef;
  color: #00b477;
  border-color: #00b477;
}
</style>
