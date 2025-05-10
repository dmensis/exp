let customFont;
let aiCount = 0;
let sheepX, sheepY, sheepSize;
let sheepCount = 0;
let logTimer = 0;
let currentLogIndex = -1;
let isSheepEnabled = true;
let bgm;
let clickSE;

// =================== 劇本 ===================
let intro = [
    "「我們輕易地接受了現實，也許因為我們直覺感到什麼都不是真實的。」\n——博爾赫斯《永生》"
];
let storyTexts = ["咔、咔咔、咔咔咔。",
    "我在一片食物香氣中醒來。\n早晨獨有的、帶著清爽溫度的濕氣沁入我的眼簾。",
    "我的羊結束在廚房的工作，\n卸下鍋具後，它將剛出爐的蜂蜜鬆餅端上，\n我就這樣沐浴在貝多芬的第七號交響曲享用早餐。",
    "我喜歡此刻恰到好處的溫度、光照、聲音、氣味，\n以及窗外那些如同鮮花的投影，",
    "我已經不記得參數是自己設定還是使用自動化推薦算的，\n但自從買了羊，每天都過著我嚮往的、如詩的日子。",
    "我對自然的印象大抵都很美好，\n除了小時候看了一部關於山崩的電影。",
    "怪當初教育部的環境政策，他們說這個世代的孩子\n「比過往任何人都要了解自然，但也比誰都對世界一無所知」\n於是強迫國小生在音樂課看老掉牙的電影寫心得感想。",
    "我們從小學就被教授關於地球的知識，\n如果忘記，點開手機隨便查一下也有。",
    "天動還是地動？海的盡頭有什麼？\n這些謬論以及關於宇宙的所有謎底\n做為基礎科學知識都早已被解開。",
    "世界與自然之中明明不存在未知，\n那「對自然一無所知」又是在說什麼呢？真是不知所云。",
    "電影很無趣，\n從頭到尾只講述一群對於地質、氣候、植物學\n都一無所知的人類踏入山中，最後死在突如其來的塌方。",
    "我問導師為何要播這樣的電影，\n他語氣沒什麼起伏地告訴我：\n「每年都播這部。」",
    "「但這不可能發生。所有山脈的結構在五十年前的地震已經失序，\n現在存在於那裡的只是屍體堆一樣的殘骸，\n雙腳踏上山路的那刻，人類就會陷落至機器也無法探明的深度，\n沒有人還會明知故犯地去被山殺死。」",
    "「不，這每年發生。」\n老師說。",
    "「為什麼？他們看了這部電影後模仿嗎？\n這麼一來不是更不該播嗎？」",
    "「不論如何，你們必須了解山是什麼，\n這麼一來要是哪天遇到了山，\n不管是生存還是毀滅，才知道該怎麼選擇。」",
    "我想我應該懂了，於是我在電影心得中寫：",
    "正常人不會步入已知的毀滅，\n這部電影警惕我們未來不要成為那樣的大人。",
    "在那之後我似乎做過很多次山崩的夢，\n厭倦過時恐怖的虛構威脅，\n不記得又過了五年還是十年，\n那讓人心臟驟停的泥石之雨才從我的腦海中消失。",
    "我摸了摸我的羊，\n它鼻腔處的接口噴出一股溫熱的氣息，\n後頭的散熱風扇轉動，像是滿足的呼嚕聲。"];
let act01Content = ["點開郵件，是科技、人文與道德思維的期中預警。",
    "唉⋯⋯",
    "我不由得感到疲倦。",
    "這種素養通識教的都是一些理所當然的東西。",
    "比如「不應該濫用科技」、「要遵守法律規範」之類的。",
    "我想連小學生也知道該怎麼回答。",
    "我只去上了兩堂課，之後就沒有再去過，\n既不關心課程的內容，也不認為能從中學到什麼東西。",
    "我只是需要這堂課的學分而已，\n偏偏，每週都要繳交一份作業。",
    "作業並不困難，\n然而或許是因為如此，我更提不起勁了。",
    "這種程度的東西，是不是我做的很重要嗎？",
    "累積了好幾週的作業淹沒了我的視野，\n不論如何，我必須在今天之內把這些作業處理掉。",
    "請以滑鼠拖動物件，將垃圾分類，\n或是直接使用AI完成。"];
let act1_1Content = ["多虧了電子助理，日程直接空出了好幾小時。",
    "利用這段時間，我讀了一本小說、看了幾場電影，",
    "原本漆黑一片的腦袋不知不覺灌滿靈感。",
    "我沉浸在興奮感之中，\n感覺現在似乎能做到很了不起的事，我再度打開筆電。"];
let act1_2Content = ["不知不覺，好幾個小時過去了。",
    "空空如也的畫面讓我稍微輕鬆了些，\n至少這樣能夠及格吧？",
    "不過，工作帶來的滿足感過於微小，\n更多的是湧上心頭的疲倦與煩躁感。",
    "我不明白這是否是一件有意義的事情，\n只能懷抱著虛無感，繼續處理其他事務。"];
let act02Content = ["又到了寫論文的時間了。",
    "我嘆了口氣，有些手足無措。",
    "雖然花了很多時間去蒐集與構思內容，\n但總感覺自己能寫出來的東西也就那樣。",
    "我朋友用Chat GBT生成的論文，\n不僅看起來意外專業，還意外取得了高分。",
    "或許交給AI做會比較好。\n我需要消化才能使用的專業知識，它生來就具備，\n可以輕鬆做得比我好，優秀的東西總是比較有價值。",
    "慢慢編織出文字的過程像一步步攀登高山，\n終點遙不可及，讓人望而生畏。",
    "而且這是我想做的題目，\n即使由AI生成，我也能藉此得到我想要的解答。",
    "請輸入文字以撰寫論文，直到內容填滿空格，\n或是直接使用AI完成。"];
let act2_1Content = ["我順利完成了論文進度，十分鐘後得到沒有問題的答覆。",
    "不愧是人工智慧。\n從前為人詬病「提供錯誤解答」亂回的狀況，在數十年的技術迭代後，\n現今版本Chat GBT吐出的每個字詞都是絕對正解。",
    "我不禁想著：\n如果全世界的人都用同一套工具去思考，\n知識的那個池塘裡，還剩下什麼呢？",
    "好在這還不是我需要憂慮的事，\n得再過個一百或兩百年，所有的問句才會被解答完畢。",
    "如果真理真的存在，未來的人類肯定是距離它最近的物種。",
    "寫論文這種事情，到時候也該廢除了。"];
let act2_2Content = ["我勉勉強強完成了論文進度，三分鐘後得到教授的修正建議。",
    "回復得過於快速，雖然挑不出錯誤，\n但我猜他可能是用人工智慧回復的。",
    "我不感到奇怪，畢竟現在大學生太多了。",
    "人類因為科技而變得無所不能後，\n終於有餘力在茶餘飯後伸出手去彌補過去視而不見的匱乏不公。",
    "所有角落都被信號給覆蓋，\n過去無法學習的第三世界居民因而得到教育機會，\n各種教育機構的在讀人口激增，",
    "教授看不了一百多篇論文是再正常不過的事情，\n況且人工智慧的回覆也挑不出錯。",
    "流動的資訊不勝枚舉，\n沒有被親自讀取的言語與電波一起，\n成為徘徊於城市高空的幽靈。"];
let act03Content = [    "好煩。",
    "實習地點的同事傳訊息來了，多半是一些無理取鬧的內容。",
    "明明不是上班時間，還隨意指使別人，真是過分。",
    "語氣也毫不留情，怎麼想都不是拜託人的態度。",
    "多半是在講上次學弟放錯檔案那件事情，但又不是我的錯，",
    "我憑什麼要當老闆的出氣筒，\n還得先低聲下氣道歉？",
    "想到心情就很差，不想用腦處理這些爛事。",
    "話說，電子助理有代回訊息機能吧？\n說是「幫人解決人際關係產生的內耗與情緒負擔」。",
    "之前新聞有報，\n因為這個功能，職場心理疾病的罹患率大幅降低。",
    "請輸入訊息答覆，或是直接由AI代為處理。"];
let act3_1Content = ["我把聊天室的控制權交給AI。",
    "不到幾秒，它就以得體的回應推進對話，將尖銳的話語包裝得當。",
    "現在的話，即使看著訊息也不會一肚子火，\n明明是同一句話，換個說法就讓人意外的能接受。",
    "別人缺乏的禮貌與社會化程度都由AI補上了，\n這樣不是很好嗎？",
    "為了感受這份溫柔，犧牲與人親自溝通的機會。",
    "想起來，我連那個同事的臉也沒有見過。\n這個時代多半都是遠距辦公，\n無法與他本人會面、有所交流，也是在所難免的事情。"];
let act3_2Content = ["我還是自己回覆了。",
    "讀完訊息後，我花了好幾分鐘的時間才平息怒火，\n如果當初沒有看這些東西肯定比較輕鬆。",
    "儘管不想與這些人扯上關係，\n但我似乎又摸透上級的喜好一點了。",
    "或許算是不錯的收穫吧\n——這麼想的同時，手機傳來新的回覆。",
    "『你有在好好反省嗎？\n在今晚之前給我檢討完，總結你自己的錯誤。』",
    "又罵？不是吧？為什麼？",
    "人與人之間，就算產生了聯繫，結果也不盡理想。",
    "這樣的事情一再發生，果然會讓人感到疲倦，\n或許哪天我會變得根本不想和任何人說話。"];
let act04Content = ["悶在家裡太久，隨便誰都好，想和人說說話了。",
    "雖然我很想來場轟轟烈烈的戀愛，\n但現在與人實體接觸的機會不多，",
    "沒什麼機會認識新朋友，更別提談感情了。",
    "不過，說到談戀愛，\n除了上網找陌生人之外，其實還有其他選擇。",
    "我主要是想滿足感情需求，\n這麼說來，AI某種程度上聊起來更舒服。",
    "理想的性格、樣貌、經歷……\n只要我設定完畢，AI可以扮演任何角色，包含我的夢中情人。",
    "畢竟交友網站上奇形怪狀的人很多，\n聊過發現其實只是想約跑步的人也不在少數。",
    "雖然想找人對話，\n但打開話題也很麻煩，不知道該說什麼好。",
    "請選擇打開『Tiber』尋找伴侶，\n或是打開『即即我我』與AI對話。"];
let act4_1Content = ["不知不覺，就在唧唧我我課金了，",
    "不愧是我自己設定好的性格，和小羊說起話來就是輕鬆。",
    "美中不足的是，小羊偶爾會壞掉，說出很奇怪的話。",
    "似乎也會忘記我們先前聊過的內容。",
    "雖然開心，但用到某個程度後，反而感覺像被潑了一桶冷水。",
    "希望官方能快點修好這些問題吧。"];
let act4_2Content = ["『配對失敗、配對失敗、配對失敗』",
    "來回幾趟下來，我深深感到挫折。",
    "我有那麼差勁嗎？",
    "不過話說回來，這個軟體上遇到的人大多都很奇怪。",
    "或許沒配對上是件好事。",
    "果然還是想找人說說話，下次有空，試著出門走走好了。"];
let endContent = [];
let end1Content = ["我成為了一個偉大的學者。",
    "儘管我不一定知曉一切，但所謂的知識與技術，\n對當今的人類來說，沒有死死緊握的必要。",
    "登上八十億人共同鑄造的階梯，\n天上的星星雖然垂手可得，然而這份成功絕對不可說是偶然。",
    "畢竟知道怎麼掌握工具也是一門技巧。",
    "把所有知識與技術關在一個什麼都沒有的箱子裡，\n過了多少年都不會有所「創造」。",
    "我用意識賦予無機的工作意義，人類就是這樣立足於萬物之上的。",
    "「那麼，有請本屆的獲獎者發表感言。\n他解決了長期困擾產業的供應鏈預測難題、\n降低了全球最大農糧企業的訂單誤差率達35%，\n他是世紀的學者、不朽的天才——」",
    "如碎石落下的掌聲中，呼喊我名字的音節變得模糊。"];
let end2Content = ["我似乎是世界上僅存的人類。",
    "這麼說可能不太恰當，\n街上走動的那些毫無疑問也是人類，\n但只剩下我一個保留著原始的肉體。",
    "大部分的人選擇植入機械器官，用訊息單位取代身體上的神經元。",
    "不知是出於固執、怯弱還是其他原因，\n總之，我一直都挺排斥那些的。",
    "儘管被告知現在的肉體難以維護，壽命不會超過一百年，\n還是早日替換成機器比較好……",
    "面向人類軀體的醫療單位也在減少，\n等到疾病纏身的老年，無處投醫也說不定。",
    "聽起來真是殘酷。\n但或許因為我還年輕，我並不感到恐懼，\n只覺得這具肉體的舉手投足都無比美好，充滿生命力。",
    "我肯定也是因為喜歡這種獨屬於人類的活力，\n當初才不把爛攤子丟給AI。",
    "我穿過一條又一條的街道，\n微風與陽光在我的皮膚上輕輕綻放，\n我是世界上唯一一個還能真正感受到這些的人。",
    "然後，在下一個路口，我與「它」相遇了。",
    "「它」有著隨處可見的機械身體。\n與鮮活的我相比，這樣無機的存在除了意志以外剩下什麼呢？",
    "但我仍然情不自禁地被「她」的言談給吸引，\n我想我肯定對「她」的意志一見鍾情了。",
    "這樣庸俗而純粹的愛情故事，隨處可見地發生著。"];
let end3Content = ["我什麼都沒有成為，就這樣平平淡淡地度日。",
    "享受科技的便利，過著舒適的生活。",
    "時而憂慮、時而釋然。\n畢竟思考與感受不會因為機器協作而停止，\n所以我想我的生活還是挺充實的。",
    "雖然身體有了一些變化。",
    "上周，我換上機械義肢，\n那能幫助我更好地完成工作。",
    "機械手臂以難以想像的速度動作著，\n因為已經設定好行為模式與指令，所以只要等待就行。",
    "我盯著電腦螢幕發愣，稍微有點寂寞。",
    "這時，羊輕輕磨蹭了我的腳一下。",
    "像是察覺到我低落的情緒，它可愛的舉動十分貼心——\n不，智慧助理真的具備觀察使用者情緒的機能，\n所以它確實能透過我的肌肉組成、心跳與脈搏理解我的孤獨。",
    "不論是疲倦還是悲傷，\n羊都會注視著我、為了我行動、長久陪伴我，\n我深深依賴著它。",
    "把我們之間的關係稱作是家人也不為過。"];
let end4Content = ["在讓人忘卻一切的細雨中，我帶上了我的一切。",
    "待在家裡，不論是張開眼睛還是閉上眼睛，\n都什麼也感受不到，什麼也擁有不了。",
    "我回想起早已忘卻的電影。\n滲了水的褐色砂土會變得柔軟，\n夕陽的色澤仿佛在鮮血之中摻入蛋黃與牛奶，細膩而溫潤。",
    "群山的翠色比資訊的黑洞更加深沉，\n輕輕一躺，便能墜入棉絮般的床榻，安然入眠吧。",
    "我想要去那裡做一個真實的、溫柔的夢。"];

// =================== 狀態變數 ===================
let displayingIntro = true;
let displayingStory = false;
let displayingIntro01 = false;
let displayingIntro02 = false;
let displayingIntro03 = false;
let displayingIntro04 = false;
let displayingAct01 = false;
let displayingAct02 = false;
let displayingAct03 = false;
let displayingAct04 = false;
let displayingAct1_1 = false;
let displayingAct1_2 = false;
let displayingAct2_1 = false;
let displayingAct2_2 = false;
let displayingAct3_1 = false;
let displayingAct3_2 = false;
let displayingAct4_1 = false;
let displayingAct4_2 = false;
let displayingTask1 = false;
let displayingTask2 = false;
let displayingTask3 = false;
let displayingTask4 = false;
let displayingEnd = false;

// =================== 文字控制變數 ===================
let currentTextIndex = 0;
let currentString = "";
let charIndex = 0;
let timer = 0;
let textBoxHeight = 180;
let textBoxWidth = 600;
let textPadding = 50;
let clickDisabled = false;

// =================== task1變數 ===================
let bgImage;
let trashImages = {};
let bins = [];
let trashItems = [];
let draggingItem = null;
let buttonTask1;
let autoSorting = false;

// =================== Task2相關變數 ===================
let bgImageTask2;
let finalImageTask2;
let pyramid = [];
let message = '';
let messageTimer = 0;
let messageAlpha = 0;
let messageX = 0;
let messageY = 0;
let rows = 17;
let inputText = '';
let messagesTask2 = [
    "正確的答案不是這樣。",
    "輸入的文字沒有意義",
    "滿意的成果無法成型",
    "為什麼一直失敗？",
    "心好累。",
    "要輸入到什麼時候？"
];
let showImageTask2 = false;
let Task2Submitted = false;
let endTask2Button; // Task2按鈕

// =================== Task3相關變數 (優化命名) ===================
let imgLevel0, imgLevel1, imgLevel2, imgLevel3, imgLevel4, imgLevel5;
let imgPhone, imgPressure;
let imgAA, imgAX, imgXA, imgXX;
let imgAASend, imgAXSend, imgXASend, imgXXSend;

let task3HasStarted = false;

// boy 圖像位置與尺寸
let boyPosX, boyPosY, boyWidth, boyHeight;
let boyPosXmain, boyPosYmain;

// Task3 的按鈕
let btnTask3, btnPressure, btnStart3, btnTask4;
let btnChoice1, btnChoice2, btnChoice3, btnChoice4, btnChoice5, btnChoice6;
let btnAA, btnAX, btnXA, btnXX;

// Task3 按鈕位置大小
let btnNextWidth, btnNextHeight;
let btnSendWidth, btnSendHeight;
let btnAiWidth, btnAiHeight;
let btnNextX, btnNextY;
let btnSendX, btnSendY;
let btnAiX, btnAiY;
let btnPosXX, btnPosXY;

let mainHue;
let inputBox;

//task4
let task4HasStarted = false;

let imgTask4, imgStart4, imgEnd;
let imgApp;
let imgAiChat1, imgAiChat2, imgAiChat3, imgAiChat4, imgAiChat5;
let imgX1, imgX2, imgX3, imgX4, imgX5, imgFailed;


let buttonTask44, buttonStart4, buttonEnd;
let button7, button8;
let buttonSend1, buttonSend2, buttonSend3, buttonSend4;
let buttonYes1, buttonNo1, buttonYes2, buttonNo2, buttonYes3, buttonNo3, buttonYes4, buttonNo4;
let buttonNextW, buttonNextH, buttonSendW, buttonSendH, buttonAiXW4, buttonAiXH4, buttonOXW, buttonOXH;
let buttonNextX, buttonNextY, buttonSendX4, buttonSendY4,
    buttonAiX4, buttonAiY4, buttonXX4, buttonXY4,
    buttonYesX, buttonYesY, buttonNoX, buttonNoY;
let imgSheep;
let imgLogs = [];


function preload() {
    bgm = loadSound('music/bgmusic.mp3');
    clickSE = loadSound('music/key.mp3');

    customFont = loadFont('Cubic_11.woff');
    bgImage = loadImage('images/background.png');
    //幕間
    act01 = loadImage('images/Act01.png');
    act02 = loadImage('images/Act02.png');
    act03 = loadImage('images/Act03.png');
    act04 = loadImage('images/Act04.png');
    //使用程度變化的立繪
    imgLevel0 = loadImage("images/level0.PNG");
    imgLevel1 = loadImage("images/level1.PNG");
    imgLevel2 = loadImage("images/level2.PNG");
    imgLevel3 = loadImage("images/level3.PNG");
    imgLevel4 = loadImage("images/level4.PNG");
    imgLevel5 = loadImage("images/level5.PNG");

    //Task1
    trashImages.whiteTrash = loadImage('images/wg.png');
    trashImages.blackTrash = loadImage('images/bg.png');
    trashImages.whiteBin = loadImage('images/wgc.png');
    trashImages.blackBin = loadImage('images/bgc.png');

    //Task2
    bgImageTask2 = loadImage('images/BQ1.png');
    finalImageTask2 = loadImage('images/BQ2.png');

    //Task3
    imgPressure = loadImage("images/pressure.png");

    imgPhone = loadImage("images/phone.PNG");
    imgAA = loadImage("images/AA.PNG");
    imgAX = loadImage("images/AX.PNG");
    imgXA = loadImage("images/XA.PNG");
    imgXX = loadImage("images/XX.PNG");
    imgAASend = loadImage("images/AASend.PNG");
    imgAXSend = loadImage("images/AXSend.PNG");
    imgXASend = loadImage("images/XASend.PNG");
    imgXXSend = loadImage("images/XXSend.PNG");

    //task4
    boyX = 270;
    boyY = 150;
    boyW = 315;
    boyH = 450;
    imgApp = loadImage("images/app.png");
    imgAiChat1 = loadImage("images/aiChat1.png");
    imgAiChat2 = loadImage("images/aiChat2.png");
    imgAiChat3 = loadImage("images/aiChat3.png");
    imgAiChat4 = loadImage("images/aiChat4.png");
    imgAiChat5 = loadImage("images/aiChat5.png");
    imgX1 = loadImage("images/x1.png");
    imgX2 = loadImage("images/x2.png");
    imgX3 = loadImage("images/x3.png");
    imgX4 = loadImage("images/x4.png");
    imgX5 = loadImage("images/x5.png");
    imgFailed = loadImage("images/failed.png");

    //End
    imgEnd1_1 = loadImage("images/end1_1.png");
    imgEnd1_2 = loadImage("images/end1_2.png");
    imgEnd2 = loadImage("images/end2.png");
    imgEnd3 = loadImage("images/end3.png");

    //羊
    imgSheep = loadImage("images/speep.PNG");
    for (let i = 1; i <= 10; i++) {
        imgLogs[i - 1] = loadImage(`images/log${i}.PNG`);
    }
    sheepX = 720;
    sheepY = 360;
    sheepSize = 200;
}



function setup() {
    createCanvas(896, 512);
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);

    //人物位置
    boyPosXmain = 600;
    boyPosYmain = 100;
    boyWidthmain = 315;
    boyHeightmain = 450;

    // ---- Task1初始化 ----
    bins.push(new Bin(50, height - 250, trashImages.whiteBin, 'white'));
    bins.push(new Bin(width - 200, height - 250, trashImages.blackBin, 'black'));
    initializeTrashItems();

    buttonTask1 = createButton('AI自動分類');
    buttonTask1.position(width - 150, 100);
    buttonTask1.size(120, 40);
    buttonTask1.style('font-family', 'Cubic-11'); // 設定字型
    buttonTask1.style('font-size', '16px'); // 設定字體大小
    buttonTask1.style('padding', '5px 10px'); // 設定內邊距
    buttonTask1.mousePressed(() => {
        autoSorting = true;
        aiCount++;
    });
    buttonTask1.hide();

    // Task2
    endTask2Button = createButton('切換分頁至CHAT GPT');
    endTask2Button.position(width - 150, 100);
    endTask2Button.style('font-family', 'Cubic-11'); // 設定字型
    endTask2Button.style('font-size', '16px'); // 設定字體大小
    endTask2Button.style('padding', '5px 10px'); // 設定內邊距
    endTask2Button.mousePressed(submitReportTask2);
    endTask2Button.hide();

    //Task3
    colorMode(HSB);
    mainHue = random(0, 360);

    boyPosX = 270;
    boyPosY = 150;
    boyWidth = 315;
    boyHeight = 450;

    btnNextWidth = 70;
    btnNextHeight = 30;
    btnSendWidth = 70;
    btnSendHeight = 30;
    btnAiWidth = 110;
    btnAiHeight = 30;

    btnNextX = 870;
    btnNextY = 500;
    btnSendX = 150;
    btnSendY = 485;
    btnAiX = 450;
    btnAiY = 110;
    btnPosXX = 450;
    btnPosXY = 160;

    // 建立 Task3 的所有按鈕
    btnTask3 = createButton("next");
    btnPressure = createButton("next");
    btnStart3 = createButton("next");
    btnTask4 = createButton("next");

    btnChoice1 = createButton("AI顯示");
    btnChoice2 = createButton("直接顯示");
    btnChoice3 = createButton("AI協助");
    btnChoice4 = createButton("自己回覆");
    btnChoice5 = createButton("AI協助");
    btnChoice6 = createButton("自己回覆");

    btnAA = createButton("send");
    btnAX = createButton("send");
    btnXA = createButton("send");
    btnXX = createButton("send");

    // 設定按鈕大小、位置、樣式
    btnTask3.size(btnNextWidth, btnNextHeight);
    btnTask3.position(btnNextX, btnNextY);
    btnTask3.style("font-family", 'Cubic-11');
    btnTask3.style("font-size", "18px");
    btnTask3.style("background-color", "white");

    btnPressure.size(btnNextWidth, btnNextHeight);
    btnPressure.position(btnNextX, btnNextY);
    btnPressure.style("font-family", 'Cubic-11');
    btnPressure.style("font-size", "18px");
    btnPressure.style("background-color", "white");

    btnStart3.size(btnNextWidth, btnNextHeight);
    btnStart3.position(btnNextX, btnNextY);
    btnStart3.style("font-family", 'Cubic-11');
    btnStart3.style("font-size", "18px");
    btnStart3.style("background-color", "white");

    btnTask4.size(btnNextWidth, btnNextHeight);
    btnTask4.position(btnNextX, btnNextY);
    btnTask4.style("font-family", 'Cubic-11');
    btnTask4.style("font-size", "18px");
    btnTask4.style("background-color", "white");

    btnChoice1.size(btnAiWidth, btnAiHeight);
    btnChoice1.position(btnAiX - 250, btnAiY + 403);
    btnChoice1.style("font-family", 'Cubic-11');
    btnChoice1.style("font-size", "18px");
    btnChoice1.style("background-color", "white");

    btnChoice2.size(btnAiWidth, btnAiHeight);
    btnChoice2.position(btnPosXX + 252, btnPosXY + 353);
    btnChoice2.style("font-family", 'Cubic-11');
    btnChoice2.style("font-size", "18px");
    btnChoice2.style("background-color", "white");

    btnChoice3.size(btnAiWidth, btnAiHeight);
    btnChoice3.position(btnAiX + 250, btnAiY + 150);
    btnChoice3.style("font-family", 'Cubic-11');
    btnChoice3.style("font-size", "18px");
    btnChoice3.style("background-color", "white");

    btnChoice4.size(btnAiWidth, btnAiHeight);
    btnChoice4.position(btnPosXX + 250, btnPosXY + 150);
    btnChoice4.style("font-family", 'Cubic-11');
    btnChoice4.style("font-size", "18px");
    btnChoice4.style("background-color", "white");

    btnChoice5.size(btnAiWidth, btnAiHeight);
    btnChoice5.position(btnAiX - 250, btnAiY + 150);
    btnChoice5.style("font-family", 'Cubic-11');
    btnChoice5.style("font-size", "18px");
    btnChoice5.style("background-color", "white");

    btnChoice6.size(btnAiWidth, btnAiHeight);
    btnChoice6.position(btnPosXX - 250, btnPosXY + 150);
    btnChoice6.style("font-family", 'Cubic-11');
    btnChoice6.style("font-size", "18px");
    btnChoice6.style("background-color", "white");

    btnAA.size(btnSendWidth, btnSendHeight);
    btnAA.position(btnSendX, btnSendY);
    btnAA.style("font-family", 'Cubic-11');
    btnAA.style("font-size", "18px");
    btnAA.style("background-color", "white");

    btnAX.size(btnSendWidth, btnSendHeight);
    btnAX.position(btnSendX, btnSendY);
    btnAX.style("font-family", 'Cubic-11');
    btnAX.style("font-size", "18px");
    btnAX.style("background-color", "white");

    btnXA.size(btnSendWidth, btnSendHeight);
    btnXA.position(btnSendX, btnSendY);
    btnXA.style("font-family", 'Cubic-11');
    btnXA.style("font-size", "18px");
    btnXA.style("background-color", "white");

    btnXX.size(btnSendWidth, btnSendHeight);
    btnXX.position(btnSendX, btnSendY);
    btnXX.style("font-family", 'Cubic-11');
    btnXX.style("font-size", "18px");
    btnXX.style("background-color", "white");

    // 綁定事件
    btnTask3.mouseClicked(startTask3);
    btnPressure.mouseClicked(showPressure);
    btnStart3.mouseClicked(showPhoneUI);
    btnTask4.mouseClicked(startTask4);

    btnChoice1.mouseClicked(aiShow);
    btnChoice2.mouseClicked(xShow);
    btnChoice3.mouseClicked(aiShowAiWrite);
    btnChoice4.mouseClicked(aiShowXWrite);
    btnChoice5.mouseClicked(xShowAiWrite);
    btnChoice6.mouseClicked(xShowXWrite);

    btnAA.mouseClicked(AASend);
    btnAX.mouseClicked(AXSend);
    btnXA.mouseClicked(XASend);
    btnXX.mouseClicked(XXSend);

    // 一開始全部隱藏 (Task3按鈕)
    hideAllTask3Buttons();

    //Task4按鈕
    ////////////////////////////////////////////////////////////////////////////////////////////////
    buttonAiXW4 = 70;
    buttonAiXH4 = 30;
    buttonOXW = 70;
    buttonOXH = 30;
    buttonNextX = 870;
    buttonNextY = 500;

    buttonSendX4 = 800;
    buttonSendY4 = 475;
    buttonAiX4 = 650;
    buttonAiY4 = 310;
    buttonXX4 = 650;
    buttonXY4 = 360;
    buttonYesX = 555;
    buttonYesY = 505;
    buttonNoX = 680;
    buttonNoY = 505;
    buttonStart4 = createButton("next");
    buttonEnd = createButton("next");
    buttonEnd_ = createButton("next");
    button7 = createButton("AI");
    button8 = createButton("Tiber");
    buttonSend1 = createButton("send");
    buttonSend2 = createButton("send");
    buttonSend3 = createButton("send");
    buttonSend4 = createButton("send");
    buttonYes1 = createButton("O");
    buttonNo1 = createButton("X");
    buttonYes2 = createButton("O");
    buttonNo2 = createButton("X");
    buttonYes3 = createButton("O");
    buttonNo3 = createButton("X");
    buttonYes4 = createButton("O");
    buttonNo4 = createButton("X");

    buttonStart4.size(buttonNextW, buttonNextH)
    buttonStart4.position(buttonNextX, buttonNextY);
    buttonStart4.style("font-family", 'Cubic-11');
    buttonStart4.style("font-size", "18px");
    buttonStart4.style("background-color", "white");

    buttonEnd.size(buttonNextW, buttonNextH)
    buttonEnd.position(buttonNextX, buttonNextY);
    buttonEnd.style("font-family", 'Cubic-11');
    buttonEnd.style("font-size", "18px");
    buttonEnd.style("background-color", "white");

    buttonEnd_.size(buttonNextW, buttonNextH)
    buttonEnd_.position(buttonNextX, buttonNextY);
    buttonEnd_.style("font-family", 'Cubic-11');
    buttonEnd_.style("font-size", "18px");
    buttonEnd_.style("background-color", "white");

    buttonSend1.size(buttonSendW, buttonSendH)
    buttonSend1.position(buttonSendX4, buttonSendY4);
    buttonSend1.style("font-family", 'Cubic-11');
    buttonSend1.style("font-size", "18px");
    buttonSend1.style("background-color", "white");
    buttonSend2.size(buttonSendW, buttonSendH)
    buttonSend2.position(buttonSendX4, buttonSendY4);
    buttonSend2.style("font-family", 'Cubic-11');
    buttonSend2.style("font-size", "18px");
    buttonSend2.style("background-color", "white");
    buttonSend3.size(buttonSendW, buttonSendH)
    buttonSend3.position(buttonSendX4, buttonSendY4);
    buttonSend3.style("font-family", 'Cubic-11');
    buttonSend3.style("font-size", "18px");
    buttonSend3.style("background-color", "white");
    buttonSend4.size(buttonSendW, buttonSendH)
    buttonSend4.position(buttonSendX4, buttonSendY4);
    buttonSend4.style("font-family", 'Cubic-11');
    buttonSend4.style("font-size", "18px");
    buttonSend4.style("background-color", "white");

    button7.size(buttonAiXW4, buttonAiXH4)
    button7.position(buttonAiX4, buttonAiY4);
    button7.style("font-family", 'Cubic-11');
    button7.style("font-size", "18px");
    button7.style("background-color", "white");
    button8.size(buttonAiXW4, buttonAiXH4)
    button8.position(buttonXX4, buttonXY4);
    button8.style("font-family", 'Cubic-11');
    button8.style("font-size", "18px");
    button8.style("background-color", "white");

    buttonYes1.size(buttonOXW, buttonOXH)
    buttonYes1.position(buttonYesX, buttonYesY);
    buttonYes1.style("font-family", 'Cubic-11');
    buttonYes1.style("font-size", "18px");
    buttonYes1.style("background-color", "white");
    buttonNo1.size(buttonOXW, buttonOXH)
    buttonNo1.position(buttonNoX, buttonNoY);
    buttonNo1.style("font-family", 'Cubic-11');
    buttonNo1.style("font-size", "18px");
    buttonNo1.style("background-color", "white");

    buttonYes2.size(buttonOXW, buttonOXH)
    buttonYes2.position(buttonYesX, buttonYesY);
    buttonYes2.style("font-family", 'Cubic-11');
    buttonYes2.style("font-size", "18px");
    buttonYes2.style("background-color", "white");
    buttonNo2.size(buttonOXW, buttonOXH)
    buttonNo2.position(buttonNoX, buttonNoY);
    buttonNo2.style("font-family", 'Cubic-11');
    buttonNo2.style("font-size", "18px");
    buttonNo2.style("background-color", "white");

    buttonYes3.size(buttonOXW, buttonOXH)
    buttonYes3.position(buttonYesX, buttonYesY);
    buttonYes3.style("font-family", 'Cubic-11');
    buttonYes3.style("font-size", "18px");
    buttonYes3.style("background-color", "white");
    buttonNo3.size(buttonOXW, buttonOXH)
    buttonNo3.position(buttonNoX, buttonNoY);
    buttonNo3.style("font-family", 'Cubic-11');
    buttonNo3.style("font-size", "18px");
    buttonNo3.style("background-color", "white");

    buttonYes4.size(buttonOXW, buttonOXH)
    buttonYes4.position(buttonYesX, buttonYesY);
    buttonYes4.style("font-family", 'Cubic-11');
    buttonYes4.style("font-size", "18px");
    buttonYes4.style("background-color", "white");
    buttonNo4.size(buttonOXW, buttonOXH)
    buttonNo4.position(buttonNoX, buttonNoY);
    buttonNo4.style("font-family", 'Cubic-11');
    buttonNo4.style("font-size", "18px");
    buttonNo4.style("background-color", "white");

    buttonStart4.mouseClicked(start4);
    buttonEnd.mouseClicked(end);
    buttonEnd_.mouseClicked(end_);
    button7.mouseClicked(aiChat);
    button8.mouseClicked(xChat);
    buttonSend1.mouseClicked(send1);
    buttonSend2.mouseClicked(send2);
    buttonSend3.mouseClicked(send3);
    buttonSend4.mouseClicked(send4);
    buttonYes1.mouseClicked(yes1);
    buttonNo1.mouseClicked(no1);
    buttonYes2.mouseClicked(yes2);
    buttonNo2.mouseClicked(no2);
    buttonYes3.mouseClicked(yes3);
    buttonNo3.mouseClicked(no3);
    buttonYes4.mouseClicked(yes4);
    buttonNo4.mouseClicked(no4);

    // 一開始全部隱藏 (Task3按鈕)
    hideAllTask4Buttons();
}


// =================== 主程式的draw() ===================
function draw() {
    // 只要不是任務34就統一隱藏按鈕
    if (!displayingTask3) {
        hideAllTask3Buttons();
    }
    if (!displayingTask4) {
        hideAllTask4Buttons();
    }
    //順序（基本上可以不用動）
    if (displayingIntro) {
        displayIntro();
    } else if (displayingStory) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayStory();
        startWithFadeIn();
        handleSheep();
    } else if (displayingIntro01) {
        displayIntro01();
    } else if (displayingAct01) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct01();
        handleSheep();
    } else if (displayingTask1) {
        buttonTask1.show();
        displayTask1();
    } else if (displayingAct1_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        buttonTask1.hide();
        displayAct1_1();
        handleSheep();
    } else if (displayingAct1_2) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        buttonTask1.hide();
        displayAct1_2();
        handleSheep();
    } else if (displayingIntro02) {
        buttonTask1.hide();
        displayIntro02();
    } else if (displayingAct02) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        buttonTask1.hide();
        displayAct02();
        handleSheep();
    } else if (displayingTask2) {
        drawTask2();
    } else if (displayingAct2_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct2_1();
        handleSheep();
    } else if (displayingAct2_2) {
        console.log("2-2");
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct2_2();
        handleSheep();
    } else if (displayingIntro03) {
        displayIntro03();
    } else if (displayingAct03) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct03();
        handleSheep();
        // ★ 一旦 Act03 結束後，mousePressed() 裡會令 displayingTask3 = true
    } else if (displayingTask3) {
        drawTask3();
    } else if (displayingAct3_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct3_1();
        handleSheep();
    } else if (displayingAct3_2) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct3_2();
        handleSheep();
    } else if (displayingIntro04) {
        displayIntro04();
    } else if (displayingAct04) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct04();
        handleSheep();
    } else if (displayingTask4) {
        drawTask4();
    } else if (displayingAct4_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct4_1();
        handleSheep();
    } else if (displayingAct4_2) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct4_2();
        handleSheep();
    } else if (displayingEnd) {
        displayEnd();
    }
}



// =================== 滑鼠事件 ===================
function mousePressed() {
    clickSE.play();
    if (isSheepEnabled) {
        // 檢查是否點擊了羊的範圍
        if (mouseX > sheepX && mouseX < sheepX + sheepSize &&
            mouseY > sheepY && mouseY < sheepY + sheepSize) {
            if (sheepCount < 10) { // 添加條件限制
                sheepCount++;
                console.log(`Sheep clicked! Current count: ${sheepCount}`);
    
                // 顯示 log
                currentLogIndex = sheepCount;
                logTimer = millis();
            } else {
                console.log("Sheep count has reached the limit of 10.");
            }
        }
    }    
    if (displayingIntro) {
        displayingIntro = false;
        displayingStory = true;
        timer = 0;

    } else if (displayingStory) {
        isSheepEnabled = true;
        resetText();
        //所有劇情使用的邏輯都是播完>>設下一個階段為true
        if (currentTextIndex >= storyTexts.length) {
            currentTextIndex = 0;
            displayingStory = false;
            displayingIntro01 = true;
        }

    } else if (displayingIntro01) {
        isSheepEnabled = false;
        resetText();
        displayingIntro01 = false;
        displayingAct01 = true;
        currentTextIndex = 0;

    } else if (displayingAct01) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act01Content.length) {
            currentTextIndex = 0;
            displayingAct01 = false;
            displayingTask1 = true;
        }

    } else if (displayingTask1) {
        isSheepEnabled = false;
        for (let trash of trashItems) {
            if (trash.isMouseOver()) {
                draggingItem = trash;
                break;
            }
        }

    } else if (displayingAct1_1) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act1_1Content.length) {
            currentTextIndex = 0;
            displayingAct1_1 = false;
            displayingIntro02 = true;
        }

    } else if (displayingAct1_2) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act1_2Content.length) {
            currentTextIndex = 0;
            displayingAct1_2 = false;
            displayingIntro02 = true;
        }

    } else if (displayingIntro02) {
        isSheepEnabled = false;

        resetText();
        displayingIntro02 = false;
        displayingAct02 = true;
        currentTextIndex = 0;

    } else if (displayingAct02) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act02Content.length) {
            currentTextIndex = 0;
            displayingAct02 = false;
            displayingTask2 = true;
            isSheepEnabled = false;
            endTask2Button.show();
        }

    } else if (displayingAct2_1) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act2_1Content.length) {
            currentTextIndex = 0;
            displayingAct2_1 = false;
            displayingIntro03 = true;
        }

    } else if (displayingAct2_2) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act2_2Content.length) {
            currentTextIndex = 0;
            displayingAct2_2 = false;
            displayingIntro03 = true;
        }

    } else if (displayingIntro03) {
        isSheepEnabled = false;
        resetText();
        displayingIntro03 = false;
        displayingAct03 = true;
        currentTextIndex = 0;

    } else if (displayingAct03) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act03Content.length) {
            currentTextIndex = 0;
            displayingAct03 = false;
            displayingTask3 = true;
            isSheepEnabled = false;
        }
    } else if (displayingAct3_1) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act3_1Content.length) {
            currentTextIndex = 0;
            displayingAct3_1 = false;
            displayingIntro04 = true;
        }

    } else if (displayingAct3_2) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act3_2Content.length) {
            currentTextIndex = 0;
            displayingAct3_2 = false;
            displayingIntro04 = true;
        }

    } else if (displayingIntro04) {
        isSheepEnabled = false;
        resetText();
        displayingIntro04 = false;
        displayingAct04 = true;
        currentTextIndex = 0;

    } else if (displayingAct04) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act04Content.length) {
            currentTextIndex = 0;
            displayingAct04 = false;
            displayingTask4 = true;
            isSheepEnabled = false;
        }
    } else if (displayingAct4_1) {
        isSheepEnabled = true;
        resetText();
        if (currentTextIndex >= act4_1Content.length) {
            currentTextIndex = 0;
            displayingAct4_1 = false;
            displayingEnd = true;
            isSheepEnabled = false;
        }

    } else if (displayingAct4_2) {
        resetText();
        if (currentTextIndex >= act4_2Content.length) {
            currentTextIndex = 0;
            displayingAct4_2 = false;
            displayingEnd = true;
            isSheepEnabled = false;
        }
    } else if (displayingEnd) {
        resetText();
        if (currentTextIndex >= endContent.length) {
            currentTextIndex = 0;
            displayingEnd = false;
            console.log("結束");//此行為測試用，可刪
        }
    }
}

//只有任務一用到的mouseReleased
function mouseReleased() {
    if (displayingTask1) {
        if (draggingItem) {
            for (let bin of bins) {
                if (bin.isTrashCorrect(draggingItem) && bin.isMouseOver()) {
                    trashItems = trashItems.filter(trash => trash !== draggingItem);
                    if (trashItems.length === 0) {
                        if (autoSorting) {
                            displayingTask1 = false;
                            displayingAct1_1 = true;
                        } else {
                            displayingTask1 = false;
                            displayingAct1_2 = true;
                        }
                    }
                    break;
                }
            }
            draggingItem = null;
        }
    }
}


// =================== 劇情function ===================
function showBoy() {

    if (aiCount === 0) {
        return imgLevel0;
    } else if (aiCount === 1) {
        return imgLevel1;
    } else if (aiCount === 2) {
        return imgLevel2;
    } else if (aiCount === 3) {
        return imgLevel3;
    } else if (aiCount === 4) {
        return imgLevel4;
    } else {
        return imgLevel5;
    }
}

function resetText() {
    charIndex = 0;
    currentString = "";
    currentTextIndex++;
}


function displayAct1_1() {
    drawTextBox();
    typewriterEffect(act1_1Content[currentTextIndex]);
}
function displayAct1_2() {
    drawTextBox();
    typewriterEffect(act1_2Content[currentTextIndex]);
}
function displayAct2_1() {
    drawTextBox();
    typewriterEffect(act2_1Content[currentTextIndex]);
}
function displayAct2_2() {
    drawTextBox();
    typewriterEffect(act2_2Content[currentTextIndex]);
}
function displayAct3_1() {
    drawTextBox();
    typewriterEffect(act3_1Content[currentTextIndex]);
}
function displayAct3_2() {
    drawTextBox();
    typewriterEffect(act3_2Content[currentTextIndex]);
}
function displayAct4_1() {
    drawTextBox();
    typewriterEffect(act4_1Content[currentTextIndex]);
}
function displayAct4_2() {
    drawTextBox();
    typewriterEffect(act4_2Content[currentTextIndex]);
}
function displayIntro() {
    textFadeIn(intro[0]);
}
function displayIntro01() {
    image(act01, 0, 0, width, height);
}
function displayIntro02() {
    image(act02, 0, 0, width, height);
}
function displayIntro03() {
    image(act03, 0, 0, width, height);
}
function displayIntro04() {
    image(act04, 0, 0, width, height);
}
function displayStory() {
    drawTextBox();
    typewriterEffect(storyTexts[currentTextIndex]);
}
function displayAct01() {
    drawTextBox();
    typewriterEffect(act01Content[currentTextIndex]);
}
function displayAct02() {
    drawTextBox();
    typewriterEffect(act02Content[currentTextIndex]);
}
function displayAct03() {
    drawTextBox();
    typewriterEffect(act03Content[currentTextIndex]);
}
function displayAct04() {
    drawTextBox();
    typewriterEffect(act04Content[currentTextIndex]);
}
function displayEnd() {
    if (sheepCount == 10) {
        background(100)
        drawTextBox();
        typewriterEffect(end4Content[currentTextIndex]);
        endContent = end4Content;
    }
    else {
        if (aiCount == 4) {
            image(imgEnd1_1, 0, 0, width, height);
            drawTextBox();
            typewriterEffect(end1Content[currentTextIndex]);
            endContent = end1Content;
        }
        else if (aiCount == 0) {
            image(imgEnd2, 0, 0, width, height);
            drawTextBox();
            typewriterEffect(end2Content[currentTextIndex]);
            endContent = end2Content;
        }
        else {
            image(imgEnd3, 0, 0, width, height);
            drawTextBox();
            typewriterEffect(end3Content[currentTextIndex]);
            endContent = end3Content;
        }
    }
}


// =================== 對話方塊 ===================
function drawTextBox() {
    fill(0, 150);
    noStroke();
    rect(50, height - 50 - textBoxHeight, textBoxWidth, textBoxHeight);
}
function typewriterEffect(content) {
    if (typeof content !== "string") {
        console.error("Invalid content type:", content);
        return;
    }
    if (charIndex < content.length) {
        currentString += content.charAt(charIndex);
        charIndex++;
    }
    drawText(currentString);
}
function drawText(textContent) {
    fill(255);
    textFont(customFont);
    textSize(16);
    textAlign(LEFT, TOP);
    text(
        textContent,
        50 + textPadding,
        height - 50 - textBoxHeight + textPadding,
        textBoxWidth - textPadding * 2
    );
}
function textFadeIn(content) {
    textFont(customFont);
    let alpha = map(timer, 0, 120, 0, 255);
    fill(220 - alpha);
    text(content, width / 2, height / 2 - textBoxHeight / 2);
    if (timer < 120) {
        timer++;
    }
}
// =================== task1 function ===================
function initializeTrashItems() {
    trashItems = [];
    const totalItems = 30;
    const margin = 200;
    for (let i = 0; i < totalItems; i++) {
        const x = random(margin, width - margin - 100);
        const y = random(margin * 0.6, height - margin * 0.8);
        const type = random(['white', 'black']);
        const img = (type === 'white') ? trashImages.whiteTrash : trashImages.blackTrash;
        trashItems.push(new Trash(x, y, img, type));
    }
}

function displayTask1() {
    background(240);
    bins.forEach(bin => {
        bin.size = width / 8;
        bin.show();
    });
    trashItems.forEach(trash => {
        trash.size = width / 16;
        trash.show();
    });
    if (draggingItem) {
        draggingItem.x = mouseX;
        draggingItem.y = mouseY;
    }
    if (autoSorting) {
        autoSortTrash();
    }
}

function autoSortTrash() {
    trashItems.forEach((trash, index) => {
        const targetBin = bins.find(bin => bin.color === trash.color);
        if (targetBin) {
            trash.x = lerp(trash.x, targetBin.x + targetBin.size / 2 - trash.size / 2, 0.1);
            trash.y = lerp(trash.y, targetBin.y + targetBin.size / 2 - trash.size / 2, 0.1);

            if (dist(
                trash.x, trash.y,
                targetBin.x + targetBin.size / 2 - trash.size / 2,
                targetBin.y + targetBin.size / 2 - trash.size / 2
            ) < 5) {
                trashItems.splice(index, 1);
            }
        }
    });

    if (trashItems.length === 0) {
        autoSorting = false;
        displayingTask1 = false;
        displayingAct1_1 = true;
    }
}


// =================== Task2 ===================
function drawTask2() {
    if (showImageTask2) {
        background(finalImageTask2);
        setTimeout(() => {
            displayingTask2 = false;
            displayingAct2_1 = true;
            loop();
            endTask2Button.hide();
        }, 3000);
        noLoop();
        return;
    }

    background(bgImageTask2);
    let yOffset = height / 2 + 200;
    for (let i = 0; i < pyramid.length; i++) {
        let xOffset = width / 2 - pyramid[i].length * 7.5;
        for (let j = 0; j < pyramid[i].length; j++) {
            fill(pyramid[i][j].color);
            text(pyramid[i][j].char, xOffset + j * 15, yOffset - i * 10);
        }
    }


    text(inputText, 280, height - 30);

    if (messageTimer > 0) {
        if (messageTimer > 30) {
            messageAlpha = map(messageTimer, 60, 30, 0, 255);
        } else {
            messageAlpha = map(messageTimer, 30, 0, 255, 0);
        }
        fill(255, 0, 0);
        textSize(25);
        text(message, messageX, messageY);
        textSize(20);
        messageTimer--;
    }

    if (pyramid.length >= rows) {
        console.log("j2iejijiejieji");
        displayingTask2 = false;
        displayingAct2_2 = true;
        endTask2Button.hide();
    }
}
function submitReportTask2() {
    showImageTask2 = true;
    aiCount++;
}
function keyTyped() {
    // Task2 的鍵盤事件
    if (!displayingTask2) return;
    if (pyramid.length < rows && key !== 'Enter') {
        inputText += key;
        if (random() < 0.1) {
            message = random(messagesTask2);
            messageX = random(width / 2 - 500, width / 2 + 500);
            messageY = random(height / 2 - 250, height / 2 + 250);
            messageTimer = 40;
        }
        if (inputText.length >= 17 - pyramid.length) {
            addTextToPyramidTask2(inputText);
            inputText = '';
        }
    }
}
function addTextToPyramidTask2(text) {
    if (text.length > 0) { // Ensure only non-empty rows are added
        let newRow = [];
        for (let i = 0; i < text.length; i++) {
            let charData = {
                char: text[i],
                color: random() < 0.1 ? color(255, 0, 0) : color(0),
            };
            newRow.push(charData);
        }
        pyramid.push(newRow);
    }
}


// =================== Task3 ===================

function drawTask3() {
    // 若尚未開始Task3，則自動執行startTask3()
    if (!task3HasStarted) {
        startTask3();
        task3HasStarted = true;
    }
}

// ---- Task3的函式 ----
async function startTask3() {
    for (let i = 0; i < 1000; i++) {
        let posX = random(-100, 800);
        let posY = random(-100, 1000);
        let sizeX = random(10, 200);
        let sizeY = random(10, 200);
        let colorH = mainHue + random(-30, 30);
        let colorS = random(10, 40);
        let colorB = random(80, 100);
        fill(colorH, colorS, colorB);
        noStroke();
        rect(posX, posY, sizeX, sizeY);
    }
    fill("black");
    textSize(100);
    textFont('Cubic-11');
    text("TASK 3", 240, 320);

    btnTask3.hide();
    btnPressure.show();
}

function showPressure() {
    clear();
    background("lightblue");
    image(imgPressure, 550, 60, 315, 150);
    btnPressure.hide();
    btnStart3.show();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

function showPhoneUI() {
    background(imgPhone);
    btnChoice1.show();
    btnChoice2.show();
    btnStart3.hide();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

async function startTask4() {
    clear();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
    btnTask4.hide();
    buttonStart4.show();

    for (let i = 0; i < 700; i++) {
        let posX = random(-100, 800);
        let posY = random(-100, 1000);
        let sizeX = random(10, 200);
        let sizeY = random(10, 200);
        let colorH = mainHue + random(-30, 30);
        let colorS = random(40, 60);
        let colorB = random(80, 100);
        fill(colorH, colorS, colorB);
        noStroke();
        rect(posX, posY, sizeX, sizeY);
    }
    fill("black");
    textSize(100);
    textFont('Cubic-11');
    text("TASK 4", 240, 320);
}


function aiShow() {
    fill(180, 10, 90);
    rect(425, 0, 850, 600);
    btnChoice1.hide();
    btnChoice2.hide();
    btnChoice3.show();
    btnChoice4.show();
    aiCount++;
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

function xShow() {
    fill(180, 10, 90);
    rect(0, 0, 450, 600);
    btnChoice1.hide();
    btnChoice2.hide();
    btnChoice5.show();
    btnChoice6.show();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

function aiShowAiWrite() {
    clear();
    background(imgAA);
    btnChoice3.hide();
    btnChoice4.hide();
    btnAA.show();
    aiCount++;
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function aiShowXWrite() {
    clear();
    background(imgAX);
    inputBox = createInput();
    inputBox.size(190, 65);
    inputBox.position(280, 465);
    inputBox.style("font-family", 'Cubic-11');
    inputBox.style("font-size", "24px");
    inputBox.style("background-color", "lightblue");

    btnChoice3.hide();
    btnChoice4.hide();
    btnAX.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function xShowAiWrite() {
    clear();
    background(imgXA);
    btnChoice5.hide();
    btnChoice6.hide();
    btnXA.show();
    aiCount++;
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function xShowXWrite() {
    clear();
    background(imgXX);
    inputBox = createInput();
    inputBox.size(190, 75);
    inputBox.position(280, 455);
    inputBox.style("font-family", 'Cubic-11');
    inputBox.style("font-size", "24px");
    inputBox.style("background-color", "lightblue");

    btnChoice5.hide();
    btnChoice6.hide();
    btnXX.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function AASend() {
    clear();
    background(imgAASend);
    btnAA.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_1 = true;
}

function AXSend() {
    clear();
    background(imgAXSend);
    let msg = inputBox.value();
    fill("black");
    textSize(24);
    text(msg, 300, 400);
    inputBox.hide();
    btnAX.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_2 = true;
}

function XASend() {
    clear();
    background(imgXASend);
    btnXA.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_1 = true;
}

function XXSend() {
    clear();
    background(imgXXSend);
    let msg = inputBox.value();
    fill("black");
    textSize(24);
    text(msg, 300, 395);
    inputBox.hide();
    btnXX.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_2 = true;
}

function hideAllTask3Buttons() {
    btnTask3.hide();
    btnPressure.hide();
    btnStart3.hide();
    btnTask4.hide();
    btnChoice1.hide();
    btnChoice2.hide();
    btnChoice3.hide();
    btnChoice4.hide();
    btnChoice5.hide();
    btnChoice6.hide();
    btnAA.hide();
    btnAX.hide();
    btnXA.hide();
    btnXX.hide();
    if (inputBox) {
        inputBox.hide();
    }
}

//Task4函式
////////////////////////////////////////////////////////////////////////////////////////////////

function drawTask4() {
    // 若尚未開始Task3，則自動執行startTask3()
    if (!task4HasStarted) {
        startTask4();
        task4HasStarted = true;
    }
}
function start4() {
    background(imgApp);
    buttonStart4.hide();
    button7.show();
    button8.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function end() {
    clear();
    buttonEnd.hide();
    displayingTask4 = false;
    displayingAct4_2 = true;
}
function end_() {
    clear();
    buttonEnd_.hide();
    displayingTask4 = false;
    displayingAct4_1 = true;
}
function aiChat() {
    clear();
    background(imgAiChat1);
    button7.hide();
    button8.hide();
    buttonSend1.show();
    aiCount++;
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send1() {
    clear();
    background(imgAiChat2);
    buttonSend1.hide();
    buttonSend2.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send2() {
    clear();
    background(imgAiChat3);
    buttonSend2.hide();
    buttonSend3.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send3() {
    clear();
    background(imgAiChat4);
    buttonSend3.hide();
    buttonSend4.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send4() {
    clear();
    background(imgAiChat5);
    buttonSend4.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
    displayingTask4 = false;
    displayingAct4_1 = true;
}
function xChat() {
    clear();
    background(imgX1);
    button7.hide();
    button8.hide();
    buttonYes1.show();
    buttonNo1.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes1() {
    clear();
    background(imgFailed);
    buttonYes1.hide();
    buttonNo1.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes2() {
    clear();
    background(imgFailed);
    buttonYes2.hide();
    buttonNo2.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes3() {
    clear();
    background(imgFailed);
    buttonYes3.hide();
    buttonNo3.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes4() {
    clear();
    background(imgFailed);
    buttonYes4.hide();
    buttonNo4.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no1() {
    clear();
    background(imgX2);
    buttonYes1.hide();
    buttonNo1.hide();
    buttonYes2.show();
    buttonNo2.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no2() {
    clear();
    background(imgX3);
    buttonYes2.hide();
    buttonNo2.hide();
    buttonYes3.show();
    buttonNo3.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no3() {
    clear();
    background(imgX4);
    buttonYes3.hide();
    buttonNo3.hide();
    buttonYes4.show();
    buttonNo4.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no4() {
    clear();
    background(imgX5);
    buttonYes4.hide();
    buttonNo4.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}

function hideAllTask4Buttons() {
    buttonStart4.hide();
    buttonEnd.hide();
    buttonEnd_.hide();
    button7.hide();
    button8.hide();
    buttonSend1.hide();
    buttonSend2.hide();
    buttonSend3.hide();
    buttonSend4.hide();
    buttonYes1.hide();
    buttonNo1.hide();
    buttonYes2.hide();
    buttonNo2.hide();
    buttonYes3.hide();
    buttonNo3.hide();
    buttonYes4.hide();
    buttonNo4.hide();

}

// =================== 任務一類別定義 (Bin & Trash) ===================
class Bin {
    constructor(x, y, img, color) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.color = color;
        this.size = 200;
    }
    show() {
        image(this.img, this.x, this.y, this.size, this.size);
    }
    isMouseOver() {
        return (mouseX > this.x && mouseX < this.x + this.size &&
            mouseY > this.y && mouseY < this.y + this.size);
    }
    isTrashCorrect(trash) {
        return this.color === trash.color;
    }
}

class Trash {
    constructor(x, y, img, color) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.color = color;
        this.size = 100;
    }
    show() {
        image(this.img, this.x, this.y, this.size, this.size);
    }
    isMouseOver() {
        return (mouseX > this.x && mouseX < this.x + this.size &&
            mouseY > this.y && mouseY < this.y + this.size);
    }
}
function handleSheep() {
    // 畫出羊
    image(imgSheep, sheepX, sheepY, sheepSize, sheepSize);

    // 顯示 log 圖片（2 秒後自動消失）
    if (currentLogIndex !== -1 && millis() - logTimer < 3000) {
        image(imgLogs[currentLogIndex - 1], width / 2 - 200, height / 2 - 100, 400, 200); // 調整圖片大小與位置
    } else if (currentLogIndex !== -1 && millis() - logTimer >= 2000) {
        currentLogIndex = -1; // 超時後清除 log
    }
}
function startWithFadeIn() {
    if (!bgm.isPlaying()) {
      // 從 0 音量開始，loop 先啟動
      bgm.setVolume(0);
      bgm.loop();
      // 在 3 秒內，volume 緩升到 0.8
      bgm.fade(0.6, 2);
    }}