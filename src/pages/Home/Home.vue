<template>
  <div>
    <!-- 🔹 Hero qismi -->
    <div class="container">
      <div class="left">
        <h1>
          Покупайте фриланс-услуги <br />
          <span class="green">в два клика</span>
        </h1>

        <p class="desc">
          Ворк — единица работы продавца, которую можно купить как товар в магазине
        </p>

        <form class="search" @submit.prevent="handleSearch">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Что нужно сделать?"
          />
          <button type="submit">Найти</button>
        </form>

        <div class="categories">
          <button
            v-for="(cat, i) in categories"
            :key="i"
            @click="selectCategory(cat)"
            :class="{ active: selectedCategory === cat }"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="right">
        <div class="image-wrapper">
          <img
            src="../../assets/images/01.png"
            alt="Freelancer"
          />
        </div>
      </div>
    </div>

    <!-- 🔹 Актуальные ворки -->
    <section class="works-section">
      <h2>Актуальные ворки</h2>

      <div class="works-grid">
        <div v-for="(work, i) in works" :key="i" class="work-card">
          <div class="card-header">
            <img :src="work.avatar" alt="user" class="avatar" />
            <div class="card-title">
              <h3>{{ work.title }}</h3>
            </div>
          </div>

          <p class="desc">{{ work.description }}</p>

          <button class="view-btn">Посмотреть</button>
        </div>

        <div class="work-card see-all">
          <a href="#">Смотреть все ворки</a>
        </div>
      </div>
    </section>

    <!-- 🔹 Топ фрилансеров -->
    <section class="freelancers-section">
      <h2>Топ фрилансеров</h2>

      <div class="freelancers-grid">
        <div
          v-for="(freelancer, i) in freelancers"
          :key="i"
          class="freelancer-card"
        >
          <div class="freelancer-info">
            <img :src="freelancer.image" alt="Freelancer" class="freelancer-photo" />
            <div class="freelancer-text">
              <h3>{{ freelancer.name }}</h3>
              <p class="role">{{ freelancer.role }}</p>
              <p class="projects">Выполнено проектов: {{ freelancer.projects }}</p>
              <div class="stars">⭐️⭐️⭐️⭐️⭐️</div>
            </div>
          </div>
          <button class="message-btn">Написать</button>
        </div>

        <div class="freelancer-card see-all">
          <a href="#">Посмотреть всех ТОП фрилансеров</a>
        </div>
      </div>
    </section>

    <!-- 🔹 Как решать задачи -->
    <section class="how-section">
      <h2>Как решать задачи на WorkTap?</h2>
      <p class="desc">Идеально подходит для бизнеса и частных лиц</p>

      <div class="steps">
        <div class="step">
          <div class="icon">💻</div>
          <h3>Выберите услугу</h3>
          <p>
            В супермаркете WorkTap представлен широкий выбор услуг от
            квалифицированных специалистов.
          </p>
        </div>

        <div class="step">
          <div class="icon">💰</div>
          <h3>Оплатите</h3>
          <p>
            Деньги будут перечислены продавцу после того, как он выполнит
            работу, и вы её одобрите.
          </p>
        </div>

        <div class="step">
          <div class="icon">📄</div>
          <h3>Получите результат</h3>
          <p>
            Наш супермаркет гарантирует возврат средств, если заказ не будет
            выполнен.
          </p>
        </div>
      </div>
    </section>
    <!-- 🔹 Как WorkTap помогает бизнесу -->
    <section class="business-help"> 
    <div class="business-content">
        <div class="business-left">
        <h2>Как WorkTap помогает бизнесу?</h2>

        <div class="benefit">
            <div class="icon-box">💳</div>
            <p>Оплачивайте с р/счёта или карты компании</p>
        </div>

        <div class="benefit">
            <div class="icon-box">💸</div>
            <p>Экономьте до 87% бюджета на фрилансе</p>
        </div>

        <div class="benefit">
            <div class="icon-box">⏰</div>
            <p>Экономьте до 75% времени на решении фриланс-задач</p>
        </div>

        <p class="tagline">WorkTap — быстро, просто и безопасно!</p>

        <button class="start-btn">Начать!</button>
        </div>

        <div class="business-right">
            <img
                src="../../assets/images/workspace-with-office-supplies 1 (1).png"
                alt="Business Help"
                width="600px"
                height="400px"
            />
        </div>
    </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const selectedCategory = ref(null);
const categories = [
  "🎨 Дизайн",
  "Дизайн сайтов",
  "Дизайн логотипа",
  "Дизайн визиток",
  "Арт и иллюстрации",
  "Флаера и брошюры",
  "Баннеры и стенды",
  "Дизайн презентаций",
  "Все подкатегории",
];

const handleSearch = () => alert(`Ищем: ${searchQuery.value}`);
const selectCategory = (cat) => (selectedCategory.value = cat);

const works = [
  {
    title: "Сделать дизайн интернет-магазина",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim.",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    title: "Верстка landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    title: "Сделать дизайн сайта-каталога",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    title: "Продвижение instagram",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerит dictum diam.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    title: "Срочно! Нужен веб дизайнер!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerит dictum diam.",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const freelancers = [
  {
    name: "Марина Королёва",
    role: "Разработчик PHP",
    projects: 65,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Семён Сергеев",
    role: "Копирайтер",
    projects: 104,
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Ангелина Сорокина",
    role: "Дизайнер сайтов",
    projects: 25,
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Никита Зайцев",
    role: "Маркетолог",
    projects: 144,
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Наталья Захарова",
    role: "Motion дизайнер",
    projects: 71,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];
</script>


<style scoped>


/* === HERO === */
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 40px;
}

.left {
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  max-width: 600px;
}
.left h1 {
  font-size: 38px;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 20px;
}
.green {
   color: #20b15a; 
}
.desc {
  color: #666;
  font-size: 18px;
  margin-bottom: 30px;
}

.search {
  display: flex;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  max-width: 400px;
}
.search input {
  flex: 1;
  border: none;
  outline: none;
  padding: 14px 20px;
  font-size: 16px;
}
.search button {
  background: #ff9e2b;
  border: none;
  color: white;
  font-weight: 600;
  padding: 14px 25px;
  cursor: pointer;
  transition: 0.2s;
  width: 100px;
  border-radius: 50px;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
}
.categories button {
  border: none;
  background: #efefef;
  padding: 10px 18px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
}
.categories button.active {
  background: #dff6e5;
  color: #1f8b4c;
  font-weight: 600;
}

/* === ВОРКИ === */
.works-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}
.works-section h2 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 30px;
  font-weight: 600;
}
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
.work-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.work-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
/* .image-wrapper img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
} */
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
}
.desc {
  flex: 1;
  color: #666;
  font-size: 14px;
  margin: 12px 0 18px;
  line-height: 1.5;
}
.view-btn {
  align-self: center;
  width: 100%;
  border: 1.8px solid #20b15a;
  color: #20b15a;
  background: transparent;
  border-radius: 25px;
  padding: 10px 0;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}
.view-btn:hover {
  background: #20b15a;
  color: white;
}
.see-all {
  background: #f4f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}
.see-all a {
  color: #20b15a;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
}

/* === ФРИЛАНСЕРЫ === */
.freelancers-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}
.freelancers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}
.freelancer-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.freelancer-info {
  display: flex;
  align-items: center;
  gap: 15px;
}
.freelancer-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.freelancer-text h3 {
  font-size: 16px;
  margin: 0;
}
.role {
  color: #ff9e2b;
  font-weight: 600;
  margin: 4px 0;
}
.projects {
  color: #666;
  font-size: 14px;
}
.stars {
  color: #ffa726;
  font-size: 15px;
}
.message-btn {
  background: none;
  color: green;
  border: 2px solid green;
  border-radius: 30px;
  padding: 10px 0;
  margin-top: 15px;
  font-weight: 600;
  cursor: pointer;
}
.message-btn:hover {
  background: #1a954b;
  color: white;
}

/* === КАК РЕШАТЬ === */
.how-section {
  /* text-align: center; */
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}
.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}
.step {
  max-width: 300px;
}
.icon {
  font-size: 40px;
  margin-bottom: 10px;
}

/* === 🔹 Как WorkTap помогает бизнесу === */
.business-help {
  background: linear-gradient(90deg, #ffbb00 0%, #ffcf40 100%);
  padding: 40px 40px; 
  color: #1a1a1a;
}
.business-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  /* gap: 40px; */
}
.business-left {
  flex: 1 1 400px;
}
.business-left h2 {
  font-size: 24px;
  margin-bottom: 25px;
}
.benefit {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 420px;
}
.icon-box {
  background: #20b15a; 
  color: white;
  font-size: 20px;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}
.benefit p {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
}
.tagline {
  margin-top: 20px;
  font-weight: 600;
}
.start-btn {
  background: #6a4cff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.2s;
}
.start-btn:hover {
  background: #5338d1;
}
.business-right img {
  object-fit: cover;
}

</style>
 
