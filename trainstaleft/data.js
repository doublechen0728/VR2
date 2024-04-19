var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "松山路與市民大道六段路口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.846436034574019,
        "pitch": -0.14922217401192128,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -1.4772058478657435,
          "pitch": 0.038532432555221874,
          "rotation": 0,
          "target": "1-ubike"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ubike",
      "name": "松車外面ubike",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8553964334539508,
        "pitch": -0.2848229631668726,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -3.1231367980774145,
          "pitch": -0.07518766028393564,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -0.030495805901054496,
          "pitch": 0.08237247782762758,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.868733585985872,
          "pitch": 0.32644273372748067,
          "title": "ubike",
          "text": "前30分鐘不用錢"
        }
      ]
    },
    {
      "id": "2-",
      "name": "松車外面瓦城",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.481597683320274,
        "pitch": -0.32666673646899014,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -3.063761948940588,
          "pitch": 0.12548407723480182,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -0.025492269824745506,
          "pitch": 0.1087008266635685,
          "rotation": 0,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5122205338912469,
          "pitch": -0.5292092525420067,
          "title": "瓦城",
          "text": "泰式料理"
        }
      ]
    },
    {
      "id": "3-",
      "name": "松車外面停車場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5281944045125258,
        "pitch": -0.16369165573192745,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -0.09850809557109486,
          "pitch": 0.06706853329754026,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -3.0438326358205643,
          "pitch": 0.11192046554228519,
          "rotation": 0,
          "target": "1-ubike"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.55767843933537,
          "pitch": 0.19351544588658243,
          "title": "計程車排班區",
          "text": "計程車才能下去"
        }
      ]
    },
    {
      "id": "4-",
      "name": "松車南出口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.7707774144119437,
        "pitch": -0.05735420936783342,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -3.139430381576828,
          "pitch": 0.08333548896247045,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7619522495053026,
          "pitch": -0.028947941929526877,
          "title": "松車南出口",
          "text": "右轉有麥當勞"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
