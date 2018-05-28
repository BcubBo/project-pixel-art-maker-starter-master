// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
//绘制表格，大前提，设置色彩。
//在绘制的过程中要将每一个id进行单独存储
//动态的从数组中提取数据
// Your code goes here!
    let height = $("#inputHeight").val();
    let width = $("#inputwidth").val();
    console.log(height);
    console.log(width);
    getParam();
    return false;
}


function getParam(){
    //从url中获取参数
    let siteUrl = location.href;
    let arg_str = siteUrl.split("?");
    let arg_container ;
    let separate_arg ;
    console.log("into getParam function block!");
    if (arg_str.length === 2){
        console.log(arg_str)
        arg_container = arg_str[1];
        console.log(arg_container);
        separate_arg = arg_container.split("&");
        console.log(separate_arg);

        
    }
    let height , width;
    let height_index , width_index;
    for (let i = 0;i<separate_arg.length;i++){
        let temp_container = separate_arg[i].split("=");
        console.log(temp_container);
        if(temp_container[0] === "height"){
            height = temp_container[1];
            console.log(height);
        }else{
            width = temp_container[1];
            console.log(width);
        }
    }
    //将参数赋值回原位置
    $("#inputHeight").val(height);
    $("#inputWidth").val(width);

}
function drawing(){
    let colorPicked = $('#colorPicker').val();
    console.log("drawing begin!");
    $("td").on('click',function(){
        console.log("td block clicked!");
    })
    let allTd = $("td");

    console.log(colorPicked);
    
    colorPicked = $('#colorPicker').val();

    $(".td1").css("backgroundColor",colorPicked);

    console.log(colorPicked);
    console.log("td block click! external output");

}