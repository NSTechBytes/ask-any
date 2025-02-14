const vscode = require("vscode");
const { WebViewProvider } = require("./src/webview");

function activate(context) {
  let provider = new WebViewProvider();
  let disposable = vscode.window.registerWebviewViewProvider("askAnyView", provider);
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
