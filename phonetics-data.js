'use strict';

window.LUMI_PHONEMES = [
  {
    id: 'short-kit',
    symbol: '/ɪ/',
    group: 'short',
    name: '短元音·前高位',
    tip: '舌前部抬高，但比 /iː/ 略低；嘴唇放松、微展，发音短促。',
    examples: [
      { word: 'sit', ipa: '/sɪt/', meaning: '坐', before: 's', focus: 'i', after: 't' },
      { word: 'fish', ipa: '/fɪʃ/', meaning: '鱼' }
    ],
    contrast: { word: 'seat', ipa: '/siːt/', meaning: '座位' }
  },
  {
    id: 'short-dress',
    symbol: '/e/',
    group: 'short',
    name: '短元音·前中位',
    tip: '舌前部位于中高处，嘴唇自然展开；开口比 /ɪ/ 稍大，声音短促。',
    examples: [
      { word: 'pen', ipa: '/pen/', meaning: '钢笔', before: 'p', focus: 'e', after: 'n' },
      { word: 'bed', ipa: '/bed/', meaning: '床' }
    ],
    contrast: { word: 'pan', ipa: '/pæn/', meaning: '平底锅' }
  },
  {
    id: 'short-trap',
    symbol: '/æ/',
    group: 'short',
    name: '短元音·前低位',
    tip: '下颌明显放低，舌前部压低，嘴唇向两侧自然展开，不圆唇。',
    examples: [
      { word: 'cat', ipa: '/kæt/', meaning: '猫', before: 'c', focus: 'a', after: 't' },
      { word: 'bag', ipa: '/bæg/', meaning: '包' }
    ],
    contrast: { word: 'cut', ipa: '/kʌt/', meaning: '切' }
  },
  {
    id: 'short-strut',
    symbol: '/ʌ/',
    group: 'short',
    name: '短元音·央中低位',
    tip: '舌头放在口腔中央偏低处，嘴自然张开、唇不圆，短促发声。',
    examples: [
      { word: 'cup', ipa: '/kʌp/', meaning: '杯子', before: 'c', focus: 'u', after: 'p' },
      { word: 'bus', ipa: '/bʌs/', meaning: '公共汽车' }
    ],
    contrast: { word: 'cap', ipa: '/kæp/', meaning: '帽子' }
  },
  {
    id: 'short-lot',
    symbol: '/ɒ/',
    group: 'short',
    name: '短元音·后低圆唇',
    tip: '舌后部放低，嘴张开，双唇轻轻收圆；发音短，不拖长。',
    examples: [
      { word: 'hot', ipa: '/hɒt/', meaning: '热的', before: 'h', focus: 'o', after: 't' },
      { word: 'dog', ipa: '/dɒg/', meaning: '狗' }
    ],
    contrast: { word: 'hat', ipa: '/hæt/', meaning: '帽子' }
  },
  {
    id: 'short-foot',
    symbol: '/ʊ/',
    group: 'short',
    name: '短元音·后高圆唇',
    tip: '舌后部抬高，但比 /uː/ 略低、略靠前；双唇微圆而放松，发音短。',
    examples: [
      { word: 'full', ipa: '/fʊl/', meaning: '满的', before: 'f', focus: 'u', after: 'll' },
      { word: 'book', ipa: '/bʊk/', meaning: '书' }
    ],
    contrast: { word: 'fall', ipa: '/fɔːl/', meaning: '落下' }
  },
  {
    id: 'short-schwa',
    symbol: '/ə/',
    group: 'short',
    name: '短元音·轻央音',
    tip: '舌头和嘴唇都放松，舌位居中，嘴微张；在非重读音节中轻轻发出。',
    examples: [
      { word: 'accept', ipa: '/əkˈsept/', meaning: '接受', before: '', focus: 'a', after: 'ccept' },
      { word: 'banana', ipa: '/bəˈnɑːnə/', meaning: '香蕉' }
    ],
    contrast: { word: 'except', ipa: '/ɪkˈsept/', meaning: '除……之外' }
  },
  {
    id: 'long-fleece',
    symbol: '/iː/',
    group: 'long',
    name: '长元音·前高位',
    tip: '舌前部抬近硬腭，双唇微展，保持口型稳定并延长声音。',
    examples: [
      { word: 'sheep', ipa: '/ʃiːp/', meaning: '绵羊', before: 'sh', focus: 'ee', after: 'p' },
      { word: 'green', ipa: '/griːn/', meaning: '绿色的' }
    ],
    contrast: { word: 'ship', ipa: '/ʃɪp/', meaning: '船' }
  },
  {
    id: 'long-palm',
    symbol: '/ɑː/',
    group: 'long',
    name: '长元音·后低位',
    tip: '嘴张大，舌身放低并略向后，嘴唇不收圆，保持声音延长。',
    examples: [
      { word: 'park', ipa: '/pɑːk/', meaning: '公园', before: 'p', focus: 'ar', after: 'k' },
      { word: 'car', ipa: '/kɑː/', meaning: '汽车' }
    ],
    contrast: { word: 'pack', ipa: '/pæk/', meaning: '打包' }
  },
  {
    id: 'long-thought',
    symbol: '/ɔː/',
    group: 'long',
    name: '长元音·后位圆唇',
    tip: '舌后部抬至中位，双唇收圆，开口比 /ɒ/ 小，稳定地延长声音。',
    examples: [
      { word: 'sport', ipa: '/spɔːt/', meaning: '运动', before: 'sp', focus: 'or', after: 't' },
      { word: 'door', ipa: '/dɔː/', meaning: '门' }
    ],
    contrast: { word: 'spot', ipa: '/spɒt/', meaning: '斑点' }
  },
  {
    id: 'long-goose',
    symbol: '/uː/',
    group: 'long',
    name: '长元音·后高圆唇',
    tip: '舌后部抬高，双唇收圆并略向前，保持口型，延长声音。',
    examples: [
      { word: 'pool', ipa: '/puːl/', meaning: '游泳池', before: 'p', focus: 'oo', after: 'l' },
      { word: 'food', ipa: '/fuːd/', meaning: '食物' }
    ],
    contrast: { word: 'pull', ipa: '/pʊl/', meaning: '拉' }
  },
  {
    id: 'long-nurse',
    symbol: '/ɜː/',
    group: 'long',
    name: '长元音·央中位',
    tip: '舌头平放在口腔中央，嘴唇自然放松，声音延长；不要卷舌。',
    examples: [
      { word: 'bird', ipa: '/bɜːd/', meaning: '鸟', before: 'b', focus: 'ir', after: 'd' },
      { word: 'nurse', ipa: '/nɜːs/', meaning: '护士' }
    ],
    contrast: { word: 'bed', ipa: '/bed/', meaning: '床' }
  },
  {
    id: 'diphthong-face',
    symbol: '/eɪ/',
    group: 'diphthong',
    name: '双元音·前中向高',
    tip: '从 /e/ 的口型向 /ɪ/ 连续滑动，舌前部抬高，开口渐小；前重后轻。',
    examples: [
      { word: 'rain', ipa: '/reɪn/', meaning: '雨', before: 'r', focus: 'ai', after: 'n' },
      { word: 'day', ipa: '/deɪ/', meaning: '一天' }
    ],
    contrast: { word: 'run', ipa: '/rʌn/', meaning: '跑' }
  },
  {
    id: 'diphthong-price',
    symbol: '/aɪ/',
    group: 'diphthong',
    name: '双元音·低向前高',
    tip: '先张大嘴、放低舌头，再滑向 /ɪ/，舌前部抬高；连成一个音节。',
    examples: [
      { word: 'night', ipa: '/naɪt/', meaning: '夜晚', before: 'n', focus: 'igh', after: 't' },
      { word: 'five', ipa: '/faɪv/', meaning: '五' }
    ],
    contrast: { word: 'net', ipa: '/net/', meaning: '网' }
  },
  {
    id: 'diphthong-choice',
    symbol: '/ɔɪ/',
    group: 'diphthong',
    name: '双元音·圆唇向前高',
    tip: '从后部圆唇元音滑向 /ɪ/，舌头向前上方移动，嘴唇由圆变展。',
    examples: [
      { word: 'boy', ipa: '/bɔɪ/', meaning: '男孩', before: 'b', focus: 'oy', after: '' },
      { word: 'coin', ipa: '/kɔɪn/', meaning: '硬币' }
    ],
    contrast: { word: 'buy', ipa: '/baɪ/', meaning: '买' }
  },
  {
    id: 'diphthong-goat',
    symbol: '/əʊ/',
    group: 'diphthong',
    name: '双元音·央向后高',
    tip: '从放松的中央舌位滑向 /ʊ/，舌后部抬高，嘴唇逐渐收圆。',
    examples: [
      { word: 'coat', ipa: '/kəʊt/', meaning: '外套', before: 'c', focus: 'oa', after: 't' },
      { word: 'home', ipa: '/həʊm/', meaning: '家' }
    ],
    contrast: { word: 'caught', ipa: '/kɔːt/', meaning: '抓住（catch 的过去式）' }
  },
  {
    id: 'diphthong-mouth',
    symbol: '/aʊ/',
    group: 'diphthong',
    name: '双元音·低向后高',
    tip: '先张大嘴、放低舌头，再滑向 /ʊ/；舌后部抬高，嘴唇渐圆，前重后轻。',
    examples: [
      { word: 'mouth', ipa: '/maʊθ/', meaning: '嘴（名词）', before: 'm', focus: 'ou', after: 'th' },
      { word: 'house', ipa: '/haʊs/', meaning: '房子（名词）' }
    ],
    contrast: { word: 'moth', ipa: '/mɒθ/', meaning: '飞蛾' }
  },
  {
    id: 'diphthong-near',
    symbol: '/ɪə/',
    group: 'diphthong',
    name: '双元音·前高向央',
    tip: '从 /ɪ/ 向轻松的 /ə/ 滑动，舌头回到中央，嘴略张开，不补卷舌音。',
    examples: [
      { word: 'hear', ipa: '/hɪə/', meaning: '听见', before: 'h', focus: 'ear', after: '' },
      { word: 'near', ipa: '/nɪə/', meaning: '附近的' }
    ],
    contrast: { word: 'hair', ipa: '/heə/', meaning: '头发' }
  },
  {
    id: 'diphthong-square',
    symbol: '/eə/',
    group: 'diphthong',
    name: '双元音·前中向央',
    tip: '从 /e/ 附近的舌位滑向中央的 /ə/，嘴唇放松，末尾不要补卷舌音。',
    examples: [
      { word: 'hair', ipa: '/heə/', meaning: '头发', before: 'h', focus: 'air', after: '' },
      { word: 'chair', ipa: '/tʃeə/', meaning: '椅子' }
    ],
    contrast: { word: 'hear', ipa: '/hɪə/', meaning: '听见' }
  },
  {
    id: 'diphthong-cure',
    symbol: '/ʊə/',
    group: 'diphthong',
    name: '双元音·后高向央',
    tip: '从 /ʊ/ 滑向中央的 /ə/，圆唇渐放松；tour、pure 在部分现代英音中也读 /ɔː/。',
    examples: [
      { word: 'tour', ipa: '/tʊə/', meaning: '旅行；游览', before: 't', focus: 'our', after: '' },
      { word: 'pure', ipa: '/pjʊə/', meaning: '纯净的' }
    ],
    contrast: { word: 'tore', ipa: '/tɔː/', meaning: '撕破（tear 的过去式）' }
  },
  {
    id: 'consonant-p',
    symbol: '/p/',
    group: 'consonant',
    name: '辅音·清双唇爆破',
    tip: '双唇闭合挡住气流，再突然放开；声带不振动，不在后面加元音。',
    examples: [
      { word: 'pear', ipa: '/peə/', meaning: '梨', before: '', focus: 'p', after: 'ear' },
      { word: 'cup', ipa: '/kʌp/', meaning: '杯子' }
    ],
    contrast: { word: 'bear', ipa: '/beə/', meaning: '熊' }
  },
  {
    id: 'consonant-b',
    symbol: '/b/',
    group: 'consonant',
    name: '辅音·浊双唇爆破',
    tip: '双唇先闭合再放开，发声时声带振动；不要在辅音后补元音。',
    examples: [
      { word: 'bat', ipa: '/bæt/', meaning: '球棒', before: '', focus: 'b', after: 'at' },
      { word: 'bag', ipa: '/bæg/', meaning: '包' }
    ],
    contrast: { word: 'pat', ipa: '/pæt/', meaning: '轻拍' }
  },
  {
    id: 'consonant-t',
    symbol: '/t/',
    group: 'consonant',
    name: '辅音·清齿龈爆破',
    tip: '舌尖抵住上齿龈，挡气后突然放开；声带不振动，末尾不加元音。',
    examples: [
      { word: 'town', ipa: '/taʊn/', meaning: '城镇', before: '', focus: 't', after: 'own' },
      { word: 'tea', ipa: '/tiː/', meaning: '茶' }
    ],
    contrast: { word: 'down', ipa: '/daʊn/', meaning: '向下' }
  },
  {
    id: 'consonant-d',
    symbol: '/d/',
    group: 'consonant',
    name: '辅音·浊齿龈爆破',
    tip: '舌尖抵上齿龈后放开气流，声带振动；不要读成带元音的音节。',
    examples: [
      { word: 'dip', ipa: '/dɪp/', meaning: '蘸；浸', before: '', focus: 'd', after: 'ip' },
      { word: 'dog', ipa: '/dɒg/', meaning: '狗' }
    ],
    contrast: { word: 'tip', ipa: '/tɪp/', meaning: '小费；提示' }
  },
  {
    id: 'consonant-k',
    symbol: '/k/',
    group: 'consonant',
    name: '辅音·清软腭爆破',
    tip: '舌后部抬起贴住软腭，阻气后迅速放开；声带不振动。',
    examples: [
      { word: 'coat', ipa: '/kəʊt/', meaning: '外套', before: '', focus: 'c', after: 'oat' },
      { word: 'key', ipa: '/kiː/', meaning: '钥匙' }
    ],
    contrast: { word: 'goat', ipa: '/gəʊt/', meaning: '山羊' }
  },
  {
    id: 'consonant-g',
    symbol: '/g/',
    group: 'consonant',
    name: '辅音·浊软腭爆破',
    tip: '舌后部抵住软腭再放开，发声时声带振动，不在末尾补元音。',
    examples: [
      { word: 'goat', ipa: '/gəʊt/', meaning: '山羊', before: '', focus: 'g', after: 'oat' },
      { word: 'bag', ipa: '/bæg/', meaning: '包' }
    ],
    contrast: { word: 'coat', ipa: '/kəʊt/', meaning: '外套' }
  },
  {
    id: 'consonant-f',
    symbol: '/f/',
    group: 'consonant',
    name: '辅音·清唇齿摩擦',
    tip: '上齿轻触下唇，让气流从缝隙擦出；声带不振动，可以持续送气。',
    examples: [
      { word: 'fan', ipa: '/fæn/', meaning: '风扇', before: '', focus: 'f', after: 'an' },
      { word: 'coffee', ipa: '/ˈkɒfi/', meaning: '咖啡' }
    ],
    contrast: { word: 'van', ipa: '/væn/', meaning: '厢式货车' }
  },
  {
    id: 'consonant-v',
    symbol: '/v/',
    group: 'consonant',
    name: '辅音·浊唇齿摩擦',
    tip: '上齿轻触下唇，气流摩擦通过，同时让声带振动；不要双唇收圆。',
    examples: [
      { word: 'van', ipa: '/væn/', meaning: '厢式货车', before: '', focus: 'v', after: 'an' },
      { word: 'five', ipa: '/faɪv/', meaning: '五' }
    ],
    contrast: { word: 'fan', ipa: '/fæn/', meaning: '风扇' }
  },
  {
    id: 'consonant-th-voiceless',
    symbol: '/θ/',
    group: 'consonant',
    name: '辅音·清齿间摩擦',
    tip: '舌尖轻放在上下齿之间，气流从舌齿缝隙擦出；声带不振动。',
    examples: [
      { word: 'thin', ipa: '/θɪn/', meaning: '薄的；瘦的', before: '', focus: 'th', after: 'in' },
      { word: 'bath', ipa: '/bɑːθ/', meaning: '洗澡；浴缸' }
    ],
    contrast: { word: 'tin', ipa: '/tɪn/', meaning: '金属罐' }
  },
  {
    id: 'consonant-th-voiced',
    symbol: '/ð/',
    group: 'consonant',
    name: '辅音·浊齿间摩擦',
    tip: '舌尖轻触上齿边缘或略伸到齿间，留缝送气，同时让声带振动。',
    examples: [
      { word: 'they', ipa: '/ðeɪ/', meaning: '他们；她们；它们', before: '', focus: 'th', after: 'ey' },
      { word: 'mother', ipa: '/ˈmʌðə/', meaning: '母亲' }
    ],
    contrast: { word: 'day', ipa: '/deɪ/', meaning: '一天' }
  },
  {
    id: 'consonant-s',
    symbol: '/s/',
    group: 'consonant',
    name: '辅音·清齿龈摩擦',
    tip: '舌前部靠近上齿龈但不封住，气流从中央窄缝通过；声带不振动。',
    examples: [
      { word: 'sip', ipa: '/sɪp/', meaning: '小口喝', before: '', focus: 's', after: 'ip' },
      { word: 'bus', ipa: '/bʌs/', meaning: '公共汽车' }
    ],
    contrast: { word: 'zip', ipa: '/zɪp/', meaning: '拉链' }
  },
  {
    id: 'consonant-z',
    symbol: '/z/',
    group: 'consonant',
    name: '辅音·浊齿龈摩擦',
    tip: '舌前部靠近上齿龈，留出中央窄缝；像 /s/ 一样送气，同时振动声带。',
    examples: [
      { word: 'zip', ipa: '/zɪp/', meaning: '拉链', before: '', focus: 'z', after: 'ip' },
      { word: 'zoo', ipa: '/zuː/', meaning: '动物园' }
    ],
    contrast: { word: 'sip', ipa: '/sɪp/', meaning: '小口喝' }
  },
  {
    id: 'consonant-sh',
    symbol: '/ʃ/',
    group: 'consonant',
    name: '辅音·清龈后摩擦',
    tip: '舌前部靠近上齿龈后方，双唇略圆、略前伸，让气流摩擦通过；声带不振动。',
    examples: [
      { word: 'shop', ipa: '/ʃɒp/', meaning: '商店', before: '', focus: 'sh', after: 'op' },
      { word: 'fish', ipa: '/fɪʃ/', meaning: '鱼' }
    ],
    contrast: { word: 'chop', ipa: '/tʃɒp/', meaning: '切碎' }
  },
  {
    id: 'consonant-zh',
    symbol: '/ʒ/',
    group: 'consonant',
    name: '辅音·浊龈后摩擦',
    tip: '舌前部靠近上齿龈后方，双唇略圆；保持摩擦并振动声带，不先堵住气流。',
    examples: [
      { word: 'vision', ipa: '/ˈvɪʒən/', meaning: '视力；视觉', before: 'vi', focus: 's', after: 'ion' },
      { word: 'measure', ipa: '/ˈmeʒə/', meaning: '测量' }
    ],
    contrast: { word: 'mission', ipa: '/ˈmɪʃən/', meaning: '任务' }
  },
  {
    id: 'consonant-h',
    symbol: '/h/',
    group: 'consonant',
    name: '辅音·清声门摩擦',
    tip: '口型准备好后面的元音，声门放松，让气流轻轻呼出；声带不振动。',
    examples: [
      { word: 'hat', ipa: '/hæt/', meaning: '帽子', before: '', focus: 'h', after: 'at' },
      { word: 'home', ipa: '/həʊm/', meaning: '家' }
    ],
    contrast: { word: 'at', ipa: '/æt/', meaning: '在（某处）' }
  },
  {
    id: 'consonant-ch',
    symbol: '/tʃ/',
    group: 'consonant',
    name: '辅音·清龈后塞擦',
    tip: '舌前部先在齿龈后方挡气，再放开成摩擦；动作连贯，声带不振动。',
    examples: [
      { word: 'chair', ipa: '/tʃeə/', meaning: '椅子', before: '', focus: 'ch', after: 'air' },
      { word: 'lunch', ipa: '/lʌntʃ/', meaning: '午餐' }
    ],
    contrast: { word: 'share', ipa: '/ʃeə/', meaning: '分享' }
  },
  {
    id: 'consonant-dzh',
    symbol: '/dʒ/',
    group: 'consonant',
    name: '辅音·浊龈后塞擦',
    tip: '舌前部先挡住气流，再放开成摩擦，同时振动声带；中间不插入元音。',
    examples: [
      { word: 'jeep', ipa: '/dʒiːp/', meaning: '吉普车', before: '', focus: 'j', after: 'eep' },
      { word: 'orange', ipa: '/ˈɒrɪndʒ/', meaning: '橙子' }
    ],
    contrast: { word: 'cheap', ipa: '/tʃiːp/', meaning: '便宜的' }
  },
  {
    id: 'consonant-m',
    symbol: '/m/',
    group: 'consonant',
    name: '辅音·双唇鼻音',
    tip: '双唇闭合，声带振动，让气流从鼻腔出来；不要在末尾加元音。',
    examples: [
      { word: 'map', ipa: '/mæp/', meaning: '地图', before: '', focus: 'm', after: 'ap' },
      { word: 'milk', ipa: '/mɪlk/', meaning: '牛奶' }
    ],
    contrast: { word: 'nap', ipa: '/næp/', meaning: '小睡' }
  },
  {
    id: 'consonant-n',
    symbol: '/n/',
    group: 'consonant',
    name: '辅音·齿龈鼻音',
    tip: '舌尖抵上齿龈，嘴唇不闭合；声带振动，气流从鼻腔通过。',
    examples: [
      { word: 'net', ipa: '/net/', meaning: '网', before: '', focus: 'n', after: 'et' },
      { word: 'nose', ipa: '/nəʊz/', meaning: '鼻子' }
    ],
    contrast: { word: 'met', ipa: '/met/', meaning: '遇见（meet 的过去式）' }
  },
  {
    id: 'consonant-ng',
    symbol: '/ŋ/',
    group: 'consonant',
    name: '辅音·软腭鼻音',
    tip: '舌后部抵住软腭，声带振动，气流走鼻腔；sing 末尾不要另加 /g/。',
    examples: [
      { word: 'wing', ipa: '/wɪŋ/', meaning: '翅膀', before: 'wi', focus: 'ng', after: '' },
      { word: 'sing', ipa: '/sɪŋ/', meaning: '唱歌' }
    ],
    contrast: { word: 'win', ipa: '/wɪn/', meaning: '获胜' }
  },
  {
    id: 'consonant-l',
    symbol: '/l/',
    group: 'consonant',
    name: '辅音·齿龈边音',
    tip: '舌尖抵上齿龈，气流从舌两侧通过，声带振动；词尾舌后部可略抬高。',
    examples: [
      { word: 'light', ipa: '/laɪt/', meaning: '光；灯', before: '', focus: 'l', after: 'ight' },
      { word: 'milk', ipa: '/mɪlk/', meaning: '牛奶' }
    ],
    contrast: { word: 'right', ipa: '/raɪt/', meaning: '正确的；右边' }
  },
  {
    id: 'consonant-r',
    symbol: '/r/',
    group: 'consonant',
    name: '辅音·齿龈后近音',
    tip: '舌尖靠近上齿龈后方但不接触，双唇可略圆，声带振动；不要颤舌。',
    examples: [
      { word: 'right', ipa: '/raɪt/', meaning: '正确的；右边', before: '', focus: 'r', after: 'ight' },
      { word: 'rain', ipa: '/reɪn/', meaning: '雨' }
    ],
    contrast: { word: 'light', ipa: '/laɪt/', meaning: '光；灯' }
  },
  {
    id: 'consonant-y',
    symbol: '/j/',
    group: 'consonant',
    name: '辅音·硬腭近音',
    tip: '舌前部抬近硬腭但不摩擦，声带振动，迅速滑向后面的元音。',
    examples: [
      { word: 'yet', ipa: '/jet/', meaning: '还；尚', before: '', focus: 'y', after: 'et' },
      { word: 'yellow', ipa: '/ˈjeləʊ/', meaning: '黄色的' }
    ],
    contrast: { word: 'jet', ipa: '/dʒet/', meaning: '喷气式飞机' }
  },
  {
    id: 'consonant-w',
    symbol: '/w/',
    group: 'consonant',
    name: '辅音·唇软腭近音',
    tip: '双唇收圆、舌后部抬高，声带振动，迅速滑向后面的元音；上齿不碰下唇。',
    examples: [
      { word: 'wet', ipa: '/wet/', meaning: '湿的', before: '', focus: 'w', after: 'et' },
      { word: 'window', ipa: '/ˈwɪndəʊ/', meaning: '窗户' }
    ],
    contrast: { word: 'vet', ipa: '/vet/', meaning: '兽医' }
  }
];
