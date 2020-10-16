$(function () {
    //根据id请求英雄详情
    let id = window.location.href.split('=')[1]

    function getDetail() {
        $('.loading').show()
        $.ajax({
            url: 'https://autumnfish.cn/api/lol/info',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if (data.code == 200) {
                    $('.loading').hide()
                    $('#DATAnametitle').text(data.data.hero.name)
                    let skins = data.data.skins
                    $('#skinName').text(skins[0].name)
                    let res1 = template('bgTemp', skins)
                    $('#skinBG').html(res1)
                    let res2 = template('iconTemp', skins)
                    $('#skinNAV').html(res2)
                }
            }
        })
    }
    getDetail()

    $('#skinNAV').on('click', 'li', function () {
        $(this).addClass('current').siblings().removeClass('current')
        $('#skinName').text($(this).children().eq(0).attr('title'))
        let target = -$('#skinBG>li').width() * $(this).index()
        $('#skinBG').animate({
            left: target
        }, 200)
    })
})