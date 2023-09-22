<template>
  <div class="py-4">
    <div class="container">
      <div v-for="task in tasks" :key="task.id">
        <div
          class="item-task d-flex align-items-center pt-3 pb-4"
          v-if="task.id == paramId"
        >
          <input
            type="checkbox"
            name="status"
            id="task"
            class="me-2 mt-2"
            :checked="task.isDone"
            v-model="task.isDone"
          />
          <div class="">
            <div class="title-task mb-1">
              {{ task.title }}
            </div>
            <div class="description-task small text-muted mb-4">
              {{ task.description }}
            </div>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: "custom",
  data() {
    return {
      paramId: parseInt(this.$route.params.id), // Parse as an integer
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "ini deskripsi 1",
          isDone: false,
        },
        {
          id: 2,
          title: "Tugas 2",
          description: "ini deskripsi 2",
          isDone: false,
        },
        {
          id: 3,
          title: "Kerja 3",
          description: "ini deskripsi 3",
          isDone: false,
        },
      ],
    };
  },
  methods: {
    nextTask() {
      const currentTaskIndex = this.tasks.findIndex(task => task.id === this.paramId);
      if (currentTaskIndex !== -1 && currentTaskIndex < this.tasks.length - 1) {
        const nextTask = this.tasks[currentTaskIndex + 1];
        this.paramId = nextTask.id;
        this.$router.replace({ name: 'app-detail-id', params: { id: this.paramId.toString() } });
      }
    },
  },
};
</script>

<style>
</style>
