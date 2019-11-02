


var UIController = (function(){
    
    //gets and shows UI staffs
    return {
        //get the chosen option 
        getOption: function(){
            
            return{
                choose: document.querySelector('#staticSelect').value
            }
        },
        showDynamicDrop: function(list){
            var html,newHtml,i,dynamicDOM,len;
            dynamicDOM = document.getElementById('dynamicSelect');
            console.log(dynamicDOM.length);
            len = dynamicDOM.length;
            for(i=0;i<len;i++){
                dynamicDOM.remove(0);
            }
            console.log('after dlt' + dynamicDOM.length);
            list.forEach(function(current,index,array){
                html = '<option value="option%id%">%Option%</option>';
                newHtml = html.replace('%id%',index);
                newHtml = newHtml.replace('%Option%',array[index]);
                dynamicDOM.insertAdjacentHTML('beforeend',newHtml);
            });
            document.querySelector('.dynaimcDrop').style.opacity = '1';
            console.log(dynamicDOM.length);
        }
    }


})();

var BackendController = (function(){

    //choosing data to show in dynamic selection
    var options = {
        option1 : ['Pizza','Burger'],
        option2 : ['Ginger Tea','Jhalmuri'],
        option3 : ['Sprouts','Apple','Milk']

    }


    return {
        chooseList: function(optn){
            var list;
            
            if(optn == "option1"){
                
                list = options.option1;
                
            }else if(optn == "option2"){
                
                list = options.option2;
                
            }else if(optn == "option3"){
                list = options.option3;
            }
            return list;
            
        }

    }


})();

var MainController = (function(UICtrl,BckCtrl){

    var initialise =function(){
        
        //initialising when any option chosen
        document.getElementById('staticSelect').addEventListener('change',showDynamicDD);
    };
    var showDynamicDD = function(){
        //console.log('called');
        var choose,chosenList;
        //1.Get the option selected from UICtrl
        choose = UICtrl.getOption();
        //console.log(choose);
        //2.Call the bckCtrl to get the corresponding list of options
        chosenList = BckCtrl.chooseList(choose.choose);
        //console.log(chosenList);
        //3.Show options to the UI 
        UICtrl.showDynamicDrop(chosenList);


    };
    return {
        init: function(){
            console.log('apply init');
            initialise();
        }
    }
    
})(UIController,BackendController);


var Control = MainController.init();