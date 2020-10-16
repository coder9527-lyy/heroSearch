# heroSearch
lol英雄查询练习

##### 查询lol英雄列表
- 请求地址：https://autumnfish.cn/api/lol/search
- 请求方法：get
- 请求参数：q

参数名 | 参数说明 | 备注
---|---|---
q | 英雄名 | 查询的关键字
```
{
    "code": 200,
    "msg": "获取成功",
    "data": [
              {
                "heroId": "1",
                "name": "黑暗之女",
                "alias": "Annie",
                "title": "安妮",
                "roles": ["mage"],
                "isWeekFree": "0",
                "attack": "2",
                "defense": "3",
                "magic": "10",
                "difficulty": "6",
                "selectAudio": "https://game.gtimg.cn/images/lol/act/img/vo/choose/1.ogg",
                "banAudio": "https://game.gtimg.cn/images/lol/act/img/vo/ban/1.ogg",
                "isARAMweekfree": "0",
                "ispermanentweekfree": "0",
                "changeLabel": "无改动",
                "goldPrice": "4800",
                "couponPrice": "2000",
                "camp": "",
                "campId": "",
                "keywords": "安妮,黑暗之女,火女,Annie,anni,heianzhinv,huonv,an,hazn,hn",
                "icon": "http://game.gtimg.cn/images/lol/act/img/champion/Annie.png"
              }
    ]
}
```

##### 查询lol英雄详情
- 请求地址：https://autumnfish.cn/api/lol/info
- 请求方法：get
- 请求参数：id

参数名 | 参数说明 | 备注
---|---|---
id | 英雄id | 英雄id

```
{
    "code": 200,
    "msg": "获取成功",
    "data": {
        "hero":"英雄信息",
        "skins":"皮肤信息",
        "spells":"技能信息"
    }
}
```
