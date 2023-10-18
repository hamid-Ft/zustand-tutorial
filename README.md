# gZustand Tutorial App with Vite, Tailwind CSS, and Extra Features

This is a simple todo app created using Vite, Zustand for state management, and styled with basic Tailwind CSS. It features three columns for organizing tasks: "Planned," "On-going," and "Done." The app also includes draggable functionality for moving todo cards between columns.

Additionally, the app includes two extra features:

1.**Devtools**: You can use the Zustand devtools to inspect and manipulate the state, making it easier to debug your application.

2.**Persistence**: Your todo items will be saved locally so that you can access your tasks even after closing and reopening the app.

It's my first basic project using zustand and inspired by freeCodeCamp guides and zustand docs. Hope this app satisfies basic understanding about state managing with zustand.

## Installation

To run this app locally, make sure you have Node.js and npm (Node Package Manager) installed on your system. Then, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/hamid-Ft/zustand-tutorial.git
   ```

2. Change your working directory to the project folder

   ```bash
   cd zustand-tutorial-app
   ```

3. Install the dependencies:

   ```npm
   npm install
   ```

## Usage

Once you've installed the dependencies, you can run the app with the following command:

```bash
npm run dev
```

This will start a local development server, and you can access the app in your web browser at `http://localhost:5173/`.

## Features

### Adding a Task

To add a new task, click on the "Add Task" button. You can provide a title, description, and select a state for the task.

### Moving Tasks

You can move a task between columns by dragging and dropping the task card. To do this, click and hold on a task card and drag it to the desired column.

### Deleting a Task

To delete a task, click the trash icon on a task card. This will permanently remove the task from your list.

### Devtools

To use the Zustand devtools, open your browser's developer console and navigate to the "Zustand" tab. Here, you can inspect and manipulate the app's state.

### Persistence

Your todo items will be automatically saved to your browser's local storage, allowing you to access your tasks even after closing and reopening the app.

## Contributing

If you'd like to contribute to this project, feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/yourusername/zustand-tutorial-app). We welcome your feedback and suggestions!

It's my first basic project using zustand and inspired by freeCodeCamp guides and zustand docs. Hope this app satisfies basic understanding about state managing with zustand.

## License

This app is open-source and distributed under the MIT License. See the [LICENSE](https://chat.openai.com/c/LICENSE) file for more information.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)

Happy task management! 🚀

It's my first basic project using zustand and inspired by freeCodeCamp guides and docs. Hope this app satisfies basic understanding about state managing with zustand.
