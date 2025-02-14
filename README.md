# Ask Any

**Ask Any** is a Visual Studio Code extension that provides an interactive chat interface for asking questions to an AI model. With a live typing effect, syntax-highlighted code blocks, editable queries, and comprehensive chat history management, Ask Any helps you get answers right within your editor.

## Features

- **Interactive Chat Interface:** Type your question and watch the AI response appear with a live typing effect.
- **Edit & Regenerate Responses:** Easily edit your submitted query and clear all responses below the edited message. A new AI response is generated based on your edited query.
- **Copy Responses: **Quickly copy the entire AI response to your clipboard with a dedicated "Copy Response" button.
- **Chat History Sidebar:** View, export, and delete previous chats from a sidebar. Each saved chat displays the first message and a timestamp.
- **Theme Toggle:** Switch between light and dark modes for both the main interface and the sidebar.
- **Autosave Functionality:** Your conversation is automatically saved so you can resume later.
- **Syntax Highlighting:**
  Code blocks in responses are automatically syntax highlighted using [highlight.js](https://highlightjs.org/).

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/NSTechBytes/ask-any.git
   ```
2. **Install Dependencies:**
   Navigate to the project folder and run:
   ```bash
   npm install
   ```
3. **Launch in VS Code:**
   Open the folder in Visual Studio Code and press `F5` to launch the extension in a new Extension Development Host window.

## Usage

1. **Open the Chat Interface:** Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and type "Ask Any" to open the chat view.
2. **Configure Settings:** Click the **Menu** button to open the sidebar. Enter your API key, toggle the theme, or start a new chat.
3. **Ask a Question:** Type your question in the input box at the bottom and click **Ask** or press `Enter`.

   - While the AI is "typing" its response, the **Stop** and **Edit** buttons are disabled.
   - When the typing effect completes, the buttons are re‑enabled.
4. **Edit & Regenerate:** Click the **Edit** button next to your question to modify it. A **Cancel** button appears so you can revert changes. Once you save the edit, all responses below the edited message are cleared and a new response is generated based on your updated query.
5. **Copy a Response:** Use the **Copy Response** button (present on every AI response) to copy the answer to your clipboard.
6. **Chat History Management:**
   Use the sidebar to view your saved chats. You can reload a chat, export it (which opens a file save dialog via the extension backend), or delete it.

## Configuration

- **API Key:** Your API key is stored in local storage. Use the sidebar to update it as needed.
- **Theme Preference:**
  Your theme setting (light or dark) is also saved locally.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Open a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [highlight.js](https://highlightjs.org/) for syntax highlighting.
- The VS Code community for continuous inspiration.
