<template>
    <div class="main-footer">
        <div class="footer-top">
            <div>
                <h3>Топ категории</h3>
                <ul class="text-ul">
                    <li>Тексты и переводы</li>
                    <li>Разработка</li>
                    <li>Дизайн</li>
                    <li>Аудио, видео монтаж</li>
                    <li>Соцсети и реклама</li>
                    <li>Бизнес и жизнь</li>
                    <li>SEO и оптимизация</li>
                </ul>
            </div>
            <div>
                <h3>О Проекте</h3>
                <ul class="text-ul">
                    <li>О Нас</li>
                    <li>Как Это Работает</li>
                    <li>Политика Приватности</li>
                    <li>Правила Пользования </li>
                    <li>Пресса о нас</li>
                </ul>
            </div>
            <div>
                <h3>Поддержка</h3>
                <ul class="text-ul">
                    <li>Контакты</li>
                    <li>Политика Безопасности</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <h3>Follow</h3>
                <ul class="icon-ul">
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fa-brands fa-square-twitter"></i></li>
                    <li><i class="fa-brands fa-square-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.main-footer {
    background-color: #F2F0FE;
    padding: 50px 120px 100px 120px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.footer-top{
    display: flex;
    justify-content: space-between;
    >div{
        display: flex;
        flex-direction: column;
        gap: 30px;

        h3{
            font-size: 24px;
            font-weight: 700;
        }
        .text-ul{
            display: flex;
            flex-direction: column;
            gap: 10px;

        }
        .icon-ul{
            display: flex;
            gap: 15px;
            font-size: 45px;
            li{
                transform: translateX(-10px);
                cursor: pointer;
            }
            li:hover{
                color: #1DBF73;
            }
        }
    }
}
.footer-bottom{
    text-align: center;
}
ul{
    list-style: none;
    padding: 0;
}
</style>