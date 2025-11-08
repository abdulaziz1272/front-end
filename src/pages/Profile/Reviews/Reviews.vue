<template>
  <section>
    <div class="reviews-wrapper">
      <div class="reviews" v-for="(review, index) in reviews" :key="index">
        <div class="head">
          <img :src="review.img" alt=" user image" />
          <div class="name">
            <h3>{{ review.name }}</h3>
            <img :src="review.stars" alt="stars image" />
          </div>
        </div>
        <p>{{ review.comments }}</p>
      </div>
    </div>
    <div class="show-more">
      <button class="show-btn">Загрузить еще</button>
    </div>
  </section>
</template>
<script>
import user from "../../../assets/images/user.png";
import stars from "../../../assets/images/stars2.svg";
export default {
  data() {
    user;
    return {
      originalReviews: [
        {
          img: user,
          name: "Никита Евреев",
          stars: stars,
          comments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ",
        },
      ],
    };
  },
  computed: {
    reviews() {
      return Array(6).fill(this.originalReviews).flat();
    },
  },
};
</script>
<style scoped>
.reviews-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 15px;
}
.reviews {
  width: 380px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  background: #f6fafd;
  border: 1px solid #f2f0fe;
}
.head {
  display: flex;
  align-items: center;
  gap: 25px;
}
.name {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.reviews p {
  width: 340px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #000000;
}
</style>
