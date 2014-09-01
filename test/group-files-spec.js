var group = require('../index.js');

var Stream = require('stream').Stream;

var testScripts = {
    "script1" : ['folder1/script1.js', 'folder2/script2.js' ],
    "script2" : ['folder2/script1.js', 'folder1/script2.js' ]
}

describe('gulp-group-files', function(){
    
    it('should list files correctly', function(){
        
        var names = ["script2", "script1" ]
            scripts = [ ['folder2/script1.js', 'folder1/script2.js' ], ['folder1/script1.js', 'folder2/script2.js' ] ];
        
        group(testScripts, function(name, files){
            expect(name).toEqual(names.pop());
            expect(files).toEqual(scripts.pop());
            
            return {pipe: function(){}, on: function(){}} 
        })();
    });
    
    it('should return stream', function(){
        var stream = group(testScripts, function(name,files){
            return {pipe: function(){}, on: function(){}} 
        })();
        
        expect(stream).toBeDefined();
    });
});