// class BG{
//     constructor(imgs,type){
//         this.type=type;
//         this.imgs=imgs;
//         this.buttons=[]
//     }
//     show(){
//         if(this.type===0){
//             var x=200;
//             var y=200;
//             var stage=0;
//                 push()
//                 imageMode(CENTER)
//                 image(this.imgs,windowWidth/2,windowHeight/2,width,height)
//                 pop()
//                 var button=createImg("b1.png")
//                 button.position(windowWidth/2-110,windowHeight/2-110) 
//                 button.size(x,y)
//                 this.buttons.push(button)
//                 if(stage===0){
//                     x+=1;
//                     y+=1;
//                 }
//                 if(x>300){
//                     stage=1
//                 }
//                 if(stage===1){
//                     x-=1;
//                     y-=1;
//                 }
//                 if(x<200){
//                     stage=0
//                 }
//                 console.log(x)
            
//         }
//     }
// }