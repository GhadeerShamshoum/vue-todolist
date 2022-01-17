let app = new Vue({
    el: "#app",
    data: {
        value: "add a task",
        task:'',
        
        tasks: [
            {
                text:'Recruiting blog post',
                done:false
                
            },
            {
                text:'Mobile app luanch',
                done:false
                
            },
            {
                text:'Summit update to mobiile storefronts',
                done:false
                   
            },
            {
                text:'Schedule meeting with Alex',
                done:false
                
            }
        ]
    },
    methods:{

        addTask: function(){
            if(this.task.length === 0)return;
            this.tasks.push({
                text: this.task,
                
            })
            this.task = '';
        },
        deleteTask: function(index){
            this.tasks.splice(index,1);
        },
        editTask: function(index){
            this.tasks[index].done= true;
            console.log('done');
            
        },
        completed: function(index){
            if(this.tasks[index].done=== true){
                return "textLinked";
            }
            return '';
        }
        
    }
   

})
