// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
//绘制表格，大前提，设置色彩。
// Your code goes here!
    let height = $("#inputHeight").val();
    let weight = $("#inputWeight").val();


}

function drawing(){
    console.log("call the function makeGrid!");
    $("td").on('click',function(){
        console.log("td block clicked!");
    })


    let colorPicked = $('#colorPicker').val();
    console.log(colorPicked);
    $('#td_001').on('click',function(){
        colorPicked = $('#colorPicker').val();

        $("#td_001").css("backgroundColor",colorPicked);

        console.log(colorPicked);
        console.log("td block click! external output");
        return false;
    })
}