// $ == JQuery

// Спрятать элемент по id
function Hide_L1() {
    $("#Hide_L1").hide()
}

// Обрезка пробелов
function CutSpaces() {
    var str = "           s a sssi     "
    alert(str)
    alert($.trim(str)) // trim обрезает лишние пробелы
}

// Псевдоклассы и "который по счету"
function Link() {
    var link = $("#menu_L1 a:first");  // Взять первый элемент массива
    alert(link.html());
    // console.log(link)

    var link2 = $("#menu_L1 a:eq(4)") // Взять n-ый элемент массива
    alert(link2.html())
}

// Обработчик формы
function chkValid() {
    var state = $("input[name='sex']:checked").val() // val() - взять значение атрибута value
    if (!state) return $("#message").html('<font style="color:red">Укажите пол</font>')
    else alert(state)
}

// $(":not(img[alt])") - Все img без тега alt
// $("img").not("img[alt]") - Тоже что и сверху
// .attr( 'Атрибут' , 'Значение' ) - Присвоить атрибут

function Alt() {
    $(":not(img[alt])").attr('alt', "JQuery")
    var elements = $("img");
    var text = '';
    for (let i = 0; i < elements.length; i++) {
        text += elements[i].alt + "\n";
        // Вместо .alt можно использовать любой атр, кроме class. 
        // В случае с классом - className
    }
    alert(text)
}

function divBGC() {
    // console.log('text')
    var div = prompt("1 or 2");
    while (div != 1 && div != 2) {
        alert("write 1 or 2")
        div = prompt("1 or 2")
    }
    $("#div").attr("class", 'div_' + div);
    alert($('#div').className())
}

function Style () { // 44 строчка
    $("#div2").css("font-size", "25px")
    $("#div2").css("color", "red")
    $("#div2").css("width", "250px")
    $("#div2").css("background-color", function () {
        return 'blue';
    }) 
    $("#div2").css("height", function () {
        return $(this).width();
    })
}

function HtmlnText () {
    alert($('#div3').html());
    alert($('#div3').text());
    
    $('#div3').html("<p>Новый абзац</p>")
}