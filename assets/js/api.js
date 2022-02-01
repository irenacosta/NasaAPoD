export default function api(){
    let titulo = $('.titulo-apod').text()
    let data = $('.data-apod').text()
    let imagem = $('img-apod').text()
    let video = $('video-apod').text()
    let explanation = $('explanation-apod').text()
}

const xhr = $.ajax({
    method: 'GET',
    url: 'https://api.nasa.gov/planetary/apod?api_key=yJ3nTj6AarVzzFWpx5MLybGEHZ0ZBSfpbrh1mbR2'+Date.value
})


// SCRIPT DO PROJETO DO JEFFERSON

// let botao = $('#button')
// $('.video').addClass('none')

// botao.on('click', function(){
//     $('html').css('height' , 'auto')
//     $.ajax({url:'https://api.nasa.gov/planetary/apod?api_key=BduVdecGn4sew3h9LBttGuARBVQJjR6e3PLqcbHw&date='+date.value,     
//         success: function(result){         
//         $('.descricao').text(result.explanation)         
//         $('.autor').text(result.copyright)
        
//         if(result.media_type=='image'){
//             $('.foto').attr('src', result.url)
//             $('.video').addClass('none')
//             $('.foto').removeClass('none')
//         }else{
//             $('.video').attr('src', result.url)
//             $('.video').removeClass('none')
//             $('.foto').addClass('none')
//         }
   
//             }    
//          }) 
//      });