var objApp = WizExplorerApp;
var objWindow = objApp.Window;

objWindow.ShowMessage("世界你好", "我的第一个为知笔记插件", 0x40);  


/**
 * 递归处理 FolderCollection 对象
 */
function recursionFolderCollection(folderCollection) {
    // 遍历所有的根文件夹
    for (let index = 0; index < folderCollection.Count; index++) {
        const folder = folderCollection.Item(index);  
        console.log(folder.Location);
        const _folderCollection = folder.Folders;
        recursionFolderCollection(_folderCollection);
        const objFolderDocuments = folder.Documents; 
        for (let j = 0; j < objFolderDocuments.Count; j++) {
            const document = objFolderDocuments.Item(j);
            console.log(document.Location + document.Name);
        }
    } 
}

var objDatabase = objApp.Database;
var objFolderCollection = objDatabase.Folders;
recursionFolderCollection(objFolderCollection);

