<template>
  <div class="py-4">
    <div class="container">
      <div v-for="artikel in articles" :key="artikel.id">
        <div
          class="artikel-task d-flex align-items-center pt-3 pb- 4"
          v-if="artikel.id == paramId"
        >
          <div>
            <div class="artikel-task mb-1 text-center">
              {{ artikel.title }}
            </div>
            <div class="description-task small text-muted">
              {{ artikel.content }}
            </div>
            <div class="img">
              <img
                :src="artikel.img"
                class="img-thumbnail mx-auto d-block"
                width="300"
                height="500"
              />
            </div>
          </div>
          <!-- End -->
        </div>
      </div>
      <!-- Button -->
      <div class="action mt-4 d-flex justify-content-sm-between">
        <div
          class="btn btn-outline-secondary btn-sm mb-3"
          @click="$router.go(-1)"
        >
          Kembali gan
        </div>
        <div
          class="btn btn-outline-secondary btn-sm mb-3 px-5"
          @click="nextTask"
        >
          Next
        </div>
      </div>
      <!-- End Button -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "custom",
  data() {
    return {
      paramId: parseInt(this.$route.params.id),
      articles: [
        {
          id: 1,
          title: "Judul Artikel 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: "https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          id: 2,
          title: "Judul Artikel 2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: "https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        },
        {
          id: 3,
          title: "Judul Artikel 3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: "https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
      ],
    };
  },
  methods:{
    nextTask() {
      const currentTaskIndex = this.articles.findIndex(artikel =>artikel.id === this.paramId);
      if (currentTaskIndex !== -1 && currentTaskIndex < this.articles.length - 1) {
        const nextTask = this.articles[currentTaskIndex + 1];
        this.paramId = nextTask.id;
        this.$router.replace({ name: 'artikel-detail-id', params: { id: this.paramId.toString() } });
      }
    },
  }
};
</script>

<style>
</style>