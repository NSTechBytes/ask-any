const vscode = require("vscode");
const { askOpenRouter } = require("./api");
const fs = require("fs");
const path = require("path");


class WebViewProvider {
  resolveWebviewView(webviewView) {
    webviewView.webview.options = {
      enableScripts: true,
      retainContextWhenHidden: true
    };

    webviewView.webview.html = this.getWebviewContent();

    webviewView.webview.onDidReceiveMessage(async (message) => {
      if (message.command === "ask") {
        const { text, model, apiKey } = message;
        if (!apiKey) {
          webviewView.webview.postMessage({ command: "reply", text: "⚠️ Please enter an API key." });
          return;
        }

        // Show "Thinking..." before making the API call
        webviewView.webview.postMessage({ command: "thinking" });

        try {
          const response = await askOpenRouter(text, model, apiKey);
          webviewView.webview.postMessage({ command: "reply", text: response || "⚠️ No response from API." });
        } catch (error) {
          webviewView.webview.postMessage({ command: "reply", text: `❌ Error: ${error.message}` });
        }
      } else if (message.command === "saveState") {
        vscode.workspace.getConfiguration("askAny").update("apiKey", message.apiKey, true);
        vscode.workspace.getConfiguration("askAny").update("darkMode", message.darkMode, true);
      } else if (message.command === "loadState") {
        const apiKey = vscode.workspace.getConfiguration("askAny").get("apiKey") || "";
        const darkMode = vscode.workspace.getConfiguration("askAny").get("darkMode") || false;
        webviewView.webview.postMessage({ command: "restoreState", apiKey, darkMode });
      } else if (message.command === "exportChat") {
        // New exportChat handler
        const { chatContent, chatName } = message;
        // If a workspace is open, suggest a default path
        const defaultUri = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
          ? vscode.Uri.file(path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, chatName + ".txt"))
          : undefined;

        const options = {
          defaultUri,
          filters: {
            "Text Files": ["txt"],
            "All Files": ["*"]
          }
        };

        try {
          const uri = await vscode.window.showSaveDialog(options);
          if (uri) {
            fs.writeFile(uri.fsPath, chatContent, (err) => {
              if (err) {
                vscode.window.showErrorMessage("Error saving file: " + err.message);
              } else {
                vscode.window.showInformationMessage("Chat exported successfully!");
              }
            });
          }
        } catch (error) {
          vscode.window.showErrorMessage("Error during export: " + error.message);
        }
      }
    });
  }

  getWebviewContent() {
    const filePath = path.join(__dirname, "ui.html");
    return fs.readFileSync(filePath, "utf8");
  }
}

module.exports = { WebViewProvider };
