'use strict';

window.LUMI_WORD_GROUPS = window.LUMI_WORD_GROUPS || [];
window.LUMI_WORD_GROUPS.push(
  {
    id: 'play',
    title: '玩具与游戏',
    description: '从熟悉的玩具、绘画、音乐和户外游戏开始说英语。',
    tip: '跟着孩子的兴趣玩，一次挑两三个词，边做边说，不要求跟读。',
    words: [
      {
        word: 'ball', ipa: '/bɔːl/', meaning: '球',
        phrase: ['roll the ball', '滚球'],
        sentence: ['The ball is under the chair.', '球在椅子下面。'],
        dialogue: [['Can you roll the ball to me?', '你能把球滚给我吗？'], ['Here it comes!', '球来啦！']]
      },
      {
        word: 'doll', ipa: '/dɒl/', meaning: '玩偶；娃娃',
        phrase: ['dress the doll', '给娃娃穿衣服'],
        sentence: ['My doll has a yellow hat.', '我的娃娃戴着一顶黄色的帽子。'],
        dialogue: [['Is your doll ready for bed?', '你的娃娃准备好睡觉了吗？'], ['Not yet. She needs a blanket.', '还没有。她需要一条毯子。']]
      },
      {
        word: 'teddy', ipa: '/ˈtedi/', meaning: '泰迪熊；玩具熊',
        phrase: ['my teddy', '我的玩具熊'],
        sentence: ['Teddy is sitting next to me.', '玩具熊坐在我旁边。'],
        dialogue: [['Where shall Teddy sit for our picnic?', '野餐时让玩具熊坐在哪里呢？'], ['Here, next to my cup.', '这里，在我的杯子旁边。']]
      },
      {
        word: 'toy', ipa: '/tɔɪ/', meaning: '玩具',
        phrase: ['a toy car', '一辆玩具汽车'],
        sentence: ['This toy makes a funny sound.', '这个玩具会发出好玩的声音。'],
        dialogue: [['Which toy shall we take to Grandma’s?', '我们带哪个玩具去奶奶家呢？'], ['My little car, please.', '我想带我的小汽车。']]
      },
      {
        word: 'block', ipa: '/blɒk/', meaning: '积木块',
        phrase: ['a wooden block', '一块木头积木'],
        sentence: ['Put a block on top of the tower.', '在积木塔顶上放一块积木。'],
        dialogue: [['Do we need another block for the bridge?', '搭这座桥还需要一块积木吗？'], ['Yes, a long one.', '需要，要长的那块。']]
      },
      {
        word: 'puzzle', ipa: '/ˈpʌzl/', meaning: '拼图',
        phrase: ['do a puzzle', '拼拼图'],
        sentence: ['This puzzle has a big red bus on it.', '这幅拼图上有一辆大红色公交车。'],
        dialogue: [['Shall we finish the puzzle together?', '我们一起把拼图拼完好吗？'], ['Yes! I found the last piece.', '好！我找到最后一块了。']]
      },
      {
        word: 'book', ipa: '/bʊk/', meaning: '书',
        phrase: ['read a book', '读一本书'],
        sentence: ['Let’s read a book on the sofa.', '我们在沙发上读一本书吧。'],
        dialogue: [['Which book would you like tonight?', '今晚你想读哪本书？'], ['The one about the duck.', '讲小鸭子的那本。']]
      },
      {
        word: 'story', ipa: '/ˈstɔːri/', meaning: '故事',
        phrase: ['a bedtime story', '睡前故事'],
        sentence: ['This story is about a lost kitten.', '这个故事讲的是一只迷路的小猫。'],
        dialogue: [['Shall we make up a story about your teddy?', '我们编一个关于你的玩具熊的故事好吗？'], ['Yes! He goes to the moon.', '好！他去月亮上。']]
      },
      {
        word: 'crayon', ipa: '/ˈkreɪən/', meaning: '蜡笔',
        phrase: ['a blue crayon', '一支蓝色蜡笔'],
        sentence: ['I’m drawing the sea with a blue crayon.', '我正在用蓝色蜡笔画大海。'],
        dialogue: [['Which crayon do you want for the sun?', '画太阳你想用哪支蜡笔？'], ['The yellow one, please.', '请给我黄色的那支。']]
      },
      {
        word: 'paper', ipa: '/ˈpeɪpə/', meaning: '纸',
        phrase: ['a piece of paper', '一张纸'],
        sentence: ['Let’s fold the paper in half.', '我们把这张纸对折吧。'],
        dialogue: [['Would you like some paper to draw on?', '你想要些纸画画吗？'], ['Yes, a big piece!', '想要，要一张大的！']]
      },
      {
        word: 'paint', ipa: '/peɪnt/', meaning: '绘画用的颜料',
        phrase: ['washable paint', '可水洗颜料'],
        sentence: ['There is green paint on my brush.', '我的画笔上有绿色颜料。'],
        dialogue: [['Shall I put some paint on your tray?', '我在你的托盘里放点颜料好吗？'], ['Yes, blue and white, please.', '好，请放蓝色和白色的。']]
      },
      {
        word: 'picture', ipa: '/ˈpɪktʃə/', meaning: '图画',
        phrase: ['draw a picture', '画一幅画'],
        sentence: ['Your picture has lots of stars.', '你的画里有好多星星。'],
        dialogue: [['Tell me about your picture.', '跟我讲讲你的画吧。'], ['This is our house in the rain.', '这是下雨时我们的家。']]
      },
      {
        word: 'music', ipa: '/ˈmjuːzɪk/', meaning: '音乐',
        phrase: ['listen to music', '听音乐'],
        sentence: ['The music is quiet and slow.', '这段音乐轻柔又舒缓。'],
        dialogue: [['Would you like some music while we tidy up?', '我们收拾东西时，你想听点音乐吗？'], ['Yes, let’s dance too!', '想，我们也跳舞吧！']]
      },
      {
        word: 'song', ipa: '/sɒŋ/', meaning: '歌曲',
        phrase: ['sing a song', '唱一首歌'],
        sentence: ['We sing a song in the bath.', '我们洗澡时唱一首歌。'],
        dialogue: [['Which song shall we sing?', '我们唱哪首歌呢？'], ['The one about the little boat.', '唱小船的那首。']]
      },
      {
        word: 'drum', ipa: '/drʌm/', meaning: '鼓',
        phrase: ['tap the drum', '轻敲鼓'],
        sentence: ['I tap the drum with my hands.', '我用双手轻敲鼓。'],
        dialogue: [['Can you make a quiet sound on the drum?', '你能用鼓敲出轻轻的声音吗？'], ['Yes, with one finger!', '能，用一根手指！']]
      },
      {
        word: 'dance', ipa: '/dɑːns/', meaning: '跳舞',
        phrase: ['dance together', '一起跳舞'],
        sentence: ['We dance like penguins in the living room.', '我们在客厅里像企鹅一样跳舞。'],
        dialogue: [['How shall we dance to this music?', '我们听着这段音乐怎么跳舞呢？'], ['Let’s wiggle like worms!', '我们像小虫子一样扭一扭吧！']]
      },
      {
        word: 'game', ipa: '/ɡeɪm/', meaning: '游戏',
        phrase: ['play a game', '玩一个游戏'],
        sentence: ['This game is called hide-and-seek.', '这个游戏叫捉迷藏。'],
        dialogue: [['Shall we play a guessing game?', '我们玩个猜谜游戏好吗？'], ['Yes! You guess my animal.', '好！你来猜我扮的动物。']]
      },
      {
        word: 'balloon', ipa: '/bəˈluːn/', meaning: '气球',
        phrase: ['a round balloon', '一个圆气球'],
        sentence: ['The balloon is high on the wall.', '气球挂在墙上的高处。'],
        dialogue: [['Look at that balloon up there. What colour is it?', '看上面那个气球，它是什么颜色的？'], ['Purple, like my socks!', '紫色的，跟我的袜子一样！']]
      },
      {
        word: 'bubble', ipa: '/ˈbʌbl/', meaning: '泡泡',
        phrase: ['a soap bubble', '一个肥皂泡'],
        sentence: ['A bubble floats past my nose.', '一个泡泡从我的鼻子旁飘过。'],
        dialogue: [['Where did that big bubble go?', '刚才那个大泡泡去哪儿了？'], ['Up there! Oh, it popped!', '到上面了！哎呀，它破了！']]
      },
      {
        word: 'swing', ipa: '/swɪŋ/', meaning: '秋千',
        phrase: ['sit on the swing', '坐在秋千上'],
        sentence: ['I hold on with both hands on the swing.', '坐秋千时，我用双手抓稳。'],
        dialogue: [['Would you like a gentle push on the swing?', '你想让我轻轻推一下秋千吗？'], ['Yes, just a little one.', '想，只推一点点。']]
      },
      {
        word: 'slide', ipa: '/slaɪd/', meaning: '滑梯',
        phrase: ['go down the slide', '滑下滑梯'],
        sentence: ['The slide is dry now.', '滑梯现在干了。'],
        dialogue: [['The slide is clear now. Ready for your turn?', '滑梯上现在没人了。准备好轮到你了吗？'], ['Ready! Watch me!', '准备好了！看我！']]
      },
      {
        word: 'bike', ipa: '/baɪk/', meaning: '自行车',
        phrase: ['ride a bike', '骑自行车'],
        sentence: ['I wear my helmet when I ride my bike.', '我骑自行车时戴头盔。'],
        dialogue: [['Shall we take your bike to the park?', '我们把你的自行车带去公园好吗？'], ['Yes! Can you help with my helmet?', '好！你能帮我戴头盔吗？']]
      },
      {
        word: 'kite', ipa: '/kaɪt/', meaning: '风筝',
        phrase: ['fly a kite', '放风筝'],
        sentence: ['Our kite has a long tail.', '我们的风筝有一条长尾巴。'],
        dialogue: [['Can you see our kite above the field?', '你能看到草地上空我们的风筝吗？'], ['Yes! It’s dancing in the wind.', '能！它在风里跳舞。']]
      },
      {
        word: 'train', ipa: '/treɪn/', meaning: '火车',
        phrase: ['a toy train', '一列玩具火车'],
        sentence: ['The train goes through our block tunnel.', '火车穿过了我们用积木搭的隧道。'],
        dialogue: [['Where is your train going today?', '你的火车今天要去哪儿？'], ['To the zoo! All aboard!', '去动物园！大家上车！']]
      },
      {
        word: 'robot', ipa: '/ˈrəʊbɒt/', meaning: '机器人',
        phrase: ['a toy robot', '一个玩具机器人'],
        sentence: ['My robot has shiny silver arms.', '我的机器人有闪亮的银色手臂。'],
        dialogue: [['How does your robot walk?', '你的机器人怎么走路？'], ['Like this, with stiff legs!', '像这样，腿直直地走！']]
      }
    ]
  },
  {
    id: 'actions',
    title: '一起动起来',
    description: '把日常动作变成孩子听得懂、做得到的小互动。',
    tip: '留出安全的活动空间，允许孩子停下或拒绝；拥抱和亲吻都先问意愿。',
    words: [
      {
        word: 'go', ipa: '/ɡəʊ/', meaning: '去',
        phrase: ['go home', '回家'],
        sentence: ['Let’s go to the park after lunch.', '午饭后我们去公园吧。'],
        dialogue: [['Are you ready to go home?', '你准备好回家了吗？'], ['One more slide, please.', '请让我再滑一次滑梯。']]
      },
      {
        word: 'come', ipa: '/kʌm/', meaning: '来',
        phrase: ['come here', '到这里来'],
        sentence: ['Come and see the rainbow.', '来看看彩虹。'],
        dialogue: [['Would you like to come with me to feed the cat?', '你想跟我一起来喂猫吗？'], ['Yes! I’ll bring her bowl.', '想！我来拿她的碗。']]
      },
      {
        word: 'stop', ipa: '/stɒp/', meaning: '停下',
        phrase: ['stop here', '在这里停下'],
        sentence: ['We stop at the edge of the pavement.', '我们在人行道边缘停下。'],
        dialogue: [['Shall I stop tickling now?', '现在要我停止挠痒痒吗？'], ['Yes, stop, please.', '是的，请停下。']]
      },
      {
        word: 'wait', ipa: '/weɪt/', meaning: '等待',
        phrase: ['wait a moment', '等一会儿'],
        sentence: ['We wait until the soup is cool enough.', '我们等汤凉到可以喝。'],
        dialogue: [['Can you wait while I tie my shoe?', '我系鞋带时，你能等一下吗？'], ['Yes, I’ll sit here.', '能，我坐在这里等。']]
      },
      {
        word: 'walk', ipa: '/wɔːk/', meaning: '走路；步行',
        phrase: ['walk together', '一起走'],
        sentence: ['We walk slowly on the wet path.', '我们在湿的小路上慢慢走。'],
        dialogue: [['Shall we walk to the big tree?', '我们走到那棵大树那里好吗？'], ['Yes, I can see a bird there.', '好，我看到那里有一只鸟。']]
      },
      {
        word: 'run', ipa: '/rʌn/', meaning: '跑',
        phrase: ['run on the grass', '在草地上跑'],
        sentence: ['I like to run in the park.', '我喜欢在公园里跑。'],
        dialogue: [['There’s lots of space here. Want to run with me?', '这里很空旷。想跟我一起跑吗？'], ['Yes, let’s race to that tree!', '想，我们比赛跑到那棵树吧！']]
      },
      {
        word: 'jump', ipa: '/dʒʌmp/', meaning: '跳',
        phrase: ['jump up and down', '上下跳'],
        sentence: ['We jump like frogs on the grass.', '我们在草地上像青蛙一样跳。'],
        dialogue: [['Can you jump over this line on the ground?', '你能跳过地上的这条线吗？'], ['I’ll try. Watch my frog jump!', '我试试。看我的青蛙跳！']]
      },
      {
        word: 'hop', ipa: '/hɒp/', meaning: '单脚跳',
        phrase: ['hop on one foot', '用一只脚跳'],
        sentence: ['I can hop once on my left foot.', '我能用左脚单脚跳一下。'],
        dialogue: [['Would you like my hand while you hop?', '你单脚跳的时候，想牵着我的手吗？'], ['Yes, I’m a bit wobbly.', '想，我有点站不稳。']]
      },
      {
        word: 'sit', ipa: '/sɪt/', meaning: '坐',
        phrase: ['sit down', '坐下'],
        sentence: ['Let’s sit on the mat for our snack.', '我们坐在垫子上吃点心吧。'],
        dialogue: [['Where would you like to sit for the story?', '听故事时你想坐在哪里？'], ['On the cushion next to you.', '坐在你旁边的靠垫上。']]
      },
      {
        word: 'stand', ipa: '/stænd/', meaning: '站',
        phrase: ['stand up', '站起来'],
        sentence: ['I stand beside you at the bus stop.', '我在公交车站站在你旁边。'],
        dialogue: [['Can you stand tall like a tree?', '你能像树一样站得直直的吗？'], ['Yes, and these are my branches!', '能，这些是我的树枝！']]
      },
      {
        word: 'clap', ipa: '/klæp/', meaning: '拍手',
        phrase: ['clap your hands', '拍拍手'],
        sentence: ['We clap at the end of the song.', '歌曲结束时我们拍拍手。'],
        dialogue: [['Shall we clap along with the music?', '我们跟着音乐拍手好吗？'], ['Yes! I can do it slowly.', '好！我能慢慢地拍。']]
      },
      {
        word: 'wave', ipa: '/weɪv/', meaning: '挥手',
        phrase: ['wave goodbye', '挥手告别'],
        sentence: ['I wave to Grandma from the window.', '我在窗边向奶奶挥手。'],
        dialogue: [['Would you like to wave to the bus driver?', '你想向公交车司机挥挥手吗？'], ['Yes! She’s waving back.', '想！她也在向我挥手。']]
      },
      {
        word: 'hug', ipa: '/hʌɡ/', meaning: '拥抱',
        phrase: ['a big hug', '一个大大的拥抱'],
        sentence: ['I ask before I give someone a hug.', '拥抱别人之前，我会先问一问。'],
        dialogue: [['Would you like a hug or some space?', '你想要一个拥抱，还是想自己待一会儿？'], ['Some space, please.', '我想自己待一会儿。']]
      },
      {
        word: 'kiss', ipa: '/kɪs/', meaning: '亲吻',
        phrase: ['a goodnight kiss', '一个晚安吻'],
        sentence: ['You can say no to a kiss.', '你可以拒绝亲吻。'],
        dialogue: [['Would you like a goodnight kiss?', '你想要一个晚安吻吗？'], ['No, just a wave tonight.', '不想，今晚挥挥手就好。']]
      },
      {
        word: 'help', ipa: '/help/', meaning: '帮助',
        phrase: ['help me, please', '请帮帮我'],
        sentence: ['Can you help me zip up my coat?', '你能帮我拉上外套拉链吗？'],
        dialogue: [['Would you like help with that lid?', '打开那个盖子需要帮忙吗？'], ['Yes, it’s stuck.', '需要，它卡住了。']]
      },
      {
        word: 'share', ipa: '/ʃeə/', meaning: '分享；共用',
        phrase: ['share the crayons', '共用蜡笔'],
        sentence: ['We can share this blanket on the sofa.', '我们可以在沙发上一起盖这条毯子。'],
        dialogue: [['Would you like to share your crayons with me?', '你愿意和我一起用你的蜡笔吗？'], ['Yes, you can use the green one.', '愿意，你可以用绿色的那支。']]
      },
      {
        word: 'open', ipa: '/ˈəʊpən/', meaning: '打开',
        phrase: ['open the box', '打开盒子'],
        sentence: ['Let’s open the book to the first page.', '我们把书翻到第一页吧。'],
        dialogue: [['Shall I open your lunch box?', '要我打开你的午餐盒吗？'], ['I want to try first.', '我想先自己试试。']]
      },
      {
        word: 'close', ipa: '/kləʊz/', meaning: '关上；合上',
        phrase: ['close the door', '关门'],
        sentence: ['I close the book when the story ends.', '故事讲完时，我把书合上。'],
        dialogue: [['Shall we close the toy box now? Fingers clear?', '我们现在关上玩具箱好吗？手指都拿开了吗？'], ['Yes, my hands are on my knees.', '拿开了，我的手放在膝盖上。']]
      },
      {
        word: 'push', ipa: '/pʊʃ/', meaning: '推',
        phrase: ['push the toy car', '推玩具汽车'],
        sentence: ['I push the toy bus along the floor.', '我推着玩具公交车在地板上走。'],
        dialogue: [['Can you push the car into its garage?', '你能把小汽车推进它的车库吗？'], ['Yes, it fits under the box!', '能，它能开进盒子下面！']]
      },
      {
        word: 'pull', ipa: '/pʊl/', meaning: '拉',
        phrase: ['pull off a sock', '拉下袜子'],
        sentence: ['I pull my boots off after our walk.', '散步后，我把靴子脱下来。'],
        dialogue: [['Can you pull your sock off by the toe?', '你能拉着袜子脚尖的部分把袜子脱下来吗？'], ['Yes! Here are my toes.', '能！我的脚趾露出来啦。']]
      },
      {
        word: 'give', ipa: '/ɡɪv/', meaning: '给',
        phrase: ['give me a spoon', '给我一把勺子'],
        sentence: ['I give Teddy a little blanket.', '我给玩具熊一条小毯子。'],
        dialogue: [['What shall we give Grandma for her birthday?', '奶奶生日时，我们送她什么呢？'], ['A picture of our family!', '一幅我们一家人的画！']]
      },
      {
        word: 'take', ipa: '/teɪk/', meaning: '拿；带',
        phrase: ['take an umbrella', '带一把伞'],
        sentence: ['Let’s take some water to the park.', '我们带些水去公园吧。'],
        dialogue: [['Which hat will you take on our walk?', '散步时你要带哪顶帽子？'], ['My sun hat. It’s bright outside.', '我的遮阳帽。外面阳光很亮。']]
      },
      {
        word: 'put', ipa: '/pʊt/', meaning: '放',
        phrase: ['put the toys away', '把玩具收好'],
        sentence: ['Put your cup on the table, please.', '请把你的杯子放在桌子上。'],
        dialogue: [['Where shall we put your wet boots?', '我们把你的湿靴子放在哪里呢？'], ['On the mat by the door.', '放在门边的垫子上。']]
      },
      {
        word: 'find', ipa: '/faɪnd/', meaning: '找到',
        phrase: ['find a matching sock', '找到一只配对的袜子'],
        sentence: ['Let’s find the missing puzzle piece.', '我们来找找不见的那块拼图吧。'],
        dialogue: [['Can you find the duck in this picture?', '你能在这幅图里找到鸭子吗？'], ['There! Behind the boat.', '在那里！在船后面。']]
      },
      {
        word: 'look', ipa: '/lʊk/', meaning: '看',
        phrase: ['look at the sky', '看看天空'],
        sentence: ['Look at the snail on that leaf.', '看看那片叶子上的蜗牛。'],
        dialogue: [['Look at this cloud. What does it look like?', '看看这朵云。它像什么？'], ['A rabbit with long ears!', '一只长耳朵的兔子！']]
      }
    ]
  },
  {
    id: 'feelings',
    title: '心情与礼貌',
    description: '用简单的话表达感受、需要、边界和日常礼貌。',
    tip: '先接住孩子的情绪，再示范表达；礼貌用语自然示范，不以说出口作为满足需要的条件。',
    words: [
      {
        word: 'happy', ipa: '/ˈhæpi/', meaning: '开心的',
        phrase: ['feel happy', '感到开心'],
        sentence: ['I feel happy when we play together.', '我们一起玩的时候，我很开心。'],
        dialogue: [['You look happy. What happened?', '你看起来很开心。发生什么事了？'], ['My seeds have little leaves!', '我种的种子长出小叶子了！']]
      },
      {
        word: 'sad', ipa: '/sæd/', meaning: '难过的',
        phrase: ['feel sad', '感到难过'],
        sentence: ['I feel sad when my friend goes home.', '朋友回家时，我感到难过。'],
        dialogue: [['You seem sad that our visit is over. Shall I sit with you?', '做客结束了，你好像有点难过。我陪你坐一会儿好吗？'], ['Yes, I miss Grandma.', '好，我想奶奶了。']]
      },
      {
        word: 'angry', ipa: '/ˈæŋɡri/', meaning: '生气的',
        phrase: ['feel angry', '感到生气'],
        sentence: ['I feel angry when my tower falls down.', '我的积木塔倒了，我感到生气。'],
        dialogue: [['It’s okay to feel angry. Would you like to squeeze this cushion?', '生气也没关系。你想捏一捏这个靠垫吗？'], ['Yes. My tower fell again!', '想。我的塔又倒了！']]
      },
      {
        word: 'scared', ipa: '/skeəd/', meaning: '害怕的',
        phrase: ['feel scared', '感到害怕'],
        sentence: ['I feel scared when the thunder is loud.', '雷声很大时，我会害怕。'],
        dialogue: [['Are you scared of that loud noise? I’m right here.', '那个大声音让你害怕了吗？我就在这里。'], ['Yes, stay with me, please.', '是的，请陪着我。']]
      },
      {
        word: 'tired', ipa: '/ˈtaɪəd/', meaning: '累的',
        phrase: ['tired legs', '累了的腿'],
        sentence: ['My legs are tired after our walk.', '散步后，我的腿累了。'],
        dialogue: [['Are you tired? We can rest on this bench.', '你累了吗？我们可以在这张长椅上休息。'], ['Yes, and have some water.', '累了，还想喝点水。']]
      },
      {
        word: 'sleepy', ipa: '/ˈsliːpi/', meaning: '困的；想睡觉的',
        phrase: ['feel sleepy', '感到困了'],
        sentence: ['I feel sleepy after my bedtime story.', '听完睡前故事，我觉得困了。'],
        dialogue: [['That was a big yawn. Are you sleepy?', '你打了个大哈欠。困了吗？'], ['Yes, where’s my teddy?', '困了，我的玩具熊在哪里？']]
      },
      {
        word: 'excited', ipa: '/ɪkˈsaɪtɪd/', meaning: '兴奋的；激动的',
        phrase: ['excited about the picnic', '为野餐感到兴奋'],
        sentence: ['I’m excited about my birthday tomorrow.', '明天就是我的生日了，我很兴奋。'],
        dialogue: [['Are you excited about our train ride?', '要坐火车了，你兴奋吗？'], ['Yes! I want to sit by the window.', '兴奋！我想坐在窗边。']]
      },
      {
        word: 'calm', ipa: '/kɑːm/', meaning: '平静的',
        phrase: ['feel calm', '感到平静'],
        sentence: ['I feel calm when we listen to soft music.', '我们听轻柔的音乐时，我感到平静。'],
        dialogue: [['What helps you feel calm after a busy day?', '忙了一天后，什么能让你感到平静呢？'], ['Sitting with you and my teddy.', '和你还有我的玩具熊坐在一起。']]
      },
      {
        word: 'kind', ipa: '/kaɪnd/', meaning: '友善的；体贴的',
        phrase: ['a kind friend', '一位友善的朋友'],
        sentence: ['It was kind of you to bring me a tissue.', '你给我拿了纸巾，真体贴。'],
        dialogue: [['You brought your sister her blanket. That was kind.', '你给妹妹拿来了她的毯子，真体贴。'], ['She said she was cold.', '她说她冷了。']]
      },
      {
        word: 'gentle', ipa: '/ˈdʒentl/', meaning: '轻柔的',
        phrase: ['a gentle touch', '轻柔的触碰'],
        sentence: ['Use a gentle touch on the soft petals.', '用轻柔的动作摸摸柔软的花瓣。'],
        dialogue: [['Shall we use gentle hands to turn this thin page?', '这一页很薄，我们轻轻地翻好吗？'], ['Yes, I don’t want to tear it.', '好，我不想把它撕破。']]
      },
      {
        word: 'brave', ipa: '/breɪv/', meaning: '勇敢的',
        phrase: ['a brave choice', '一个勇敢的选择'],
        sentence: ['You can feel scared and still be brave.', '你可以感到害怕，同时也很勇敢。'],
        dialogue: [['Telling me you needed a break was brave.', '你告诉我你需要休息一下，这很勇敢。'], ['That room was too noisy for me.', '那个房间对我来说太吵了。']]
      },
      {
        word: 'safe', ipa: '/seɪf/', meaning: '安全的',
        phrase: ['a safe place', '一个安全的地方'],
        sentence: ['This path is a safe place to walk together.', '这条小路是我们可以一起安全散步的地方。'],
        dialogue: [['Let’s stay on this side of the fence to keep safe.', '我们待在围栏的这一边，保持安全吧。'], ['We can watch the pond from here.', '我们可以从这里看池塘。']]
      },
      {
        word: 'hurt', ipa: '/hɜːt/', meaning: '疼；使疼痛',
        phrase: ['hurt my knee', '弄疼我的膝盖'],
        sentence: ['My feet hurt in these tight shoes.', '穿着这双紧鞋，我的脚疼。'],
        dialogue: [['Does your knee hurt after that fall?', '刚才摔了一跤，你的膝盖疼吗？'], ['Yes, can you look at it?', '疼，你能看看吗？']]
      },
      {
        word: 'sick', ipa: '/sɪk/', meaning: '生病的；恶心想吐的',
        phrase: ['feel sick', '觉得恶心想吐'],
        sentence: ['I feel sick, so I don’t want a snack.', '我觉得恶心想吐，所以不想吃点心。'],
        dialogue: [['You look pale. Do you feel sick?', '你脸色有点白。觉得恶心想吐吗？'], ['Yes, my tummy feels funny.', '是的，我肚子不舒服。']]
      },
      {
        word: 'no', ipa: '/nəʊ/', meaning: '不；不要（否定或拒绝）',
        phrase: ['no, thank you', '不用了，谢谢'],
        sentence: ['You can say no if you don’t want a hug.', '如果不想拥抱，你可以说不。'],
        dialogue: [['Would you like more rice?', '你还想要一些米饭吗？'], ['No, thank you. I’m full.', '不要了，谢谢。我吃饱了。']]
      },
      {
        word: 'love', ipa: '/lʌv/', meaning: '爱；非常喜欢',
        phrase: ['love you', '爱你'],
        sentence: ['I love you, even when we have a hard day.', '即使今天过得不顺心，我也爱你。'],
        dialogue: [['I love spending time with you. What shall we do?', '我很喜欢和你待在一起。我们做点什么呢？'], ['Let’s cuddle and read.', '我们依偎着读书吧。']]
      },
      {
        word: 'like', ipa: '/laɪk/', meaning: '喜欢',
        phrase: ['like strawberries', '喜欢草莓'],
        sentence: ['I like the crunchy part of the toast.', '我喜欢吐司脆脆的部分。'],
        dialogue: [['Do you like this soup?', '你喜欢这碗汤吗？'], ['Yes, especially the carrots.', '喜欢，尤其喜欢里面的胡萝卜。']]
      },
      {
        word: 'want', ipa: '/wɒnt/', meaning: '想要',
        phrase: ['want a turn', '想轮到自己玩'],
        sentence: ['I want to wear my red jumper today.', '我今天想穿红色毛衣。'],
        dialogue: [['Do you want apple slices or banana with your snack?', '点心你想配苹果片还是香蕉？'], ['I want banana today.', '今天我想要香蕉。']]
      },
      {
        word: 'need', ipa: '/niːd/', meaning: '需要',
        phrase: ['need a rest', '需要休息'],
        sentence: ['I need a tissue for my nose.', '我需要一张纸巾擦鼻子。'],
        dialogue: [['What do you need to feel more comfortable?', '你需要什么才能舒服一点呢？'], ['My blanket. I’m cold.', '我的毯子。我冷。']]
      },
      {
        word: 'please', ipa: '/pliːz/', meaning: '请（用于礼貌请求）',
        phrase: ['more water, please', '请再给我一点水'],
        sentence: ['Please help me find my shoe.', '请帮我找找我的鞋。'],
        dialogue: [['Would you like me to pass you the bread?', '要我把面包递给你吗？'], ['Yes, please. I can’t reach it.', '好的，谢谢。我够不着。']]
      },
      {
        word: 'thanks', ipa: '/θæŋks/', meaning: '谢谢（用于表达感谢）',
        phrase: ['thanks for helping', '谢谢你帮忙'],
        sentence: ['Thanks for saving me a seat.', '谢谢你给我留了座位。'],
        dialogue: [['Here’s the crayon you dropped.', '这是你掉的蜡笔。'], ['Thanks! I need it for my rainbow.', '谢谢！我画彩虹要用它。']]
      },
      {
        word: 'sorry', ipa: '/ˈsɒri/', meaning: '对不起（用于道歉）',
        phrase: ['sorry about the mess', '抱歉弄乱了'],
        sentence: ['I’m sorry I knocked over your tower.', '对不起，我碰倒了你的积木塔。'],
        dialogue: [['I’m sorry I stepped on your picture. How can I help?', '对不起，我踩到你的画了。我可以怎么帮忙呢？'], ['Please help me smooth it out.', '请帮我把它铺平。']]
      },
      {
        word: 'hello', ipa: '/həˈləʊ/', meaning: '你好（用于打招呼）',
        phrase: ['say hello', '打个招呼'],
        sentence: ['I say hello to my friend at the gate.', '我在门口向朋友打招呼。'],
        dialogue: [['Grandma’s on the phone. Would you like to say hello?', '奶奶打电话来了。你想打个招呼吗？'], ['Hello, Grandma! I made a cake.', '你好，奶奶！我做了一个蛋糕。']]
      },
      {
        word: 'goodbye', ipa: '/ˌɡʊdˈbaɪ/', meaning: '再见（用于告别）',
        phrase: ['say goodbye', '说再见'],
        sentence: ['We say goodbye when our friends leave.', '朋友们离开时，我们说再见。'],
        dialogue: [['It’s time for me to go. Goodbye! I’ll be back after your snack.', '我该走了。再见！你吃完点心后我就回来。'], ['Goodbye! See you later.', '再见！待会儿见。']]
      },
      {
        word: 'yes', ipa: '/jes/', meaning: '是；好（用于肯定或同意）',
        phrase: ['yes, please', '好的，谢谢（接受提议）'],
        sentence: ['Yes, I would like to play with you.', '好，我想和你一起玩。'],
        dialogue: [['Shall we read one more page?', '我们再读一页好吗？'], ['Yes! I want to see the puppy.', '好！我想看看那只小狗。']]
      }
    ]
  },
  {
    id: 'describe',
    title: '颜色与大小',
    description: '在穿衣、收纳和游戏中认识颜色、数量、大小与位置。',
    tip: '拿身边实物做比较，边指边说；数数用大块玩具，不用小零件。',
    words: [
      {
        word: 'red', ipa: '/red/', meaning: '红色的',
        phrase: ['a red apple', '一个红苹果'],
        sentence: ['My red boots are by the door.', '我的红靴子在门边。'],
        dialogue: [['Which apple shall I slice for our snack?', '我把哪个苹果切开给我们做点心呢？'], ['The red one, please.', '请切红色的那个。']]
      },
      {
        word: 'blue', ipa: '/bluː/', meaning: '蓝色的',
        phrase: ['a blue sky', '蓝色的天空'],
        sentence: ['There is a blue boat in the picture.', '画里有一艘蓝色的小船。'],
        dialogue: [['What colour shall we make the sea?', '我们把大海画成什么颜色呢？'], ['Blue, with white waves.', '蓝色的，带着白色的浪花。']]
      },
      {
        word: 'yellow', ipa: '/ˈjeləʊ/', meaning: '黄色的',
        phrase: ['a yellow raincoat', '一件黄色雨衣'],
        sentence: ['The yellow duck floats in the bath.', '黄色的小鸭子漂在浴缸里。'],
        dialogue: [['Can you see your yellow raincoat?', '你看到你的黄色雨衣了吗？'], ['Yes, it’s on the hook.', '看到了，在挂钩上。']]
      },
      {
        word: 'green', ipa: '/ɡriːn/', meaning: '绿色的',
        phrase: ['a green leaf', '一片绿叶'],
        sentence: ['Our peas are bright green.', '我们的豌豆是鲜绿色的。'],
        dialogue: [['What colour are the leaves on this tree?', '这棵树的叶子是什么颜色的？'], ['Green! That one has a hole.', '绿色的！那片上面有个洞。']]
      },
      {
        word: 'pink', ipa: '/pɪŋk/', meaning: '粉红色的',
        phrase: ['a pink flower', '一朵粉红色的花'],
        sentence: ['I’m wearing my pink socks today.', '我今天穿着粉红色的袜子。'],
        dialogue: [['Which socks go with your bunny slippers?', '哪双袜子配你的兔子拖鞋呢？'], ['The pink ones, like bunny ears.', '粉红色的那双，像兔子耳朵。']]
      },
      {
        word: 'purple', ipa: '/ˈpɜːpl/', meaning: '紫色的',
        phrase: ['a purple scarf', '一条紫色围巾'],
        sentence: ['Teddy is wearing a purple scarf.', '玩具熊围着一条紫色围巾。'],
        dialogue: [['What happened when we mixed red and blue paint?', '我们把红色和蓝色颜料混在一起后，发生了什么？'], ['It turned purple!', '它变成紫色了！']]
      },
      {
        word: 'black', ipa: '/blæk/', meaning: '黑色的',
        phrase: ['a black cat', '一只黑猫'],
        sentence: ['The black cat has white paws.', '这只黑猫有白色的爪子。'],
        dialogue: [['Which crayon do you need for the panda’s ears?', '画熊猫的耳朵，你需要哪支蜡笔？'], ['Black, and for its nose too.', '黑色的，画鼻子也用它。']]
      },
      {
        word: 'white', ipa: '/waɪt/', meaning: '白色的',
        phrase: ['a white cloud', '一朵白云'],
        sentence: ['There is white snow on the roof.', '屋顶上有白色的雪。'],
        dialogue: [['What can we draw on this dark paper?', '我们可以在这张深色的纸上画什么？'], ['A white moon and little stars.', '一个白色的月亮和小星星。']]
      },
      {
        word: 'brown', ipa: '/braʊn/', meaning: '棕色的',
        phrase: ['a brown bear', '一只棕熊'],
        sentence: ['My teddy has brown fur.', '我的玩具熊有棕色的毛。'],
        dialogue: [['What colour is the mud on your boots?', '你靴子上的泥是什么颜色的？'], ['Brown. Let’s wash it off.', '棕色的。我们把它洗掉吧。']]
      },
      {
        word: 'grey', ipa: '/ɡreɪ/', meaning: '灰色的',
        phrase: ['a grey elephant', '一头灰色的大象'],
        sentence: ['Grey clouds cover the sky.', '灰色的云遮住了天空。'],
        dialogue: [['Do you think those grey clouds will bring rain?', '你觉得那些灰色的云会带来雨吗？'], ['Maybe. Let’s take our coats.', '可能会。我们带上外套吧。']]
      },
      {
        word: 'one', ipa: '/wʌn/', meaning: '一',
        phrase: ['one more', '再一个'],
        sentence: ['There is one spoon beside my bowl.', '我的碗旁边有一把勺子。'],
        dialogue: [['How many noses does teddy have?', '玩具熊有几个鼻子？'], ['One, just like me!', '一个，跟我一样！']]
      },
      {
        word: 'two', ipa: '/tuː/', meaning: '二；两',
        phrase: ['two hands', '两只手'],
        sentence: ['I have two socks, one for each foot.', '我有两只袜子，每只脚穿一只。'],
        dialogue: [['How many cups do we need for you and me?', '你和我一共需要几个杯子？'], ['Two! I’ll get mine.', '两个！我去拿我的。']]
      },
      {
        word: 'three', ipa: '/θriː/', meaning: '三',
        phrase: ['three blocks', '三块积木'],
        sentence: ['Three ducks are swimming in the pond.', '三只鸭子正在池塘里游泳。'],
        dialogue: [['Shall we count the wheels on your tricycle?', '我们数数你的三轮车有几个轮子好吗？'], ['One, two, three!', '一、二、三！']]
      },
      {
        word: 'four', ipa: '/fɔː/', meaning: '四',
        phrase: ['four legs', '四条腿'],
        sentence: ['Our table has four legs.', '我们的桌子有四条腿。'],
        dialogue: [['How many toy animals are in your farm?', '你的农场里有几只玩具动物？'], ['Four: a cow, a sheep, a pig and a horse.', '四只：一头牛、一只羊、一头猪和一匹马。']]
      },
      {
        word: 'five', ipa: '/faɪv/', meaning: '五',
        phrase: ['five fingers', '五根手指'],
        sentence: ['I can see five stars in your picture.', '我在你的画里看到了五颗星星。'],
        dialogue: [['Can you show me five fingers?', '你能伸出五根手指给我看吗？'], ['Here! A whole hand.', '看！一整只手。']]
      },
      {
        word: 'big', ipa: '/bɪɡ/', meaning: '大的',
        phrase: ['a big box', '一个大盒子'],
        sentence: ['This big box can be a pretend bus.', '这个大盒子可以当作公交车来玩。'],
        dialogue: [['Which bowl will hold all our apples?', '哪个碗能装下我们所有的苹果？'], ['The big one on the table.', '桌上那个大的。']]
      },
      {
        word: 'small', ipa: '/smɔːl/', meaning: '小的',
        phrase: ['a small cup', '一个小杯子'],
        sentence: ['The small towel is for your hands.', '小毛巾是给你擦手用的。'],
        dialogue: [['Is this hat big enough for you?', '这顶帽子对你来说够大吗？'], ['No, it’s too small. Teddy can wear it.', '不够，它太小了。玩具熊可以戴。']]
      },
      {
        word: 'long', ipa: '/lɒŋ/', meaning: '长的',
        phrase: ['a long tail', '一条长尾巴'],
        sentence: ['We made a long train with the blocks.', '我们用积木搭了一列长长的火车。'],
        dialogue: [['Why did you draw such a long neck?', '你为什么画了这么长的脖子？'], ['It’s a giraffe reaching for leaves!', '这是一只伸着脖子够树叶的长颈鹿！']]
      },
      {
        word: 'short', ipa: '/ʃɔːt/', meaning: '短的',
        phrase: ['a short story', '一个短故事'],
        sentence: ['This dog has a short tail.', '这只狗有一条短尾巴。'],
        dialogue: [['Shall we read a long story or a short one?', '我们读个长故事还是短故事呢？'], ['A short one. I’m sleepy.', '短的吧。我困了。']]
      },
      {
        word: 'fast', ipa: '/fɑːst/', meaning: '快的；快速地',
        phrase: ['a fast train', '一列速度快的火车'],
        sentence: ['Your toy car rolls fast down the ramp.', '你的玩具汽车沿着斜坡快速滚下来。'],
        dialogue: [['Did you see how fast that squirrel ran?', '你看到那只松鼠跑得多快了吗？'], ['Yes! It’s already up the tree.', '看到了！它已经到树上了。']]
      },
      {
        word: 'slow', ipa: '/sləʊ/', meaning: '慢的',
        phrase: ['a slow walk', '慢慢的散步'],
        sentence: ['Let’s take a slow walk and look for flowers.', '我们慢慢散步，找找花吧。'],
        dialogue: [['Is your pretend snail fast or slow?', '你扮的蜗牛是快还是慢呢？'], ['Very slow. It’s carrying its home!', '很慢。它背着自己的家呢！']]
      },
      {
        word: 'up', ipa: '/ʌp/', meaning: '向上；在上方',
        phrase: ['look up', '向上看'],
        sentence: ['The lift is going up.', '电梯正在往上走。'],
        dialogue: [['Where is the kite now?', '风筝现在在哪里？'], ['Up in the sky, above the trees!', '在天上，在树的上面！']]
      },
      {
        word: 'down', ipa: '/daʊn/', meaning: '向下；在下方',
        phrase: ['look down', '向下看'],
        sentence: ['The leaf floats down to the ground.', '叶子向下飘落到地上。'],
        dialogue: [['Where did your toy car roll?', '你的玩具汽车滚到哪里去了？'], ['Down the ramp into the garage.', '沿着斜坡向下滚进车库了。']]
      },
      {
        word: 'in', ipa: '/ɪn/', meaning: '在……里面；进入',
        phrase: ['in the box', '在盒子里'],
        sentence: ['Your teddy is in the basket.', '你的玩具熊在篮子里。'],
        dialogue: [['Where shall we keep the crayons?', '我们把蜡笔放在哪里呢？'], ['In this tin, so we can find them.', '放在这个铁盒里，这样就找得到了。']]
      },
      {
        word: 'out', ipa: '/aʊt/', meaning: '出来；向外',
        phrase: ['take it out', '把它拿出来'],
        sentence: ['The toy rabbit pops out of the box.', '玩具兔子从盒子里冒出来。'],
        dialogue: [['Shall we get the blocks out for a new tower?', '我们把积木拿出来搭一座新塔好吗？'], ['Yes, I’ll bring the basket.', '好，我来拿篮子。']]
      }
    ]
  }
);
