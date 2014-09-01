var es = require('event-stream');

module.exports = function(obj, tasks){
    return function(){
        var streams = [];
        
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                streams.push(tasks.call(null,key, obj[key]));
            }
        }

        return es.merge.apply(null, streams);
    }
}