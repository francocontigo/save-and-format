const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.formatAndSave', async function () {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      await vscode.commands.executeCommand('editor.action.formatDocument');
      await vscode.commands.executeCommand('workbench.action.files.save');
    }
  });

  context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
