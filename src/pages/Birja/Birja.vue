<template>
    <div class="bg-[#f8fafc] min-h-screen p-6">
        <div class="max-w-5xl mx-auto">

            <div class="first-section">
                <h2 class="word">
                    {{ projects.length }} проектов по дизайну
                </h2>

                <div class="header-1">
                    <input type="text" placeholder="Минимальная цена"
                        class="border border-gray-200 rounded-lg px-3 py-1.5 text-sm w-40 focus:outline-none" />
                    <input type="text" placeholder="Максимальная цена"
                        class="border border-gray-200 rounded-lg px-3 py-1.5 text-sm w-40 focus:outline-none" />
                    <select
                        class="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600 focus:outline-none">
                        <option>По возрастанию цены</option>
                        <option>По убыванию цены</option>
                    </select>
                </div>
            </div>

            <div class="container-card">
                <div v-for="(project, index) in projects" :key="index" >
                    <div class="project">
                        <div class="left">
                            <img :src="projects[index].avatar" alt="user" />
                            <div class="info">
                                <h3>Нужно сделать Дизайн сайта по тематике авто</h3>
                                <p>Екатерина Иванова</p>
                                <p>Размещено проектов на бирже: 25</p>
                                <div class="stars">
                                    ★★★★<span class="gray">★</span>
                                    <small>15 отзывов</small>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="budget">Бюджет: 50 000 тенге</div>
                            <div class="time">4 часа 28 минут назад</div>
                            <div class="offers">Предложений: 50</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
        title: "Нужно сделать Дизайн сайта по тематике авто",
        author: "Екатерина Иванова",
        projectsCount: 25,
        reviews: 15,
        budget: "50 000 тенге",
        time: "4 часа 28 минут назад",
        offers: 50,
        avatar: "https://i.pravatar.cc/100?img=47"
    },
    


];
</script>

<style>

.header-1{
    /* border: red solid; */
    gap: 20px;
    display: flex;
    justify-content: center;
}
.container-card {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 30px;
}
.first-section{
    display: flex;
    padding: 0 120px;
    justify-content: space-between;
    align-items: center;
}
.word{
    margin-top: 20px;
}

.project {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    padding: 0px 120px;
    /* border: black solid; */
    transition: background 0.2s;
}

.project:hover {
    background: #fafafa;
}

.left {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.left img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
}

.info h3 {
    font-size: 16px;
    margin: 0 0 4px 0;
    font-weight: 600;
    color: #222;
}

.info p {
    margin: 2px 0;
    font-size: 14px;
    color: #555;
}

.stars {
    color: #ffb400;
    font-size: 14px;
    margin-top: 4px;
}

.stars .gray {
    color: #ccc;
}

.stars small {
    color: #777;
    font-size: 12px;
    margin-left: 4px;
}

.right {
    text-align: right;
    font-size: 14px;
    color: #666;
    min-width: 170px;
}

.right .budget {
    color: #00b67a;
    font-weight: 600;
}

.right .time {
    color: #999;
    margin-top: 4px;
}

.right .offers {
    margin-top: 24px;
    color: #777;
    font-size: 13px;
}
</style>
