'use strict';

window.LUMI_WORD_GROUPS = window.LUMI_WORD_GROUPS || [];
window.LUMI_WORD_GROUPS.push(
  {
    id: 'family',
    title: '家与家人',
    description: '从熟悉的家人、玩伴和家中物品开始，在拥抱、玩耍和睡前聊天中听见英语。',
    tip: '每天选两三个眼前的词，边指实物边说。按自己家的称呼替换人物，孩子可以用动作或中文回应，不必跟读或认字。',
    words: [
      {
        word: 'mum', ipa: '/mʌm/', meaning: '妈妈',
        phrase: ['a hug from mum', '妈妈的一个拥抱'],
        sentence: ['Mum is here with you.', '妈妈在这里陪着你。'],
        dialogue: [['Would you like a cuddle with Mum?', '想让妈妈抱抱吗？'], ['Yes, a big cuddle!', '想，要一个大大的抱抱！']]
      },
      {
        word: 'dad', ipa: '/dæd/', meaning: '爸爸',
        phrase: ['play with dad', '和爸爸玩'],
        sentence: ['Dad is building a tower.', '爸爸正在搭一座高塔。'],
        dialogue: [['Shall we help Dad build?', '我们帮爸爸一起搭，好吗？'], ['I can put this one on!', '我可以把这块放上去！']]
      },
      {
        word: 'baby', ipa: '/ˈbeɪbi/', meaning: '小宝宝',
        phrase: ['a sleeping baby', '一个睡着的小宝宝'],
        sentence: ['The baby is holding my finger.', '小宝宝正握着我的手指。'],
        dialogue: [['The baby is asleep. Shall we whisper?', '小宝宝睡着了，我们小声说话，好吗？'], ['Shh. Night-night, baby.', '嘘。宝宝，晚安。']]
      },
      {
        word: 'brother', ipa: '/ˈbrʌðə/', meaning: '哥哥；弟弟',
        phrase: ['my big brother', '我的哥哥'],
        sentence: ['My brother has a blue bike.', '我哥哥有一辆蓝色的自行车。'],
        dialogue: [['Your brother is drawing. Would you like to join him?', '哥哥在画画，你想一起画吗？'], ['Yes. Can I have some paper, please?', '想，可以给我一张纸吗？']]
      },
      {
        word: 'sister', ipa: '/ˈsɪstə/', meaning: '姐姐；妹妹',
        phrase: ['my little sister', '我的妹妹'],
        sentence: ['My sister is playing with a ball.', '我妹妹正在玩球。'],
        dialogue: [['Can you roll the ball to your sister?', '可以把球滚给妹妹吗？'], ['Here you go!', '给你！']]
      },
      {
        word: 'grandma', ipa: '/ˈɡrænmɑː/', meaning: '奶奶；外婆',
        phrase: ['visit grandma', '去看奶奶或外婆'],
        sentence: ['Grandma is waving to us.', '奶奶在向我们挥手。'],
        dialogue: [['Grandma is on the phone. Would you like to say hello?', '奶奶打电话来了，你想打个招呼吗？'], ['Hello, Grandma! I made a cake!', '奶奶好！我做了一个蛋糕！']]
      },
      {
        word: 'grandpa', ipa: '/ˈɡrænpɑː/', meaning: '爷爷；外公',
        phrase: ['walk with grandpa', '和爷爷或外公散步'],
        sentence: ['Grandpa has his walking shoes on.', '爷爷穿好了散步的鞋。'],
        dialogue: [['Grandpa is going to the park. Shall we go too?', '爷爷要去公园，我们也去，好吗？'], ['Yes! I need my shoes.', '好！我要穿鞋。']]
      },
      {
        word: 'family', ipa: '/ˈfæməli/', meaning: '家人；一家人',
        phrase: ['our family', '我们一家人'],
        sentence: ['Our family likes to sing together.', '我们一家人喜欢一起唱歌。'],
        dialogue: [['Here is our family photo. Where are you?', '这是我们的全家福，你在哪里呀？'], ['There! Next to you.', '那里！在你旁边。']]
      },
      {
        word: 'friend', ipa: '/frend/', meaning: '朋友',
        phrase: ['a new friend', '一位新朋友'],
        sentence: ['My friend is coming to play.', '我的朋友要来一起玩。'],
        dialogue: [['Your friend is here. Shall we open the door?', '你的朋友来了，我们开门，好吗？'], ['Yes! Come and see my train!', '好！快来看看我的小火车！']]
      },
      {
        word: 'boy', ipa: '/bɔɪ/', meaning: '男孩',
        phrase: ['a little boy', '一个小男孩'],
        sentence: ['The boy in the picture has a kite.', '图中的男孩有一只风筝。'],
        dialogue: [['Look at the boy in the picture. What is he holding?', '看看图里的男孩，他拿着什么呀？'], ['A kite! It is red.', '风筝！是红色的。']]
      },
      {
        word: 'girl', ipa: '/ɡɜːl/', meaning: '女孩',
        phrase: ['a little girl', '一个小女孩'],
        sentence: ['The girl is jumping in a puddle.', '那个女孩正在水坑里跳。'],
        dialogue: [['The girl in this picture has yellow boots.', '这幅图里的女孩穿着黄色的靴子。'], ['Like mine! Splash, splash!', '和我的一样！啪嗒，啪嗒！']]
      },
      {
        word: 'child', ipa: '/tʃaɪld/', meaning: '小孩；孩子',
        phrase: ['a sleepy child', '一个困了的孩子'],
        sentence: ['The child is hugging a teddy.', '那个孩子正抱着一只玩具熊。'],
        dialogue: [['The child in the story looks sleepy.', '故事里的小孩看起来困了。'], ['I am sleepy too. Can we cuddle?', '我也困了，可以抱抱吗？']]
      },
      {
        word: 'name', ipa: '/neɪm/', meaning: '名字',
        phrase: ['your name', '你的名字'],
        sentence: ['This teddy needs a name.', '这只玩具熊需要一个名字。'],
        dialogue: [['What name shall we give your teddy?', '我们给你的玩具熊取什么名字呢？'], ['Biscuit! He is brown.', '饼干！他是棕色的。']]
      },
      {
        word: 'home', ipa: '/həʊm/', meaning: '家',
        phrase: ['our home', '我们的家'],
        sentence: ['Our home is warm and cosy.', '我们的家温暖又舒服。'],
        dialogue: [['We are nearly home. Are your legs tired?', '快到家了，你的腿累了吗？'], ['Yes. Can you carry me, please?', '累了，可以抱我吗？']]
      },
      {
        word: 'house', ipa: '/haʊs/', meaning: '房子',
        phrase: ['a little house', '一座小房子'],
        sentence: ['This toy house has a red roof.', '这座玩具房子有一个红屋顶。'],
        dialogue: [['Who lives in our little toy house?', '谁住在我们的小玩具房子里呀？'], ['The bunny! This is his bed.', '小兔子！这是他的床。']]
      },
      {
        word: 'room', ipa: '/ruːm/', meaning: '房间',
        phrase: ['your room', '你的房间'],
        sentence: ['Your books are in your room.', '你的书在你的房间里。'],
        dialogue: [['Shall we play in your room or here?', '我们去你的房间玩，还是在这里玩？'], ['Here, with you.', '在这里，和你一起。']]
      },
      {
        word: 'door', ipa: '/dɔː/', meaning: '门',
        phrase: ['the front door', '家里的大门'],
        sentence: ['Someone is knocking at the door.', '有人在敲门。'],
        dialogue: [['I will open the door. Please stand back a little.', '我来开门，请往后站一点。'], ['I will wait here.', '我在这里等。']]
      },
      {
        word: 'window', ipa: '/ˈwɪndəʊ/', meaning: '窗户',
        phrase: ['look through the window', '透过窗户看'],
        sentence: ['I can see rain on the window.', '我能看见窗户上的雨水。'],
        dialogue: [['What can you see through the window?', '透过窗户，你能看见什么？'], ['A bird in the tree!', '树上有一只鸟！']]
      },
      {
        word: 'bed', ipa: '/bed/', meaning: '床',
        phrase: ['a cosy bed', '一张舒服的床'],
        sentence: ['Your teddy is waiting on the bed.', '你的玩具熊在床上等你。'],
        dialogue: [['Shall we read a story in bed?', '我们到床上读个故事，好吗？'], ['Yes, the bear one, please.', '好，请读小熊的那本。']]
      },
      {
        word: 'pillow', ipa: '/ˈpɪləʊ/', meaning: '枕头',
        phrase: ['a soft pillow', '一个软枕头'],
        sentence: ['My head is on the pillow.', '我的头枕在枕头上。'],
        dialogue: [['Is your pillow comfy?', '你的枕头舒服吗？'], ['Yes. Teddy wants one too.', '舒服。小熊也想要一个。']]
      },
      {
        word: 'blanket', ipa: '/ˈblæŋkɪt/', meaning: '毯子',
        phrase: ['a warm blanket', '一条暖和的毯子'],
        sentence: ['The blanket keeps my legs warm.', '毯子让我的腿暖暖的。'],
        dialogue: [['Would you like the blanket over your feet?', '要把毯子盖到脚上吗？'], ['Yes, please. My toes are cold.', '要，谢谢。我的脚趾冷。']]
      },
      {
        word: 'chair', ipa: '/tʃeə/', meaning: '椅子',
        phrase: ['a little chair', '一把小椅子'],
        sentence: ['Your chair is next to mine.', '你的椅子在我的旁边。'],
        dialogue: [['Would you like to sit on this chair?', '你想坐这把椅子吗？'], ['Yes. Will you sit with me?', '想，你会陪我坐吗？']]
      },
      {
        word: 'table', ipa: '/ˈteɪbl/', meaning: '桌子',
        phrase: ['the kitchen table', '厨房里的桌子'],
        sentence: ['The crayons are on the table.', '蜡笔在桌子上。'],
        dialogue: [['Shall we put some paper on the table?', '我们在桌上铺些纸，好吗？'], ['Yes! I want to draw a bus.', '好！我想画一辆公共汽车。']]
      },
      {
        word: 'sofa', ipa: '/ˈsəʊfə/', meaning: '沙发',
        phrase: ['sit on the sofa', '坐在沙发上'],
        sentence: ['We can cuddle on the sofa.', '我们可以在沙发上抱一抱。'],
        dialogue: [['There is room beside me on the sofa.', '沙发上我旁边还有位置。'], ['I am coming! Here is our book.', '我来啦！我们的书在这里。']]
      },
      {
        word: 'lamp', ipa: '/læmp/', meaning: '灯；台灯',
        phrase: ['a bedside lamp', '一盏床头灯'],
        sentence: ['The lamp makes a little circle of light.', '这盏灯照出一个小小的光圈。'],
        dialogue: [['Shall I turn the lamp off now?', '现在要我把灯关掉吗？'], ['Not yet, please. One more cuddle.', '先别关，好吗？再抱一下。']]
      }
    ]
  },
  {
    id: 'food',
    title: '吃饭与水果',
    description: '在备餐和吃饭时闻一闻、看一看，聊聊水果、主食和蔬菜，不要求每样都尝。',
    tip: '让孩子坐稳再吃，由成人备餐并陪伴。葡萄和樱桃去核后按需纵切成四份或更小，鱼肉去刺，硬食物处理软小，热食放温；结合已知过敏情况选择食材。',
    words: [
      {
        word: 'apple', ipa: '/ˈæpl/', meaning: '苹果',
        phrase: ['an apple slice', '一片苹果'],
        sentence: ['I am cooking the apple until it is soft.', '我正在把苹果煮软。'],
        dialogue: [['Would you like some soft apple?', '你想吃一点软苹果吗？'], ['Yes, a little piece, please.', '想，请给我一小块。']]
      },
      {
        word: 'banana', ipa: '/bəˈnɑːnə/', meaning: '香蕉',
        phrase: ['peel a banana', '剥一根香蕉'],
        sentence: ['This banana has a yellow skin.', '这根香蕉的皮是黄色的。'],
        dialogue: [['Shall I start peeling the banana for you?', '要我先帮你把香蕉剥开一点吗？'], ['Yes, then I can do it!', '好，接下来我自己来！']]
      },
      {
        word: 'orange', ipa: '/ˈɒrɪndʒ/', meaning: '橙子',
        phrase: ['an orange segment', '一瓣橙子'],
        sentence: ['This orange smells lovely.', '这个橙子闻起来真香。'],
        dialogue: [['I have peeled the orange. Would you like a piece?', '我剥好橙子了，你想吃一块吗？'], ['Yes, please. It smells sweet.', '想，谢谢。闻着甜甜的。']]
      },
      {
        word: 'pear', ipa: '/peə/', meaning: '梨',
        phrase: ['a ripe pear', '一个熟梨'],
        sentence: ['This pear is soft and juicy.', '这个梨又软又多汁。'],
        dialogue: [['Is your pear nice and soft?', '你的梨软软的，好吃吗？'], ['Yes! Juice is on my chin.', '是呀！果汁流到下巴上了。']]
      },
      {
        word: 'grape', ipa: '/ɡreɪp/', meaning: '葡萄',
        phrase: ['a green grape', '一颗绿葡萄'],
        sentence: ['I cut each grape into four long pieces.', '我把每颗葡萄纵向切成四小块。'],
        dialogue: [['Your grape pieces are ready in the bowl.', '你的葡萄小块切好了，在碗里。'], ['Thank you. I will sit here.', '谢谢。我坐在这里吃。']]
      },
      {
        word: 'strawberry', ipa: '/ˈstrɔːbəri/', meaning: '草莓',
        phrase: ['a red strawberry', '一颗红草莓'],
        sentence: ['This strawberry has tiny seeds.', '这颗草莓上有小小的籽。'],
        dialogue: [['Can you see the little seeds on this strawberry?', '你看见这颗草莓上的小籽了吗？'], ['Yes! Lots of little dots.', '看见了！好多小点点。']]
      },
      {
        word: 'watermelon', ipa: '/ˈwɔːtəmelən/', meaning: '西瓜',
        phrase: ['a piece of watermelon', '一块西瓜'],
        sentence: ['The watermelon is red inside.', '西瓜里面是红色的。'],
        dialogue: [['I have taken the seeds out of your watermelon.', '我把你的西瓜籽去掉了。'], ['Thank you! It is so juicy.', '谢谢！好多汁呀。']]
      },
      {
        word: 'peach', ipa: '/piːtʃ/', meaning: '桃子',
        phrase: ['a soft peach', '一个软桃子'],
        sentence: ['This peach has a big stone inside.', '这个桃子里面有一个大核。'],
        dialogue: [['I will take the stone out of the peach.', '我来把桃核去掉。'], ['Then can I have a slice, please?', '那切好后可以给我一片吗？']]
      },
      {
        word: 'lemon', ipa: '/ˈlemən/', meaning: '柠檬',
        phrase: ['a slice of lemon', '一片柠檬'],
        sentence: ['A lemon tastes sour.', '柠檬吃起来酸酸的。'],
        dialogue: [['Would you like to smell this lemon?', '你想闻闻这个柠檬吗？'], ['Yes. It smells fresh!', '想。闻起来好清新！']]
      },
      {
        word: 'cherry', ipa: '/ˈtʃeri/', meaning: '樱桃',
        phrase: ['a cherry stone', '一颗樱桃核'],
        sentence: ['I remove the stone from each cherry.', '我把每颗樱桃的核去掉。'],
        dialogue: [['I will cut your cherry into small pieces after taking the stone out.', '我去掉核后，再把你的樱桃切成小块。'], ['I will wait. Thank you!', '我等一等。谢谢！']]
      },
      {
        word: 'bread', ipa: '/bred/', meaning: '面包',
        phrase: ['a slice of bread', '一片面包'],
        sentence: ['The bread is soft in the middle.', '面包的中间软软的。'],
        dialogue: [['Would you like your bread in strips?', '要把你的面包切成条吗？'], ['Yes, please. Little ones.', '要，谢谢。切成小条。']]
      },
      {
        word: 'rice', ipa: '/raɪs/', meaning: '米饭；大米',
        phrase: ['a bowl of rice', '一碗米饭'],
        sentence: ['There is rice on my spoon.', '我的勺子上有米饭。'],
        dialogue: [['Would you like a little more rice?', '还想要一点米饭吗？'], ['No, thank you. I have enough.', '不用了，谢谢。我这些够了。']]
      },
      {
        word: 'noodle', ipa: '/ˈnuːdl/', meaning: '面条（通常用复数 noodles）',
        phrase: ['noodle soup', '汤面'],
        sentence: ['The noodles are soft and warm.', '面条软软的、温温的。'],
        dialogue: [['Shall I cut your noodles a little shorter?', '要我把你的面条剪短一点吗？'], ['Yes, please. This one is long!', '要，谢谢。这根好长！']]
      },
      {
        word: 'egg', ipa: '/eɡ/', meaning: '鸡蛋',
        phrase: ['a boiled egg', '一个水煮蛋'],
        sentence: ['The egg is yellow in the middle.', '鸡蛋的中间是黄色的。'],
        dialogue: [['Would you like to help peel this cooled egg?', '这个鸡蛋放凉了，你想帮忙剥壳吗？'], ['Yes. The shell is cracking!', '想。蛋壳裂开啦！']]
      },
      {
        word: 'cheese', ipa: '/tʃiːz/', meaning: '奶酪',
        phrase: ['grated cheese', '奶酪碎'],
        sentence: ['The cheese is melting on the toast.', '奶酪正在吐司上融化。'],
        dialogue: [['Would you like some cheese on your pasta?', '你的意面上要放些奶酪吗？'], ['Just a little, please.', '请放一点点。']]
      },
      {
        word: 'yogurt', ipa: '/ˈjɒɡət/', meaning: '酸奶',
        phrase: ['plain yogurt', '原味酸奶'],
        sentence: ['I can stir the yogurt with my spoon.', '我会用勺子搅拌酸奶。'],
        dialogue: [['Shall we mix some banana into your yogurt?', '我们在你的酸奶里拌一点香蕉，好吗？'], ['Yes! I can stir it.', '好！我来搅拌。']]
      },
      {
        word: 'milk', ipa: '/mɪlk/', meaning: '牛奶',
        phrase: ['a cup of milk', '一杯牛奶'],
        sentence: ['Your milk is on the table.', '你的牛奶在桌上。'],
        dialogue: [['Would you like some milk with breakfast?', '吃早饭时想喝点牛奶吗？'], ['Yes, in my little cup, please.', '想，请倒在我的小杯子里。']]
      },
      {
        word: 'soup', ipa: '/suːp/', meaning: '汤',
        phrase: ['vegetable soup', '蔬菜汤'],
        sentence: ['The soup has little bits of carrot.', '汤里有小块胡萝卜。'],
        dialogue: [['The soup is still hot. Let us wait a little.', '汤还烫，我们等一会儿。'], ['Can we blow on it?', '我们可以吹一吹吗？']]
      },
      {
        word: 'meat', ipa: '/miːt/', meaning: '肉',
        phrase: ['small pieces of meat', '小块的肉'],
        sentence: ['This meat is soft and easy to chew.', '这块肉软软的，很好嚼。'],
        dialogue: [['Is that piece of meat too big?', '那块肉是不是太大了？'], ['Yes. Can you cut it, please?', '是的，可以帮我切小吗？']]
      },
      {
        word: 'chicken', ipa: '/ˈtʃɪkɪn/', meaning: '鸡肉',
        phrase: ['cooked chicken', '做熟的鸡肉'],
        sentence: ['There is chicken in our soup.', '我们的汤里有鸡肉。'],
        dialogue: [['Would you like some chicken with your rice?', '你想就着米饭吃点鸡肉吗？'], ['Yes, a small piece, please.', '想，请给我一小块。']]
      },
      {
        word: 'fish', ipa: '/fɪʃ/', meaning: '鱼肉',
        phrase: ['steamed fish', '清蒸鱼'],
        sentence: ['I check the fish carefully for bones.', '我仔细检查鱼肉里有没有刺。'],
        dialogue: [['I have taken the bones out of this fish for you.', '我帮你把这块鱼肉里的刺去掉了。'], ['Thank you. Can I use my fork?', '谢谢。我可以用叉子吃吗？']]
      },
      {
        word: 'potato', ipa: '/pəˈteɪtəʊ/', meaning: '土豆',
        phrase: ['mashed potato', '土豆泥'],
        sentence: ['The potato is soft enough to mash.', '土豆已经软得可以压成泥了。'],
        dialogue: [['Would you like to mash this cooked potato?', '你想把这个煮熟的土豆压成泥吗？'], ['Yes! Squash, squash!', '想！压一压，压一压！']]
      },
      {
        word: 'tomato', ipa: '/təˈmɑːtəʊ/', meaning: '番茄；西红柿',
        phrase: ['tomato sauce', '番茄酱汁'],
        sentence: ['The tomato sauce is on the pasta.', '意面上有番茄酱汁。'],
        dialogue: [['You have a little tomato sauce on your cheek.', '你的脸蛋上沾了一点番茄酱汁。'], ['Can you wipe it off, please?', '可以帮我擦掉吗？']]
      },
      {
        word: 'carrot', ipa: '/ˈkærət/', meaning: '胡萝卜',
        phrase: ['a cooked carrot', '一根煮熟的胡萝卜'],
        sentence: ['This carrot is orange and soft.', '这根胡萝卜是橙色的，软软的。'],
        dialogue: [['Shall we put some carrot in the soup?', '我们往汤里放一点胡萝卜，好吗？'], ['Yes. You do it. The pot is hot.', '好，你来放，锅很烫。']]
      },
      {
        word: 'broccoli', ipa: '/ˈbrɒkəli/', meaning: '西兰花',
        phrase: ['a little broccoli floret', '一小朵西兰花'],
        sentence: ['The broccoli looks like a tiny tree.', '西兰花看起来像一棵小树。'],
        dialogue: [['This broccoli looks like a tree to me.', '我觉得这朵西兰花像一棵树。'], ['A tree for a tiny bear!', '给小小熊的树！']]
      }
    ]
  },
  {
    id: 'routine',
    title: '一天的生活',
    description: '跟着起床、洗漱、吃饭和休息的节奏，练习表达需要，也听见孩子的选择。',
    tip: '把词放进正在做的小事里，一次说一句就好。允许孩子说不饿、吃饱了或需要帮助；洗澡全程由成人近身照看，刷牙由成人协助。',
    words: [
      {
        word: 'wake', ipa: '/weɪk/', meaning: '醒来',
        phrase: ['wake up', '醒来'],
        sentence: ['I wake up when the room gets light.', '房间亮起来时，我就醒了。'],
        dialogue: [['Did you just wake up, sweetheart?', '宝贝，你刚醒吗？'], ['Yes. Can I have a cuddle?', '是呀，可以抱抱吗？']]
      },
      {
        word: 'sleep', ipa: '/sliːp/', meaning: '睡觉',
        phrase: ['sleep well', '睡得好'],
        sentence: ['I sleep with my teddy beside me.', '我睡觉时，玩具熊就在我旁边。'],
        dialogue: [['Are you ready to sleep, or do you need a cuddle?', '你准备好睡觉了，还是想先抱一抱？'], ['A cuddle first, please.', '请先抱一抱。']]
      },
      {
        word: 'wash', ipa: '/wɒʃ/', meaning: '洗',
        phrase: ['wash your hands', '洗手'],
        sentence: ['We wash our hands before we eat.', '我们吃饭前洗手。'],
        dialogue: [['Let us wash the mud off your hands.', '我们把你手上的泥洗掉吧。'], ['Look! The water is brown.', '看！水变成棕色了。']]
      },
      {
        word: 'brush', ipa: '/brʌʃ/', meaning: '刷；梳',
        phrase: ['brush your hair', '梳头发'],
        sentence: ['I brush your hair gently.', '我轻轻地给你梳头发。'],
        dialogue: [['May I brush this bit of your hair?', '我可以梳一梳你这边的头发吗？'], ['Yes, slowly, please.', '可以，请慢一点。']]
      },
      {
        word: 'bath', ipa: '/bɑːθ/', meaning: '洗澡；泡澡',
        phrase: ['have a bath', '洗个澡'],
        sentence: ['It is time for a warm bath.', '该洗个温水澡了。'],
        dialogue: [['Would you like the duck in your bath?', '洗澡时想让小鸭子陪着你吗？'], ['Yes! It can swim beside me.', '想！它可以在我旁边游泳。']]
      },
      {
        word: 'soap', ipa: '/səʊp/', meaning: '肥皂；洗手液',
        phrase: ['a little soap', '一点肥皂或洗手液'],
        sentence: ['The soap makes lots of bubbles.', '肥皂搓出了好多泡泡。'],
        dialogue: [['Here is some soap. Shall we rub our hands together?', '这里有洗手液，我们搓搓手，好吗？'], ['Bubbles between my fingers!', '我的指缝里有泡泡！']]
      },
      {
        word: 'towel', ipa: '/ˈtaʊəl/', meaning: '毛巾；浴巾',
        phrase: ['a fluffy towel', '一条蓬松的毛巾'],
        sentence: ['Your towel is hanging on the hook.', '你的毛巾挂在挂钩上。'],
        dialogue: [['Here is your towel. Shall I wrap you up?', '你的浴巾在这里，要我把你包起来吗？'], ['Yes! I am all wet.', '要！我全身都湿了。']]
      },
      {
        word: 'toothbrush', ipa: '/ˈtuːθbrʌʃ/', meaning: '牙刷',
        phrase: ['a small toothbrush', '一把小牙刷'],
        sentence: ['Your toothbrush has soft bristles.', '你的牙刷有软软的刷毛。'],
        dialogue: [['Is this your toothbrush or mine?', '这是你的牙刷，还是我的？'], ['Mine! Yours is the big one.', '我的！你的那把大。']]
      },
      {
        word: 'toothpaste', ipa: '/ˈtuːθpeɪst/', meaning: '牙膏',
        phrase: ['a little toothpaste', '一点牙膏'],
        sentence: ['I put the toothpaste on your brush.', '我把牙膏挤到你的牙刷上。'],
        dialogue: [['I will put the toothpaste on. Then I can help you brush.', '我来挤牙膏，然后帮你刷牙。'], ['Can we sing our brushing song?', '我们可以唱刷牙歌吗？']]
      },
      {
        word: 'toilet', ipa: '/ˈtɔɪlət/', meaning: '厕所；马桶',
        phrase: ['go to the toilet', '上厕所'],
        sentence: ['I need to go to the toilet.', '我要上厕所。'],
        dialogue: [['Do you need help on the toilet?', '上厕所时需要帮忙吗？'], ['Yes, with my trousers, please.', '需要，请帮我脱一下裤子。']]
      },
      {
        word: 'water', ipa: '/ˈwɔːtə/', meaning: '水',
        phrase: ['a drink of water', '一点喝的水'],
        sentence: ['There is water in your cup.', '你的杯子里有水。'],
        dialogue: [['Would you like some water after all that running?', '跑了这么久，想喝点水吗？'], ['Yes, please. Where is my cup?', '想，谢谢。我的杯子在哪里？']]
      },
      {
        word: 'cup', ipa: '/kʌp/', meaning: '杯子',
        phrase: ['your blue cup', '你的蓝杯子'],
        sentence: ['I hold my cup with both hands.', '我用两只手拿着杯子。'],
        dialogue: [['Which cup would you like today?', '今天你想用哪个杯子？'], ['The blue one, please.', '请给我蓝色的那个。']]
      },
      {
        word: 'plate', ipa: '/pleɪt/', meaning: '盘子',
        phrase: ['a dinner plate', '一个餐盘'],
        sentence: ['Your toast is on the plate.', '你的吐司在盘子里。'],
        dialogue: [['Shall I put your plate here?', '我把你的盘子放在这里，好吗？'], ['A bit closer, please.', '请再近一点。']]
      },
      {
        word: 'bowl', ipa: '/bəʊl/', meaning: '碗',
        phrase: ['a bowl of porridge', '一碗粥'],
        sentence: ['The bowl has a rabbit on it.', '这个碗上有一只兔子的图案。'],
        dialogue: [['Would you like the rabbit bowl for your porridge?', '你想用小兔子碗喝粥吗？'], ['Yes! Its ears are funny.', '想！它的耳朵真有趣。']]
      },
      {
        word: 'spoon', ipa: '/spuːn/', meaning: '勺子',
        phrase: ['a little spoon', '一把小勺子'],
        sentence: ['I use my spoon to scoop up peas.', '我用勺子舀豌豆。'],
        dialogue: [['Would a spoon help you scoop that up?', '用勺子舀会不会方便一点？'], ['Yes, please. My fork is not working.', '会，请给我勺子。我的叉子叉不起来。']]
      },
      {
        word: 'fork', ipa: '/fɔːk/', meaning: '叉子',
        phrase: ['a small fork', '一把小叉子'],
        sentence: ['My fork can pick up this soft potato.', '我的叉子能叉起这块软土豆。'],
        dialogue: [['Would you like to try your fork with this piece?', '你想试试用叉子叉这一块吗？'], ['I got it! Look!', '我叉起来啦！看！']]
      },
      {
        word: 'bottle', ipa: '/ˈbɒtl/', meaning: '瓶子；水瓶',
        phrase: ['a water bottle', '一个水瓶'],
        sentence: ['Your bottle is in the side pocket.', '你的水瓶在侧面的口袋里。'],
        dialogue: [['Shall we take your bottle to the park?', '我们去公园时带上你的水瓶，好吗？'], ['Yes. Can you fill it, please?', '好，请帮我装上水。']]
      },
      {
        word: 'breakfast', ipa: '/ˈbrekfəst/', meaning: '早餐',
        phrase: ['have breakfast', '吃早餐'],
        sentence: ['We are having porridge for breakfast.', '我们早餐喝粥。'],
        dialogue: [['Would you like toast or porridge for breakfast?', '早餐想吃吐司，还是喝粥？'], ['Porridge, please. With banana.', '请给我粥，加香蕉的。']]
      },
      {
        word: 'lunch', ipa: '/lʌntʃ/', meaning: '午餐',
        phrase: ['a picnic lunch', '一顿野餐午饭'],
        sentence: ['We can have lunch under this tree.', '我们可以在这棵树下吃午饭。'],
        dialogue: [['Shall we sit on the picnic mat for lunch?', '我们坐在野餐垫上吃午饭，好吗？'], ['Yes. I will sit next to you.', '好，我坐在你旁边。']]
      },
      {
        word: 'dinner', ipa: '/ˈdɪnə/', meaning: '晚餐（这里指晚上吃的一餐）',
        phrase: ['cook dinner', '做晚饭'],
        sentence: ['We have dinner together in the evening.', '晚上我们一起吃晚饭。'],
        dialogue: [['Dinner is nearly ready. Would you like to bring the napkins?', '晚饭快好了，你愿意帮忙拿餐巾吗？'], ['Yes! One for you and one for me.', '愿意！你一张，我一张。']]
      },
      {
        word: 'hungry', ipa: '/ˈhʌŋɡri/', meaning: '饿的',
        phrase: ['feel hungry', '觉得饿'],
        sentence: ['I feel hungry after playing outside.', '我在外面玩过后觉得饿了。'],
        dialogue: [['Are you hungry, or would you like to eat later?', '你饿了吗，还是想晚一点再吃？'], ['I am hungry now.', '我现在饿了。']]
      },
      {
        word: 'thirsty', ipa: '/ˈθɜːsti/', meaning: '口渴的',
        phrase: ['feel thirsty', '觉得口渴'],
        sentence: ['I am thirsty after our walk.', '散步后我口渴了。'],
        dialogue: [['You said you were thirsty. Here is your water.', '你刚才说口渴了，水在这里。'], ['Thank you. I need a drink.', '谢谢。我要喝点水。']]
      },
      {
        word: 'full', ipa: '/fʊl/', meaning: '吃饱的',
        phrase: ['feel full', '觉得饱了'],
        sentence: ['My tummy feels full now.', '我的小肚子现在饱了。'],
        dialogue: [['Is your tummy full?', '你的小肚子吃饱了吗？'], ['Yes. No more, thank you.', '饱了。不吃了，谢谢。']]
      },
      {
        word: 'clean', ipa: '/kliːn/', meaning: '干净的',
        phrase: ['clean hands', '干净的双手'],
        sentence: ['My hands are clean now.', '我的手现在干净了。'],
        dialogue: [['Your hands are clean. Ready to dry them?', '你的手洗干净了，准备擦干了吗？'], ['Yes. Where is my towel?', '准备好了。我的毛巾在哪里？']]
      },
      {
        word: 'dirty', ipa: '/ˈdɜːti/', meaning: '脏的',
        phrase: ['dirty boots', '脏靴子'],
        sentence: ['My boots are dirty from the mud.', '我的靴子沾上泥，弄脏了。'],
        dialogue: [['Our boots are dirty. Let us leave them by the door.', '我们的靴子脏了，放在门边吧。'], ['Mine have lots of mud!', '我的上面有好多泥！']]
      }
    ]
  },
  {
    id: 'body',
    title: '认识身体',
    description: '借助镜子、儿歌和轻柔动作认识身体，也练习说出舒服、不舒服和想要的帮助。',
    tip: '可以指自己的身体或玩偶示范，不必让孩子被触碰。先询问再帮忙，尊重孩子说停；身体不舒服时先照顾感受，不把练习变成检查或测验。',
    words: [
      {
        word: 'head', ipa: '/hed/', meaning: '头',
        phrase: ['on your head', '在你的头上'],
        sentence: ['Your hat is on your head.', '你的帽子戴在头上。'],
        dialogue: [['Does that hat feel comfy on your head?', '那顶帽子戴在头上舒服吗？'], ['It is too tight. Help me, please.', '太紧了，请帮帮我。']]
      },
      {
        word: 'hair', ipa: '/heə/', meaning: '头发',
        phrase: ['wet hair', '湿头发'],
        sentence: ['Your hair is wet after your bath.', '洗完澡，你的头发湿湿的。'],
        dialogue: [['May I dry your hair with the towel?', '我可以用毛巾帮你擦干头发吗？'], ['Yes. Gently, please.', '可以，请轻一点。']]
      },
      {
        word: 'face', ipa: '/feɪs/', meaning: '脸',
        phrase: ['a funny face', '一个鬼脸'],
        sentence: ['I can make a funny face in the mirror.', '我会对着镜子做鬼脸。'],
        dialogue: [['Shall we make a funny face together?', '我们一起做个鬼脸，好吗？'], ['Yes! Look at mine!', '好！看我的！']]
      },
      {
        word: 'eye', ipa: '/aɪ/', meaning: '眼睛',
        phrase: ['one eye', '一只眼睛'],
        sentence: ['I can close one eye.', '我能闭上一只眼睛。'],
        dialogue: [['Would you like to try closing one eye?', '你想试试闭上一只眼睛吗？'], ['Both of mine keep closing!', '我的两只眼睛总是一起闭上！']]
      },
      {
        word: 'ear', ipa: '/ɪə/', meaning: '耳朵',
        phrase: ['a bunny ear', '一只兔子耳朵'],
        sentence: ['This toy bunny has one floppy ear.', '这只玩具兔有一只耷拉的耳朵。'],
        dialogue: [['One ear on your bunny has flopped down.', '你的小兔子有一只耳朵耷拉下来了。'], ['It is having a rest!', '它在休息！']]
      },
      {
        word: 'nose', ipa: '/nəʊz/', meaning: '鼻子',
        phrase: ['a runny nose', '流鼻涕的鼻子'],
        sentence: ['My nose is a bit runny.', '我有一点流鼻涕。'],
        dialogue: [['Would you like help wiping your nose?', '需要帮你擦擦鼻子吗？'], ['Yes, with the soft tissue, please.', '需要，请用软软的纸巾。']]
      },
      {
        word: 'mouth', ipa: '/maʊθ/', meaning: '嘴巴',
        phrase: ['open your mouth', '张开嘴巴'],
        sentence: ['My mouth opens wide when I yawn.', '我打哈欠时，嘴巴张得大大的。'],
        dialogue: [['May I look in your mouth while we brush?', '刷牙时，我可以看看你的嘴巴里面吗？'], ['Yes. Ahh!', '可以。啊！']]
      },
      {
        word: 'tooth', ipa: '/tuːθ/', meaning: '牙齿（复数 teeth）',
        phrase: ['a back tooth', '一颗后面的牙齿'],
        sentence: ['We brush each tooth gently.', '我们轻轻地刷每一颗牙。'],
        dialogue: [['May I help brush that back tooth?', '我可以帮你刷后面那颗牙吗？'], ['Yes, then I can spit.', '可以，然后我就能吐掉泡沫了。']]
      },
      {
        word: 'tongue', ipa: '/tʌŋ/', meaning: '舌头',
        phrase: ['stick out your tongue', '伸出舌头'],
        sentence: ['My tongue helps me taste food.', '我的舌头帮我尝出食物的味道。'],
        dialogue: [['Can you see your tongue in the mirror?', '你能在镜子里看见自己的舌头吗？'], ['Yes! It is pink.', '能！是粉红色的。']]
      },
      {
        word: 'neck', ipa: '/nek/', meaning: '脖子',
        phrase: ['around your neck', '围在你的脖子上'],
        sentence: ['The scarf keeps your neck warm.', '围巾让你的脖子暖暖的。'],
        dialogue: [['Is the scarf itchy on your neck?', '这条围巾让你的脖子痒吗？'], ['Yes. Can I take it off?', '痒，可以摘下来吗？']]
      },
      {
        word: 'shoulder', ipa: '/ˈʃəʊldə/', meaning: '肩膀',
        phrase: ['on my shoulder', '在我的肩膀上'],
        sentence: ['You can rest your head on my shoulder.', '你可以把头靠在我的肩膀上。'],
        dialogue: [['Would you like to rest on my shoulder?', '你想靠在我的肩膀上歇一歇吗？'], ['Yes. I am tired.', '想，我累了。']]
      },
      {
        word: 'arm', ipa: '/ɑːm/', meaning: '胳膊；手臂',
        phrase: ['lift your arm', '抬起胳膊'],
        sentence: ['One arm goes into this sleeve.', '一只胳膊伸进这个袖子里。'],
        dialogue: [['Can you put your arm through this sleeve?', '你能把胳膊伸进这个袖子吗？'], ['It is stuck. Help me, please.', '卡住了，请帮帮我。']]
      },
      {
        word: 'hand', ipa: '/hænd/', meaning: '手',
        phrase: ['hold my hand', '牵着我的手'],
        sentence: ['Your hand fits inside mine.', '你的小手正好放在我的手心里。'],
        dialogue: [['May I hold your hand on these steps?', '走这几级台阶时，我可以牵着你的手吗？'], ['Yes. They are big steps.', '可以，这些台阶好高。']]
      },
      {
        word: 'finger', ipa: '/ˈfɪŋɡə/', meaning: '手指',
        phrase: ['your little finger', '你的小拇指'],
        sentence: ['There is paint on my finger.', '我的手指上有颜料。'],
        dialogue: [['Which finger has the blue paint on it?', '哪根手指上有蓝色颜料呀？'], ['This one! I made a dot.', '这根！我点了一个点。']]
      },
      {
        word: 'thumb', ipa: '/θʌm/', meaning: '拇指',
        phrase: ['your left thumb', '你的左手拇指'],
        sentence: ['My thumb is shorter than this finger.', '我的拇指比这根手指短。'],
        dialogue: [['Where is your thumb hiding in that mitten?', '你的拇指藏在那只连指手套的哪里呀？'], ['Here! It has a little room.', '这里！它有一个小房间。']]
      },
      {
        word: 'tummy', ipa: '/ˈtʌmi/', meaning: '肚子（亲昵说法）',
        phrase: ['a rumbling tummy', '咕咕叫的肚子'],
        sentence: ['My tummy is making a funny noise.', '我的肚子正发出有趣的声音。'],
        dialogue: [['I heard your tummy rumble. Are you hungry?', '我听见你肚子咕咕叫了，你饿了吗？'], ['A little. Is lunch ready?', '有一点，午饭好了吗？']]
      },
      {
        word: 'back', ipa: '/bæk/', meaning: '背；背部',
        phrase: ['your back', '你的背'],
        sentence: ['Your back rests against the cushion.', '你的背靠在靠垫上。'],
        dialogue: [['Would you like me to rub your back?', '你想让我轻轻揉揉你的背吗？'], ['Yes, slowly, please.', '想，请慢慢揉。']]
      },
      {
        word: 'leg', ipa: '/leɡ/', meaning: '腿',
        phrase: ['stand on one leg', '单腿站立'],
        sentence: ['I can lift one leg like a bird.', '我能像小鸟一样抬起一条腿。'],
        dialogue: [['Shall we try standing on one leg together?', '我们一起试试单腿站立，好吗？'], ['Hold my hand, please. I wobble!', '请牵着我的手。我摇摇晃晃的！']]
      },
      {
        word: 'knee', ipa: '/niː/', meaning: '膝盖',
        phrase: ['bend your knee', '弯曲膝盖'],
        sentence: ['My knee bends when I sit down.', '我坐下时，膝盖会弯起来。'],
        dialogue: [['There is mud on your knee. May I wipe it off?', '你的膝盖上有泥，我可以擦掉吗？'], ['Yes. I was crawling like a bear.', '可以。我刚才像熊一样爬。']]
      },
      {
        word: 'foot', ipa: '/fʊt/', meaning: '脚（复数 feet）',
        phrase: ['one foot', '一只脚'],
        sentence: ['One foot is still outside my sock.', '我还有一只脚没穿袜子。'],
        dialogue: [['Shall we put this sock on your other foot?', '我们给你的另一只脚穿上这只袜子，好吗？'], ['Yes. This foot is cold!', '好，这只脚冷！']]
      },
      {
        word: 'toe', ipa: '/təʊ/', meaning: '脚趾',
        phrase: ['your big toe', '你的大脚趾'],
        sentence: ['My big toe is peeking out of a hole.', '我的大脚趾从一个小洞里露出来了。'],
        dialogue: [['Your toe has found a hole in that sock!', '你的脚趾从那只袜子的洞里钻出来了！'], ['Hello, toe! I need another sock.', '脚趾，你好！我要换一只袜子。']]
      },
      {
        word: 'skin', ipa: '/skɪn/', meaning: '皮肤',
        phrase: ['soft skin', '柔软的皮肤'],
        sentence: ['The skin on my hand feels soft.', '我手上的皮肤摸起来软软的。'],
        dialogue: [['Your skin feels dry. May I put some cream on?', '你的皮肤摸起来有些干，我可以涂一点润肤霜吗？'], ['Yes, on my hands, please.', '可以，请涂在我的手上。']]
      },
      {
        word: 'smile', ipa: '/smaɪl/', meaning: '微笑；笑容',
        phrase: ['a big smile', '一个灿烂的笑容'],
        sentence: ['There is a big smile on your face.', '你的脸上露出了灿烂的笑容。'],
        dialogue: [['I can see your smile. Is the puppy being funny?', '我看见你笑了，是小狗很逗吗？'], ['Yes! It is chasing its tail.', '是呀！它在追自己的尾巴。']]
      },
      {
        word: 'tear', ipa: '/tɪə/', meaning: '眼泪；泪珠',
        phrase: ['a little tear', '一颗小泪珠'],
        sentence: ['A tear is rolling down your cheek.', '一颗眼泪正顺着你的脸颊滚下来。'],
        dialogue: [['May I wipe that tear away? I am here with you.', '我可以擦掉那颗眼泪吗？我在这里陪着你。'], ['Yes. I wanted to keep playing.', '可以。我还想接着玩。']]
      },
      {
        word: 'body', ipa: '/ˈbɒdi/', meaning: '身体',
        phrase: ['your whole body', '你的全身'],
        sentence: ['Your body needs a rest after running.', '跑步后，你的身体需要休息。'],
        dialogue: [['Does your body want a rest now?', '你的身体现在想休息一下了吗？'], ['Yes. Can we sit on the mat?', '想，我们可以坐在垫子上吗？']]
      }
    ]
  }
);
