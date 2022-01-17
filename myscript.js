let app = new Vue({
    el: "#app",
    data: {
        value: "add a task",
        task:'',
        newIndex : 0,
        
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
                done:false
                
                
            })
            this.task = '';
            console.log('hjhjh');
        },
        deleteTask: function(index){
            this.tasks.splice(index,1);
        },
        editTask: function(index){
            if(this.tasks[index].done == true){
                this.tasks[index].done= false;
                console.log('change to false',this.tasks[index].text);
            } 
            else 
            {
                console.log('change to true',this.tasks[index].text);
                this.tasks[index].done = true;
            }
                  
        },
        completed: function(index){
            console.log('completed string', this.tasks[index].text);
            if(this.tasks[index].done=== true){
                return "textLinked";
            }
            return '';
        }
        
    }
   

})
