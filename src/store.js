import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "DONE" }],
  addTask: (title, state) =>
    set((store) => ({
      tasks: [...store.tasks, { title, state }],
    })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  draggedTask: null,
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(store);
