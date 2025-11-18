<template>
  <div class="main-header">
    <div class="header-left">
      <img src="../../assets/icons/logo.svg" alt="logo" />
      <ul>
        <li @click="goHome">Главний</li>
        <li @click="goToBirja">Биржа</li>
        <li @click="goToWorks">Ворки</li>
        <li @click="goToKonkurs">Конкурсы</li>
        <li @click="goToCreateWork">Создать ворк</li>
        <li @click="goToZakaz">Создать заказ</li>
      </ul>
    </div>
    <div v-if="!signedIn" class="header-right">
      <button @click="goToLogin">Регистрация</button>
      <button @click="goToLogin">Войти</button>
    </div>
    <div v-if="signedIn" class="header-right2">
      <span class="username-span">{{ username }}</span>
      <img
        :title="username"
        @click="goToProfile"
        src="../../assets/icons/profile-img.svg"
        alt="img"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const storedUsername = localStorage.getItem("username") || "";
    return {
      username: storedUsername,
      signedIn: storedUsername.length > 0,
    };
  },
  mounted() {
    window.addEventListener("storage-changed", this.updateState);
  },
  beforeUnmount() {
    window.removeEventListener("storage-changed", this.updateState);
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goToWorks() {
      this.$router.push("/works");
    },
    goToBirja() {
      this.$router.push("/birja");
    },
    goToZakaz() {
      this.$router.push("/zakaz");
    },
    goToKonkurs() {
      this.$router.push("/contests");
    },
    goToCreateWork() {
      this.$router.push("/first");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    updateState() {
      this.username = localStorage.getItem("username") || "";
      this.signedIn = this.username.length > 0;
    },
  },
};
</script>
<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 120px;
  background-color: #fff;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 70px;
  ul {
    display: flex;
    list-style: none;
    gap: 40px;
    li {
      font-size: 16px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
    }
  }
}
.header-right {
  display: flex;
  gap: 30px;
  button {
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  button:first-child {
    width: 170px;
    background-color: #f2f0fe;
    color: #1dbf73;
  }
  button:last-child {
    width: 110px;
    background-color: #1dbf73;
    color: #fff;
  }
}
.header-right2 {
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    font-size: 17px;
    font-weight: 600;
    color: #333;
  }
}
</style>
