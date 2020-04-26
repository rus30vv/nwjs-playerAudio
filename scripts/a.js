

function toArray(list) { return Array.prototype.slice.call(list || [], 0); } function listResults(entries) { var fragment = document.createDocumentFragment(); entries.forEach(function(entry, i) { var img = entry.isDirectory ? '<img src="folder-icon.gif">' : '<img src="file-icon.gif">';
        
        var li = document.createElement('li');
        li.innerHTML = [img, '<span>', entry.name, '</span>'].join('');
        fragment.appendChild(li); }); document.querySelector('#filelist').appendChild(fragment);
} function onInitFs(fs) { var dirReader = fs.root.createReader(); var entries = []; var readEntries = function() { dirReader.readEntries (function(results) { if (!results.length) { listResults(entries.sort()); } else { entries = entries.concat(toArray(results)); readEntries(); } }, errorHandler); }; readEntries(); } window.requestFileSystem(window.PERSISTENT, 1024*1024, onInitFs, errorHandler);