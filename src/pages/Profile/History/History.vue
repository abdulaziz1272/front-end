<template>
  <section class="history-page">
    <h2 class="title">История <span>покупок</span></h2>

    <div class="top-info">
      <p class="all">
        Всего <b>{{ works.length }}</b> сделок
      </p>

      <div class="filters">
        <span>Показать только:</span>
        <label><input type="radio" value="all" v-model="filter" /> Все</label>
        <label
          ><input type="radio" value="progress" v-model="filter" />
          Выполняется</label
        >
        <label
          ><input type="radio" value="done" v-model="filter" /> Завершено</label
        >
      </div>

      <select v-model="sortType" class="sort-select">
        <option value="asc">По возрастанию цены</option>
        <option value="desc">По убыванию цены</option>
      </select>
    </div>

    <div class="cards">
      <div class="card" v-for="(item, index) in filteredAndSorted" :key="index">
        <img :src="item.img" />

        <div class="content">
          <h3>{{ item.name }}</h3>
          <p class="package">Стандарт пакет</p>

          <div class="row">
            <span class="price">{{ item.price }}</span>
            <span class="date">{{ item.date }}</span>
          </div>

          <p :class="['status', item.statusClass]">{{ item.status }}</p>

          <div class="btns">
            <button class="chat-btn">В чат</button>
            <button class="details-btn">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import workImg from "../../../assets/images/work-img.png";

export default {
  data() {
    return {
      filter: "all",
      sortType: "asc",
      works: Array(20)
        .fill({
          img: workImg,
          name: "Дизайн сайта",
          price: 50000,
          date: "26.03.2021",
          status: "Выполняется",
          statusClass: "progress",
        })
        .map((item, i) =>
          i % 3 === 0
            ? { ...item, status: "Завершено", statusClass: "done" }
            : item
        ),
    };
  },

  computed: {
    filteredAndSorted() {
      let result = this.works;

      if (this.filter !== "all") {
        result = result.filter((item) => item.statusClass === this.filter);
      }

      result = [...result].sort((a, b) =>
        this.sortType === "asc" ? a.price - b.price : b.price - a.price
      );

      return result;
    },
  },
};
</script>

<style scoped>
.history-page {
  padding: 30px 300px;
}
.all {
  font-size: 24px;
  font-weight: 600;
}
.title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
}
.title span {
  color: #ff8f1f;
}
.top-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.filters {
  display: flex;
  gap: 10px;
  align-items: center;
}
.sort-select {
  padding: 10px 20px;
  border-radius: 50px;
  background: transparent;
  outline: none;
  cursor: pointer;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
}
.card {
  background: #ffffff;
  border: 1px solid #eef0f3;
  border-radius: 16px;
  overflow: hidden;
}
.card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}
.content {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.package {
  font-size: 14px;
  color: #889;
}
.row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 4px 0;
}
.price {
  font-weight: 600;
}
.status {
  font-size: 14px;
  margin: 4px 0;
  padding: 4px 0px;
  border-radius: 8px;
  width: fit-content;
}
.status.progress {
  color: #e5a100;
}
.status.done {
  color: #1dbf73;
}
.btns {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
}
.chat-btn {
  background: #d7ffec;
  border-radius: 100px;
  padding: 7px 20px;
  border: none;
  cursor: pointer;
}
.details-btn {
  background: medium gray;
  border-radius: 100px;
  padding: 7px 12px;
  border: none;
  cursor: pointer;
}
</style>
