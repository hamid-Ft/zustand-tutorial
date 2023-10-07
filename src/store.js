import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "DONE" }],
  addTask: (title, state) =>
    set((store) => ({
      tasks: [...store.tasks, { title, state }],
    })),
});

export const useStore = create(store);
