const path=require('path');
const CopyWebpaxkPlugin =require('copy-webpack-plugin')
 module.exports={ 
  mode:"development",
   entry:'./app.js',
       
         output:{         
           
          path:path.join(__dirname,'./dist') 
             },  
             plugins:[
                   new CopyWebpaxkPlugin([
                         {
                               from:path.join(__dirname, './src'),
                               to:path.join(__dirname, './dist')
                              }
                              ]
                              
                      
                              )
             ]   
             
            }