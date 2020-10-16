$(function () {

    //进入页面先查询所有的英雄
    let heroData = []

    function getHeroList(name = '') {
        $('.loading').show()
        $.ajax({
            url: 'https://autumnfish.cn/api/lol/search',
            data: {
                q: name
            },
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    // alert(`${data.msg}`)
                    $('.loading').hide()
                    heroData = data.data
                    $('#seleteChecklist>li:eq(0)').click()
                }
            }
        })
    }
    getHeroList()

    //根据类别切换英雄
    $('#seleteChecklist').on('click', '.selete-item', function () {
        $(this).addClass('current').siblings().removeClass('current')
        // console.log(heroData)
        let newData = []
        let role = $(this).find('label').attr('data-id')
        heroData.forEach((item, i) => {
            if (role == '') {
                newData.push(item)
            } else if (item.roles.indexOf(role) != -1) {
                newData.push(item)
            }
        })
        // console.log(newData)
        let res = template('heroTemp', newData)
        $('#jSearchHeroDiv').html(res)
    })

    //搜索英雄
    $('#jSearchHeroInput').on('keydown', function (e) {
        let keyword = $(this).val().trim()
        if (e.keyCode == 13) {

            getHeroList(keyword)
        }
    })
})