// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(args) {
    if(args[0]>50 || args[1]>50){
        alert("画布最大范围为50X50！请重新填写！");
    }else{
        for(let i = 0 ;i< args[0];i++){
            $("#tbody").append('<tr id="tr'+i+'" ></tr>');
            let temp_arg_id = "#tr"+i;
            for(let j = 0 ;j<args[1];j++){
                $(temp_arg_id).append('<td class="td'+j+'"></td>');
            }
        }

        
    } 
}
function deleteGrid(){
    $("tr").remove();

}


function getParam(){
    let siteUrl = location.href;
    let arg_str = siteUrl.split("?");
    let arg_container ;
    let separate_arg ;
    if (arg_str.length === 2){
        arg_container = arg_str[1];
        separate_arg = arg_container.split("&");

        
    }
    let height , width;
    console.log(height,width);
    let height_index , width_index;
    for (let i = 0;i<separate_arg.length;i++){
        let temp_container = separate_arg[i].split("=");
        if(temp_container[0] === "height"){
            height = temp_container[1];
        }else{
            width = temp_container[1];
        }
    }
    let args = [height,width];
    return args;
}
function fillColor(){
    let colorPicked = $('#colorPicker').val();
    $("#pixelCanvas").on('click','td',function(){
        $(this).css("backgroundColor",colorPicked);

    })
    let allTd = $("td");

    
    colorPicked = $('#colorPicker').val();

    

}

function buildTable(args){
    if(args[0]>100 || args[1]>100){
        alert("画布最大范围为100X100！请重新填写！");
    }else{
        for(let i = 0 ;i< args[0];i++){
            $("#tbody").append('<tr id="tr'+i+'" ></tr>');
            let temp_arg_id = "#tr"+i;
            for(let j = 0 ;j<args[1];j++){
                $(temp_arg_id).append('<td class="td'+j+'"></td>');
            }
        }
    }
    

}