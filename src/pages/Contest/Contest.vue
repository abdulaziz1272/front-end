<template>
  <!-- <div class="page"> -->
  <div class="container">
    <!-- Chap qism -->
    <div class="left">
      <h1>Нужно сделать рекламный баннер</h1>
      <div class="price">100 000 тенге <span>до 14.07.2021</span></div>

      <p><strong>Название компании / частное лицо:</strong> McDonalds</p>
      <p><strong>Род деятельности компании:</strong> Бургерная</p>
      <p><strong>Регион:</strong> Республика Казахстан, г. Алматы</p>
      <p><strong>Целевая аудитория:</strong> от 6 до 60 лет</p>
      <p>
        <strong>Укажите ближайших конкурентов: </strong>BurgerKing, KFC,
        JekasDoner
      </p>

      <p>
        <strong
          >Опишите основные конкурентные преимущества компании / объекта /
          услуги: </strong
        >Расположен в центральных улицах и больших ТЦ
      </p>

      <div>
        <p>
          <strong
            >Дизайн страницы какой социальной сети необходимо
            разработать:</strong
          >
        </p>
        <ul>
          <li>Facebook</li>
          <li>Вконтакте</li>
          <li>Instagram</li>
        </ul>
      </div>

      <div class="links">
        <strong>Адрес сайта:</strong>
        <div class="link">
          <a href="https://www.mcdonalds.kz/" target="_blank">
            https://www.mcdonalds.kz/
          </a>
          <a href="https://vk.com/mcdonalds_kazakhstan"
            >https://vk.com/mcdonalds_kazakhstan</a
          >
          <a href="https://www.facebook.com/mcd.kazakhstan/"
            >https://www.facebook.com/mcd.kazakhstan/</a
          >
        </div>
      </div>

      <div>
        <p><strong>Цель создания страницы: </strong> (лишние пункты удалите)</p>
        <ul>
          <li>имидж</li>
          <li>продажа продукта на странице</li>
          <li>информирование</li>
          <li>привлечение трафика на сайт</li>
        </ul>
      </div>

      <p>
        <strong>Какое должно быть название страницы? </strong> <br />
        McDonalds
      </p>
      <p>
        <strong>Есть ли логотип компании? </strong> <br />
        Да
      </p>
      <div>
        <p>
          <strong>Какой стиль страницы является предпочтительным: </strong>
        </p>
        <ul>
          <li>открытый к общению</li>
          <li>игривый</li>
          <li>собеседник - друг</li>
        </ul>
      </div>
      <p>
        <strong>Какую информацию вы хотите размещать на странице? </strong>
        <br />
        Реклама продукта
      </p>

      <p>
        <strong
          >Укажите любую дополнительную информацию, которую вы считаете важной.
        </strong>
        Сделать мощный и красивый баннер
      </p>

      <h2>Файлы задания</h2>
      <div class="files">
        <div class="file">
          <img :src="fileImg" alt="file image" /> <span>Документ 1.png</span>
        </div>
        <div class="file">
          <img :src="fileImg" alt="file image" /> <span>Документ 2.jpeg</span>
        </div>
        <div class="file">
          <img :src="fileImg" alt="file image" /> <span>Документ 3.pdf</span>
        </div>
      </div>
    </div>

    <!-- O‘ng qism -->
    <div class="right">
      <div class="right-con">
        <div class="acc">
          <div class="avatar"><img :src="avatar" alt="avatar" /></div>
          <div class="desc-con">
            <div class="name">Екатерина Иванова</div>
            <div class="desc">Размещаю проекты на бирже: 25</div>
            <div class="stars"><img :src="stars" alt="stars icon" /></div>
          </div>
        </div>
      </div>
      <div class="tags">
        <span class="tag">Дизайн баннера</span>
        <span class="tag">Реклама</span>
        <span class="tag">Дизайн соц сетей</span>
        <span class="tag">Web дизайн </span>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import fileImg from "../../assets/images/file-img.png";
import stars from "../../assets/images/stars2.svg";
import avatar from "../../assets/images/user.png";
export default {
  data() {
    return {
      fileImg,
      stars,
      avatar,
    };
  },
  name: "BannerTask",
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.container {
  padding: 30px;
  display: flex;
  gap: 25px;
  justify-content: space-between;
  margin: 0 150px;
  overflow: hidden;
}

/* Chap panel */
.left {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 70%;
  padding: 30px;
  border: 1px solid #f2f0fe;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
}
p {
  margin: 200px 0;
}
.left h1 {
  font-size: 22px;
  margin-bottom: 10px;
}

.price {
  color: #16a34a;
  font-weight: bold;
  margin-bottom: 15px;
}

.price span {
  color: #666;
  font-size: 13px;
  margin-left: 5px;
}

.left p {
  margin: 6px 0;
  color: #333;
}

.left a {
  color: #2563eb;
  text-decoration: none;
}

.left a:hover {
  text-decoration: underline;
}

ul li {
  list-style: disc;
  margin: 5px 20px;
}
.link {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
h2 {
  margin-top: 20px;
  font-size: 18px;
  color: #111;
}

.files {
  margin-top: 10px;
}

.file {
  padding: 8px 10px;
  border-radius: 6px;
  margin: 5px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

/* O‘ng panel */
.right {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 50%;
  background: transparent;
}
.right-con {
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #f2f0fe;
  padding: 25px;
}
.avatar {
  margin-bottom: 10px;
}

.acc {
  display: flex;
  align-items: center;
  gap: 25px;
}
.desc-con {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.name {
  font-weight: 500;
  font-size: 18px;
}

.desc {
  color: #000000;
  margin: 5px 0;
  font-weight: 500;
  font-size: 18px;
}

.stars {
  color: orange;
  margin-bottom: 10px;
}

.tags {
  margin-top: 10px;
}

.tag {
  border: 1px solid #f2f0fe;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  margin: 3px;
  display: inline-block;
  cursor: pointer;
}
</style>
