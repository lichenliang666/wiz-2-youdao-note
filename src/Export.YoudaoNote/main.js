var objApp = window.external;
var objWindow = objApp.Window;
var objDatabase = objApp.Database;

// ================================

/**
 * 递归处理 FolderCollection 对象
 */
function recursionFolderCollection(folderCollection) { 
    // TODO 注意有个限制次数的条件
    for (let index = 0; index < folderCollection.Count && index < 1; index++) {
        const folder = folderCollection.Item(index);  
        console.log(folder.Location);
        const _folderCollection = folder.Folders;
        recursionFolderCollection(_folderCollection);
        const objFolderDocuments = folder.Documents; 
        for (let j = 0; j < objFolderDocuments.Count; j++) {
            const document = objFolderDocuments.Item(j);
            console.log(document.Location + document.Name);
            console.log('笔记标题：' + document.Title);
            console.log('笔记类型：' + document.Type);
            console.log('笔记HTML内容：' + document.GetHtml());
        }
    } 
}

var objDatabase = objApp.Database;
var objFolderCollection = objDatabase.Folders;

// 将 FolderCollection 转换为 Folder 数组 
function folderCollectionToFolderArray(folderCollection) {
    let folders = [];
    for (let index = 0; index < folderCollection.Count; index++) { 
        let tempFolder = folderCollection.Item(index); 
        console.log(tempFolder);
        let folder = {};
        folder.name = tempFolder.Name;
        folder.location = tempFolder.Location;
        console.log(folder);
        folders.push(folder);
    }
    return folders;
} 



// recursionFolderCollection(objFolderCollection); 


// Vue ================

var rootFolder = folderCollectionToFolderArray(objDatabase.Folders);

var app = new Vue({
    el: '#app',
    data: { 
        rootFolder: rootFolder  
    }
})
 
