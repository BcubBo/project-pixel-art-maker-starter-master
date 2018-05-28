// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(args) {
//绘制表格，大前提，设置色彩。
//在绘制的过程中要将每一个id进行单独存储
//动态的从数组中提取数据
//可以进行动态的添加td/tr了，但是要解决每一块独立class或者id 的问题
// Your code goes here!
    //console.log("进入创建表格函数！")
    //console.log("argsc参数为："+args);
    if(args[0]>50 || args[1]>50){
        alert("画布最大范围为50X50！请重新填写！");
    }else{
        for(let i = 0 ;i< args[0];i++){
            $("#tbody").append('<tr id="tr'+i+'" ></tr>');
            let temp_arg_id = "#tr"+i;
            //console.log("进入创建表格一层循环值为："+temp_arg_id);
            for(let j = 0 ;j<args[1];j++){
                //console.log('进入二层循环中！');
                //console.log("二层循环中id为："+temp_arg_id);
                $(temp_arg_id).append('<td class="td'+j+'"></td>');
            }
        }
        //console.log("循环创建表格结束！");
        if(args[0] == undefined || args[1] == undefined){
            alert("未设置画布大小！");
        }else{
            alert("此时画布大小为:"+args[0]+"X"+args[1]);
        }
        
    }
}
function deleteGrid(){
    console.log("进入删除模块！");
    $("tr").remove();

}


function getParam(){
    //从url中获取参数
    let siteUrl = location.href;
    let arg_str = siteUrl.split("?");
    let arg_container ;
    let separate_arg ;
    //console.log("into getParam function block!");
    if (arg_str.length === 2){
        //console.log(arg_str)
        arg_container = arg_str[1];
        //console.log(arg_container);
        separate_arg = arg_container.split("&");
        //console.log(separate_arg);

        
    }
    let height , width;
    console.log(height,width);
    let height_index , width_index;
    for (let i = 0;i<separate_arg.length;i++){
        let temp_container = separate_arg[i].split("=");
        //console.log(temp_container);
        if(temp_container[0] === "height"){
            height = temp_container[1];
            //console.log(height);
        }else{
            width = temp_container[1];
            //console.log(width);
        }
    }
    let args = [height,width];
    console.log(args.length);
    return args;
}
function fillColor(){
    let colorPicked = $('#colorPicker').val();
    //console.log("drawing begin!");
    $("#pixelCanvas").on('click','td',function(){
        //console.log("td block clicked!");
        $(this).css("backgroundColor",colorPicked);

        //console.log(colorPicked);
        //console.log("td block click! external output");
    })
    let allTd = $("td");

    //console.log(colorPicked);
    
    colorPicked = $('#colorPicker').val();

    

}

function buildTable(args){
    //console.log("进入创建表格函数！")
    //console.log("argsc参数为："+args);
    if(args[0]>100 || args[1]>100){
        alert("画布最大范围为100X100！请重新填写！");
    }else{
        for(let i = 0 ;i< args[0];i++){
            $("#tbody").append('<tr id="tr'+i+'" ></tr>');
            let temp_arg_id = "#tr"+i;
            //console.log("进入创建表格一层循环值为："+temp_arg_id);
            for(let j = 0 ;j<args[1];j++){
                //console.log('进入二层循环中！');
                //console.log("二层循环中id为："+temp_arg_id);
                $(temp_arg_id).append('<td class="td'+j+'"></td>');
            }
        }
        //console.log("循环创建表格结束！");
    }
    

}