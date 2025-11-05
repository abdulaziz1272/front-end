<template>
    <div class="main-header">
        <div class="header-left">
            <img src="../../assets/icons/logo.svg" alt="logo">
            <ul>
                <li>Биржа</li>
                <li>Ворки</li>
                <li>Конкурсы</li>
                <li>Создать ворк</li>
                <li>Создать заказ</li>
            </ul>
        </div>
        <div class="header-right">
            <button>Регистрация</button>
            <button>Войти</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 120px;
    background-color: #fff;
}
.header-left{
    display: flex;
    align-items: center;
    gap: 70px;
    ul{
        display: flex;
        list-style: none;
        gap: 40px;
        li{
            font-size: 16px;
            font-weight: 500;
            color: #333;
            cursor: pointer;
        }
    }
}
.header-right{
    display: flex;
    gap: 30px;
    button{
        height: 40px;
        border-radius: 20px;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    };
    button:first-child{
        width: 170px;
        background-color: #F2F0FE;
        color: #1DBF73;
    };
    button:last-child{
        width: 110px;
        background-color: #1DBF73;
        color: #fff;
    };
}
</style>