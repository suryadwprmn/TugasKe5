<template>
    <div class="py-4">
      <div class="container">
        <div
          class="title border-bottom d-flex align-items-center justify-content-between py-2"
        >
          <h5>Task</h5>
          <div class="d-flex align-items-center">
            <!-- Dropdown Menu -->
            <div class="filter-category d-flex">
              <label for="category">Filter by Category</label>
              <select v-model="selectedCategory" id="category">
                <option value="">Semua Kategori</option>
                <option
                  v-for="category in uniqueCategories"
                  :value="category"
                  :key="category"
                >
                  {{ category }}
                </option>
              </select>
            </div>
  
            <!-- End Dropdown -->
            <input
              type="text"
              class="form-control"
              placeholder="Cari"
              v-model="searchQuery"
            />
            <div class="d-flex align-item-center justify-content-end w-100">
              <span class="me-2">View As</span>
              <button
                class="btn btn-outline-secondary py-1 px-3"
                @click="toggleView"
              >
                {{ isGrid ? "Grid" : "List" }}
              </button>
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="from">
          <div class="field">
            <div class="list-task row">
              <!-- <CardItem :task="tasks[0]" :isGrid="isGrid" />
              <CardItem :task="tasks[1]" :isGrid="isGrid" />
              <CardItem :task="tasks[2]" :isGrid="isGrid" /> -->
              <CardItem
                v-for="(task, i) in filteredTasks"
                :key="i"
                :task="task"
                :isGrid="isGrid"
              />
            </div>
            <div class="action py-2">
              <a
                v-if="!isCreating"
                href="#"
                class="add-button"
                @click="isCreating = !isCreating"
                >Add Task</a
              >
              <div v-else class="add-card">
                <div class="card mb-2">
                  <div class="card-body d-flex flex-column p-0">
                    <input
                      v-model="form.title"
                      class="form-control border-0 mb-2"
                      placeholder="Title"
                      type="text"
                    />
                    <textarea
                      v-model="form.description"
                      class="form-control border-0 small"
                      placeholder="Description"
                      rows="3"
                    ></textarea>
                    <label class="label">Select Category :</label>
                    <div class="control">
                      <select multiple v-model="form.category">
                        <option>Category A</option>
                        <option>Category B</option>
                        <option>Category C</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="button-wrapper d-flex">
                  <button @click="handleSubmit" class="btn btn-primary me-2">
                    Submit
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    @click="isCreating = !isCreating"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
  
      </div>
    </div>
  </template>
  
  <script>
  import CardItem from "@/components/Card/CardItem.vue";
  
  export default {
    layout(context) {
      return "custom";
    },
    components: {
      CardItem,
    },
    data() {
      return {
        searchQuery: "",
        isGrid: true,
        isCreating: false,
        tasks: [
          {
            id:1,
            title: "Task 1",
            description: "ini deskripsi 1",
            isDone: false,
            category: "Category A",
          },
          {
            id:2,
            title: "Tugas 2",
            description: "ini deskripsi 2",
            isDone: false,
            category: "Category B",
          },
          {
            id: 3,
            title: "Kerja 3",
            description: "ini deskripsi 3",
            isDone: false,
            category: "Category C",
          },
        ],
        form: {
          title: "",
          description: "",
          isDone: false,
          category: [],
        },
        option: {
          inquiry: [
            { value: "category A", text: "category A" },
            { value: "category B", text: "category B" },
            { value: "category C", text: "category C" },
          ],
        },
        inputanForm: [],
        selectedCategory: "",
      };
    },
    computed: {
      filteredTasks() {
        if (this.selectedCategory) {
          return this.tasks.filter(
            (task) => task.category === this.selectedCategory
          );
        } else if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          return this.tasks.filter((task) =>
            task.title.toLowerCase().includes(query)
          );
        } else {
          return this.tasks;
        }
      },
      uniqueCategories() {
        return Array.from(new Set(this.tasks.map((task) => task.category)));
      },
    },
    methods: {
      toggleView() {
        this.isGrid = !this.isGrid;
      },
      handleSubmit() {
        if (this.form.title &&this.form.description &&this.form.category.length > 0) {
          this.tasks.push({
            title: this.form.title,
            description: this.form.description,
            category: this.form.category,
            isDone: false,
          });
  
          this.form.title = "";
          this.form.description = "";
          this.form.category = [];
  
          this.isCreating = false;
          this.inputanForm = [];
        }
      },
    },
  };
  </script>
  
  <style>
  </style>
  