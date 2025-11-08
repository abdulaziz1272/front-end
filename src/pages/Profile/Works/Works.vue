<template>
  <section>
    <div class="work-wrapper">
      <div class="add-btn">
        <div>
          <img :src="addIcon" alt="add icon" />
        </div>
        <p>Создать ворк</p>
      </div>
      <div class="work" v-for="(work, index) in works" :key="index">
        <img :src="work.img" :alt="work.name" />
        <div class="info">
          <h3>{{ work.name }}</h3>
          <p>{{ work.price }}</p>
        </div>
      </div>
    </div>
    <div class="show-more">
      <router-link to="/profile/history">
        <button class="show-btn">Загрузить еще</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import workImg from "../../../assets/images/work-img.png";
import addIcon from "../../../assets/icons/add-icon.png";
export default {
  name: "Works",
  data() {
    return {
      addIcon,
      originalWorks: [
        { img: workImg, name: "Дизайн сайта", price: "50 000 тенге" },
        { img: workImg, name: "Создание логотипа", price: "25 000 тенге" },
      ],
    };
  },
  computed: {
    works() {
      return Array(6).fill(this.originalWorks).flat();
    },
  },
};
</script>

<style scoped>
.work-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  padding: 20px 0;
}

.add-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 55px 30px;
  background: #d7ffec;
  border: 1px solid #f2f0fe;
  cursor: pointer;
  font-weight: 600;
  font-size: 28px;
  color: #1dbf73;
}
.work {
  background: #f6fafd;
  border-radius: 20px;
  width: 230px;
  height: 220px;
  text-align: start;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f2f0fe;
}
.info {
  padding: 5px 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.work:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.work img {
  width: 100%;
}

.work h3 {
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
}

.work p {
  font-size: 14px;
  color: #666;
}
</style>
