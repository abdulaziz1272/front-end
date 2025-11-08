<template>
  <div class="info-container">
    <button class="toggle-btn" @click="isOpen = !isOpen">
      {{
        isOpen ? "Скрыть подробную информацию" : "Показать подробную информацию"
      }}
      <span :class="['arrow', { open: isOpen }]">▼</span>
    </button>
    <div class="content-wrapper" :class="{ open: isOpen }">
      <div class="info-content">
        <ul>
          <li>
            <span class="icon">🌍 Страна:</span>
            <strong>Казахстан, Алматы</strong>
          </li>
          <li>
            <span class="icon">🕓 На сайте:</span>
            <strong>3 года</strong>
          </li>
          <li>
            <span class="icon">🏛️ Образование:</span>
            <div class="sub">
              1. Казахстан, КазНУ, Бакалавр<br />
              2. Казахстан, КБТУ, Магистратура
            </div>
          </li>
          <li>
            <span class="icon">🈸 Знание языков:</span>
            <div class="sub">
              1. Казахский<br />
              2. Русский
            </div>
          </li>
          <li>
            <span class="icon">📘 Сертификаты:</span>
            <div class="sub">
              1. Сертификат 1, 2020 года<br />
              2. Сертификат 2, 2021 года
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoDropdown",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style scoped>
.info-container {
  background-color: #f2f0fe;
  padding: 12px 25px;
  border-radius: 10px;
  max-width: 500px;
}
.toggle-btn {
  width: 100%;
  background-color: #f2f0fe;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}
.arrow {
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}
.content-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.content-wrapper.open {
  max-height: 350px;
}
.info-content {
  margin-top: 12px;
  background: #f2f0fe;
  padding: 18px 22px;
  border-radius: 8px;
  font-size: 14px;
  color: #444;
}
.info-content li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
}
.icon {
  font-size: 18px;
}
.sub,
strong {
  font-weight: 500;
  color: #222222;
}
</style>
