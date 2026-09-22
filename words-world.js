'use strict';

window.LUMI_WORD_GROUPS = window.LUMI_WORD_GROUPS || [];
window.LUMI_WORD_GROUPS.push(
  {
    id: 'clothes',
    title: '穿衣与触感',
    description: '从早上穿衣到雨后换袜子，认识衣物，也说说身体的感觉。',
    tip: '一次拿出两三件衣物，边穿边聊；让孩子摸一摸、选一选，纽扣和拉链由大人按需帮忙。',
    words: [
      {
        word: 'shirt', ipa: '/ʃɜːt/', meaning: '衬衫',
        phrase: ['a striped shirt', '一件条纹衬衫'],
        sentence: ['Your shirt has a little collar.', '你的衬衫有一个小领子。'],
        dialogue: [['Shall we put your blue shirt on?', '我们穿上你的蓝衬衫好吗？'], ['Yes! Help me with the sleeves.', '好！帮我穿一下袖子。']]
      },
      {
        word: 'trousers', ipa: '/ˈtraʊzəz/', meaning: '裤子',
        phrase: ['a pair of trousers', '一条裤子'],
        sentence: ['Sit down to put your trousers on.', '坐下来穿裤子。'],
        dialogue: [['Are your trousers on backwards?', '你的裤子是不是穿反了？'], ['Oops! Help me turn them round.', '哎呀！帮我把它转过来。']]
      },
      {
        word: 'dress', ipa: '/dres/', meaning: '连衣裙',
        phrase: ['a yellow dress', '一条黄色连衣裙'],
        sentence: ['Your dress has flowers on it.', '你的连衣裙上有花朵图案。'],
        dialogue: [['Which dress would you like today?', '今天你想穿哪条连衣裙？'], ['The yellow one, please.', '请给我黄色的那条。']]
      },
      {
        word: 'skirt', ipa: '/skɜːt/', meaning: '半身裙',
        phrase: ['a spotty skirt', '一条波点半身裙'],
        sentence: ['This skirt goes with your red top.', '这条半身裙和你的红色上衣很搭。'],
        dialogue: [['Can you find a spot on your skirt?', '你能找到半身裙上的一个圆点吗？'], ['Here! This one is white.', '这里！这个是白色的。']]
      },
      {
        word: 'coat', ipa: '/kəʊt/', meaning: '外套；大衣',
        phrase: ['a winter coat', '一件冬天穿的外套'],
        sentence: ['Put your coat on before we go outside.', '我们出去之前先穿上外套。'],
        dialogue: [['Where shall we hang your coat?', '我们把你的外套挂在哪里呢？'], ['On my little hook.', '挂在我的小挂钩上。']]
      },
      {
        word: 'jacket', ipa: '/ˈdʒækɪt/', meaning: '夹克；短外套',
        phrase: ['a light jacket', '一件薄夹克'],
        sentence: ['I brought your jacket for the cool evening.', '晚上凉，我给你带了夹克。'],
        dialogue: [['Would you like your jacket now?', '你现在想穿夹克吗？'], ['Yes, my arms feel cold.', '想，我的胳膊有点冷。']]
      },
      {
        word: 'sweater', ipa: '/ˈswetə/', meaning: '毛衣',
        phrase: ['a cosy sweater', '一件暖和舒服的毛衣'],
        sentence: ['Your sweater is folded on the bed.', '你的毛衣叠好放在床上。'],
        dialogue: [['Is your head through the sweater yet?', '你的头从毛衣里钻出来了吗？'], ['Here I am!', '我在这里！']]
      },
      {
        word: 'sock', ipa: '/sɒk/', meaning: '短袜',
        phrase: ['a clean sock', '一只干净的短袜'],
        sentence: ['One sock is hiding under the chair.', '一只短袜藏在椅子下面。'],
        dialogue: [['Where is the other sock?', '另一只短袜在哪里？'], ['I found it under my chair!', '我在我的椅子下面找到它了！']]
      },
      {
        word: 'shoe', ipa: '/ʃuː/', meaning: '鞋',
        phrase: ['a little shoe', '一只小鞋子'],
        sentence: ['There is some sand in your shoe.', '你的鞋里有一些沙子。'],
        dialogue: [['Does that shoe feel too tight?', '那只鞋穿着是不是太紧了？'], ['Yes, my toes feel squashed.', '是的，我的脚趾挤在一起了。']]
      },
      {
        word: 'hat', ipa: '/hæt/', meaning: '帽子',
        phrase: ['a sun hat', '一顶遮阳帽'],
        sentence: ['Your hat keeps the sun off your face.', '你的帽子帮脸挡住阳光。'],
        dialogue: [['Shall I help you put your hat on?', '我帮你戴上帽子好吗？'], ['Yes, then we can go out.', '好，然后我们就能出门了。']]
      },
      {
        word: 'cap', ipa: '/kæp/', meaning: '鸭舌帽',
        phrase: ['a red cap', '一顶红色鸭舌帽'],
        sentence: ['The front of your cap shades your eyes.', '你的鸭舌帽帽檐给眼睛遮阳。'],
        dialogue: [['Is your cap on the shelf?', '你的鸭舌帽在架子上吗？'], ['Yes, next to your hat.', '在，就在你的帽子旁边。']]
      },
      {
        word: 'scarf', ipa: '/skɑːf/', meaning: '围巾',
        phrase: ['a woolly scarf', '一条毛线围巾'],
        sentence: ['I tuck your scarf inside your coat.', '我把你的围巾掖进外套里。'],
        dialogue: [['Does your scarf feel comfortable?', '你的围巾戴着舒服吗？'], ['It feels a bit itchy.', '有一点扎。']]
      },
      {
        word: 'glove', ipa: '/ɡlʌv/', meaning: '手套',
        phrase: ['a warm glove', '一只暖和的手套'],
        sentence: ['Each finger has a place in this glove.', '这只手套给每根手指都留了位置。'],
        dialogue: [['Can you wiggle your fingers in your glove?', '你能动一动手套里的手指吗？'], ['Look, they are all moving!', '看，它们都在动！']]
      },
      {
        word: 'boot', ipa: '/buːt/', meaning: '靴子',
        phrase: ['a rubber boot', '一只胶靴'],
        sentence: ['Wipe the mud off each boot at the door.', '在门口把每只靴子上的泥擦掉。'],
        dialogue: [['Which boot goes on this foot?', '这只脚应该穿哪只靴子？'], ['This one? Help me check.', '这只吗？帮我看看。']]
      },
      {
        word: 'shorts', ipa: '/ʃɔːts/', meaning: '短裤',
        phrase: ['a pair of shorts', '一条短裤'],
        sentence: ['Your knees show when you wear shorts.', '穿短裤时，你的膝盖露在外面。'],
        dialogue: [['Would you like shorts for this warm day?', '今天暖和，你想穿短裤吗？'], ['Yes, the green ones.', '想，穿绿色的那条。']]
      },
      {
        word: 'pocket', ipa: '/ˈpɒkɪt/', meaning: '口袋',
        phrase: ['a coat pocket', '一个外套口袋'],
        sentence: ['A clean tissue is in your pocket.', '你的口袋里有一张干净的纸巾。'],
        dialogue: [['What did you put in your pocket?', '你在口袋里放了什么？'], ['My little hanky.', '我的小手帕。']]
      },
      {
        word: 'button', ipa: '/ˈbʌtən/', meaning: '纽扣',
        phrase: ['a round button', '一颗圆纽扣'],
        sentence: ['I help you fasten the top button.', '我帮你扣上最上面的纽扣。'],
        dialogue: [['Is this button hard to do up?', '这颗纽扣很难扣上吗？'], ['Yes, can you help me?', '是的，你能帮我吗？']]
      },
      {
        word: 'zip', ipa: '/zɪp/', meaning: '拉链',
        phrase: ['a jacket zip', '夹克上的拉链'],
        sentence: ['I pull your zip up slowly.', '我慢慢地拉上你的拉链。'],
        dialogue: [['Shall I start the zip for you?', '我先帮你把拉链接好吗？'], ['Yes, then I can pull it up.', '好，然后我可以往上拉。']]
      },
      {
        word: 'wear', ipa: '/weə/', meaning: '穿；戴',
        phrase: ['wear a hat', '戴帽子'],
        sentence: ['We wear boots when the ground is muddy.', '地上泥泞时，我们穿靴子。'],
        dialogue: [['What will you wear to the park?', '你去公园要穿什么？'], ['My coat and my boots.', '我的外套和靴子。']]
      },
      {
        word: 'warm', ipa: '/wɔːm/', meaning: '温暖的；暖和的',
        phrase: ['warm hands', '暖和的小手'],
        sentence: ['These socks keep your feet warm.', '这些袜子让你的脚暖暖的。'],
        dialogue: [['Are you warm enough in that sweater?', '穿那件毛衣够暖和吗？'], ['Yes, I feel cosy now.', '够，我现在暖和又舒服。']]
      },
      {
        word: 'cold', ipa: '/kəʊld/', meaning: '冷的；寒冷的',
        phrase: ['a cold morning', '一个寒冷的早晨'],
        sentence: ['My nose feels cold in the wind.', '风一吹，我的鼻子觉得冷。'],
        dialogue: [['Are your hands cold?', '你的手冷吗？'], ['Yes, I need my gloves.', '冷，我需要手套。']]
      },
      {
        word: 'wet', ipa: '/wet/', meaning: '湿的',
        phrase: ['wet socks', '湿袜子'],
        sentence: ['Your socks got wet in that puddle.', '你的袜子在那个水坑里弄湿了。'],
        dialogue: [['Shall we change your wet socks?', '我们换掉你的湿袜子好吗？'], ['Yes, these feel soggy.', '好，这双湿乎乎的。']]
      },
      {
        word: 'dry', ipa: '/draɪ/', meaning: '干的；干燥的',
        phrase: ['a dry towel', '一条干毛巾'],
        sentence: ['Here are some dry clothes to change into.', '这里有干衣服，可以换上。'],
        dialogue: [['Is your sleeve dry now?', '你的袖子现在干了吗？'], ['Not yet. This bit is still wet.', '还没有，这一块还是湿的。']]
      },
      {
        word: 'soft', ipa: '/sɒft/', meaning: '柔软的',
        phrase: ['a soft blanket', '一条柔软的毯子'],
        sentence: ['This soft scarf feels nice on my neck.', '这条柔软的围巾围在脖子上很舒服。'],
        dialogue: [['Which feels soft, your sweater or your boot?', '哪个摸起来软，你的毛衣还是靴子？'], ['My sweater! Let me feel it again.', '我的毛衣！让我再摸摸。']]
      },
      {
        word: 'new', ipa: '/njuː/', meaning: '新的',
        phrase: ['new shoes', '新鞋'],
        sentence: ['Your new shoes have room for your toes.', '你的新鞋给脚趾留出了空间。'],
        dialogue: [['How do your new shoes feel?', '你的新鞋穿着怎么样？'], ['Comfy! I can wiggle my toes.', '很舒服！我能动动脚趾。']]
      }
    ]
  },
  {
    id: 'animals',
    title: '动物朋友',
    description: '从家中的宠物到图画和动物园里的朋友，听声音、看模样，学会温柔观察。',
    tip: '和大人一起看动物，不追赶、不随意触摸或喂食；可以用玩偶学叫声，用图片找尾巴和耳朵。',
    words: [
      {
        word: 'cat', ipa: '/kæt/', meaning: '猫',
        phrase: ['a sleeping cat', '一只睡着的猫'],
        sentence: ['The cat is curled up on the sofa.', '猫蜷在沙发上。'],
        dialogue: [['Our cat is asleep. Shall we use quiet voices?', '我们家的猫睡着了。我们小声说话好吗？'], ['Shh, let it sleep.', '嘘，让它睡吧。']]
      },
      {
        word: 'dog', ipa: '/dɒɡ/', meaning: '狗',
        phrase: ['a dog on a lead', '一只拴着牵引绳的狗'],
        sentence: ['We watch the dog without going up to it.', '我们看着那只狗，不凑上去。'],
        dialogue: [['That dog is walking past. Shall we give it space?', '那只狗正从我们身边走过。我们给它让点地方好吗？'], ['Yes, I will stay beside you.', '好，我会待在你旁边。']]
      },
      {
        word: 'rabbit', ipa: '/ˈræbɪt/', meaning: '兔子',
        phrase: ['a rabbit with long ears', '一只长耳朵的兔子'],
        sentence: ['The rabbit nibbles hay in its pen.', '兔子在围栏里小口吃干草。'],
        dialogue: [['Can you see the rabbit chewing?', '你看见兔子在嚼东西吗？'], ['Yes, its nose is twitching too!', '看见了，它的鼻子也在动！']]
      },
      {
        word: 'bird', ipa: '/bɜːd/', meaning: '鸟',
        phrase: ['a singing bird', '一只唱歌的鸟'],
        sentence: ['A bird is singing outside our window.', '一只鸟在我们的窗外唱歌。'],
        dialogue: [['Where is that bird singing?', '那只鸟在哪里唱歌？'], ['Up in the tree!', '在树上！']]
      },
      {
        word: 'duck', ipa: '/dʌk/', meaning: '鸭子',
        phrase: ['a duck on the pond', '一只在池塘里的鸭子'],
        sentence: ['I hold your hand as we watch the duck from the path.', '我们站在小路上看鸭子，我牵着你的手。'],
        dialogue: [['What is the duck doing over there?', '那边的鸭子在做什么？'], ['Swimming! We can watch from here.', '游泳！我们可以在这里看。']]
      },
      {
        word: 'cow', ipa: '/kaʊ/', meaning: '奶牛',
        phrase: ['a black and white cow', '一头黑白相间的奶牛'],
        sentence: ['The cow eats grass behind the fence.', '奶牛在围栏后面吃草。'],
        dialogue: [['Did you hear the cow?', '你听到奶牛的叫声了吗？'], ['Moo! It was a big sound.', '哞！声音好大。']]
      },
      {
        word: 'pig', ipa: '/pɪɡ/', meaning: '猪',
        phrase: ['a muddy pig', '一只身上沾着泥的猪'],
        sentence: ['The pig rolls in the mud at the farm.', '猪在农场的泥地里打滚。'],
        dialogue: [['Can you spot the pig beside the trough?', '你能找到食槽旁边的猪吗？'], ['There! Its nose is all muddy.', '在那里！它的鼻子上都是泥。']]
      },
      {
        word: 'sheep', ipa: '/ʃiːp/', meaning: '绵羊',
        phrase: ['a woolly sheep', '一只毛茸茸的绵羊'],
        sentence: ['Three sheep are resting in the field.', '三只绵羊正在田野里休息。'],
        dialogue: [['How many sheep can you see from the gate?', '从门口你能看见几只绵羊？'], ['One, two, three!', '一、二、三！']]
      },
      {
        word: 'horse', ipa: '/hɔːs/', meaning: '马',
        phrase: ['a brown horse', '一匹棕色的马'],
        sentence: ['We stay outside the fence to watch the horse.', '我们待在围栏外面看马。'],
        dialogue: [['Why is the horse swishing its tail?', '马为什么甩尾巴呢？'], ['Are there flies?', '有苍蝇吗？']]
      },
      {
        word: 'goat', ipa: '/ɡəʊt/', meaning: '山羊',
        phrase: ['a goat with a beard', '一只有胡子的山羊'],
        sentence: ['The goat stands on a rock inside its pen.', '山羊站在围栏里面的一块岩石上。'],
        dialogue: [['Look at the goat. What is under its chin?', '看看那只山羊。它的下巴下面有什么？'], ['A little beard!', '一小撮胡子！']]
      },
      {
        word: 'hen', ipa: '/hen/', meaning: '母鸡',
        phrase: ['a clucking hen', '一只咯咯叫的母鸡'],
        sentence: ['The hen scratches the ground with her feet.', '母鸡用脚刨地。'],
        dialogue: [['Where is the hen going now?', '母鸡现在要去哪里？'], ['Back to her little house.', '回它的小房子里。']]
      },
      {
        word: 'chick', ipa: '/tʃɪk/', meaning: '小鸡',
        phrase: ['a fluffy chick', '一只毛绒绒的小鸡'],
        sentence: ['The chick follows the hen across the pen.', '小鸡跟着母鸡穿过围栏里的空地。'],
        dialogue: [['Can you hear the chick from here?', '你在这里能听见小鸡的叫声吗？'], ['Cheep, cheep! Such a tiny sound.', '叽叽！声音好小。']]
      },
      {
        word: 'mouse', ipa: '/maʊs/', meaning: '老鼠',
        phrase: ['a tiny mouse', '一只小小的老鼠'],
        sentence: ['The mouse in our picture has a long tail.', '我们画里的老鼠有一条长尾巴。'],
        dialogue: [['What shall we draw beside the mouse?', '我们在老鼠旁边画什么呢？'], ['A little hole for its home.', '画一个小洞，给它当家。']]
      },
      {
        word: 'hamster', ipa: '/ˈhæmstə/', meaning: '仓鼠',
        phrase: ['a sleepy hamster', '一只困困的仓鼠'],
        sentence: ['Our hamster sleeps in its little house during the day.', '白天，我们的仓鼠在它的小屋里睡觉。'],
        dialogue: [['The hamster is hiding. Shall we leave it in peace?', '仓鼠躲起来了。我们不打扰它好吗？'], ['Yes, we can look later.', '好，我们可以晚一点再看。']]
      },
      {
        word: 'turtle', ipa: '/ˈtɜːtəl/', meaning: '龟',
        phrase: ['a swimming turtle', '一只游泳的龟'],
        sentence: ['We watch a turtle swim behind the aquarium glass.', '我们隔着水族馆的玻璃看龟游泳。'],
        dialogue: [['Can you see the turtle coming up for air?', '你看见龟上来换气了吗？'], ['Yes, its nose is above the water!', '看见了，它的鼻子露出水面啦！']]
      },
      {
        word: 'frog', ipa: '/frɒɡ/', meaning: '青蛙',
        phrase: ['a green frog', '一只绿色的青蛙'],
        sentence: ['We leave the frog alone beside the garden pond.', '我们不打扰花园池塘边的青蛙。'],
        dialogue: [['Hold my hand near the pond. Can you spot the frog?', '在池塘边牵好我的手。你能找到青蛙吗？'], ['Yes, beside that leaf.', '能，就在那片叶子旁边。']]
      },
      {
        word: 'monkey', ipa: '/ˈmʌŋki/', meaning: '猴子',
        phrase: ['a climbing monkey', '一只正在攀爬的猴子'],
        sentence: ['The monkey climbs a rope at the zoo.', '猴子在动物园里爬绳子。'],
        dialogue: [['Which way is the monkey climbing?', '猴子在往哪个方向爬？'], ['Up, up, up!', '往上，往上，往上！']]
      },
      {
        word: 'panda', ipa: '/ˈpændə/', meaning: '大熊猫',
        phrase: ['a panda eating bamboo', '一只正在吃竹子的大熊猫'],
        sentence: ['The panda holds bamboo in its paws.', '大熊猫用爪子拿着竹子。'],
        dialogue: [['What colour are the panda\'s ears?', '大熊猫的耳朵是什么颜色？'], ['Black, like its legs.', '黑色的，和它的腿一样。']]
      },
      {
        word: 'bear', ipa: '/beə/', meaning: '熊',
        phrase: ['a toy bear', '一只玩具熊'],
        sentence: ['My toy bear sits beside me at story time.', '听故事的时候，我的玩具熊坐在我旁边。'],
        dialogue: [['Does your bear need a bedtime story too?', '你的熊也需要听睡前故事吗？'], ['Yes, I will hold it on my lap.', '需要，我把它抱在腿上。']]
      },
      {
        word: 'tiger', ipa: '/ˈtaɪɡə/', meaning: '老虎',
        phrase: ['a stripy tiger', '一只有条纹的老虎'],
        sentence: ['We watch the tiger from behind the zoo barrier.', '我们在动物园的护栏后面看老虎。'],
        dialogue: [['Is the tiger walking or lying down?', '老虎在走路还是躺着？'], ['Lying down in the shade.', '躺在阴凉处。']]
      },
      {
        word: 'lion', ipa: '/ˈlaɪən/', meaning: '狮子',
        phrase: ['a lion with a thick mane', '一只长着浓密鬃毛的狮子'],
        sentence: ['The lion in this book has a big, shaggy mane.', '这本书里的狮子有又大又蓬松的鬃毛。'],
        dialogue: [['Shall we make a quiet lion roar?', '我们轻轻地学狮子吼好吗？'], ['Rrr! I am a little lion.', '嗷！我是一只小狮子。']]
      },
      {
        word: 'elephant', ipa: '/ˈelɪfənt/', meaning: '大象',
        phrase: ['an elephant with a long trunk', '一头长鼻子的大象'],
        sentence: ['The elephant lifts food with its trunk.', '大象用鼻子卷起食物。'],
        dialogue: [['Can you swing your arm like an elephant\'s trunk?', '你能像大象甩鼻子一样摆动胳膊吗？'], ['Yes, look at my long trunk!', '能，看我的长鼻子！']]
      },
      {
        word: 'giraffe', ipa: '/dʒəˈrɑːf/', meaning: '长颈鹿',
        phrase: ['a tall giraffe', '一只高高的长颈鹿'],
        sentence: ['The giraffe reaches leaves high in the tree.', '长颈鹿够到了树上高处的叶子。'],
        dialogue: [['What helps the giraffe reach those leaves?', '什么帮助长颈鹿够到那些叶子？'], ['Its long neck!', '它的长脖子！']]
      },
      {
        word: 'zebra', ipa: '/ˈzebrə/', meaning: '斑马',
        phrase: ['a zebra with black and white stripes', '一只有黑白条纹的斑马'],
        sentence: ['The zebra stands next to another zebra at the zoo.', '动物园里，这只斑马站在另一只斑马旁边。'],
        dialogue: [['Does the zebra have spots or stripes?', '斑马身上是圆点还是条纹？'], ['Stripes, all over its body!', '条纹，身上到处都是！']]
      },
      {
        word: 'fox', ipa: '/fɒks/', meaning: '狐狸',
        phrase: ['a fox with a bushy tail', '一只尾巴蓬松的狐狸'],
        sentence: ['We see a fox in the garden through the closed window.', '我们透过关着的窗户看见花园里有一只狐狸。'],
        dialogue: [['The fox is outside. Shall we watch quietly from here?', '狐狸在外面。我们在这里安静地看好吗？'], ['Yes, I can see its big tail.', '好，我能看见它的大尾巴。']]
      }
    ]
  },
  {
    id: 'outdoors',
    title: '户外与自然',
    description: '在散步、看天气和照顾花草时，把眼前的小发现变成亲子英语。',
    tip: '在大人陪伴下观察，不直视太阳，不把沙石和种子放入口中；到河、湖、海边要牵好大人的手。',
    words: [
      {
        word: 'sun', ipa: '/sʌn/', meaning: '太阳',
        phrase: ['the morning sun', '早晨的太阳'],
        sentence: ['The sun makes a bright patch on the floor.', '太阳在地板上照出一块亮亮的光斑。'],
        dialogue: [['The sun is bright. Where is your sun hat?', '太阳很晒。你的遮阳帽在哪里？'], ['By the door. I will get it.', '在门边。我去拿。']]
      },
      {
        word: 'moon', ipa: '/muːn/', meaning: '月亮',
        phrase: ['a round moon', '一轮圆月'],
        sentence: ['We can see the moon through the bedroom window.', '我们透过卧室的窗户能看见月亮。'],
        dialogue: [['Does the moon look round tonight?', '今晚的月亮看起来圆吗？'], ['Yes, like a big button.', '圆，像一颗大纽扣。']]
      },
      {
        word: 'star', ipa: '/stɑː/', meaning: '星星',
        phrase: ['a bright star', '一颗明亮的星星'],
        sentence: ['One star is shining above the roof.', '一颗星星在屋顶上方闪亮。'],
        dialogue: [['Can you find a star before bedtime?', '睡觉前你能找到一颗星星吗？'], ['There is one, up there!', '那里有一颗，在上面！']]
      },
      {
        word: 'sky', ipa: '/skaɪ/', meaning: '天空',
        phrase: ['a blue sky', '蓝蓝的天空'],
        sentence: ['The sky turns pink as evening comes.', '傍晚来了，天空变成了粉红色。'],
        dialogue: [['What colours can you see in the sky?', '你能看见天空中有什么颜色？'], ['Pink and a little bit of orange.', '粉红色，还有一点橙色。']]
      },
      {
        word: 'cloud', ipa: '/klaʊd/', meaning: '云',
        phrase: ['a fluffy cloud', '一朵棉花般的云'],
        sentence: ['A cloud is moving slowly over our house.', '一朵云正在我们的房子上方慢慢移动。'],
        dialogue: [['What does that cloud look like to you?', '你觉得那朵云像什么？'], ['A rabbit with long ears!', '一只长耳朵的兔子！']]
      },
      {
        word: 'rain', ipa: '/reɪn/', meaning: '雨',
        phrase: ['gentle rain', '轻轻落下的雨'],
        sentence: ['The rain taps on our window.', '雨滴轻敲着我们的窗户。'],
        dialogue: [['Can you hear the rain on the window?', '你能听见雨打在窗户上的声音吗？'], ['Yes, little tapping sounds.', '能，是轻轻的滴答声。']]
      },
      {
        word: 'snow', ipa: '/snəʊ/', meaning: '雪',
        phrase: ['fresh snow', '新下的雪'],
        sentence: ['Our boots leave marks in the snow.', '我们的靴子在雪地里留下脚印。'],
        dialogue: [['Shall we make footprints in the snow together?', '我们一起在雪地里踩脚印好吗？'], ['Yes, big ones and little ones!', '好，大脚印和小脚印！']]
      },
      {
        word: 'wind', ipa: '/wɪnd/', meaning: '风',
        phrase: ['a gentle wind', '一阵轻柔的风'],
        sentence: ['The wind makes the washing flap on the line.', '风吹得晾衣绳上的衣服摆来摆去。'],
        dialogue: [['What is the wind moving in our garden?', '风吹动了我们花园里的什么？'], ['The leaves and your shirt!', '树叶，还有你的衬衫！']]
      },
      {
        word: 'rainbow', ipa: '/ˈreɪnbəʊ/', meaning: '彩虹',
        phrase: ['a colourful rainbow', '一道五颜六色的彩虹'],
        sentence: ['A rainbow appears after the rain.', '雨后出现了一道彩虹。'],
        dialogue: [['Which colour can you spot in the rainbow?', '你能在彩虹里找到哪种颜色？'], ['Red! And yellow too.', '红色！还有黄色。']]
      },
      {
        word: 'tree', ipa: '/triː/', meaning: '树',
        phrase: ['a shady tree', '一棵有树荫的树'],
        sentence: ['We sit in the shade of a big tree.', '我们坐在一棵大树的树荫下。'],
        dialogue: [['Shall we rest under this tree?', '我们在这棵树下休息好吗？'], ['Yes, my legs are tired.', '好，我的腿累了。']]
      },
      {
        word: 'leaf', ipa: '/liːf/', meaning: '叶子',
        phrase: ['a fallen leaf', '一片落叶'],
        sentence: ['A yellow leaf lands on the path.', '一片黄叶落在小路上。'],
        dialogue: [['Is that leaf green or yellow?', '那片叶子是绿色的还是黄色的？'], ['Yellow, with a brown edge.', '黄色的，边上是棕色的。']]
      },
      {
        word: 'flower', ipa: '/ˈflaʊə/', meaning: '花',
        phrase: ['a purple flower', '一朵紫色的花'],
        sentence: ['We leave the flower growing in the garden.', '我们让花继续长在花园里。'],
        dialogue: [['Shall we draw this flower instead of picking it?', '我们不摘这朵花，把它画下来好吗？'], ['Yes, I need my purple crayon.', '好，我需要我的紫色蜡笔。']]
      },
      {
        word: 'grass', ipa: '/ɡrɑːs/', meaning: '草',
        phrase: ['green grass', '绿草'],
        sentence: ['We spread our picnic blanket on the grass.', '我们把野餐毯铺在草地上。'],
        dialogue: [['Is the grass dry enough for our picnic?', '这片草地够干，可以野餐了吗？'], ['Yes, let us put the blanket here.', '够干了，我们把毯子铺这里吧。']]
      },
      {
        word: 'seed', ipa: '/siːd/', meaning: '种子',
        phrase: ['a sunflower seed', '一粒向日葵种子'],
        sentence: ['With your help, I put a seed in the soil.', '在你的帮助下，我把一粒种子放进土里。'],
        dialogue: [['This seed is for planting, not eating. Shall we cover it?', '这粒种子是用来种的，不是用来吃的。我们给它盖上土好吗？'], ['Yes, then a little water.', '好，然后浇一点水。']]
      },
      {
        word: 'sand', ipa: '/sænd/', meaning: '沙子',
        phrase: ['damp sand', '潮湿的沙子'],
        sentence: ['We pat the sand into a bucket together.', '我们一起把沙子拍进小桶里。'],
        dialogue: [['Will the sand castle need another tower?', '这座沙堡还需要一个塔吗？'], ['Yes, a little one beside it.', '需要，在旁边做一个小的。']]
      },
      {
        word: 'stone', ipa: '/stəʊn/', meaning: '石头',
        phrase: ['a smooth stone', '一块光滑的石头'],
        sentence: ['A big, flat stone sits beside the garden path.', '花园小路旁有一块又大又平的石头。'],
        dialogue: [['What shape is that stone on the ground?', '地上的那块石头是什么形状？'], ['It looks like an egg.', '看起来像一个鸡蛋。']]
      },
      {
        word: 'mud', ipa: '/mʌd/', meaning: '泥；泥巴',
        phrase: ['sticky mud', '黏黏的泥巴'],
        sentence: ['We wash our hands after playing with mud.', '玩过泥巴以后，我们洗手。'],
        dialogue: [['Did the mud stick to your boots?', '泥巴粘到你的靴子上了吗？'], ['Yes, they need a wash!', '粘上了，它们需要洗洗！']]
      },
      {
        word: 'river', ipa: '/ˈrɪvə/', meaning: '河流',
        phrase: ['a flowing river', '一条流淌的河'],
        sentence: ['We hold hands and watch the river from behind the railing.', '我们牵着手，站在栏杆后面看河流。'],
        dialogue: [['Stay beside me. Can you see the river moving?', '待在我旁边。你能看见河水在流动吗？'], ['Yes, that leaf is floating along.', '能，那片叶子正顺着水漂呢。']]
      },
      {
        word: 'lake', ipa: '/leɪk/', meaning: '湖',
        phrase: ['a calm lake', '一片平静的湖'],
        sentence: ['I hold your hand on the path beside the lake.', '走在湖边的小路上时，我牵着你的手。'],
        dialogue: [['Let us stay back from the lake. What can you see?', '我们离湖水远一点。你能看见什么？'], ['The clouds in the water!', '水里的云！']]
      },
      {
        word: 'sea', ipa: '/siː/', meaning: '海；海洋',
        phrase: ['the blue sea', '蓝色的大海'],
        sentence: ['We hold hands and watch the sea from dry sand.', '我们牵着手，站在干沙地上看大海。'],
        dialogue: [['We will stay here together. What does the sea sound like?', '我们一起待在这里。大海听起来是什么声音？'], ['Whoosh! The waves are loud.', '哗！海浪声音很大。']]
      },
      {
        word: 'beach', ipa: '/biːtʃ/', meaning: '海滩',
        phrase: ['a sandy beach', '一片沙滩'],
        sentence: ['I build a sand castle with you on the beach, away from the water.', '我和你在海滩上远离海水的地方堆沙堡。'],
        dialogue: [['Where shall we put our blanket on the beach?', '我们把毯子铺在海滩的哪里呢？'], ['Here, far from the waves.', '这里，离海浪远远的。']]
      },
      {
        word: 'mountain', ipa: '/ˈmaʊntɪn/', meaning: '山；高山',
        phrase: ['a snowy mountain', '一座积雪的山'],
        sentence: ['We can see a mountain from the train window.', '从火车窗户望出去，我们能看见一座山。'],
        dialogue: [['What is on top of that mountain?', '那座山的山顶上有什么？'], ['Snow! It looks like a white hat.', '雪！看起来像一顶白帽子。']]
      },
      {
        word: 'garden', ipa: '/ˈɡɑːdən/', meaning: '花园',
        phrase: ['our little garden', '我们的小花园'],
        sentence: ['We water the plants in our garden together.', '我们一起给花园里的植物浇水。'],
        dialogue: [['Which plant in the garden shall we water first?', '花园里的植物，我们先浇哪一株？'], ['The one in the red pot.', '红色花盆里的那一株。']]
      },
      {
        word: 'park', ipa: '/pɑːk/', meaning: '公园',
        phrase: ['a walk in the park', '在公园里散步'],
        sentence: ['We walk to the park together after breakfast.', '早饭后，我们一起走去公园。'],
        dialogue: [['What would you like to do at the park with me?', '你想和我在公园里做什么？'], ['Look for birds and have a snack.', '找小鸟，再吃点点心。']]
      },
      {
        word: 'playground', ipa: '/ˈpleɪɡraʊnd/', meaning: '儿童游乐场',
        phrase: ['the playground slide', '儿童游乐场里的滑梯'],
        sentence: ['I stay beside you at the playground.', '在儿童游乐场里，我待在你身边。'],
        dialogue: [['At the playground, shall we wait for our turn on the slide?', '在游乐场里，我们等轮到自己再滑滑梯好吗？'], ['Yes, that child goes first.', '好，那个小朋友先来。']]
      }
    ]
  },
  {
    id: 'outings',
    title: '出门与社区',
    description: '一起坐车、买东西、借书和看医生，认识出门时遇到的人与物。',
    tip: '出门牵好大人的手，过马路由大人带领；乘车用合适的安全座椅或安全带，乘船穿救生衣，骑车戴好头盔。',
    words: [
      {
        word: 'car', ipa: '/kɑː/', meaning: '汽车',
        phrase: ['a family car', '一辆家用汽车'],
        sentence: ['I buckle you into your child seat in the car.', '我帮你在汽车的儿童安全座椅里系好安全带。'],
        dialogue: [['Are you comfy in your car seat?', '坐在汽车的儿童安全座椅里舒服吗？'], ['Yes, I can see out of the window.', '舒服，我能看见窗外。']]
      },
      {
        word: 'bus', ipa: '/bʌs/', meaning: '公共汽车',
        phrase: ['a bus stop', '一个公交车站'],
        sentence: ['We hold hands and wait for the bus away from the kerb.', '我们牵着手，站在离路沿远一点的地方等公交车。'],
        dialogue: [['The bus has stopped. Shall we get on together?', '公交车停稳了。我们一起上车好吗？'], ['Yes, I am holding your hand.', '好，我正牵着你的手。']]
      },
      {
        word: 'taxi', ipa: '/ˈtæksi/', meaning: '出租车',
        phrase: ['a waiting taxi', '一辆等候的出租车'],
        sentence: ['We book a taxi with a child seat for you.', '我们预约一辆配有儿童安全座椅的出租车。'],
        dialogue: [['Where will the taxi take us today?', '今天出租车会带我们去哪里？'], ['To see Grandma!', '去看奶奶！']]
      },
      {
        word: 'truck', ipa: '/trʌk/', meaning: '卡车',
        phrase: ['a delivery truck', '一辆送货卡车'],
        sentence: ['We watch a truck unload from a safe spot beside the shop.', '我们在商店旁边安全的地方看卡车卸货。'],
        dialogue: [['What is coming out of the truck?', '什么东西正从卡车里搬出来？'], ['Lots of big boxes.', '好多大箱子。']]
      },
      {
        word: 'boat', ipa: '/bəʊt/', meaning: '小船；船',
        phrase: ['a little boat', '一条小船'],
        sentence: ['We wear life jackets and sit together in the boat.', '我们穿着救生衣，一起坐在船里。'],
        dialogue: [['We are staying seated in the boat. What can you hear?', '我们要在船里坐好。你能听见什么？'], ['Water splashing beside us.', '水在我们旁边哗啦哗啦响。']]
      },
      {
        word: 'plane', ipa: '/pleɪn/', meaning: '飞机',
        phrase: ['a plane in the sky', '一架空中的飞机'],
        sentence: ['We watch a plane take off through the airport window.', '我们透过机场的窗户看飞机起飞。'],
        dialogue: [['Where is the plane going now?', '飞机现在往哪里飞？'], ['Up into the clouds!', '往上飞到云里！']]
      },
      {
        word: 'road', ipa: '/rəʊd/', meaning: '道路；马路',
        phrase: ['cross the road', '过马路'],
        sentence: ['Hold my hand while I help you cross the road safely.', '牵好我的手，我带你安全地过马路。'],
        dialogue: [['We need to cross the road. Whose hand will you hold?', '我们要过马路了。你要牵谁的手？'], ['Yours! We will cross together.', '你的！我们一起过。']]
      },
      {
        word: 'street', ipa: '/striːt/', meaning: '街道',
        phrase: ['a quiet street', '一条安静的街道'],
        sentence: ['We hold hands and walk along the pavement on our street.', '我们牵着手，走在家门口街道的人行道上。'],
        dialogue: [['What can you see on our street as we walk together?', '我们一起走的时候，你能看见这条街上有什么？'], ['A shop with a red door.', '一家有红色门的商店。']]
      },
      {
        word: 'shop', ipa: '/ʃɒp/', meaning: '商店',
        phrase: ['a food shop', '一家食品店'],
        sentence: ['We go into the shop together to buy milk.', '我们一起走进商店买牛奶。'],
        dialogue: [['What do we need from the shop?', '我们需要从商店买什么？'], ['Milk and some bananas.', '牛奶，还有一些香蕉。']]
      },
      {
        word: 'school', ipa: '/skuːl/', meaning: '学校',
        phrase: ['the school gate', '学校大门'],
        sentence: ['We wait at the school gate to meet your big sister.', '我们在学校门口等姐姐。'],
        dialogue: [['Who are we meeting at school today?', '今天我们要在学校接谁？'], ['My big sister! I will wave to her.', '我的姐姐！我要向她挥手。']]
      },
      {
        word: 'zoo', ipa: '/zuː/', meaning: '动物园',
        phrase: ['a visit to the zoo', '一次动物园之行'],
        sentence: ['At the zoo, we stay together and watch animals behind the barriers.', '在动物园里，我们待在一起，站在护栏后面看动物。'],
        dialogue: [['Which animal shall we look for at the zoo?', '我们在动物园里先找哪种动物？'], ['The giraffe with the long neck.', '长脖子的长颈鹿。']]
      },
      {
        word: 'farm', ipa: '/fɑːm/', meaning: '农场',
        phrase: ['a farm visit', '一次农场参观'],
        sentence: ['We wash our hands before our snack at the farm.', '在农场里，我们吃点心前先洗手。'],
        dialogue: [['Can you hear an animal at the farm?', '你能听见农场里有动物在叫吗？'], ['Yes, a cow is going moo!', '能，一头奶牛在哞哞叫！']]
      },
      {
        word: 'library', ipa: '/ˈlaɪbrəri/', meaning: '图书馆',
        phrase: ['a library book', '一本图书馆的书'],
        sentence: ['We borrow two picture books from the library.', '我们从图书馆借了两本图画书。'],
        dialogue: [['Which library book shall we read first?', '我们先读哪本从图书馆借来的书？'], ['The one about the moon.', '讲月亮的那一本。']]
      },
      {
        word: 'doctor', ipa: '/ˈdɒktə/', meaning: '医生',
        phrase: ['a kind doctor', '一位和善的医生'],
        sentence: ['The doctor listens to your chest while I sit beside you.', '医生听你的胸口时，我坐在你旁边。'],
        dialogue: [['Would you like to hold my hand while the doctor listens?', '医生听诊的时候，你想牵着我的手吗？'], ['Yes, please stay close.', '想，请靠近我一点。']]
      },
      {
        word: 'nurse', ipa: '/nɜːs/', meaning: '护士',
        phrase: ['a helpful nurse', '一位热心帮忙的护士'],
        sentence: ['The nurse shows us how to use the thermometer.', '护士给我们演示怎样用体温计。'],
        dialogue: [['The nurse is going to take your temperature. Ready?', '护士要给你量体温了。准备好了吗？'], ['Can I sit on your lap?', '我能坐在你腿上吗？']]
      },
      {
        word: 'teacher', ipa: '/ˈtiːtʃə/', meaning: '老师',
        phrase: ['my nursery teacher', '我的幼儿园老师'],
        sentence: ['Your teacher helps you hang up your bag.', '你的老师帮你挂好书包。'],
        dialogue: [['What would you like to tell your teacher today?', '今天你想告诉老师什么？'], ['I saw a rainbow!', '我看见彩虹了！']]
      },
      {
        word: 'driver', ipa: '/ˈdraɪvə/', meaning: '司机',
        phrase: ['a bus driver', '一位公交车司机'],
        sentence: ['The driver waits until everyone is safely on the bus.', '司机等大家都安全上车。'],
        dialogue: [['We are getting off. Shall we thank the driver?', '我们要下车了。跟司机说谢谢好吗？'], ['Thank you! Bye!', '谢谢！再见！']]
      },
      {
        word: 'baker', ipa: '/ˈbeɪkə/', meaning: '面包师',
        phrase: ['a busy baker', '一位忙碌的面包师'],
        sentence: ['The baker puts fresh bread on the shelf.', '面包师把新鲜的面包放到架子上。'],
        dialogue: [['What has the baker made for the shop?', '面包师给店里做了什么？'], ['Bread rolls! They smell lovely.', '小圆面包！闻起来好香。']]
      },
      {
        word: 'shopkeeper', ipa: '/ˈʃɒpkiːpə/', meaning: '店主',
        phrase: ['a friendly shopkeeper', '一位友好的店主'],
        sentence: ['The shopkeeper helps us find the apples.', '店主帮我们找到苹果。'],
        dialogue: [['The shopkeeper found our apples. What can we say?', '店主帮我们找到了苹果。我们可以说什么？'], ['Thank you for helping us!', '谢谢你帮助我们！']]
      },
      {
        word: 'money', ipa: '/ˈmʌni/', meaning: '钱',
        phrase: ['money for the shopping', '买东西用的钱'],
        sentence: ['I keep the money in my purse until it is time to pay.', '付款之前，我把钱放在钱包里。'],
        dialogue: [['What do we use this money for?', '我们用这些钱做什么？'], ['To pay for our apples.', '付买苹果的钱。']]
      },
      {
        word: 'bag', ipa: '/bæɡ/', meaning: '袋子；包',
        phrase: ['a shopping bag', '一个购物袋'],
        sentence: ['We take our cloth bag to the shop.', '我们带着布袋去商店。'],
        dialogue: [['Is there room in the bag for the bread?', '袋子里还有地方放面包吗？'], ['Yes, on top of the apples.', '有，放在苹果上面。']]
      },
      {
        word: 'box', ipa: '/bɒks/', meaning: '盒子；箱子',
        phrase: ['a cardboard box', '一个纸箱'],
        sentence: ['The empty box becomes a garage for your toy cars.', '空纸箱变成了你的玩具汽车的车库。'],
        dialogue: [['Where shall we put the toy bus in this box?', '我们把玩具公交车放在这个纸箱的哪里？'], ['Beside the red car.', '放在红色汽车旁边。']]
      },
      {
        word: 'ticket', ipa: '/ˈtɪkɪt/', meaning: '票',
        phrase: ['a train ticket', '一张火车票'],
        sentence: ['I keep our ticket ready at the station gate.', '在车站检票口，我把我们的票准备好。'],
        dialogue: [['Shall I keep the ticket safe in my pocket?', '我把票好好放在口袋里好吗？'], ['Yes, we need it for the train.', '好，我们坐火车要用。']]
      },
      {
        word: 'seat', ipa: '/siːt/', meaning: '座位',
        phrase: ['a window seat', '一个靠窗的座位'],
        sentence: ['Stay in your seat while the bus is moving.', '公交车行驶时，要坐在座位上。'],
        dialogue: [['Would you like the seat beside the window?', '你想坐靠窗的座位吗？'], ['Yes, with you next to me.', '想，你坐在我旁边。']]
      },
      {
        word: 'helmet', ipa: '/ˈhelmɪt/', meaning: '头盔',
        phrase: ['a bike helmet', '一个骑车头盔'],
        sentence: ['I check your helmet before you ride your balance bike.', '你骑平衡车之前，我帮你检查头盔。'],
        dialogue: [['Is your helmet comfortable after I fasten the strap?', '我扣好带子以后，你的头盔戴着舒服吗？'], ['Yes, it stays on when I nod.', '舒服，我点头它也不会掉。']]
      }
    ]
  }
);
