Vue.createApp({
    data() {
        return {
            
            message: null,
            times:null,
            result:""
        }
    },
    methods: {
        repeat(message,times) {
            if(times>0)
            { for(i=0;i<times;i++)
                {
                    this.result = this.result + message;
                }
            }
            else
            {
                this.result ="must not be negative number : " + times;
            }
            

           
        }
        
    }
}).mount("#app") 