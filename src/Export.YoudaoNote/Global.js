
console.log('Global.js 运行了');

var pluginPath = objApp.GetPluginPathByScriptFileName("Global.js");

function OnHelperButtonClicked() {
    WizAlert("您点击了助手按钮");
}

function OnHelperButtonClicked() { 
    var helperHtmlFileName = pluginPath + "main.html"; 
    var rect = objWindow.GetToolButtonRect("main", "bstrButtonID");
    var arr = rect.split(',');
    objWindow.ShowSelectorWindow(helperHtmlFileName, arr[0], arr[3], 350, 500, "");
}

function InitHelperButton() { 
    var languangeFileName = pluginPath + "plugin.ini";
    var iconFileName = pluginPath + "wiz-2-youdao-note.ico";
    var buttonText = objApp.LoadStringFromFile(languangeFileName, "strHelper");
    objWindow.AddToolButton("main", "bstrButtonID", buttonText, iconFileName, "OnHelperButtonClicked");
}

InitHelperButton();

