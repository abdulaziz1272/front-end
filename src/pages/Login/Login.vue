<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Welcome Back</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Username</label>
          <input
            type="text"
            v-model="username"
            placeholder="Enter your Username"
            required
          />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      localStorage.setItem("username", this.username);

      window.dispatchEvent(new Event("storage-changed"));

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login-container {
  padding: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background: white;
  width: 550px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}

.login-box h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.input-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
}

.login-btn {
  width: 100%;
  padding: 12px;
  border: none;
  background: #6b47dc;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-btn:hover {
  background: #5836c8;
}

.signup-text {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.signup-text a {
  color: #6b47dc;
  text-decoration: none;
}

.signup-text a:hover {
  text-decoration: underline;
}
</style>
