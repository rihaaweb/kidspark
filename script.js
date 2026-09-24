/* =========================================
   KIDS PARK - VERSION 1
========================================= */


/* =========================================
   20 STORIES
========================================= */

function updateStoryCounts() {

    // Total stories
    const totalStories = stories.length;

    // Featured stories count
    const featuredCount = document.querySelector(".featured-count");

    if (featuredCount) {
        featuredCount.textContent =
            `${totalStories} ${totalStories === 1 ? "Story" : "Stories"}`;
    }

    // Category counts
    document.querySelectorAll(".category-card").forEach(card => {

        const category = card.dataset.category;

        const count = stories.filter(story =>
            story.category.toLowerCase() === category.toLowerCase()
        ).length;

        const countElement = card.querySelector(".category-count");

        if (countElement) {
            countElement.textContent = count;
        }

    });
}



const stories = [
// latest stories write here 

//     {
//     id: 44,

//     category: "Adventure",

//     emoji: "🏔️🥾🧭",

//     title: "hari ",

//     text:"hello my name is hari"

// },

// latest stories write here bottam total 1 -- 43 stories found 

   {
    id: 1,

    category: "Animal",

    emoji: "🦁🌳",

    title: "Leo the Brave Little Lion",

    text:
        "Once upon a time, in a beautiful green jungle, there lived a young lion named Leo. " +
        "Leo was not like the other lions. He had a soft golden mane, bright brown eyes, and a very kind heart. " +
        "Although everyone called him a lion, Leo was still small and often felt nervous when he faced something new. " +
        "Every morning, Leo played near the river with his best friends, Mia the little rabbit and Toby the turtle. " +
        "One sunny morning, Leo, Mia, and Toby were playing hide-and-seek near the forest. " +
        "Suddenly, they heard a loud cry. \"Help! Help!\" " +
        "The three friends stopped playing. \"Who is that?\" asked Mia. \"I don't know,\" said Toby. " +
        "Leo looked toward the tall trees. \"I think someone needs our help. Let's find out!\" " +
        "They followed the sound and discovered a tiny bird sitting on a low branch. " +
        "\"My nest fell from the tree,\" cried the little bird. \"My babies are inside, and I can't reach them!\" " +
        "Leo looked at the tall tree. The nest was stuck between two branches high above the ground. " +
        "Leo felt scared. \"I am too small,\" he thought. " +
        "Mia looked at Leo. \"You can do it, Leo!\" " +
        "Toby nodded. \"Being brave doesn't mean you are never scared. It means you try even when you are scared.\" " +
        "Leo took a deep breath. \"I will try.\" " +
        "He carefully climbed the tree. One branch... Then another... And another... " +
        "The wind began to blow. Leo held on tightly. \"Don't look down,\" he told himself. " +
        "Finally, he reached the nest. The baby birds were safe. " +
        "\"Thank you!\" chirped the mother bird happily. " +
        "Leo carefully carried the nest down and placed it safely beside the tree. " +
        "The little birds jumped happily into their mother's wings. Everyone cheered. " +
        "\"You were so brave!\" said Mia. " +
        "Leo smiled. \"I was scared, but I didn't give up.\" " +
        "Just then, they heard another sound. \"ROAAAR!\" " +
        "The ground seemed to shake. Mia quickly hid behind Leo. Toby pulled his head into his shell. " +
        "Leo looked around nervously. A huge shadow appeared between the trees. It was Leo's father, King Max. " +
        "Leo's father smiled. \"I heard what happened. I am proud of you, Leo.\" " +
        "Leo looked surprised. \"Even though I was scared?\" " +
        "King Max nodded. \"Especially because you were scared. Courage is not about having no fear. " +
        "Courage is choosing to do the right thing even when you are afraid.\" " +
        "Leo felt warm inside. " +
        "From that day on, Leo stopped thinking that being small meant being weak. " +
        "He helped his friends whenever they needed him. He protected smaller animals. He shared his food. " +
        "And whenever he felt afraid, he remembered the little birds. " +
        "One evening, Leo sat beside the river watching the sunset. Mia and Toby sat beside him. " +
        "\"You really are a brave lion,\" said Mia. " +
        "Leo laughed. \"Maybe I am not the biggest lion in the jungle.\" " +
        "Toby smiled. \"But you have one of the biggest hearts.\" " +
        "The three friends watched the golden sun disappear behind the trees. " +
        "And Leo learned an important lesson that he would never forget: " +
        "Being brave does not mean you are never afraid. Being brave means you keep going, help others, and do what is right even when you are scared. " +
        "And from that day forward, Leo became known throughout the jungle as Leo the Brave Little Lion. " +
        "The End."
},


    {
    id: 2,

    category: "Moral",

    emoji: "🦁🤝",

    title: "The Lion Who Learned to Share",

    text:
        "Once upon a time, in a beautiful green forest surrounded by tall mountains, there lived a strong lion named Leo. " +
        "Leo was the biggest animal in the forest, and all the animals respected him. " +
        "He had a golden mane, sharp claws, and a loud roar that could be heard from far away. " +
        "Leo loved eating delicious fruits and juicy berries that grew near his cave. " +
        "One sunny morning, Leo found a large tree filled with the sweetest golden mangoes. " +
        "He quickly climbed onto the rocks beneath the tree and collected many mangoes. " +
        "\"These mangoes are all mine!\" Leo said proudly. " +
        "He carried the mangoes back to his cave and made a big pile. " +
        "Soon, a little rabbit named Ruby came hopping near the cave. " +
        "\"Hello, Leo,\" said Ruby. \"I am very hungry. Could you please give me one mango?\" " +
        "Leo looked at his big pile of mangoes. " +
        "\"No! I found them, so they are mine,\" he replied. " +
        "Ruby felt sad and quietly hopped away. " +
        "A little later, a squirrel named Sammy came to the cave. " +
        "\"Leo, could you share one mango with me? I have not eaten since morning,\" Sammy asked. " +
        "\"No, Sammy. I want to keep all the mangoes for myself,\" said Leo. " +
        "Sammy sadly returned to his tree. " +
        "As the afternoon passed, Leo continued eating mangoes. " +
        "But there were far too many for one lion to eat. " +
        "By evening, Leo's stomach hurt because he had eaten too much. " +
        "He looked at the remaining mangoes and realized that many of them were beginning to spoil. " +
        "\"Oh no! I cannot eat all these mangoes,\" Leo said sadly. " +
        "That night, a strong wind blew through the forest. " +
        "Many animals could not find enough food because the wind had knocked fruits from the trees. " +
        "Leo remembered Ruby and Sammy. " +
        "The next morning, Leo walked through the forest carrying the remaining fresh mangoes. " +
        "He found Ruby near her little home. " +
        "\"Ruby, I am sorry,\" Leo said. \"Yesterday I should have shared my mangoes with you.\" " +
        "Ruby smiled and accepted a mango. " +
        "Then Leo found Sammy sitting under a tree. " +
        "\"Sammy, I have brought you some mangoes too,\" Leo said. " +
        "Sammy happily thanked him. " +
        "Soon, Leo shared the mangoes with all the hungry animals in the forest. " +
        "The animals were very happy. " +
        "They thanked Leo and invited him to eat with them. " +
        "Leo sat beneath a large tree and enjoyed the meal with his friends. " +
        "For the first time, he discovered that food tasted even better when everyone shared it together. " +
        "\"I understand now,\" Leo said. \"Having something is wonderful, but sharing it with others makes it even more special.\" " +
        "From that day on, Leo never kept everything for himself. " +
        "Whenever he found delicious fruits, he shared them with the animals around him. " +
        "The forest became a happier place, and Leo became known not only as the strongest lion but also as the kindest one. " +
        "The animals learned that sharing brings happiness, friendship, and love. " +
        "And Leo learned that a generous heart is more valuable than a big pile of food. " +
        "The End."
},


  {
    id: 3,

    category: "Animal",

    emoji: "🐘✨",

    title: "Ellie and the Magic Elephant",

    text:
        "Once upon a time, in a beautiful green forest surrounded by tall mountains, there lived a young elephant named Ellie. " +
        "Ellie was a cheerful little elephant with big ears, a tiny tail, and a long, playful trunk. " +
        "She loved exploring the forest with her friends. " +
        "Every morning, Ellie walked along the forest path, greeting all the animals. " +
        "\"Good morning, Mr. Deer!\" " +
        "\"Good morning, Ellie!\" replied the deer. " +
        "\"Hello, Sammy Squirrel!\" " +
        "\"Hello, Ellie!\" said Sammy. " +
        "Ellie loved making everyone smile. " +
        "But Ellie had one secret. She wished she could do something truly special. " +
        "One morning, while Ellie was walking near an old tree, she noticed something shining beneath the leaves. " +
        "\"What is that?\" Ellie wondered. " +
        "She moved the leaves with her trunk. There was a small golden stone. " +
        "The stone was glowing brightly. " +
        "Ellie touched it with her trunk. Suddenly, a soft golden light surrounded her. " +
        "\"Wow!\" " +
        "A tiny voice came from the stone. \"Ellie, you have been chosen because you have a kind heart.\" " +
        "Ellie looked around. \"Who said that?\" " +
        "\"I did,\" said the golden stone. \"I am a magic stone. I can give you one special power.\" " +
        "Ellie thought carefully. She could ask for anything. " +
        "She could become the fastest animal in the forest. She could become stronger than everyone. She could even fly. " +
        "But then Ellie heard a sad sound. \"Help!\" " +
        "Ellie quickly followed the voice. Behind some bushes, she found a little rabbit. " +
        "\"What happened?\" asked Ellie. " +
        "\"My little brother is lost,\" cried the rabbit. \"I can't find him anywhere.\" " +
        "Ellie looked at the golden stone. \"I know what I want my magic power to be.\" " +
        "The golden stone began to glow. \"Your wish is granted.\" " +
        "Suddenly, Ellie's trunk began to shine with golden light. She could now hear the sounds of animals from very far away. " +
        "Ellie closed her eyes. \"I hear something!\" " +
        "She followed the sound through the forest. She crossed a small stream. She walked past tall trees. " +
        "Finally, she reached a deep hole. At the bottom of the hole was the little rabbit. " +
        "\"Don't worry!\" called Ellie. \"I will help you!\" " +
        "Ellie carefully lowered her trunk into the hole. The little rabbit held onto it. " +
        "\"Hold tight!\" " +
        "Ellie gently pulled him up. The rabbit jumped into his sister's arms. " +
        "\"Thank you, Ellie!\" " +
        "Ellie smiled. \"I am happy I could help.\" " +
        "But Ellie's adventure was not over. " +
        "Later that afternoon, dark clouds covered the sky. A strong wind began to blow. " +
        "The animals became worried. Suddenly, heavy rain started falling. The river began to rise. " +
        "\"Everyone, move to higher ground!\" shouted Ellie. " +
        "The animals quickly followed her. But then Ellie noticed that several small animals were trapped on the other side of the river. " +
        "\"We have to help them!\" " +
        "Ellie stood beside the river. She used her powerful trunk to move large branches away from the water. " +
        "Then she found a fallen tree. With all her strength, she pushed it across the river. " +
        "The animals carefully crossed the tree and reached safety. " +
        "When the rain finally stopped, the forest animals gathered around Ellie. " +
        "\"You saved us!\" said the deer. \"You helped everyone!\" said the rabbit. " +
        "Ellie looked at her glowing trunk. The golden stone appeared beside her. " +
        "\"You used your magic power wisely,\" it said. " +
        "Ellie smiled. \"I don't think the magic made me special.\" " +
        "The stone asked, \"Why?\" " +
        "\"Because I was already happy helping my friends.\" " +
        "The golden stone began to glow brighter than ever. \"You have learned the greatest magic of all.\" " +
        "\"What is it?\" asked Ellie. " +
        "\"Kindness.\" " +
        "The golden light disappeared. The magic stone turned into a beautiful little flower. " +
        "Ellie picked it up carefully and planted it beside her favorite tree. " +
        "From that day on, Ellie continued helping everyone in the forest. " +
        "She never wished to be the fastest, strongest, or most powerful animal. " +
        "She only wished to have a kind heart. " +
        "And whenever someone needed help, Ellie was always there. " +
        "The animals began calling her Ellie the Magic Elephant. " +
        "But Ellie knew the real magic was not in the golden stone. " +
        "It was in kindness, courage, and helping others. " +
        "And the beautiful forest became a happier place because of one little elephant with a very big heart. " +
        "The End."
},


    {
    id: 4,

    category: "Moral",

    emoji: "🐰❤️",

    title: "The Honest Little Rabbit",

    text:
        "Once upon a time, in a peaceful forest filled with tall trees and colorful flowers, there lived a little rabbit named Ruby. " +
        "Ruby had soft white fur, long ears, and a tiny pink nose. " +
        "She was cheerful, friendly, and always loved helping her friends. " +
        "One morning, Ruby was walking along the forest path when she saw something shining under a bush. " +
        "She moved closer and found a beautiful golden necklace. " +
        "\"Wow! This is so pretty,\" Ruby said. " +
        "She picked it up carefully and looked around. " +
        "There was nobody nearby. " +
        "Ruby thought about keeping the necklace for herself. " +
        "She imagined wearing it while playing with her friends. " +
        "But then she remembered what her mother always told her. " +
        "\"Always be honest, even when nobody is watching.\" " +
        "Ruby looked at the necklace again. " +
        "\"Someone must be looking for this,\" she said. " +
        "She decided to find its owner. " +
        "Ruby walked through the forest and asked the animals if they had lost a necklace. " +
        "First, she met a squirrel named Sammy. " +
        "\"Sammy, did you lose this golden necklace?\" Ruby asked. " +
        "\"No, Ruby. It does not belong to me,\" Sammy replied. " +
        "Then Ruby met a deer near the river. " +
        "\"Did you lose a golden necklace?\" she asked. " +
        "The deer shook her head. \"No, but I hope you find the owner.\" " +
        "Ruby continued searching. " +
        "Soon, she heard someone crying near a large oak tree. " +
        "It was an old rabbit named Mrs. Hazel. " +
        "\"Why are you crying?\" Ruby asked kindly. " +
        "Mrs. Hazel wiped her tears and said, \"I lost a golden necklace that belonged to my mother. It is very special to me.\" " +
        "Ruby's eyes became bright with happiness. " +
        "\"Is this the necklace you lost?\" she asked. " +
        "She carefully showed Mrs. Hazel the golden necklace. " +
        "Mrs. Hazel gasped with surprise. " +
        "\"Yes! That is my necklace!\" she cried happily. " +
        "She hugged Ruby tightly. " +
        "\"Thank you so much for returning it. You could have kept it, but you chose to be honest.\" " +
        "Ruby smiled. \"I knew it belonged to you, so I wanted to return it.\" " +
        "Mrs. Hazel thanked Ruby again and gave her a small basket of fresh berries as a gift. " +
        "Ruby happily accepted the berries but said, \"Thank you, but helping you was already enough for me.\" " +
        "When Ruby returned home, she told her mother what had happened. " +
        "Her mother smiled proudly and hugged her. " +
        "\"You made the right choice, Ruby. Honesty makes your heart strong and earns the trust of others.\" " +
        "The next day, all the animals in the forest heard about Ruby's honesty. " +
        "They praised her for doing the right thing even when she could have kept the necklace. " +
        "Ruby felt happy because she had learned something important. " +
        "She understood that doing the right thing is more valuable than owning something that does not belong to you. " +
        "From that day on, Ruby always chose honesty, even when making the right choice was difficult. " +
        "The animals trusted her completely, and she became known as the most honest little rabbit in the forest. " +
        "The End."
},


   {
    id: 5,

    category: "Animal",

    emoji: "🐰🌳",

    title: "Bunny's Big Adventure",

    text:
        "Once upon a time, in a peaceful green forest, there lived a little rabbit named Bunny. " +

        "Bunny had soft white fur, long ears, and a tiny pink nose. He loved exploring the forest, but he had never gone very far from his home. " +

        "One bright morning, Bunny woke up early and decided to go on an adventure. " +

        "\"Today, I am going to discover something new!\" he said happily. " +

        "Bunny packed a few carrots into his little bag and hopped along the forest path. " +

        "Soon, he reached a beautiful meadow filled with colorful flowers. " +

        "\"Wow! I have never seen this place before!\" Bunny said. " +

        "As Bunny explored the meadow, he heard a strange sound. " +

        "\"Tweet! Tweet! Help!\" " +

        "Bunny looked up and saw a little bird sitting on the ground. " +

        "\"What happened?\" Bunny asked. " +

        "\"I was flying with my family, but I got separated from them,\" cried the little bird. " +

        "Bunny felt sorry for the bird. " +

        "\"Don't worry. I will help you find your family.\" " +

        "Bunny and the little bird began walking through the forest together. " +

        "They crossed a small wooden bridge and walked beside a sparkling stream. " +

        "Suddenly, they heard a loud roar. " +

        "\"ROAR!\" " +

        "The little bird became frightened and hid behind Bunny. " +

        "Bunny was scared too, but he decided to be brave. " +

        "\"Let's find out what made that sound,\" he said. " +

        "They slowly walked toward the sound and discovered a young bear trying to move a large branch. " +

        "\"I am not a monster!\" said the bear. \"I just need help moving this branch.\" " +

        "Bunny smiled. " +

        "\"We can help you!\" " +

        "Bunny pushed with all his strength while the little bird pulled some small sticks away. " +

        "The young bear finally moved the branch. " +

        "\"Thank you, Bunny!\" said the bear. " +

        "The bear then asked, \"Where are you going?\" " +

        "Bunny explained that he was helping the little bird find its family. " +

        "\"I know where the birds live,\" said the bear. \"Follow me.\" " +

        "The three friends walked deeper into the forest. " +

        "After a while, they reached a tall tree. " +

        "The little bird suddenly became excited. " +

        "\"That's my family!\" it shouted. " +

        "A group of birds flew down from the tree and surrounded the little bird. " +

        "\"Thank you for helping our little one,\" said the mother bird. " +

        "Bunny felt very happy. " +

        "But before Bunny could leave, the sky suddenly became dark. " +

        "Strong wind began blowing through the trees. " +

        "\"We need to find shelter!\" shouted the bear. " +

        "Bunny noticed a small cave nearby. " +

        "\"Everyone, follow me!\" " +

        "The friends quickly ran into the cave. " +

        "Soon, heavy rain began falling outside. " +

        "Bunny, the bear, and the birds stayed safely inside the cave until the storm passed. " +

        "After some time, the rain stopped and the sun came out again. " +

        "A beautiful rainbow appeared across the sky. " +

        "The little bird smiled at Bunny. " +

        "\"You came looking for an adventure, but you became a hero instead.\" " +

        "Bunny laughed. " +

        "\"I didn't do anything special. I just helped my friends.\" " +

        "The bear smiled. " +

        "\"That is what makes you special.\" " +

        "Bunny said goodbye to his new friends and hopped back toward his home. " +

        "When he arrived, his mother was waiting for him. " +

        "\"Where have you been, Bunny?\" she asked. " +

        "Bunny told her all about his adventure, the little bird, the bear, and the storm. " +

        "His mother hugged him proudly. " +

        "\"You went on a big adventure today, but the most important thing you discovered was the joy of helping others.\" " +

        "Bunny smiled and looked at the colorful sunset. " +

        "From that day on, Bunny was never afraid to explore new places. " +

        "He knew that every adventure could bring a new friend, a new lesson, and a chance to do something kind. " +

        "And so, Bunny the little rabbit became known throughout the forest as a brave and helpful friend. " +

        "The End."
},


    {
    id: 6,

    category: "Moral",

    emoji: "🐢💪",

    title: "The Turtle Who Never Gave Up",

    text:
        "Once upon a time, in a beautiful forest beside a sparkling river, there lived a small turtle named Timmy. " +
        "Timmy had a hard green shell, little legs, and a kind heart. " +
        "He loved exploring the forest, but he was much slower than the other animals. " +
        "One morning, the animals announced a race from the big oak tree to the blue river. " +
        "A fast rabbit named Ricky proudly joined the race. " +
        "A clever fox named Felix also joined. " +
        "When Timmy said he wanted to participate, some animals laughed. " +
        "\"You are too slow to win a race,\" Ricky said. " +
        "Timmy smiled and replied, \"I may be slow, but I will do my best.\" " +
        "The race began when the owl shouted, \"Go!\" " +
        "Ricky jumped forward quickly and disappeared down the forest path. " +
        "Felix ran closely behind him. " +
        "Timmy slowly moved one step at a time. " +
        "After a while, Timmy became tired. " +
        "He stopped under a tree and took a short rest. " +
        "Then he looked toward the river. " +
        "\"I still have a long way to go, but I will not give up,\" he said. " +
        "Meanwhile, Ricky reached a beautiful meadow. " +
        "He looked behind him and could not see Timmy anywhere. " +
        "\"I am far ahead,\" Ricky said proudly. " +
        "He decided to rest beneath a shady tree. " +
        "Soon, he fell asleep. " +
        "Felix continued running, but he became distracted by a colorful butterfly. " +
        "He chased the butterfly around the flowers and forgot about the race. " +
        "Timmy kept moving slowly along the path. " +
        "Step by step, he passed the sleeping rabbit. " +
        "He passed the meadow where Felix was playing. " +
        "The sun moved higher in the sky, but Timmy continued walking. " +
        "His legs were tired, but he remembered his promise to himself. " +
        "\"I will keep going,\" he whispered. " +
        "Finally, Timmy reached the riverbank. " +
        "He looked back and saw that the other racers were still far behind. " +
        "A few minutes later, Ricky woke up and rushed toward the finish line. " +
        "But when he arrived, Timmy was already there. " +
        "\"I cannot believe it!\" Ricky exclaimed. " +
        "Felix soon arrived too and was surprised to see Timmy holding the winner's flower. " +
        "The animals gathered around Timmy and cheered loudly. " +
        "\"Timmy won! Timmy won!\" they shouted. " +
        "Ricky walked toward Timmy and lowered his head. " +
        "\"I am sorry I laughed at you,\" Ricky said. \"You taught me an important lesson.\" " +
        "Timmy smiled and said, \"Everyone has different strengths. The important thing is to keep trying.\" " +
        "The forest animals clapped happily. " +
        "From that day on, nobody laughed at Timmy for being slow. " +
        "Instead, they admired his patience, courage, and determination. " +
        "Timmy learned that success does not always come from being the fastest or the strongest. " +
        "Sometimes, success comes from taking small steps and never giving up. " +
        "And whenever the forest animals faced a difficult challenge, they remembered Timmy's words: \"Keep going, one step at a time.\" " +
        "The End."
},


   {
    id: 7,

    category: "Animal",

    emoji: "🦊🌲",

    title: "Finn the Clever Fox",

    text:
        "Once upon a time, in a beautiful forest surrounded by tall green trees, there lived a clever little fox named Finn. " +

        "Finn had bright orange fur, a fluffy tail, and curious green eyes. " +

        "He loved solving problems and helping his friends. " +

        "One morning, Finn was walking through the forest when he heard a worried voice. " +

        "\"Oh no! What am I going to do?\" " +

        "Finn followed the voice and found a little squirrel sitting beside an empty basket. " +

        "\"What happened?\" asked Finn. " +

        "\"I collected many acorns for winter, but my basket disappeared!\" cried the squirrel. " +

        "Finn looked around carefully. " +

        "\"Don't worry. We will find it.\" " +

        "Finn noticed some tiny footprints in the soft ground. " +

        "\"These footprints lead toward the river,\" he said. " +

        "Finn and the squirrel followed the footprints. " +

        "Near the river, they found a small bridge. " +

        "But the footprints suddenly disappeared. " +

        "\"Hmm... Where did they go?\" wondered Finn. " +

        "Finn looked at the water and noticed a few acorns floating downstream. " +

        "\"The basket must have fallen into the river!\" he said. " +

        "They followed the river until they reached a small pond. " +

        "There, they saw the basket stuck between two rocks. " +

        "\"We found it!\" shouted the squirrel happily. " +

        "But the basket was too far away for the squirrel to reach. " +

        "Finn thought carefully. " +

        "He found a long branch and pushed it between the rocks. " +

        "With a little effort, he pulled the basket closer. " +

        "The squirrel quickly grabbed it. " +

        "\"Thank you, Finn! You are so clever!\" " +

        "Finn smiled. " +

        "\"Sometimes, we just need to stop, look carefully, and think.\" " +

        "Later that afternoon, Finn heard another cry for help. " +

        "\"Help! Help!\" " +

        "This time, a little deer was standing near a tall bush. " +

        "\"I can't find my way home,\" said the deer. " +

        "Finn looked at the trees and noticed some yellow flowers along the path. " +

        "\"I remember seeing these flowers near the deer family meadow,\" he said. " +

        "Finn followed the flowers and soon found the meadow. " +

        "The little deer's family was waiting there. " +

        "\"Thank you for bringing our little one home,\" said the mother deer. " +

        "As the sun began to set, Finn continued walking through the forest. " +

        "Suddenly, he saw a group of animals gathered around a large tree. " +

        "\"What happened?\" Finn asked. " +

        "\"A strong wind blew down this tree, and now we cannot reach the other side of the forest,\" said the animals. " +

        "Finn looked at the fallen tree. " +

        "He noticed that the tree had fallen across a narrow stream. " +

        "\"We don't need to move the whole tree,\" Finn said. " +

        "He found several strong branches and placed them across the stream. " +

        "The animals helped him make a small path. " +

        "One by one, they crossed safely. " +

        "\"Finn solved another problem!\" cheered the animals. " +

        "Finn felt happy, but he knew he could not solve every problem alone. " +

        "\"The best solutions come when everyone works together,\" he said. " +

        "That evening, the animals gathered around the fire and shared their food. " +

        "The squirrel brought acorns. " +

        "The deer brought fresh berries. " +

        "The birds brought delicious seeds. " +

        "Finn looked at all his friends and smiled. " +

        "He had learned something important that day. " +

        "Being clever was not only about finding answers. " +

        "It was also about staying calm, helping others, and working together. " +

        "From that day on, whenever an animal had a problem, they knew exactly who to call. " +

        "\"Finn!\" they would shout. " +

        "And Finn would always come running with his clever ideas and a kind heart. " +

        "The End."
},


   {
    id: 8,

    category: "Moral",

    emoji: "🐦🏡",

    title: "The Little Bird and the Broken Nest",

    text:
        "Once upon a time, in a peaceful forest filled with tall green trees, there lived a little bird named Bella. " +
        "Bella had bright blue feathers, tiny wings, and a cheerful voice. " +
        "She lived in a small nest high on a beautiful mango tree with her mother. " +
        "Every morning, Bella loved flying around the forest and singing happy songs. " +
        "One afternoon, dark clouds appeared in the sky. " +
        "A strong wind began to blow through the forest. " +
        "Whoosh! Whoosh! " +
        "The trees moved from side to side, and leaves flew everywhere. " +
        "Bella quickly flew back toward her nest. " +
        "But before she could reach it, a powerful gust of wind hit the tree. " +
        "Crash! " +
        "The little nest fell from the branch and broke into pieces. " +
        "Bella landed beside it and looked sadly at her broken home. " +
        "\"Oh no! What will I do now?\" she cried. " +
        "She tried to fix the nest by herself, but the branches were too heavy for her tiny beak. " +
        "Bella became tired and sat quietly beneath the tree. " +
        "Soon, a squirrel named Sammy noticed her. " +
        "\"Why are you sad, Bella?\" Sammy asked. " +
        "\"My nest broke during the storm, and I cannot fix it alone,\" Bella replied. " +
        "Sammy looked at the broken nest. " +
        "\"Do not worry. I will help you,\" he said. " +
        "Sammy collected small twigs and carried them to Bella. " +
        "Then a rabbit named Ruby came hopping over. " +
        "\"I saw you working together. Can I help too?\" Ruby asked. " +
        "\"Of course!\" Bella replied happily. " +
        "Ruby collected soft grass and leaves for the new nest. " +
        "A deer named Daisy also joined them and used her strong legs to move a fallen branch away from the nest area. " +
        "Even a little mouse brought tiny pieces of straw. " +
        "Bella watched her friends working together and felt very happy. " +
        "They carefully placed the twigs, grass, leaves, and straw together. " +
        "After several hours, they built a warm and comfortable new nest. " +
        "Bella jumped happily inside. " +
        "\"It is even better than my old nest!\" she said. " +
        "Her mother returned just as the new nest was finished. " +
        "She was surprised and touched by the kindness of all the animals. " +
        "\"Thank you, everyone,\" she said warmly. " +
        "That evening, Bella sang a beautiful song for her friends. " +
        "The animals sat beneath the tree and listened happily. " +
        "Bella realized that when something goes wrong, asking for help is not a weakness. " +
        "Good friends can make difficult problems easier. " +
        "From that day on, Bella always helped her friends whenever they needed her. " +
        "The animals of the forest became closer because they knew they could depend on one another. " +
        "Bella never forgot the day her nest broke. " +
        "She remembered that a broken home could be rebuilt, but the kindness of true friends was something even more precious. " +
        "The End."
},


    {
    id: 9,

    category: "Animal",

    emoji: "🐢🌊",

    title: "Toby the Little Turtle",

    text:
        "Once upon a time, near a beautiful blue lake, there lived a little turtle named Toby. " +

        "Toby had a small green shell, bright eyes, and a very kind heart. " +

        "He loved exploring the lake and playing with his friends. " +

        "But Toby had one problem. He was always slower than everyone else. " +

        "His friend Rabbit could run very fast. " +

        "The birds could fly high in the sky. " +

        "Even the little frogs could jump farther than Toby. " +

        "One morning, Toby's friends decided to have a race around the lake. " +

        "\"Come and join us, Toby!\" said Rabbit. " +

        "Toby looked at the long path around the lake. " +

        "\"I am too slow. I will never win,\" he said sadly. " +

        "Rabbit smiled. " +

        "\"You don't have to be the fastest. Just have fun!\" " +

        "Toby decided to join the race. " +

        "\"Ready, set, go!\" shouted the birds. " +

        "Rabbit ran quickly. " +

        "The frogs jumped ahead. " +

        "The birds flew over the trees. " +

        "Toby slowly walked along the path. " +

        "After a while, he noticed a tiny butterfly trapped under a leaf. " +

        "\"Are you okay?\" Toby asked. " +

        "\"I can't get out,\" cried the butterfly. " +

        "Toby carefully pushed the leaf away with his shell. " +

        "The butterfly flew into the air. " +

        "\"Thank you, Toby!\" " +

        "Toby smiled and continued walking. " +

        "A little farther ahead, Toby heard a strange sound. " +

        "\"Splash! Help!\" " +

        "He looked toward the lake and saw a baby duck struggling in the water. " +

        "Toby quickly moved toward the lake. " +

        "He entered the water and let the baby duck hold onto his shell. " +

        "Slowly, Toby carried the duck safely back to the shore. " +

        "\"You saved me!\" said the baby duck happily. " +

        "Toby smiled and continued his journey. " +

        "By now, the other racers were far ahead. " +

        "Toby was almost ready to give up. " +

        "Then he remembered what Rabbit had said. " +

        "\"Just have fun.\" " +

        "So Toby continued walking without worrying about the race. " +

        "As he reached the final part of the path, he saw something blocking the road. " +

        "It was a large fallen tree. " +

        "Rabbit and the frogs were standing on the other side. " +

        "\"We can't get past it!\" shouted Rabbit. " +

        "Toby looked carefully at the tree. " +

        "He noticed a small opening underneath it. " +

        "\"There is a way through!\" Toby called. " +

        "Because Toby was small and had a strong shell, he crawled underneath the tree. " +

        "He reached the other side and found a loose branch. " +

        "Toby pushed the branch away and made the opening bigger. " +

        "Rabbit and the frogs quickly crawled through. " +

        "\"Toby saved the race!\" shouted Rabbit. " +

        "Together, they continued toward the finish line. " +

        "When Toby finally reached the finish line, all his friends cheered. " +

        "\"Toby! Toby! Toby!\" " +

        "Toby looked surprised. " +

        "\"But I came last.\" " +

        "Rabbit laughed. " +

        "\"You may have come last, but you helped the butterfly, saved the baby duck, and helped all of us cross the tree.\" " +

        "The birds nodded. " +

        "\"You didn't win the race, Toby. You won something much more important.\" " +

        "\"What did I win?\" asked Toby. " +

        "Rabbit smiled. " +

        "\"You won the hearts of all your friends.\" " +

        "Toby felt very happy. " +

        "From that day on, Toby never worried about being slow. " +

        "He learned that everyone has their own special strength. " +

        "Some animals can run fast. " +

        "Some can fly. " +

        "Some can jump. " +

        "And some, like Toby, are patient, kind, and never give up. " +

        "The little turtle continued exploring the lake with his friends, always moving at his own pace. " +

        "And whenever someone needed help, Toby was there. " +

        "The End."
},


    {
    id: 10,

    category: "Moral",

    emoji: "🐶🤝",

    title: "The Dog Who Helped a Stranger",

    text:
        "Once upon a time, in a small village surrounded by green fields and beautiful trees, there lived a friendly dog named Bruno. " +
        "Bruno had soft brown fur, floppy ears, and a happy wagging tail. " +
        "He lived with a kind family who always taught him to help others. " +
        "Every morning, Bruno walked around the village and greeted everyone he met. " +
        "One sunny afternoon, Bruno was walking near the village road when he saw an old dog sitting alone beside a large tree. " +
        "The old dog looked tired and worried. " +
        "Bruno slowly walked toward him. " +
        "\"Hello, friend. Are you okay?\" Bruno asked. " +
        "The old dog looked up and said, \"I am lost. I was traveling with my owner, but I became separated from him.\" " +
        "Bruno felt sorry for the old dog. " +
        "\"Do not worry. I will help you find your way home,\" Bruno said kindly. " +
        "The old dog smiled. \"Thank you, little friend.\" " +
        "Bruno asked him what his home looked like. " +
        "\"I remember a blue house beside a small pond,\" the old dog replied. " +
        "Bruno began searching through the village with him. " +
        "They walked past the market, the school, and the village garden. " +
        "But they could not find the blue house. " +
        "After walking for a long time, the old dog became tired. " +
        "Bruno found some clean water near a garden and brought it to him. " +
        "\"Drink some water and rest for a while,\" Bruno said. " +
        "The old dog thanked him. " +
        "After resting, they continued their journey. " +
        "Soon, Bruno noticed a small pond behind a group of trees. " +
        "Near the pond stood a beautiful blue house. " +
        "The old dog's eyes became wide with excitement. " +
        "\"That is my home!\" he barked happily. " +
        "Bruno quickly ran toward the house with him. " +
        "An elderly man came running out of the house. " +
        "\"Max! Where have you been? I have been looking everywhere for you!\" he cried happily. " +
        "Max jumped into his owner's arms and wagged his tail. " +
        "The owner noticed Bruno standing nearby. " +
        "\"Did you help Max find his way home?\" he asked. " +
        "Bruno wagged his tail. " +
        "The old man smiled and gently patted Bruno's head. " +
        "\"Thank you, kind dog. You helped someone you did not even know.\" " +
        "Max also thanked Bruno. " +
        "\"I will never forget your kindness,\" he said. " +
        "Bruno happily returned home before sunset. " +
        "His family was proud when they heard what he had done. " +
        "\"You did a wonderful thing today,\" his owner said. " +
        "Bruno curled up on his soft blanket and smiled. " +
        "He had learned that helping someone does not require knowing them first. " +
        "Sometimes, a small act of kindness can make a very big difference in someone's life. " +
        "From that day on, Bruno continued helping anyone in the village who needed a friend. " +
        "The villagers loved him, and everyone remembered him as the kind dog who was always ready to help. " +
        "The End."
},


    {
    id: 11,

    category: "Animal",

    emoji: "🐼🎋",

    title: "Panda's Lost Bamboo",

    text:
        "Once upon a time, in a peaceful bamboo forest, there lived a little panda named Piko. " +

        "Piko was gentle, playful, and loved eating fresh bamboo more than anything else. " +

        "Every morning, he would wake up, stretch his little paws, and say, \"Today is going to be a wonderful day!\" " +

        "One sunny morning, Piko went to his favorite bamboo garden. " +

        "But something was wrong. " +

        "His favorite bamboo plant was gone! " +

        "\"Oh no! Where did my bamboo go?\" Piko wondered. " +

        "He searched behind the trees. " +

        "He looked beside the river. " +

        "He even checked under a large rock. " +

        "But he couldn't find it anywhere. " +

        "Piko decided to ask his friends for help. " +

        "First, he visited Mimi the monkey. " +

        "\"Did you see my bamboo plant?\" asked Piko. " +

        "\"No, I didn't,\" said Mimi, \"but I saw some strange footprints near the river.\" " +

        "Piko thanked Mimi and followed the footprints. " +

        "Near the river, he met a little deer. " +

        "\"Have you seen my bamboo?\" asked Piko. " +

        "\"I saw someone carrying a green plant toward the mountain,\" said the deer. " +

        "Piko became curious. " +

        "\"Toward the mountain? Let's find out!\" " +

        "Piko walked up the mountain path. " +

        "The path was steep, but Piko kept going. " +

        "After a while, he heard a soft crying sound. " +

        "\"Is someone there?\" Piko called. " +

        "Behind a bush, he found a little goat. " +

        "The goat was sitting beside Piko's missing bamboo plant. " +

        "\"That's my bamboo!\" said Piko. " +

        "The goat looked worried. " +

        "\"I'm sorry. I didn't know it belonged to you. I found it near the river and brought it here because I was hungry.\" " +

        "Piko looked at the goat and felt sorry for him. " +

        "\"Are you hungry?\" Piko asked. " +

        "The goat nodded. " +

        "Piko thought for a moment. " +

        "\"You can have some of my bamboo.\" " +

        "The goat smiled. " +

        "\"Really? Thank you!\" " +

        "They sat together and shared the bamboo. " +

        "After eating, the goat helped Piko carry the bamboo plant back to the garden. " +

        "On the way home, they heard a loud rumbling sound. " +

        "\"What's that?\" asked the goat. " +

        "Suddenly, dark clouds covered the sky. " +

        "Heavy rain began falling. " +

        "The river started rising quickly. " +

        "Piko noticed that some small animals were trapped on the other side of the river. " +

        "\"We need to help them!\" said Piko. " +

        "Piko and the goat found several strong bamboo sticks. " +

        "Together, they made a small bridge across the narrow part of the river. " +

        "One by one, the animals crossed safely. " +

        "When the rain finally stopped, the sun came out. " +

        "A beautiful rainbow appeared over the forest. " +

        "Piko and the goat returned to the bamboo garden. " +

        "Piko planted his bamboo carefully in the ground. " +

        "\"My bamboo is home again,\" he said happily. " +

        "The goat smiled. " +

        "\"And I found a new friend.\" " +

        "Piko laughed. " +

        "\"So did I!\" " +

        "From that day on, Piko and the little goat became best friends. " +

        "Piko learned that sharing does not make what you have smaller. " +

        "Sometimes, sharing makes your happiness bigger. " +

        "And whenever Piko had plenty of bamboo, he always remembered to share some with his friends. " +

        "The bamboo forest became a happier place, filled with friendship, kindness, and laughter. " +

        "The End."
},


    {
    id: 12,

    category: "Moral",

    emoji: "🐜🦗🌾",

    title: "The Ant and the Lazy Grasshopper",

    text:
        "Once upon a time, in a beautiful green meadow, there lived a hardworking little ant named Andy. " +
        "Andy spent every day collecting food and storing it safely inside his tiny home. " +
        "Near Andy's home lived a cheerful grasshopper named Gary. " +
        "Gary loved singing, dancing, and playing in the warm sunshine. " +
        "One bright morning, Andy was carrying a large piece of grain toward his home. " +
        "Gary was relaxing under a flower and playing his little violin. " +
        "\"Andy, why are you working so hard on such a beautiful day?\" Gary asked. " +
        "\"I am collecting food for the future,\" Andy replied. " +
        "\"Winter will come soon, and I want to make sure I have enough to eat.\" " +
        "Gary laughed. \"Winter is still far away! Come and play with me instead.\" " +
        "Andy smiled but continued working. " +
        "\"I would love to play, but I must finish my work first.\" " +
        "Day after day, Andy collected grains, seeds, and small pieces of food. " +
        "Gary continued singing and playing without saving anything. " +
        "Whenever Gary saw Andy working, he laughed and said, \"You work too much! Come and have some fun.\" " +
        "Andy always answered kindly, \"There will be time for fun after my work is finished.\" " +
        "Weeks passed, and the warm summer slowly came to an end. " +
        "One morning, cold winds began blowing across the meadow. " +
        "The leaves turned yellow and brown. " +
        "Soon, winter arrived. " +
        "The meadow became cold, and food became difficult to find. " +
        "Gary searched everywhere for food, but there was almost nothing left. " +
        "He became hungry and tired. " +
        "Finally, Gary remembered Andy. " +
        "He slowly walked to the ant's home and knocked on the door. " +
        "\"Andy, I am very hungry. I did not save any food for winter. Could you please help me?\" Gary asked sadly. " +
        "Andy opened the door and saw how tired Gary looked. " +
        "Andy felt sorry for him. " +
        "\"Of course, Gary. Come inside and have something to eat,\" Andy said. " +
        "Gary happily entered the warm little home. " +
        "Andy shared some grains and seeds with him. " +
        "Gary thanked Andy and said, \"I am sorry I laughed at you during the summer. You were right to prepare for winter.\" " +
        "Andy smiled. \"It is never too late to learn a lesson.\" " +
        "Gary stayed with Andy until the cold weather passed. " +
        "During that time, Gary learned how important it was to work and prepare for the future. " +
        "When spring arrived, Gary decided to change his ways. " +
        "He began collecting food every morning before playing his violin. " +
        "Andy was happy to see his friend working hard. " +
        "The two friends soon discovered that they could work together and still have plenty of time to enjoy themselves. " +
        "From that day on, Gary never wasted all his time playing. " +
        "He learned that having fun is wonderful, but completing important work and preparing for tomorrow are also important. " +
        "Andy and Gary remained good friends and enjoyed many happy days together. " +
        "The End."
},


    {
    id: 13,

    category: "Animal",

    emoji: "🐯🐭",

    title: "Tiger and the Tiny Mouse",

    text:
        "Once upon a time, in a thick green jungle, there lived a big tiger named Tony. " +

        "Tony was strong, fast, and had a loud roar. " +

        "All the animals in the jungle were afraid of him. " +

        "But Tony had a secret. " +

        "He often felt lonely because nobody wanted to play with him. " +

        "One sunny afternoon, Tony was sleeping under a large tree. " +

        "A tiny mouse named Max was running through the grass. " +

        "Max accidentally climbed onto Tony's tail. " +

        "Tony suddenly woke up. " +

        "\"ROAR! Who is disturbing my sleep?\" shouted Tony. " +

        "Max trembled with fear. " +

        "\"I'm sorry, Mr. Tiger! I didn't mean to wake you.\" " +

        "Tony looked at the tiny mouse and laughed. " +

        "\"You are so small! What could you possibly do for a tiger like me?\" " +

        "Max looked down sadly. " +

        "\"I may be small, but I can still help someone someday.\" " +

        "Tony smiled. " +

        "\"Very well. I will let you go.\" " +

        "Max quickly ran away. " +

        "A few days later, Tony was walking through the jungle when he heard a strange sound. " +

        "\"Help! Someone help me!\" " +

        "Tony tried to move, but he couldn't. " +

        "He had stepped into a hunter's net and was trapped. " +

        "Tony pulled and pulled, but the ropes were too strong. " +

        "\"I can't get out!\" he roared. " +

        "The jungle animals heard him, but they were too frightened to come near. " +

        "Then Max the mouse heard the roar. " +

        "\"That sounds like Tony!\" he said. " +

        "Max ran toward the sound and found Tony trapped in the net. " +

        "\"Don't worry, Tony. I will help you.\" " +

        "Tony looked surprised. " +

        "\"But you are so tiny. How can you help me?\" " +

        "Max smiled. " +

        "\"Just watch me.\" " +

        "Max began chewing the thick ropes with his sharp little teeth. " +

        "Nibble, nibble, nibble. " +

        "After a few minutes, one rope broke. " +

        "Then another. " +

        "Finally, the net fell apart. " +

        "Tony jumped free. " +

        "\"You saved me!\" he said. " +

        "Max smiled proudly. " +

        "\"I told you that even a tiny mouse can help a big tiger.\" " +

        "Tony lowered his head. " +

        "\"I was wrong about you, Max. I thought being big and strong was everything.\" " +

        "Max replied, \"Everyone has a special talent. You are strong, and I am small and quick.\" " +

        "Tony smiled. " +

        "\"Would you like to be my friend?\" " +

        "Max's eyes lit up. " +

        "\"Of course!\" " +

        "From that day on, Tony and Max became the most unusual pair of friends in the jungle. " +

        "The big tiger protected the little mouse, and the tiny mouse helped the big tiger whenever he needed it. " +

        "One day, the animals saw them walking together through the jungle. " +

        "The monkey laughed. " +

        "\"How can a tiger and a mouse be friends?\" " +

        "Tony smiled. " +

        "\"Friendship doesn't depend on size.\" " +

        "Max nodded. " +

        "\"A small friend can have a big heart.\" " +

        "All the animals smiled and agreed. " +

        "From then on, the jungle became a place where animals helped one another, no matter how big or small they were. " +

        "And Tony the tiger never forgot the tiny mouse who taught him one of life's greatest lessons. " +

        "The End."
},


    {
    id: 14,

    category: "Moral",

    emoji: "🦊🌳✨",

    title: "The Fox Who Learned a Lesson",

    text:
        "Once upon a time, in a beautiful forest filled with tall trees and colorful flowers, there lived a clever fox named Felix. " +
        "Felix was quick, smart, and very good at finding food. " +
        "But Felix had one bad habit. " +
        "He often thought he was better and smarter than everyone else. " +
        "One morning, Felix was walking through the forest when he saw a small wooden bridge over a clear stream. " +
        "On the other side of the bridge stood a basket filled with delicious red apples. " +
        "\"Those apples look delicious!\" Felix said. " +
        "He quickly ran toward the bridge. " +
        "But the bridge was old and had a few broken wooden boards. " +
        "A little squirrel named Sammy was standing nearby. " +
        "\"Felix, be careful! The bridge is not safe,\" Sammy warned. " +
        "Felix laughed. \"I am a clever fox. I do not need anyone to tell me what to do.\" " +
        "He stepped onto the bridge confidently. " +
        "Crack! " +
        "One of the wooden boards broke under his paw. " +
        "Felix quickly jumped backward. " +
        "\"That was close,\" he said. " +
        "Sammy smiled and said, \"Sometimes listening to others can keep us safe.\" " +
        "Felix ignored him and looked for another way across the stream. " +
        "He found a narrow tree branch reaching toward the other side. " +
        "\"This will be easy,\" Felix said proudly. " +
        "He carefully stepped onto the branch. " +
        "But halfway across, the branch began to shake. " +
        "Felix lost his balance and fell into the shallow stream. " +
        "Splash! " +
        "His fur became completely wet. " +
        "The apples rolled away, and Felix sat sadly in the water. " +
        "Sammy quickly ran to the stream bank. " +
        "\"Are you hurt?\" he asked. " +
        "Felix shook the water from his fur. " +
        "\"No, but I made a foolish mistake,\" he replied. " +
        "Sammy found a strong vine and helped Felix climb out of the stream. " +
        "Felix looked at Sammy and said, \"I am sorry I did not listen to you.\" " +
        "Sammy smiled. \"Everyone makes mistakes. The important thing is to learn from them.\" " +
        "Felix nodded. " +
        "Together, they found a safe path around the stream. " +
        "They reached the other side and collected the apples carefully. " +
        "Felix shared the apples with Sammy instead of keeping them all for himself. " +
        "While eating, Felix thought about what had happened. " +
        "He realized that being clever did not mean he always knew everything. " +
        "Other animals could have good ideas too. " +
        "From that day on, Felix began listening carefully when his friends gave him advice. " +
        "He also stopped boasting about being smarter than everyone else. " +
        "The animals noticed the change and became happier to spend time with him. " +
        "Felix learned that true wisdom is not only about knowing things. " +
        "It is also about listening, accepting advice, and learning from mistakes. " +
        "And that lesson stayed with him for the rest of his life. " +
        "The End."
},


    {
    id: 15,

    category: "Animal",

    emoji: "🐒🍌",

    title: "Milo the Mischievous Monkey",

    text:
        "Once upon a time, in a bright green jungle, there lived a playful monkey named Milo. " +

        "Milo had a long curly tail, big round eyes, and a smile that could make anyone laugh. " +

        "But Milo had one little problem. " +

        "He loved playing tricks on everyone. " +

        "One morning, Milo saw a basket full of bananas beside the river. " +

        "\"Hmm... I wonder what I can do with these?\" he said with a mischievous smile. " +

        "He took one banana and placed it on a sleeping crocodile's head. " +

        "The crocodile woke up and looked around. " +

        "\"Who put a banana on my head?\" he asked. " +

        "Milo laughed from a tree. " +

        "\"It was me!\" " +

        "The crocodile shook his head and went back to sleep. " +

        "Milo then saw a group of parrots resting on a branch. " +

        "He copied their voices. " +

        "\"Squawk! Squawk! Good morning!\" " +

        "The parrots looked around in confusion. " +

        "Milo laughed so loudly that he almost fell from the tree. " +

        "Later that afternoon, Milo decided to play his biggest trick. " +

        "He found a small drum and began beating it loudly. " +

        "\"Boom! Boom! Boom!\" " +

        "All the animals came running. " +

        "\"What happened?\" asked the deer. " +

        "\"Is there danger?\" asked the rabbit. " +

        "Milo jumped onto a rock and shouted, \"It's a jungle concert!\" " +

        "The animals were not happy. " +

        "\"Milo, we thought something was wrong,\" said the owl. " +

        "Milo laughed. " +

        "\"It was only a joke!\" " +

        "The animals walked away sadly. " +

        "For the first time, Milo felt a little bad. " +

        "The next morning, Milo wanted to apologize. " +

        "He went to find his friends, but nobody wanted to play with him. " +

        "\"Maybe I went too far,\" Milo said quietly. " +

        "Suddenly, Milo heard a loud cry. " +

        "\"Help! Help!\" " +

        "Milo looked down and saw a little rabbit stuck inside a bush. " +

        "\"Don't worry! I will help you!\" shouted Milo. " +

        "Milo climbed onto the bush and carefully pulled the branches apart with his strong hands. " +

        "The rabbit escaped. " +

        "\"Thank you, Milo!\" said the rabbit. " +

        "Milo smiled. " +

        "\"I'm sorry for all the silly tricks I played on you.\" " +

        "The rabbit smiled back. " +

        "\"We forgive you.\" " +

        "Soon, the other animals arrived. " +

        "Milo looked at them and said, \"I'm sorry for frightening everyone with my drum. I thought it was funny, but I didn't think about how you would feel.\" " +

        "The owl nodded. " +

        "\"It is good that you understand.\" " +

        "The animals forgave Milo. " +

        "Milo then had a wonderful idea. " +

        "\"How about we have a real jungle concert?\" " +

        "Everyone agreed. " +

        "The parrots sang. " +

        "The frogs played drums with their feet. " +

        "The monkeys danced between the trees. " +

        "Even the crocodile joined the fun. " +

        "Milo made everyone laugh, but this time he did it without hurting or frightening anyone. " +

        "At the end of the concert, everyone cheered. " +

        "\"Milo is funny again!\" shouted the animals. " +

        "Milo smiled happily. " +

        "From that day on, Milo still loved jokes and fun, but he learned an important lesson. " +

        "A good joke should make everyone laugh, not make someone feel scared or sad. " +

        "And the jungle became even happier with Milo's funny ideas and his kind heart. " +

        "The End."
},


   {
    id: 16,

    category: "Moral",

    emoji: "🐿️🌰🤝",

    title: "Sammy Squirrel and the Lost Acorn",

    text:
        "Once upon a time, in a peaceful forest filled with tall oak trees, there lived a little squirrel named Sammy. " +
        "Sammy had a fluffy brown tail, bright eyes, and a cheerful smile. " +
        "He loved collecting acorns and storing them safely inside a small hole in an old tree. " +
        "Every morning, Sammy searched the forest for the biggest and tastiest acorns. " +
        "One autumn day, Sammy found a very large golden acorn. " +
        "\"This is the biggest acorn I have ever seen!\" he said happily. " +
        "He carried it carefully toward his home. " +
        "But while crossing a narrow path, the acorn slipped from his paws and rolled down a hill. " +
        "\"Oh no! My acorn!\" Sammy cried. " +
        "He quickly ran after it, but the acorn disappeared behind some bushes. " +
        "Sammy searched under the leaves, beside the rocks, and behind the trees. " +
        "But he could not find it. " +
        "He became tired and sat beneath a tree. " +
        "A little rabbit named Ruby noticed Sammy looking sad. " +
        "\"What happened, Sammy?\" Ruby asked. " +
        "\"I lost my biggest acorn, and I cannot find it anywhere,\" Sammy replied. " +
        "Ruby decided to help. " +
        "\"Do not worry. We will look for it together,\" she said. " +
        "They searched near the bushes and along the hill. " +
        "Soon, a deer named Daisy joined them. " +
        "\"What are you looking for?\" Daisy asked. " +
        "\"Sammy lost a special acorn,\" Ruby explained. " +
        "Daisy smiled. \"I will help too.\" " +
        "The three friends searched carefully. " +
        "They looked beneath fallen leaves, inside small holes, and beside the stream. " +
        "After a long search, Daisy noticed something golden under a large rock. " +
        "\"Look! What is that?\" she called. " +
        "Sammy quickly ran toward the rock. " +
        "\"My acorn! You found it!\" he shouted happily. " +
        "Sammy picked up the acorn and hugged it tightly. " +
        "He was very thankful to his friends. " +
        "\"Thank you, Ruby and Daisy. I could not have found it without you,\" Sammy said. " +
        "Ruby smiled. \"Friends should always help each other.\" " +
        "Sammy thought for a moment and then opened his food store. " +
        "\"I want to share my acorns with both of you,\" he said. " +
        "The three friends sat together beneath the oak tree and enjoyed the delicious acorns. " +
        "Sammy realized that the lost acorn had brought him something even more valuable than food. " +
        "It had shown him how wonderful it was to have friends who cared about him. " +
        "From that day on, Sammy always helped his friends whenever they needed him. " +
        "The animals in the forest became closer because they learned that helping one another made every problem easier. " +
        "Sammy never forgot that day. " +
        "He learned that a good friend is someone who stays beside you when things go wrong. " +
        "And sometimes, the greatest treasure is not something you can store in a tree, but the friendship you build with others. " +
        "The End."
},

    {
    id: 17,

    category: "Animal",

    emoji: "🦒❤️",

    title: "Gina the Giraffe with a Big Heart",

    text:
        "Once upon a time, in a beautiful African savanna, there lived a young giraffe named Gina. " +

        "Gina had a very long neck, bright eyes, and beautiful brown spots. " +

        "She was taller than almost every animal in the savanna. " +

        "But Gina never thought she was better than anyone else. " +

        "She loved helping her friends. " +

        "Every morning, Gina walked across the grassland looking for fresh leaves. " +

        "One hot morning, Gina noticed that the animals were having trouble finding water. " +

        "The small pond near their homes had almost dried up. " +

        "\"We need to find water,\" said the little zebra. " +

        "Gina looked around and noticed some green trees far away. " +

        "\"Maybe there is water near those trees,\" she said. " +

        "Gina walked toward the trees while her friends followed her. " +

        "After a long walk, they found a small stream hidden behind some rocks. " +

        "\"We found water!\" shouted Gina. " +

        "The animals happily drank from the stream. " +

        "But suddenly, Gina heard a tiny cry. " +

        "\"Help!\" " +

        "She looked down and saw a baby elephant stuck in a muddy hole. " +

        "\"Don't worry. I will help you,\" said Gina. " +

        "Gina stretched her long neck down toward the baby elephant. " +

        "The elephant held onto her neck with its trunk. " +

        "Gina carefully pulled the baby elephant out of the mud. " +

        "\"Thank you, Gina!\" said the baby elephant. " +

        "Everyone cheered. " +

        "Later that afternoon, dark clouds appeared in the sky. " +

        "A strong wind began blowing across the savanna. " +

        "The animals became frightened. " +

        "Gina noticed that several small animals had nowhere to hide. " +

        "\"Follow me!\" she called. " +

        "Gina led the animals toward a group of large rocks. " +

        "The rocks provided shelter from the strong wind and rain. " +

        "The animals stayed close together until the storm passed. " +

        "When the sun came out again, a beautiful rainbow appeared in the sky. " +

        "The little zebra looked at Gina and smiled. " +

        "\"You helped everyone today.\" " +

        "Gina shook her head. " +

        "\"We all helped each other.\" " +

        "The elephant smiled. " +

        "\"But you showed us the way.\" " +

        "Gina looked at her friends and felt happy. " +

        "She realized that being tall was not what made her special. " +

        "Her kindness was what made her special. " +

        "The next morning, Gina noticed that the stream was becoming smaller. " +

        "\"We need to save the water,\" she said. " +

        "The animals worked together. " +

        "The elephants carried water in their trunks. " +

        "The zebras carried small containers. " +

        "The birds searched for new water sources. " +

        "Gina used her long neck to reach leaves and fruits from tall trees and shared them with the smaller animals. " +

        "Everyone worked together until the dry season ended. " +

        "When the rains finally came, the grass became green again. " +

        "The animals celebrated with a big feast. " +

        "The little elephant gave Gina a hug. " +

        "\"You have the biggest heart in the whole savanna!\" " +

        "Gina smiled. " +

        "From that day on, all the animals knew that Gina was always ready to help a friend. " +

        "She taught everyone that true greatness does not come from being tall, strong, or powerful. " +

        "It comes from having a kind and caring heart. " +

        "And Gina the giraffe continued to brighten the savanna with her kindness every day. " +

        "The End."
},


    {
    id: 18,

    category: "Moral",

    emoji: "🐸🌈❤️",

    title: "The Frog Who Told the Truth",

    text:
        "Once upon a time, near a beautiful green pond, there lived a little frog named Freddie. " +
        "Freddie had bright green skin, big round eyes, and a cheerful voice. " +
        "He loved jumping from lily pad to lily pad and playing with his friends. " +
        "One sunny morning, Freddie and his friends were playing near the pond. " +
        "They had a small wooden boat that they used to play with every afternoon. " +
        "The boat belonged to an old frog named Mr. Green. " +
        "\"Be careful with my boat,\" Mr. Green told them. \"It is very old.\" " +
        "The friends promised to be careful. " +
        "Freddie climbed into the boat and began pretending to be the captain. " +
        "\"Everyone get ready! We are sailing across the pond!\" he shouted happily. " +
        "His friends laughed and jumped into the boat. " +
        "Suddenly, Freddie moved too quickly and the boat bumped into a large rock. " +
        "Crack! " +
        "One side of the boat broke. " +
        "Everyone became quiet. " +
        "Freddie looked at the broken boat and felt worried. " +
        "\"What should we do?\" asked one of his friends. " +
        "Another frog whispered, \"Maybe we should say that the wind broke it.\" " +
        "Freddie thought about telling a lie. " +
        "He was afraid that Mr. Green would be angry with him. " +
        "But then he remembered that telling the truth was always the right thing to do. " +
        "Freddie took a deep breath and said, \"I broke the boat. I am very sorry.\" " +
        "Mr. Green walked toward them and looked at the broken side. " +
        "He was disappointed, but he could see that Freddie was being honest. " +
        "\"Thank you for telling me the truth,\" Mr. Green said. " +
        "\"You made a mistake, but you were brave enough to admit it.\" " +
        "Freddie looked down sadly. \"I am sorry. I should have been more careful.\" " +
        "Mr. Green smiled. \"Mistakes can be fixed. But a lie can make a problem much bigger.\" " +
        "Freddie and his friends helped Mr. Green repair the boat. " +
        "They collected strong sticks, pieces of leaves, and vines from the forest. " +
        "After working together, they repaired the boat and made it stronger than before. " +
        "Freddie felt relieved and happy. " +
        "\"I learned something important today,\" he said. " +
        "His friends nodded. " +
        "\"Telling the truth can be scary sometimes, but it makes people trust you.\" " +
        "From that day on, Freddie always told the truth, even when he made mistakes. " +
        "His friends trusted him because they knew he would never hide the truth from them. " +
        "Mr. Green also trusted Freddie and allowed him to help take care of the boat. " +
        "Freddie learned that being honest does not mean never making mistakes. " +
        "It means having the courage to admit your mistakes and try to make things right. " +
        "And whenever Freddie heard someone say, \"It is easier to tell a lie,\" he would smile and remember the broken boat. " +
        "The End."
},


   {
    id: 19,

    category: "Animal",

    emoji: "🐻🌲",

    title: "Benny Bear's Forest Adventure",

    text:
        "Once upon a time, in a beautiful forest filled with tall trees and colorful flowers, there lived a young bear named Benny. " +

        "Benny was friendly, curious, and loved exploring new places. " +

        "One sunny morning, Benny woke up early and decided to explore the other side of the forest. " +

        "\"Today will be a great adventure!\" he said happily. " +

        "Benny packed some berries into a small bag and started walking. " +

        "Soon, he reached a sparkling stream. " +

        "While Benny was drinking water, he heard a tiny voice. " +

        "\"Please help me!\" " +

        "Benny looked around and saw a little squirrel stuck on a high branch. " +

        "\"Don't worry. I will help you,\" said Benny. " +

        "Benny stood under the tree and gently shook the branch with his strong paws. " +

        "The squirrel safely jumped onto a lower branch and then climbed down. " +

        "\"Thank you, Benny!\" said the squirrel. " +

        "Benny smiled and continued his adventure. " +

        "A little later, Benny discovered a narrow path leading deep into the forest. " +

        "He followed it until he found a beautiful field filled with golden flowers. " +

        "\"I've never seen this place before!\" he said. " +

        "Suddenly, the wind became very strong. " +

        "Leaves flew through the air, and dark clouds appeared above the trees. " +

        "Benny heard frightened voices nearby. " +

        "\"Help! We can't find our way home!\" " +

        "Benny followed the voices and found three little rabbits hiding behind a rock. " +

        "\"Don't be afraid,\" Benny said. \"I will take you home.\" " +

        "The rain began falling heavily. " +

        "Benny led the rabbits toward a large hollow tree where they could stay dry. " +

        "\"We can wait here until the rain stops,\" he said. " +

        "The rabbits sat close to Benny while they listened to the rain. " +

        "After some time, the storm became quiet. " +

        "The sun came out, and a beautiful rainbow appeared above the forest. " +

        "Benny and the rabbits continued walking. " +

        "Soon, they reached the rabbit family's home. " +

        "\"Thank you for bringing our children home safely,\" said the rabbit mother. " +

        "Benny felt happy. " +

        "Before returning home, Benny decided to visit the field of golden flowers one more time. " +

        "But when he arrived, he noticed that many flowers had been damaged by the storm. " +

        "Benny wanted to help. " +

        "He carefully moved fallen branches away from the flowers. " +

        "The squirrel came to help him. " +

        "Then the rabbits returned and helped too. " +

        "Together, they cleaned the field. " +

        "A few days later, new flowers began growing again. " +

        "All the animals celebrated. " +

        "Benny looked at the beautiful field and smiled. " +

        "\"An adventure is even better when you can help your friends along the way.\" " +

        "The squirrel nodded. " +

        "\"And when friends work together, they can make wonderful things happen.\" " +

        "From that day on, Benny became known as the friendliest explorer in the forest. " +

        "Every new adventure brought him somewhere exciting, but his favorite part was always helping someone along the way. " +

        "The End."
},


   {
    id: 20,

    category: "Moral",

    emoji: "🐝🌸💛",

    title: "The Busy Bee and the Beautiful Flower",

    text:
        "Once upon a time, in a colorful garden filled with roses, sunflowers, and butterflies, there lived a little bee named Bella. " +
        "Bella was a hardworking bee who loved collecting sweet nectar from flowers. " +
        "Every morning, she flew from flower to flower and carefully collected nectar for her hive. " +
        "One sunny morning, Bella noticed a beautiful golden flower growing at the edge of the garden. " +
        "Its petals were bright yellow, and its sweet smell filled the air. " +
        "\"What a beautiful flower!\" Bella said happily. " +
        "She flew toward it and began collecting nectar. " +
        "Suddenly, a butterfly named Lily landed on the flower. " +
        "\"This is my favorite flower,\" Lily said. \"Please go somewhere else.\" " +
        "Bella looked surprised. \"There is plenty of nectar here for both of us,\" she replied kindly. " +
        "But Lily shook her wings. \"I want the flower all to myself.\" " +
        "Bella did not argue. " +
        "She flew to another flower and continued her work. " +
        "The next morning, Bella returned to the garden. " +
        "She noticed that the beautiful golden flower had begun to lose its petals. " +
        "Lily was sitting nearby looking worried. " +
        "\"What happened?\" Bella asked. " +
        "Lily sadly replied, \"I stayed on the flower all day and did not let anyone near it. Now the flower is weak.\" " +
        "Bella looked carefully at the flower. " +
        "\"Flowers need care, sunshine, water, and help from insects like us,\" she explained. " +
        "Lily felt sorry. \"I did not know that,\" she said. " +
        "Bella smiled. \"We can help it together.\" " +
        "Bella flew around the flower and carried pollen from nearby flowers. " +
        "Lily gently moved her wings to help spread the pollen. " +
        "They worked together throughout the morning. " +
        "Soon, the flower began to look healthier. " +
        "Its petals became bright again, and a sweet smell filled the garden. " +
        "Lily smiled happily. \"Thank you, Bella. I learned that keeping everything for myself was not helpful.\" " +
        "Bella replied, \"Sharing and working together can make beautiful things grow.\" " +
        "From that day on, Bella and Lily became good friends. " +
        "They visited the garden together and shared the flowers with other insects. " +
        "The garden became brighter and more colorful as the bees and butterflies worked together. " +
        "The flowers grew strong, and the whole garden became a happy home for many creatures. " +
        "Lily learned that sharing does not mean having less happiness. " +
        "Sometimes, sharing creates even more happiness for everyone. " +
        "Bella also learned that kindness and teamwork can turn a small garden into a wonderful place. " +
        "And every morning, the two friends flew together from flower to flower, helping the garden bloom. " +
        "The End."
},
    {
    id: 21,

    category: "Bedtime",

    emoji: "🌙⭐",

    title: "The Little Star Who Couldn't Sleep",

    text:
        "Once upon a time, high above a quiet little village, there lived a tiny star named Twinkle. " +
        "Twinkle lived among thousands of bright stars in the peaceful night sky. " +
        "Every evening, the stars came out to shine over the world below. " +
        "But one night, Twinkle could not fall asleep. " +
        "\"Why can't I sleep?\" Twinkle wondered. " +
        "She looked at the moon, shining softly beside her. " +
        "\"Maybe the moon can help me,\" she thought. " +
        "Twinkle floated closer to the moon. " +
        "\"Moon, I am tired, but I cannot sleep,\" she said. " +
        "The moon smiled gently. \"Sometimes, when our minds are busy, sleep takes a little longer to come.\" " +
        "\"What should I do?\" asked Twinkle. " +
        "\"Close your eyes and listen to the peaceful sounds below,\" said the moon. " +
        "Twinkle closed her tiny eyes. " +
        "First, she heard the soft sound of leaves moving in the wind. " +
        "Whoosh... whoosh... went the trees. " +
        "Then she heard a little river flowing through the forest. " +
        "Splash... splash... went the water. " +
        "Twinkle smiled. The sounds made her feel calm. " +
        "But soon, she heard a tiny sound. " +
        "\"Chirp... chirp...\" " +
        "A little bird was sitting in a nest below. " +
        "The baby bird was also having trouble sleeping. " +
        "\"Why are you awake?\" Twinkle softly asked. " +
        "\"I am waiting for my mother to come back,\" said the little bird. " +
        "Twinkle looked down and saw the mother bird flying toward the nest. " +
        "\"Look! Your mother is coming,\" Twinkle said happily. " +
        "The little bird snuggled close to its mother. " +
        "\"Good night, little star,\" whispered the bird. " +
        "\"Good night,\" Twinkle replied. " +
        "Twinkle felt warm and happy inside. " +
        "She looked across the village and saw children sleeping peacefully in their beds. " +
        "She saw a little puppy curled up beside a warm blanket. " +
        "She saw a kitten sleeping near a window. " +
        "She saw flowers resting quietly under the moonlight. " +
        "Everything was peaceful. " +
        "Twinkle slowly closed her eyes again. " +
        "\"Maybe the whole world is resting now,\" she thought. " +
        "The moon gently covered her with a soft silver light. " +
        "\"You have done enough for today, little star,\" whispered the moon. " +
        "\"Now it is time for you to rest.\" " +
        "Twinkle took a slow, peaceful breath. " +
        "She listened to the gentle wind. " +
        "She listened to the quiet river. " +
        "She listened to the peaceful night. " +
        "Her little light began to glow softly. " +
        "Soon, Twinkle felt her eyes becoming heavy. " +
        "\"Good night, moon,\" she whispered. " +
        "\"Good night, little star,\" said the moon. " +
        "Twinkle finally fell asleep among the sparkling stars. " +
        "All through the night, she dreamed of beautiful forests, colorful flowers, and happy little birds. " +
        "And when morning arrived, Twinkle woke up feeling happy and rested. " +
        "From that night on, whenever Twinkle could not sleep, she remembered the gentle sounds of the world below. " +
        "She would close her eyes, take a slow breath, and remember that tomorrow was another beautiful day. " +
        "And under the soft moonlight, the little star always found her way to sweet dreams. " +
        "The End."
},{
    id: 22,

    category: "Bedtime",

    emoji: "🐰🌙",

    title: "Bunny's Dreamy Night",

    text:
        "Once upon a time, in a cozy little burrow beneath a tall oak tree, there lived a small bunny named Benny. " +
        "Benny loved hopping through the meadow during the day, but when night came, he was never ready to sleep. " +
        "One evening, Benny's mother tucked him into his soft bed. " +
        "\"Good night, Benny,\" she whispered. " +
        "\"Good night, Mama,\" said Benny. " +
        "But as soon as his mother left, Benny opened his eyes. " +
        "\"I am not sleepy yet,\" he whispered. " +
        "He looked through his little window and saw the bright moon in the sky. " +
        "The moon was shining gently over the quiet meadow. " +
        "Benny decided to take one last little walk. " +
        "He quietly hopped outside and followed the silver moonlight. " +
        "First, he met his friend Daisy the deer. " +
        "\"Good evening, Benny,\" said Daisy. " +
        "\"Why are you still awake?\" " +
        "\"I am looking for a sleepy dream,\" Benny replied. " +
        "Daisy smiled. \"Maybe you will find one under the moonlight.\" " +
        "Benny hopped a little farther. " +
        "Soon, he reached a small pond. " +
        "The water was still and shiny like a mirror. " +
        "Benny looked at the reflection of the moon. " +
        "\"Good night, little moon,\" he whispered. " +
        "A gentle breeze moved across the pond. " +
        "The tall grass swayed softly from side to side. " +
        "Benny began to feel a little sleepy. " +
        "Then he heard a tiny sound from a nearby tree. " +
        "\"Hoo... hoo...\" " +
        "It was an old owl sitting on a branch. " +
        "\"Why are you awake, little bunny?\" asked the owl. " +
        "\"I cannot find my dream,\" Benny said. " +
        "The owl smiled kindly. \"Dreams do not need to be found. They come when your heart is peaceful.\" " +
        "Benny thought about those words. " +
        "He remembered playing with his friends, smelling the flowers, and jumping through the soft grass. " +
        "His heart felt warm and happy. " +
        "\"I think I understand,\" Benny said. " +
        "The owl nodded. \"Now close your eyes and think of your happiest moment.\" " +
        "Benny closed his eyes. " +
        "He imagined himself running through a field filled with colorful flowers. " +
        "He imagined butterflies dancing around him. " +
        "He imagined his friends laughing and playing beside him. " +
        "The peaceful picture made him smile. " +
        "Benny slowly hopped back toward his burrow. " +
        "The moon followed him with its gentle silver light. " +
        "When Benny reached home, his mother was waiting for him. " +
        "\"There you are,\" she said softly. \"Were you looking for something?\" " +
        "\"I was looking for a dream,\" Benny replied. " +
        "\"And did you find one?\" asked his mother. " +
        "Benny yawned and smiled. \"I think my dream found me.\" " +
        "His mother tucked him into his warm blanket. " +
        "Benny closed his eyes and took a slow, peaceful breath. " +
        "Outside, the trees whispered softly in the night breeze. " +
        "The moon continued to shine above the little burrow. " +
        "Benny soon fell into a deep and peaceful sleep. " +
        "And that night, he dreamed of a magical meadow where flowers sparkled like stars and all his friends danced beneath the moon. " +
        "When morning came, Benny woke up with a big smile. " +
        "From that night on, he never worried about finding dreams. " +
        "He simply closed his eyes, thought of happy things, and let his dreams come to him. " +
        "The End."
},
{
    id: 23,

    category: "Bedtime",

    emoji: "🐻🌙",

    title: "The Sleepy Little Bear",

    text:
        "Once upon a time, in a quiet forest surrounded by tall green trees, there lived a little bear named Bruno. " +
        "Bruno loved playing all day. He climbed trees, chased butterflies, rolled down grassy hills, and splashed in the little stream near his home. " +
        "But when the sun began to disappear behind the mountains, Bruno's mother called him home. " +
        "\"Bruno, it is bedtime,\" she said gently. " +
        "\"Just five more minutes, Mama!\" Bruno replied. " +
        "He wanted to play a little longer. " +
        "Bruno looked around the forest and saw the birds returning to their nests. " +
        "The rabbits were hopping toward their cozy homes. " +
        "Even the little squirrels were curling up inside their tree. " +
        "The sky slowly changed from orange to purple. " +
        "Then the first star appeared. " +
        "\"Good night, little star,\" Bruno whispered. " +
        "He walked home with his mother. " +
        "Inside their warm cave, his mother prepared his soft bed. " +
        "She placed a fluffy blanket over him and gave him a gentle hug. " +
        "\"Close your eyes and rest, my little bear,\" she said. " +
        "Bruno closed his eyes, but after a few seconds he opened them again. " +
        "\"Mama, I am not sleepy.\" " +
        "His mother smiled. \"Then let's listen to the forest together.\" " +
        "Bruno became quiet. " +
        "He listened carefully. " +
        "Whoosh... whoosh... went the leaves. " +
        "Chirp... chirp... sang a sleepy bird outside. " +
        "Splash... splash... flowed the little stream. " +
        "Hoo... hoo... called a distant owl. " +
        "The sounds of the forest were soft and peaceful. " +
        "Bruno took a slow breath. " +
        "He imagined himself lying on a soft cloud. " +
        "The cloud carried him gently above the forest. " +
        "He saw sparkling stars all around him. " +
        "A friendly moon smiled down at him. " +
        "\"Where are we going?\" Bruno asked. " +
        "\"To the land of dreams,\" whispered the moon. " +
        "Bruno smiled. " +
        "In his dream, he saw a beautiful meadow filled with golden flowers. " +
        "His rabbit friends were hopping between the flowers. " +
        "The squirrels were dancing on tree branches. " +
        "The birds were singing a gentle bedtime song. " +
        "Bruno laughed happily. " +
        "Soon, the dream became quieter and quieter. " +
        "The flowers gently closed their petals. " +
        "The birds rested their wings. " +
        "The moon covered the meadow with silver light. " +
        "Bruno felt warm and peaceful. " +
        "Back in his cozy cave, Bruno was sleeping soundly under his soft blanket. " +
        "His mother looked at him and smiled. " +
        "\"Good night, my sleepy little bear,\" she whispered. " +
        "Outside, the peaceful forest rested under the moonlight. " +
        "The trees swayed gently in the cool night breeze. " +
        "The stars twinkled quietly in the sky. " +
        "Everything was calm and still. " +
        "And little Bruno slept peacefully until the warm morning sun came shining through the trees. " +
        "When he woke up, he stretched his little paws and smiled. " +
        "\"That was the sweetest dream ever!\" he said. " +
        "From that night on, Bruno knew that bedtime was not the end of the day. " +
        "It was the beginning of a wonderful journey into the world of dreams. " +
        "The End."
},
{
    id: 24,

    category: "Bedtime",

    emoji: "🦉🌙",

    title: "Ollie's Moonlight Adventure",

    text:
        "Once upon a time, in a peaceful forest filled with tall trees and soft flowers, there lived a little owl named Ollie. " +
        "Ollie had big round eyes, soft brown feathers, and tiny wings that carried him quietly through the night sky. " +
        "Every evening, Ollie watched the sun disappear behind the mountains. " +
        "When the moon appeared, he loved flying through the cool night air. " +
        "One night, Ollie looked at the bright moon and noticed something unusual. " +
        "A tiny silver light was moving between the trees. " +
        "\"What could that be?\" Ollie wondered. " +
        "He flew closer and discovered a tiny glowing firefly. " +
        "\"Hello!\" said the firefly. \"My name is Luna.\" " +
        "\"Hello, Luna,\" said Ollie. \"Why are you flying alone?\" " +
        "\"I was following the moonlight, but I lost my way home,\" Luna replied sadly. " +
        "Ollie smiled kindly. \"Don't worry. I will help you find your way.\" " +
        "Together, Ollie and Luna flew through the quiet forest. " +
        "They passed a sleeping rabbit under a bush. " +
        "They passed a family of squirrels resting inside a hollow tree. " +
        "They even saw a little stream shining under the moon. " +
        "\"The forest looks beautiful at night,\" whispered Luna. " +
        "\"Yes,\" said Ollie. \"Everything becomes peaceful when the world goes to sleep.\" " +
        "After flying for a while, Luna suddenly became excited. " +
        "\"Look! I know that tree!\" she cried. " +
        "Behind the tree was a small meadow filled with hundreds of glowing fireflies. " +
        "Luna's family was waiting for her. " +
        "\"Luna!\" they called happily. " +
        "Luna flew quickly toward them. " +
        "\"Thank you, Ollie!\" she said. " +
        "\"You helped me find my family.\" " +
        "Ollie smiled. \"I am happy that you are home.\" " +
        "The fireflies began glowing brighter, filling the meadow with tiny golden lights. " +
        "It looked like the stars had fallen from the sky. " +
        "Ollie sat quietly on a nearby branch and watched the beautiful sight. " +
        "The moon shone softly above the trees. " +
        "A gentle breeze moved through the leaves. " +
        "Ollie suddenly felt very sleepy. " +
        "\"I think it is time for me to go home,\" he said. " +
        "Luna waved goodbye. \"Good night, Ollie!\" " +
        "\"Good night, Luna!\" Ollie replied. " +
        "Ollie flew slowly back toward his nest. " +
        "The forest was quiet and peaceful. " +
        "He could hear the soft sound of the wind and the distant stream. " +
        "When Ollie reached his nest, he tucked his wings beneath his feathers. " +
        "He looked at the moon one last time. " +
        "\"Good night, beautiful moon,\" he whispered. " +
        "Then Ollie closed his eyes. " +
        "He dreamed of flying through a sky filled with stars and glowing fireflies. " +
        "The moon watched over the sleeping forest all night. " +
        "And little Ollie slept peacefully until the first light of morning appeared. " +
        "From that night on, Ollie always remembered that even a small act of kindness can make someone's night brighter. " +
        "The End."
},
{
    id: 25,

    category: "Bedtime",

    emoji: "🐑🌙",

    title: "The Little Sheep and the Magic Moon",

    text:
        "Once upon a time, on a quiet green hill, there lived a little sheep named Snowy. " +
        "Snowy had soft white wool, tiny feet, and a gentle smile. " +
        "Every evening, Snowy watched the sun go down behind the hills. " +
        "As the sky became dark, the bright moon appeared above the fields. " +
        "Snowy loved looking at the moon. " +
        "\"Good evening, Moon,\" she whispered. " +
        "One night, Snowy noticed that the moon looked brighter than usual. " +
        "A soft silver beam came down from the sky and touched the grass beside her. " +
        "Suddenly, a tiny voice whispered, \"Hello, Snowy.\" " +
        "Snowy looked around in surprise. " +
        "\"Who said that?\" she asked. " +
        "\"It is me,\" said the moon. \"I have a little gift for you tonight.\" " +
        "Snowy looked up with wide eyes. " +
        "\"A gift? What is it?\" " +
        "\"Close your eyes and make a kind wish,\" said the moon. " +
        "Snowy closed her eyes and thought carefully. " +
        "She could wish for a beautiful toy. " +
        "She could wish for a mountain of sweet flowers. " +
        "But Snowy remembered her friends who sometimes felt lonely at night. " +
        "\"I wish that everyone in the meadow could have peaceful dreams,\" she said. " +
        "The moon began to glow softly. " +
        "\"That is a beautiful wish,\" said the moon. " +
        "Suddenly, tiny silver sparkles floated across the meadow. " +
        "They landed gently on the nests, burrows, and little homes of the animals. " +
        "The rabbits curled up comfortably in their beds. " +
        "The birds rested peacefully in their nests. " +
        "The little foxes snuggled close to their mother. " +
        "Even the old turtle found a warm and cozy place beneath a tree. " +
        "Soon, the entire meadow became quiet. " +
        "Snowy smiled as she watched her friends sleeping peacefully. " +
        "\"Thank you, Moon,\" she whispered. " +
        "\"You are welcome, little Snowy,\" said the moon. " +
        "\"Remember, the kindest wishes are the ones we make for others.\" " +
        "Snowy walked slowly back to her small home. " +
        "Her mother was waiting beside the door. " +
        "\"It is bedtime, little one,\" her mother said. " +
        "\"I know, Mama,\" Snowy replied happily. " +
        "Snowy climbed into her soft bed and pulled the warm blanket around herself. " +
        "She looked through the window one last time. " +
        "The moon was still shining brightly above the peaceful meadow. " +
        "Snowy closed her eyes and took a slow, gentle breath. " +
        "She imagined her friends having beautiful dreams. " +
        "Soon, her eyes became heavy. " +
        "The soft wind whispered through the grass. " +
        "The stars twinkled quietly in the sky. " +
        "Snowy fell into a peaceful sleep. " +
        "That night, she dreamed of a meadow filled with silver flowers, glowing stars, and happy animals. " +
        "The magic moon watched over everyone until morning. " +
        "And from that night on, Snowy always remembered that kindness can make even the darkest night feel bright. " +
        "The End."
},
{
    id: 26,

    category: "Bedtime",

    emoji: "🐱🌙",

    title: "Milo's Cozy Bedtime",

    text:
        "Once upon a time, in a small warm house beside a quiet garden, there lived a little kitten named Milo. " +
        "Milo had soft gray fur, bright eyes, and a tiny pink nose. " +
        "Every day, Milo loved chasing butterflies, playing with leaves, and watching birds from the window. " +
        "But Milo did not like bedtime. " +
        "Every night, when the moon appeared, his mother would say, \"Milo, it is time to sleep.\" " +
        "\"But I am not tired!\" Milo would say. " +
        "One evening, Milo played with a little ball until the sky became dark. " +
        "His mother gently carried the ball away. " +
        "\"The ball can wait until tomorrow,\" she said. " +
        "Milo looked outside the window. " +
        "The garden was quiet under the soft moonlight. " +
        "The flowers had closed their petals, and the birds were resting in their nests. " +
        "Even the trees seemed sleepy. " +
        "\"Maybe everyone is tired except me,\" Milo thought. " +
        "His mother made a cozy bed with a soft blanket and a fluffy pillow. " +
        "\"Come and try to rest,\" she said. " +
        "Milo climbed onto the bed. " +
        "He closed his eyes, but he could not sleep. " +
        "Then he heard a gentle sound outside. " +
        "Rustle... rustle... " +
        "The leaves were moving softly in the night breeze. " +
        "Milo listened carefully. " +
        "Soon, he heard another sound. " +
        "Drip... drip... " +
        "A few drops of water were falling from the garden leaves. " +
        "Milo began to feel calm. " +
        "His mother gently stroked his head. " +
        "\"Think about your favorite thing,\" she whispered. " +
        "Milo thought about sunny mornings. " +
        "He thought about chasing butterflies. " +
        "He thought about playing with his favorite red ball. " +
        "He thought about all the warm hugs from his mother. " +
        "A big sleepy yawn came from Milo. " +
        "\"Yaaawn... I think I am tired now,\" he whispered. " +
        "His mother smiled. \"Good night, my little kitten.\" " +
        "\"Good night, Mama,\" Milo said softly. " +
        "Milo pulled the blanket close to his little body. " +
        "He imagined himself floating on a soft cloud. " +
        "The cloud carried him gently above the garden. " +
        "He saw sparkling stars dancing in the sky. " +
        "A friendly moon smiled at him. " +
        "\"Welcome to dreamland, Milo,\" whispered the moon. " +
        "Milo smiled in his sleep. " +
        "He dreamed that he was running through a magical garden filled with colorful flowers and friendly butterflies. " +
        "The butterflies danced around him while the stars twinkled above. " +
        "Everything was peaceful and warm. " +
        "Back in his little bed, Milo was sleeping soundly. " +
        "His mother quietly turned off the light and kissed his forehead. " +
        "Outside, the moon continued to shine over the quiet garden. " +
        "The wind whispered softly through the trees. " +
        "The whole house was peaceful. " +
        "Milo slept comfortably until the morning sun came through the window. " +
        "When he woke up, he stretched his tiny paws and smiled. " +
        "\"Good morning, Mama!\" he said. " +
        "From that night on, Milo learned that bedtime was not something to avoid. " +
        "It was a special time to rest, dream, and get ready for a brand-new day. " +
        "And every night, Milo happily climbed into his cozy bed and whispered, \"Good night, world.\" " +
        "The End."
},
{
    id: 27,

    category: "Bedtime",

    emoji: "🐘🌙",

    title: "Ellie and the Sleeping Forest",

    text:
        "Once upon a time, in a beautiful forest surrounded by tall green mountains, there lived a little elephant named Ellie. " +
        "Ellie loved exploring the forest during the day. " +
        "She played beside the river, picked colorful flowers, and greeted all her animal friends. " +
        "But one evening, Ellie noticed something strange. " +
        "The forest was unusually quiet. " +
        "The sun was slowly disappearing behind the mountains, and the moon was beginning to rise. " +
        "Ellie looked around and saw the animals getting ready for bed. " +
        "\"Good night, Mr. Deer,\" Ellie said. " +
        "\"Good night, Ellie,\" replied the deer. " +
        "Ellie continued walking along the forest path. " +
        "She saw little rabbits snuggling inside their warm burrow. " +
        "She saw squirrels curling up in their tree home. " +
        "She saw birds resting quietly in their nests. " +
        "Even the butterflies had folded their wings beneath the leaves. " +
        "Ellie smiled. \"The whole forest is getting sleepy.\" " +
        "She walked toward the river and listened to the gentle water. " +
        "Splash... splash... splash... " +
        "The sound made Ellie feel calm. " +
        "Suddenly, she heard a tiny cry. " +
        "\"Who is awake?\" Ellie wondered. " +
        "She followed the sound and found a little fox sitting beside a tree. " +
        "\"Why aren't you sleeping?\" Ellie asked. " +
        "\"I am afraid of the dark,\" whispered the little fox. " +
        "Ellie sat beside him. " +
        "\"You don't have to be afraid. Look at the moon. It is lighting our forest.\" " +
        "The little fox looked up. " +
        "The moon was shining softly through the branches. " +
        "\"It is beautiful,\" he said. " +
        "\"Yes,\" Ellie replied. \"The night can be quiet and peaceful.\" " +
        "Ellie and the little fox listened together. " +
        "They heard the gentle wind moving through the trees. " +
        "They heard the river flowing nearby. " +
        "They heard a sleepy owl calling in the distance. " +
        "Hoo... hoo... " +
        "The little fox slowly relaxed. " +
        "\"I think I am sleepy now,\" he said. " +
        "Ellie walked with him back to his home. " +
        "The little fox climbed into his warm bed and smiled. " +
        "\"Thank you, Ellie. Good night.\" " +
        "\"Good night,\" Ellie replied. " +
        "Ellie continued her walk through the sleeping forest. " +
        "She looked at the stars sparkling above the trees. " +
        "The forest seemed like a giant peaceful bedroom. " +
        "Ellie found her favorite tree and sat beneath it. " +
        "She rested her trunk on the soft grass. " +
        "A gentle breeze touched her ears. " +
        "Ellie closed her eyes. " +
        "She imagined herself walking through a magical forest where flowers glowed like tiny stars. " +
        "She imagined her friends laughing and playing beside her. " +
        "Soon, Ellie felt very sleepy. " +
        "She slowly curled her trunk beside her and rested her head on the grass. " +
        "Above her, the moon watched over the peaceful forest. " +
        "The stars twinkled softly. " +
        "The trees swayed gently. " +
        "The river continued its quiet song. " +
        "Ellie fell into a deep and peaceful sleep. " +
        "That night, she dreamed that the moon had invited all the forest animals to a beautiful nighttime party among the stars. " +
        "Everyone danced beneath the silver moonlight before settling down for a peaceful sleep. " +
        "When morning arrived, warm sunlight filled the forest. " +
        "Ellie opened her eyes and smiled. " +
        "The forest was awake again, ready for another wonderful day. " +
        "Ellie learned that even the quietest night could be filled with beauty, friendship, and peaceful dreams. " +
        "And every evening after that, Ellie loved saying good night to her friends before falling asleep beneath her favorite tree. " +
        "The End."
},

{
    id: 28,

    category: "Bedtime",

    emoji: "⭐🌙",

    title: "The Star That Lost Its Sparkle",

    text:
        "Once upon a time, high above the Earth, there lived a little star named Sparkle. " +
        "Sparkle lived among thousands of bright stars in the peaceful night sky. " +
        "Every night, she twinkled brightly and watched over the sleeping world below. " +
        "But one evening, Sparkle noticed that her light was not shining as brightly as before. " +
        "\"Oh no,\" she whispered. \"Where did my sparkle go?\" " +
        "She looked at the other stars. They were shining brightly all around her. " +
        "Sparkle felt sad and hid behind a soft cloud. " +
        "The Moon noticed her hiding. " +
        "\"Why are you hiding, little star?\" asked the Moon gently. " +
        "\"I have lost my sparkle,\" Sparkle replied. " +
        "\"Everyone else shines brighter than me.\" " +
        "The Moon smiled. \"Your light does not have to be the brightest to be special.\" " +
        "But Sparkle still felt worried. " +
        "She decided to look down at the Earth and see if anyone needed her light. " +
        "First, she saw a little girl sleeping beside her favorite teddy bear. " +
        "The room was dark, but a tiny ray of Sparkle's light came through the window. " +
        "The little girl smiled peacefully in her sleep. " +
        "Sparkle felt a little happier. " +
        "Then she saw a small bird sitting alone in its nest. " +
        "The bird was nervous because it was afraid of the dark. " +
        "Sparkle gently twinkled above the tree. " +
        "The little bird looked up and felt safe. " +
        "\"Thank you, little star,\" whispered the bird. " +
        "Sparkle smiled. " +
        "Next, Sparkle noticed a lost firefly flying through the forest. " +
        "The firefly could not find its family. " +
        "Sparkle shone softly over the trees. " +
        "The firefly followed her gentle light and soon found its family waiting beside a flower. " +
        "\"You helped me find my way home!\" said the firefly happily. " +
        "Sparkle began to feel warm inside. " +
        "She looked at herself and noticed something wonderful. " +
        "Her light was slowly becoming brighter. " +
        "\"Maybe I didn't lose my sparkle after all,\" she said. " +
        "The Moon smiled. \"Sometimes, our light becomes brighter when we use it to help others.\" " +
        "Sparkle looked down at the sleeping world. " +
        "She saw peaceful homes, quiet forests, sparkling rivers, and tiny animals resting beneath the moonlight. " +
        "She decided to shine as brightly as she could, not to be better than the other stars, but to make the night a little brighter for everyone. " +
        "Soon, Sparkle was glowing beautifully again. " +
        "The other stars gathered around her. " +
        "\"Welcome back, Sparkle!\" they said. " +
        "Sparkle smiled. \"I never needed to be the brightest star. I only needed to share the light I had.\" " +
        "The Moon nodded proudly. " +
        "That night, Sparkle shone gently above the Earth. " +
        "Children dreamed peaceful dreams beneath her light. " +
        "Birds rested safely in their nests. " +
        "Animals slept quietly in the forest. " +
        "Sparkle felt peaceful too. " +
        "She closed her little eyes and rested among the stars. " +
        "From that night on, whenever Sparkle felt small or unimportant, she remembered that even the tiniest light could brighten someone's world. " +
        "And under the peaceful moon, Sparkle continued to shine with a happy heart. " +
        "The End."
},

{
    id: 29,

    category: "Bedtime",

    emoji: "🦊🌙",

    title: "Foxie's Goodnight Journey",

    text:
        "Once upon a time, in a quiet forest surrounded by tall trees, there lived a little fox named Foxie. " +
        "Foxie had soft orange fur, a fluffy tail, and bright curious eyes. " +
        "Every evening, Foxie loved watching the sunset from a small hill near her home. " +
        "One night, as the sky turned dark blue, Foxie noticed that her little friend, Pip the rabbit, was still awake. " +
        "\"Why aren't you sleeping, Pip?\" asked Foxie. " +
        "\"I cannot find my favorite blue blanket,\" said Pip sadly. " +
        "Foxie smiled. \"Don't worry. I will help you find it.\" " +
        "The two friends began a quiet goodnight journey through the forest. " +
        "First, they walked past the old oak tree. " +
        "\"Good night, Mr. Owl,\" Foxie called softly. " +
        "\"Good night, little friends,\" replied the owl. " +
        "Next, they crossed a tiny wooden bridge over the stream. " +
        "The water made a peaceful sound as it flowed beneath them. " +
        "Splash... splash... splash... " +
        "They looked beside the flowers, under the bushes, and behind the tree roots. " +
        "But the blanket was nowhere to be found. " +
        "Then Pip remembered something. " +
        "\"I was playing near the meadow before dinner,\" he said. " +
        "Foxie and Pip walked toward the meadow under the soft moonlight. " +
        "The grass was sparkling with tiny drops of water. " +
        "Suddenly, Foxie saw something blue beneath a large bush. " +
        "\"Look!\" she cried. " +
        "Pip hopped closer. " +
        "\"My blanket!\" he shouted happily. " +
        "The blanket was lying safely beneath the bush. " +
        "Pip hugged it tightly. " +
        "\"Thank you, Foxie. I can finally sleep peacefully.\" " +
        "\"You're welcome,\" said Foxie. " +
        "The two friends began walking home. " +
        "The moon was shining brightly above them. " +
        "The stars twinkled like tiny lights in the sky. " +
        "Along the way, they saw the forest animals getting ready for bed. " +
        "The squirrels were inside their tree home. " +
        "The birds were sleeping in their nests. " +
        "The deer were resting quietly beneath the trees. " +
        "Foxie felt sleepy too. " +
        "\"I think it is time for me to go home,\" she said. " +
        "When Foxie reached her little den, her mother was waiting for her. " +
        "\"Did you have a good evening?\" asked her mother. " +
        "\"Yes,\" Foxie said with a smile. \"I helped Pip find his blanket.\" " +
        "Her mother hugged her warmly. " +
        "\"That was kind of you.\" " +
        "Foxie climbed into her cozy bed. " +
        "Her mother pulled the soft blanket over her. " +
        "Foxie looked through the doorway at the peaceful forest. " +
        "\"Good night, trees,\" she whispered. " +
        "\"Good night, moon.\" " +
        "\"Good night, stars.\" " +
        "A gentle breeze moved through the leaves. " +
        "Foxie closed her eyes and imagined walking beneath the moon with Pip. " +
        "Soon, her little eyes became heavy. " +
        "She fell into a peaceful sleep and dreamed of a magical forest filled with glowing flowers and sparkling stars. " +
        "Meanwhile, Pip was sleeping happily under his favorite blue blanket. " +
        "The entire forest rested quietly beneath the silver moonlight. " +
        "And the little fox slept peacefully until the warm morning sun came through the trees. " +
        "From that night on, Foxie knew that helping a friend was one of the nicest ways to end the day. " +
        "The End."
},

{
    id: 30,

    category: "Bedtime",

    emoji: "☁️🌙",

    title: "The Cloud That Carried Dreams",

    text:
        "Once upon a time, high above a peaceful little town, there lived a soft white cloud named Puffy. " +
        "Puffy was a small, fluffy cloud who loved floating across the sky. " +
        "Every evening, when the sun went down, Puffy watched the town become quiet. " +
        "The children climbed into their beds, the animals curled up in their homes, and the lights in the houses slowly disappeared. " +
        "One night, the Moon called Puffy closer. " +
        "\"Puffy, would you like to help me tonight?\" asked the Moon. " +
        "\"Of course!\" said Puffy happily. " +
        "\"Tonight, I need you to carry peaceful dreams to the children below.\" " +
        "Puffy was excited. \"How do I do that?\" " +
        "The Moon sprinkled tiny silver sparkles onto Puffy. " +
        "\"These sparkles will turn into dreams when you float above sleeping children.\" " +
        "Puffy slowly floated over the town. " +
        "Below him, a little boy named Sam was lying in his bed. " +
        "Sam had closed his eyes, but he was having trouble falling asleep. " +
        "Puffy floated gently above his window. " +
        "Tiny silver sparkles drifted down like soft snow. " +
        "Sam soon began dreaming about flying through a beautiful garden. " +
        "He saw colorful flowers, friendly butterflies, and a sparkling blue river. " +
        "Puffy smiled and continued his journey. " +
        "Next, he floated over a little girl named Lily. " +
        "Lily loved animals and dreamed of having a magical forest adventure. " +
        "Puffy sprinkled a few more silver sparkles. " +
        "Soon, Lily dreamed that she was walking through a forest where rabbits, deer, birds, and foxes were her friends. " +
        "Puffy continued across the quiet town. " +
        "He saw a sleepy puppy curled up beside a warm blanket. " +
        "He saw a kitten sleeping near a window. " +
        "He saw a little bird resting safely inside its nest. " +
        "Everywhere Puffy went, peaceful dreams followed. " +
        "After a while, Puffy noticed that his sparkles were almost gone. " +
        "\"Oh no,\" he whispered. \"I still have one more house to visit.\" " +
        "The Moon smiled. \"You have already done something wonderful tonight.\" " +
        "Puffy looked down and saw a small child sleeping peacefully beneath a soft blanket. " +
        "Puffy gently floated above the house. " +
        "His very last sparkle drifted down through the window. " +
        "The child smiled in sleep and dreamed of a warm beach filled with seashells and gentle waves. " +
        "Puffy felt happy. " +
        "He had carried every dream safely through the night. " +
        "The Moon gently pulled Puffy back into the quiet sky. " +
        "\"You did very well,\" said the Moon. " +
        "\"Thank you,\" said Puffy. " +
        "Puffy looked down at the peaceful town. " +
        "Every house was quiet. " +
        "Every child was sleeping. " +
        "The stars were shining softly above them. " +
        "Puffy slowly closed his fluffy eyes. " +
        "For the first time, he felt sleepy too. " +
        "\"Now it is my turn to dream,\" he whispered. " +
        "The Moon covered Puffy with a soft silver glow. " +
        "Puffy dreamed that he was floating through a sky filled with rainbow clouds and sparkling stars. " +
        "He dreamed of happy children waking up with big smiles. " +
        "As the night passed, Puffy rested peacefully beside the Moon. " +
        "When morning arrived, the sun painted the sky with beautiful golden light. " +
        "Puffy woke up feeling fresh and happy. " +
        "From that night on, Puffy continued carrying peaceful dreams across the sky. " +
        "And whenever children looked up at the clouds during the day, they smiled, knowing that somewhere above them was a little cloud who helped make their nights magical. " +
        "The End."
},

{
    id: 31,

    category: "Bedtime",

    emoji: "🐶⭐",

    title: "Toby's Dreamy Night",

    text:
        "Once upon a time, in a cozy little house beside a beautiful garden, there lived a friendly puppy named Toby. " +
        "Toby had soft brown fur, floppy ears, and a little wagging tail. " +
        "He loved running around the garden during the day and playing with his favorite red ball. " +
        "But one evening, the sun went down, and Toby was still full of energy. " +
        "\"Toby, it is time for bed,\" said his owner gently. " +
        "Toby looked at his red ball. \"Just one more game!\" he barked happily. " +
        "He chased the ball across the room, jumped over a pillow, and ran around the table. " +
        "After a few minutes, Toby finally stopped. " +
        "He gave a huge yawn. \"Yaaawn... maybe I am a little tired.\" " +
        "He walked toward his cozy bed near the window. " +
        "Outside, the moon was shining brightly in the dark blue sky. " +
        "Toby looked at the stars. " +
        "\"I wonder where they go when they sleep,\" he thought. " +
        "He curled up on his soft blanket, but he could not fall asleep. " +
        "Then he heard a gentle sound outside. " +
        "Whoosh... whoosh... " +
        "The night breeze was moving through the trees. " +
        "Toby listened quietly. " +
        "He heard the leaves dancing softly. " +
        "He heard a cricket singing in the garden. " +
        "Chirp... chirp... chirp... " +
        "The peaceful sounds made Toby feel calm. " +
        "He closed his eyes and imagined walking through a magical garden. " +
        "In his dream, the flowers were glowing like little stars. " +
        "Butterflies flew around him, and friendly rabbits hopped beside him. " +
        "Toby's red ball suddenly became a magical ball that could fly through the sky. " +
        "Toby chased it happily through the clouds. " +
        "He jumped over rainbows and ran across soft white clouds. " +
        "Then he saw a giant silver moon smiling at him. " +
        "\"Hello, Toby,\" said the Moon. " +
        "\"Hello!\" Toby barked happily. " +
        "\"Are you enjoying your dream?\" asked the Moon. " +
        "\"Yes! It is wonderful!\" Toby replied. " +
        "The Moon smiled and gently covered the dreamland with silver light. " +
        "Toby lay down on a soft cloud. " +
        "The butterflies stopped flying. " +
        "The rabbits curled up beside him. " +
        "Even the magical red ball rested quietly nearby. " +
        "Toby felt warm and peaceful. " +
        "Back in his real bed, Toby was sleeping soundly. " +
        "His little tail moved gently as he dreamed. " +
        "The moonlight shone through the window and rested softly on his blanket. " +
        "The whole house was quiet. " +
        "The garden was peaceful. " +
        "The stars twinkled above the sleeping puppy. " +
        "Toby dreamed of running through beautiful fields, playing with his friends, and chasing his magical red ball. " +
        "When morning arrived, warm sunlight entered the room. " +
        "Toby opened his eyes and stretched his little paws. " +
        "He looked at his red ball and wagged his tail happily. " +
        "\"Good morning!\" he barked. " +
        "Toby had slept peacefully and was ready for another wonderful day. " +
        "From that night on, whenever bedtime came, Toby happily curled up in his cozy bed and remembered that the best adventures could sometimes happen in dreams. " +
        "The End."
},

{
    id: 32,

    category: "Moral",

    emoji: "🐱💖🌟",

    title: "Milo the Cat Learns to Be Kind",

    text:
        "Once upon a time, in a cozy little village surrounded by green fields, there lived a young cat named Milo. " +
        "Milo had soft orange fur, bright green eyes, and a long fluffy tail. " +
        "He was playful and clever, but he often forgot to think about other animals. " +
        "Every morning, Milo walked around the village looking for fun. " +
        "One day, he found a small bowl of milk near a farmer's house. " +
        "\"This looks delicious!\" Milo said. " +
        "He quickly drank the whole bowl without asking anyone. " +
        "A little puppy named Bruno came running toward the bowl. " +
        "\"Milo, I was saving that milk for my breakfast,\" Bruno said sadly. " +
        "Milo simply walked away. " +
        "Later that day, Milo saw a small bird struggling to carry a piece of bread. " +
        "The bread was almost as big as the bird. " +
        "Milo laughed instead of helping. " +
        "The bird dropped the bread and flew away sadly. " +
        "That evening, Milo was walking home when he heard a tiny cry near the garden. " +
        "He looked behind a bush and found a little kitten trapped between two wooden sticks. " +
        "\"Help me, please,\" the kitten cried. " +
        "Milo tried to pull the sticks apart, but they were too heavy. " +
        "He looked around and called for help. " +
        "Bruno came running. " +
        "Together, Milo and Bruno pushed the sticks aside and rescued the little kitten. " +
        "The kitten happily thanked them. " +
        "Milo felt something warm in his heart. " +
        "\"Helping someone feels really good,\" he thought. " +
        "The next morning, Milo remembered the puppy and the bird he had ignored. " +
        "He decided to find them and say sorry. " +
        "First, he went to Bruno. " +
        "\"I am sorry for drinking your milk yesterday. I should have asked before taking it,\" Milo said. " +
        "Bruno smiled and accepted his apology. " +
        "Then Milo found the little bird. " +
        "\"I am sorry I laughed when you needed help,\" Milo said. " +
        "The bird smiled and said, \"Thank you for saying sorry.\" " +
        "From that day on, Milo began looking for ways to help others. " +
        "He shared his food, helped smaller animals, and always asked before taking something that belonged to someone else. " +
        "The animals soon noticed that Milo had changed. " +
        "He was no longer the selfish cat who only thought about himself. " +
        "Instead, he became one of the kindest animals in the village. " +
        "Milo learned that kindness does not require big or difficult actions. " +
        "A small helping hand, a shared meal, or a kind word can make someone feel happy. " +
        "Whenever Milo helped another animal, he felt happier too. " +
        "From then on, Milo remembered one important lesson: being kind to others makes the world a better place for everyone. " +
        "The End."
},
{
    id: 33,

    category: "Moral",

    emoji: "🦌🤝🌳",

    title: "The Deer and the Helpful Friends",

    text:
        "Once upon a time, in a peaceful forest filled with tall trees and colorful flowers, there lived a young deer named Daisy. " +
        "Daisy had soft brown fur, bright eyes, and beautiful white spots on her back. " +
        "She loved running through the forest and spending time with her animal friends. " +
        "One morning, Daisy went deep into the forest to look for fresh grass. " +
        "She followed a narrow path that led to a quiet meadow. " +
        "The grass there was green and soft, and Daisy happily began eating. " +
        "Suddenly, she heard a loud sound behind her. " +
        "Crack! " +
        "A large tree branch fell across the path. " +
        "Daisy tried to move it, but the branch was too heavy. " +
        "She pushed it with her head, but it did not move. " +
        "\"Oh no! How will I get home?\" Daisy wondered. " +
        "She looked around but could not find another path. " +
        "Daisy began to feel worried. " +
        "Soon, her friend Sammy the squirrel came running through the trees. " +
        "\"Daisy, why are you standing here?\" Sammy asked. " +
        "\"A large branch has blocked the path. I cannot move it,\" Daisy replied. " +
        "Sammy looked at the branch and tried pulling it with all his strength. " +
        "But the branch was much too heavy for a little squirrel. " +
        "\"I will get some help,\" Sammy said. " +
        "He quickly ran to find his friends. " +
        "Soon, Ruby the rabbit arrived. " +
        "\"I will help too!\" Ruby said. " +
        "She tried pushing the branch, but it still did not move. " +
        "Then Bruno the bear came walking through the forest. " +
        "\"What happened?\" Bruno asked. " +
        "\"Daisy is trapped, and we need to move this branch,\" Sammy explained. " +
        "Bruno smiled. \"Do not worry. We can do it together.\" " +
        "Bruno pushed the branch with his strong paws. " +
        "Daisy pushed with her head. " +
        "Ruby pushed with her little body, and Sammy pulled a smaller branch away from the path. " +
        "They all worked together. " +
        "One push was not enough. " +
        "They tried again. " +
        "Push! Pull! Push! " +
        "Finally, the large branch rolled away from the path. " +
        "Daisy jumped happily. " +
        "\"I am free! Thank you, everyone!\" she said. " +
        "Sammy smiled. \"That is what friends are for.\" " +
        "Daisy looked at all her friends and felt very grateful. " +
        "\"I could never have moved that branch alone,\" she said. " +
        "Bruno replied, \"Sometimes one friend cannot solve a problem, but many friends working together can do amazing things.\" " +
        "The animals then walked back through the forest together. " +
        "Daisy shared some sweet berries she had collected with everyone. " +
        "They sat under a large tree and enjoyed the peaceful afternoon. " +
        "Daisy learned that asking for help is not something to be ashamed of. " +
        "True friends are happy to help when someone is in trouble. " +
        "She also learned that teamwork can make even the biggest problems easier. " +
        "From that day on, Daisy always helped her friends whenever they needed her. " +
        "The animals became even closer and knew they could depend on one another. " +
        "And whenever a difficult problem appeared in the forest, they remembered that working together made them stronger. " +
        "The End."
},
{
    id: 34,

    category: "Adventure",

    emoji: "🗺️🏠🔍",

    title: "The Secret Map in Grandpa's Attic",

    text:
        "Once upon a time, in a small peaceful town, there lived a curious boy named Arjun and his younger sister Meera. " +
        "Arjun was twelve years old, and Meera was nine. " +
        "They loved exploring their grandfather's old house during their school holidays. " +
        "Their grandfather had lived in the house for many years, and every room seemed to have an interesting story. " +
        "One rainy afternoon, Arjun and Meera were looking for something exciting to do. " +
        "\"Let's explore the attic!\" Arjun said. " +
        "Meera's eyes became wide with excitement. \"The attic? Grandpa said we should not make a mess.\" " +
        "\"We won't make a mess. We will just look around,\" Arjun replied. " +
        "They carefully climbed the old wooden stairs leading to the attic. " +
        "The attic was dark and dusty, with old boxes, wooden chairs, books, and forgotten toys. " +
        "Meera switched on a small lamp. " +
        "Suddenly, she noticed an old wooden box behind a pile of books. " +
        "\"Arjun, look at this!\" she called. " +
        "Arjun moved the books aside and pulled the box forward. " +
        "The box had a small golden lock, but it was already open. " +
        "Inside the box, they found an old compass, a small silver key, and a rolled piece of paper. " +
        "Arjun carefully opened the paper. " +
        "It was a map. " +
        "\"This looks like a treasure map!\" Arjun whispered excitedly. " +
        "The map showed their town, an old stone bridge, a hill, and a large tree. " +
        "There was a red X near the top of the hill. " +
        "Meera looked at the map carefully. " +
        "\"Do you think there is really something hidden there?\" she asked. " +
        "Arjun smiled. \"There is only one way to find out.\" " +
        "The next morning, they showed the map to their grandfather. " +
        "Grandpa looked surprised when he saw it. " +
        "\"Where did you find this?\" he asked. " +
        "\"In the old wooden box in the attic,\" Meera replied. " +
        "Grandpa smiled and looked at the map for a long moment. " +
        "\"I remember this map,\" he said. " +
        "\"When I was a boy, my friends and I used to explore the hills. But we never discovered what was at the red X.\" " +
        "Arjun's eyes became bright. \"Can we go and find it?\" " +
        "Grandpa thought for a moment. " +
        "\"You may go, but stay together and be careful. Take the compass with you.\" " +
        "Arjun and Meera packed some water, sandwiches, a flashlight, and the old compass. " +
        "Their grandfather gave them permission to explore the safe trail near the hill. " +
        "They followed the map through a quiet path beside the river. " +
        "Soon, they reached the old stone bridge shown on the map. " +
        "Meera checked the map. \"The next place should be the big oak tree.\" " +
        "They continued walking until they found a huge tree standing beside the trail. " +
        "Behind the tree, they discovered a narrow path leading toward the hill. " +
        "\"We are getting closer!\" Arjun said excitedly. " +
        "They followed the path and reached the top of the hill. " +
        "The compass pointed toward a group of large rocks. " +
        "Arjun and Meera carefully searched around them. " +
        "Then Meera noticed a small metal handle hidden beneath some leaves. " +
        "\"Arjun! I found something!\" she shouted. " +
        "Together, they moved the leaves aside and discovered a small wooden box buried in the ground. " +
        "The silver key from the attic fit perfectly into the lock. " +
        "Click! " +
        "The box opened. " +
        "Inside, they found several old photographs, a small diary, and a collection of colorful stones. " +
        "There was also a letter with their grandfather's name written on it. " +
        "Arjun carefully opened the letter. " +
        "It was written by Grandpa when he was a young boy. " +
        "The letter described how he and his friends had hidden the box during one of their childhood adventures. " +
        "They had planned to return for it many years later, but Grandpa had completely forgotten about it. " +
        "Meera smiled. \"So the treasure was not gold or diamonds.\" " +
        "Arjun laughed. \"The real treasure was Grandpa's childhood memories!\" " +
        "They carefully packed everything and returned home before sunset. " +
        "When Grandpa saw the box, he became very happy. " +
        "He looked at the old photographs and remembered his childhood friends. " +
        "\"I thought these memories were lost forever,\" he said with a smile. " +
        "Arjun and Meera listened carefully as Grandpa told them stories about his childhood adventures. " +
        "That evening, they realized that the greatest treasures are not always expensive things. " +
        "Sometimes, memories, family stories, friendship, and shared adventures are much more valuable. " +
        "From that day on, Arjun and Meera kept a special adventure notebook. " +
        "They wrote down every exciting place they explored and every wonderful memory they made with their family. " +
        "And whenever they looked at the old map, they remembered the day they discovered Grandpa's forgotten treasure. " +
        "The End."
},

{
    id: 35,

    category: "Adventure",

    emoji: "🏕️🌲🧭",

    title: "The Kids Who Got Lost in the Forest",

    text:
        "Once upon a time, three best friends named Arjun, Meera, and Ravi went on a camping trip with their families. " +
        "They were excited to explore the beautiful forest near their campsite. " +
        "Arjun loved adventures, Meera was very observant, and Ravi was always ready to make everyone laugh. " +
        "Their parents had warned them not to go too far from the campsite. " +
        "\"Stay on the marked trail and always stay together,\" Arjun's father reminded them. " +
        "The three friends promised to be careful. " +
        "The next morning, they walked along the forest trail with their parents. " +
        "They saw tall trees, colorful flowers, small streams, and beautiful butterflies. " +
        "After lunch, the children noticed a small path leading away from the main trail. " +
        "\"I wonder where that path goes,\" Ravi said curiously. " +
        "They followed it for a short distance, thinking they could easily return. " +
        "But after a few minutes, they realized they could no longer see the main trail. " +
        "\"I think we have gone too far,\" Meera said worriedly. " +
        "Arjun looked around and realized that the trees all looked similar. " +
        "\"We should stop walking,\" he said. \"If we keep moving, we might get even more lost.\" " +
        "The friends sat beneath a large tree and tried to stay calm. " +
        "Meera remembered that her father had taught her to listen carefully in unfamiliar places. " +
        "They heard a stream nearby. " +
        "\"Maybe we can use the stream to find the main trail,\" Ravi suggested. " +
        "Arjun shook his head. \"We should not follow unknown paths. Let's stay here and make ourselves easy to find.\" " +
        "They decided to stay together in one safe place. " +
        "Arjun used a small whistle he carried in his backpack and blew it three times. " +
        "Tweet! Tweet! Tweet! " +
        "They waited quietly. " +
        "A few minutes later, they heard a faint whistle in the distance. " +
        "\"Someone heard us!\" Meera said happily. " +
        "They blew the whistle again. " +
        "Soon, they heard voices between the trees. " +
        "\"Arjun! Meera! Ravi!\" someone called. " +
        "It was Arjun's father and the forest guide searching for them. " +
        "The children were extremely happy to see them. " +
        "The guide carefully led them back to the main campsite. " +
        "Their parents hugged them tightly. " +
        "\"We were worried, but we are very glad you stayed together and did not keep wandering,\" Arjun's father said. " +
        "The children apologized for leaving the marked trail. " +
        "They understood why following safety rules was so important. " +
        "That evening, they sat around the campfire and talked about their adventure. " +
        "Ravi smiled and said, \"I think getting lost was the scariest adventure I have ever had.\" " +
        "Meera laughed. \"At least we learned something important.\" " +
        "Arjun nodded. \"When we are in a difficult situation, staying calm and thinking carefully can help us make better decisions.\" " +
        "The three friends promised never to leave a marked trail without an adult again. " +
        "The next morning, they explored the forest safely with their families. " +
        "They enjoyed the beautiful trees, listened to the birds, and took many photographs. " +
        "The adventure taught them that courage does not mean taking unnecessary risks. " +
        "True courage means staying calm, helping your friends, and making safe choices when something goes wrong. " +
        "From that day on, Arjun, Meera, and Ravi became even more careful explorers. " +
        "And their forest adventure became a story they would remember for many years. " +
        "The End."
},
{
    id: 36,

    category: "Adventure",

    emoji: "🔦🪨🧗",

    title: "The Mystery of the Hidden Cave",

    text:
        "Once upon a time, in a small village surrounded by green hills, there lived a curious boy named Kavin. " +
        "Kavin loved exploring new places with his best friend, Anu. " +
        "They often went hiking with their families during the weekends. " +
        "One Saturday morning, Kavin and Anu were walking along a safe mountain trail with Kavin's uncle. " +
        "As they climbed higher, they noticed a strange mark carved into a large rock beside the trail. " +
        "\"Look, Anu! What do you think that mark means?\" Kavin asked. " +
        "Anu looked closely. \"It looks like an arrow pointing toward the hill.\" " +
        "Kavin's uncle smiled. \"There may be an old cave somewhere nearby, but we should never explore one without an adult.\" " +
        "They continued along the marked trail and soon noticed a narrow opening between two large rocks. " +
        "A cool breeze came from inside. " +
        "\"I think we found the cave!\" Kavin said excitedly. " +
        "His uncle checked the entrance carefully and agreed to explore only the safe area with them. " +
        "Kavin switched on his flashlight. " +
        "Inside, the cave walls were covered with unusual shapes and old drawings. " +
        "Anu pointed her flashlight toward one wall. " +
        "\"Look! There are pictures of people here.\" " +
        "They carefully examined the drawings. " +
        "One picture showed people carrying baskets toward the cave. " +
        "Another showed a large tree beside a river. " +
        "Kavin noticed a small symbol that looked exactly like the mark outside the cave. " +
        "\"Maybe this cave was important to the people who lived here long ago,\" he said. " +
        "They walked a little farther and discovered an old wooden shelf covered in dust. " +
        "On the shelf was a small clay pot and several smooth stones. " +
        "Kavin's uncle reminded them not to touch or remove anything. " +
        "\"These objects may be very old and important to history,\" he explained. " +
        "The children carefully looked at everything without disturbing it. " +
        "Suddenly, they heard a loud sound from deeper inside the cave. " +
        "Drip... drip... drip... " +
        "Water was falling from the ceiling. " +
        "Anu became nervous. " +
        "\"Maybe we should go back now,\" she said. " +
        "Kavin agreed immediately. " +
        "\"Yes. We have seen enough for today.\" " +
        "They carefully returned to the entrance with Kavin's uncle. " +
        "Outside, they told a local guide about the drawings and objects they had discovered. " +
        "The guide was surprised and contacted the local history team. " +
        "A few weeks later, researchers visited the cave and carefully studied the old drawings and objects. " +
        "They discovered that the cave had been used by people many years ago. " +
        "The drawings helped them learn more about the history of the village. " +
        "Kavin and Anu were excited to hear that their discovery had helped people learn about the past. " +
        "Their adventure taught them that exploring is not only about finding treasure. " +
        "Sometimes, the most valuable discoveries are stories and knowledge from the past. " +
        "They also learned that curiosity should always be combined with safety and respect for important places. " +
        "From that day on, Kavin and Anu continued exploring new places, but they always followed safety rules and listened to adults. " +
        "And the mysterious cave became one of their most unforgettable adventures. " +
        "The End."
},

{
    id: 37,

    category: "Adventure",

    emoji: "🚂🌙🎒",

    title: "The Adventure on the Midnight Train",

    text:
        "Once upon a time, there lived a twelve-year-old boy named Arjun who loved traveling by train. " +
        "One evening, Arjun was traveling with his parents to visit his grandmother in another town. " +
        "They boarded a night train just before sunset. " +
        "Arjun looked through the window and watched the busy station slowly disappear behind them. " +
        "As the train moved through the countryside, the sky became dark and the stars began to shine. " +
        "Arjun sat beside the window with his favorite storybook. " +
        "A little later, his parents fell asleep. " +
        "Arjun quietly looked outside and enjoyed the peaceful journey. " +
        "Suddenly, the train slowed down. " +
        "The lights inside the coach flickered for a moment. " +
        "Arjun looked around curiously. " +
        "\"Why did the train stop?\" he wondered. " +
        "A few passengers looked outside their windows. " +
        "The train had stopped at a small station surrounded by trees. " +
        "Arjun noticed an old sign that read \"Green Valley Station.\" " +
        "The station was almost empty. " +
        "A railway worker walked through the coach and calmly told everyone that the train would wait for a few minutes because of a signal problem. " +
        "Arjun felt a little nervous, but his father woke up and reassured him. " +
        "\"There is nothing to worry about. We are safe inside the train,\" he said. " +
        "While waiting, Arjun noticed a young boy sitting alone in the next seat. " +
        "The boy looked worried and kept checking a small piece of paper. " +
        "Arjun politely asked, \"Are you okay?\" " +
        "The boy replied, \"I am traveling to meet my aunt, but I think I may have gotten on the wrong coach.\" " +
        "Arjun's father helped the boy check his ticket. " +
        "They discovered that the boy was in the correct train but needed to get off at the next major station. " +
        "Arjun smiled and said, \"You don't need to worry. We can help you.\" " +
        "The railway worker returned and announced that the signal problem had been fixed. " +
        "The train began moving again. " +
        "Arjun, his father, and the boy continued talking quietly. " +
        "Soon, the train passed through a long tunnel. " +
        "Everything outside became completely dark. " +
        "Arjun looked through the window and saw only the reflection of the passengers. " +
        "When the train came out of the tunnel, the moon was shining brightly over the hills. " +
        "Everyone admired the beautiful view. " +
        "The boy smiled for the first time that night. " +
        "After several hours, the train reached the next major station. " +
        "The boy's aunt was waiting on the platform. " +
        "He thanked Arjun and his father for helping him. " +
        "\"I was scared when I thought I was lost,\" he said. " +
        "\"But you made me feel safe.\" " +
        "Arjun waved goodbye as the train continued its journey. " +
        "Later that night, Arjun looked out of the window again. " +
        "The moon followed the train through the dark sky, and the countryside looked peaceful under the silver light. " +
        "Arjun realized that his midnight train journey had become more than just a trip to his grandmother's house. " +
        "He had experienced an unexpected adventure and helped someone who needed him. " +
        "When morning came, the train finally reached his grandmother's town. " +
        "Arjun stepped onto the platform with a big smile. " +
        "\"That was the most exciting train journey ever!\" he said. " +
        "His grandmother laughed and gave him a warm hug. " +
        "From that day on, whenever Arjun traveled by train at night, he remembered the mysterious station, the shining moon, and the boy he had helped. " +
        "He learned that even an ordinary journey can become a wonderful adventure when we stay calm, care for others, and remain curious about the world around us. " +
        "The End."
},

{
    id: 38,

    category: "Adventure",

    emoji: "🏝️🗺️💰",

    title: "The Secret of Treasure Island",

    text:
        "One bright summer morning, a twelve-year-old girl named Meera visited her uncle's small seaside house with her younger brother Rahul. " +
        "They loved listening to their uncle's stories about the sea, old ships, and mysterious islands. " +
        "One afternoon, while cleaning an old wooden cupboard, Meera discovered a dusty box hidden behind some books. " +
        "Inside the box was an old map with a small red mark on an island. " +
        "Rahul's eyes became wide with excitement. " +
        "\"Could this be a real treasure map?\" he asked. " +
        "Their uncle looked at the map carefully and smiled. " +
        "\"That map belonged to your grandfather,\" he said. " +
        "\"He once visited that island many years ago, but he never told us what he found there.\" " +
        "Meera and Rahul became very curious. " +
        "The next morning, their uncle took them on a small boat to the island shown on the map. " +
        "The journey across the sea was exciting. " +
        "The waves moved gently, and white clouds floated across the blue sky. " +
        "After several hours, they finally reached the island. " +
        "The island was covered with tall trees, rocks, and beautiful flowers. " +
        "Meera opened the old map and compared it with the surroundings. " +
        "\"The first mark is near a large stone,\" she said. " +
        "They walked carefully along the beach until they found a large stone shaped like a sleeping elephant. " +
        "Behind the stone was a narrow path leading into the forest. " +
        "Rahul wanted to run ahead, but their uncle reminded him to stay close. " +
        "\"Adventure is exciting, but safety always comes first,\" he said. " +
        "They followed the path and soon reached an old wooden bridge. " +
        "The bridge looked weak, so their uncle checked it carefully before crossing. " +
        "After crossing the bridge, Meera noticed three large rocks arranged in a triangle. " +
        "The map showed the same symbol. " +
        "She searched around the rocks and discovered a small metal key hidden underneath a flat stone. " +
        "\"We found a key!\" Rahul shouted happily. " +
        "The map showed another mark deeper inside the island. " +
        "They continued walking until they reached a small hill. " +
        "At the bottom of the hill stood an old stone doorway covered with vines. " +
        "Meera used the key, and the old door slowly opened. " +
        "Inside was a small room filled with dusty wooden boxes. " +
        "Rahul expected to see piles of gold coins, but the boxes contained something completely different. " +
        "There were old photographs, letters, seashells, handmade tools, and notebooks. " +
        "One notebook belonged to their grandfather. " +
        "Meera carefully opened it and began reading. " +
        "The notebook explained that their grandfather had discovered the room many years earlier. " +
        "He had collected old objects left behind by fishermen and travelers who had visited the island long ago. " +
        "He had hidden the collection to protect it from being damaged or stolen. " +
        "At the end of the notebook, he had written, \"The greatest treasure is not gold. It is the history and memories we protect for the next generation.\" " +
        "Meera and Rahul looked at each other with surprise. " +
        "They had expected to find gold, but instead they had discovered a piece of their family's history. " +
        "Their uncle carefully photographed the collection and contacted the local museum after returning home. " +
        "The museum later helped preserve the old objects and documents. " +
        "Meera kept a copy of her grandfather's final note in her room. " +
        "Rahul kept a small seashell that his grandfather had collected, with permission from the museum. " +
        "On their journey home, Meera looked back at the island and smiled. " +
        "\"We didn't find a treasure chest full of gold,\" she said. " +
        "\"No,\" her uncle replied, \"but you found something much more valuable.\" " +
        "That adventure taught Meera and Rahul that true treasure can be found in memories, history, family, and the experiences we share with others. " +
        "The End."
},

{
    id: 39,

    category: "Adventure",

    emoji: "🏰🗝️🔦",

    title: "The Hidden Door in the Old Castle",

    text:
        "Once upon a time, there lived a curious twelve-year-old boy named Kavin and his eleven-year-old sister Anu. " +
        "During their school holidays, they visited their grandfather, who lived near an old castle on the edge of a quiet village. " +
        "The castle had been empty for many years, and people in the village often told stories about its mysterious rooms and secret passages. " +
        "One afternoon, Grandfather took Kavin and Anu for a walk near the castle. " +
        "They stood outside the tall stone walls and looked at the old towers covered with green plants. " +
        "\"Did people really live here?\" Anu asked. " +
        "\"Yes,\" Grandfather replied. \"Many generations ago, this castle was home to a large family.\" " +
        "Kavin noticed a strange symbol carved into one of the stones. " +
        "It looked like a small star surrounded by a circle. " +
        "\"Grandfather, what is this symbol?\" he asked. " +
        "Grandfather looked closely and smiled. " +
        "\"I have seen that symbol in an old book,\" he said. \"But I never discovered where it came from.\" " +
        "Kavin became very curious. " +
        "The next morning, Grandfather showed them an old book that contained drawings of the castle. " +
        "One drawing showed a large hall with a strange symbol on the wall. " +
        "Kavin compared the drawing with the castle and realized that the symbol they had found was near the same place. " +
        "With permission from the village caretaker, they entered the safe part of the old castle during the daytime. " +
        "Kavin carried a flashlight, while Anu carried a notebook and pencil. " +
        "They walked through a large hall filled with dusty paintings. " +
        "Suddenly, Anu noticed that one painting looked different from the others. " +
        "It showed a family standing in front of the castle. " +
        "At the bottom of the painting was the same star symbol. " +
        "Kavin carefully looked behind the painting and discovered a small metal handle. " +
        "\"Look!\" he whispered. " +
        "They gently pulled the handle, and part of the wall moved slightly. " +
        "Behind it was a narrow doorway. " +
        "Anu's eyes became wide with excitement. " +
        "\"We found the hidden door!\" she said. " +
        "Grandfather reminded them not to enter any unsafe area without checking it first. " +
        "The caretaker inspected the doorway and confirmed that the passage was stable and safe to explore with supervision. " +
        "They slowly walked through the passage. " +
        "The walls were covered with old drawings and writing. " +
        "At the end of the passage, they found a small room with a wooden table. " +
        "On the table was an old diary covered in dust. " +
        "Grandfather opened the diary carefully. " +
        "It belonged to a young girl who had lived in the castle many years ago. " +
        "The diary described how she loved reading, drawing, and exploring the castle. " +
        "She had created the secret room as a quiet place where she could keep her books and drawings. " +
        "Kavin and Anu looked around the room and found several old drawings hidden inside a wooden box. " +
        "There were drawings of the castle, the village, the nearby river, and the people who lived there long ago. " +
        "Anu carefully copied some of the drawings into her notebook. " +
        "Grandfather decided that the diary and drawings should be shown to the local museum so they could be preserved safely. " +
        "The museum experts later visited the castle and discovered that the hidden room was an important part of the village's history. " +
        "The villagers were excited to learn more about the people who had lived there generations ago. " +
        "Kavin and Anu felt proud that their curiosity had helped uncover an important piece of history. " +
        "As they walked home, Anu smiled and said, \"I thought we would find gold or jewels.\" " +
        "Kavin laughed and replied, \"We found something better—a story from the past.\" " +
        "From that day on, Kavin and Anu understood that adventures are not always about finding treasure. " +
        "Sometimes the greatest discoveries are hidden stories, forgotten memories, and pieces of history waiting to be remembered. " +
        "The End."
},

{
    id: 40,

    category: "Adventure",

    emoji: "🌊⛵🎒",

    title: "The Lost Boat and the Big Adventure",

    text:
        "Once upon a time, there lived a thirteen-year-old boy named Arjun and his best friend Riya. " +
        "They lived in a small town near a beautiful lake surrounded by green hills. " +
        "During their summer vacation, Arjun and Riya often visited the lake with Arjun's older brother, Vijay. " +
        "One sunny morning, the three friends decided to spend the day near the water. " +
        "They packed some food, drinking water, a first-aid kit, and a small flashlight. " +
        "Vijay reminded them to stay close to the shore and never go into the water without an adult. " +
        "After lunch, they noticed a small empty boat tied near an old wooden dock. " +
        "Suddenly, strong wind began to blow across the lake. " +
        "The rope holding the boat became loose, and the little boat slowly moved away from the dock. " +
        "\"The boat is drifting away!\" Riya shouted. " +
        "They watched as the boat floated toward the other side of the lake. " +
        "Vijay immediately told them not to enter the water. " +
        "\"We must stay safe and call for help,\" he said. " +
        "They walked along the shore and informed a nearby lake ranger about the missing boat. " +
        "The ranger thanked them and said that the boat belonged to a local fisherman. " +
        "He explained that the wind could carry the boat toward a small island in the middle of the lake. " +
        "Arjun, Riya, and Vijay waited near the ranger station. " +
        "After some time, the wind became weaker. " +
        "The ranger prepared a proper rescue boat and asked Vijay to help him search from a safe distance. " +
        "Arjun and Riya were allowed to come along with their parents, who had arrived after receiving the message. " +
        "They slowly traveled across the lake. " +
        "The water sparkled under the afternoon sunlight. " +
        "After searching for a while, they spotted the missing boat near a small island. " +
        "The boat was caught between some bushes near the shore. " +
        "The ranger carefully moved the rescue boat closer. " +
        "He safely pulled the missing boat away from the bushes. " +
        "Inside the boat, they discovered a small fishing bag and some tools. " +
        "The fisherman was very happy when the boat was returned. " +
        "\"Thank you for telling the ranger immediately,\" he said. " +
        "\"If you had tried to chase the boat yourselves, you could have been in danger.\" " +
        "Arjun smiled and said, \"We wanted to help, but we knew we needed an adult.\" " +
        "The fisherman thanked them again and gave them a small wooden boat model as a souvenir. " +
        "Riya looked at the tiny model and laughed. " +
        "\"This little boat is much easier to handle!\" she said. " +
        "Everyone laughed together. " +
        "On their way home, Arjun thought about what had happened. " +
        "The day had started as a simple picnic but had turned into an exciting adventure. " +
        "He learned that being brave did not mean doing dangerous things. " +
        "Real courage meant staying calm, making smart decisions, and asking for help when necessary. " +
        "Riya also learned that even a small act of responsibility could help someone in a big way. " +
        "From that day forward, whenever they visited the lake, they remembered the lost boat and the important lesson it had taught them. " +
        "The End."
},

{
    id: 41,

    category: "Adventure",

    emoji: "🧭🗺️🌲",

    title: "The Compass That Led to a Secret Place",

    text:
        "Once upon a time, there lived a curious twelve-year-old girl named Meera who loved exploring new places. " +
        "She lived with her parents and her younger brother, Rahul, in a small town surrounded by green hills. " +
        "One weekend, their grandfather came to visit them. " +
        "While unpacking his old travel bag, he discovered a small golden compass. " +
        "The compass had a strange star-shaped mark on its back. " +
        "Meera immediately became curious. " +
        "\"Grandpa, where did you get this compass?\" she asked. " +
        "Grandfather smiled and said, \"I found it during one of my journeys many years ago. I never discovered where it was supposed to lead.\" " +
        "Meera carefully held the compass in her hand. " +
        "The needle pointed toward the hills behind their town. " +
        "Rahul looked excited. " +
        "\"Maybe it is leading us to a secret place!\" he said. " +
        "Grandfather laughed and reminded them that they should never explore unknown places alone. " +
        "The next morning, Grandfather, Meera, Rahul, and their parents decided to follow the compass together on a safe walking trail. " +
        "They packed water, food, a first-aid kit, and a flashlight. " +
        "As they climbed the hill, Meera checked the compass every few minutes. " +
        "The needle continued pointing toward a quiet forest path. " +
        "After walking for some time, they reached an old stone marker covered with moss. " +
        "The same star-shaped symbol from the compass was carved into the stone. " +
        "Meera became even more excited. " +
        "\"This cannot be a coincidence,\" she said. " +
        "They followed the marked path until they reached a small wooden bridge over a stream. " +
        "Grandfather carefully checked the bridge before allowing everyone to cross. " +
        "On the other side, the compass needle suddenly turned toward a large rock. " +
        "Meera looked around the rock and found a narrow path hidden behind some bushes. " +
        "The path led them to a peaceful valley surrounded by tall trees. " +
        "In the center of the valley stood an old stone bench with the same star symbol carved into it. " +
        "Behind the bench was a small metal box covered with leaves. " +
        "Rahul shouted happily, \"We found something!\" " +
        "Grandfather opened the box carefully. " +
        "Inside were several old photographs, a small notebook, and a collection of dried flowers. " +
        "Meera opened the notebook and discovered that it belonged to her great-grandfather. " +
        "He had written about the valley many years ago. " +
        "He called it the Secret Garden because it was filled with beautiful plants and birds. " +
        "He had visited the valley with his friends and wanted to protect it from being damaged. " +
        "The final page contained a message. " +
        "\"If you discover this place one day, please protect it and leave it as beautiful as you found it.\" " +
        "Meera felt proud when she realized that the compass had belonged to her great-grandfather. " +
        "The family spent the afternoon exploring the valley without disturbing the plants or leaving any rubbish behind. " +
        "Before leaving, they took photographs and carefully returned the box to its safe place. " +
        "Grandfather explained that some beautiful places should remain peaceful and protected rather than becoming crowded tourist spots. " +
        "On the way home, Rahul asked, \"Was the compass really magical?\" " +
        "Grandfather smiled and replied, \"Perhaps not magical, but it carried something special—your family's history.\" " +
        "Meera looked at the compass and smiled. " +
        "She realized that the greatest part of their adventure was not discovering a secret place, but discovering a forgotten story from their own family. " +
        "From that day forward, Meera kept the compass safely in a small wooden box. " +
        "Whenever she looked at it, she remembered that curiosity can lead to wonderful discoveries when it is combined with patience, responsibility, and respect for nature. " +
        "The End."
},

{
    id: 42,

    category: "Adventure",

    emoji: "🏔️🥾🧭",

    title: "The Children Who Climbed the Mysterious Mountain",

    text:
        "Once upon a time, there lived three best friends named Arjun, Meera, and Kavin. " +
        "They loved exploring new places and learning about nature. " +
        "During their school holidays, they visited a beautiful village surrounded by tall green mountains. " +
        "One morning, their teacher told them about a mysterious mountain called Silver Peak. " +
        "The mountain was famous for a large rock at the top that looked like a silver star when sunlight touched it. " +
        "Arjun became excited when he heard the story. " +
        "\"I would love to see that rock!\" he said. " +
        "Meera smiled and replied, \"Maybe we can climb the mountain one day.\" " +
        "Their teacher reminded them that climbing a mountain was not something children should do alone. " +
        "They needed an experienced adult, proper equipment, enough water, and a safe route. " +
        "The next day, the three friends asked Arjun's uncle, who was an experienced hiker, to take them on a supervised hike. " +
        "Their uncle agreed, but he carefully planned the journey first. " +
        "They packed water bottles, healthy snacks, jackets, a first-aid kit, flashlights, and a map. " +
        "Early the next morning, they began climbing the marked trail. " +
        "At first, the path was easy. " +
        "They walked through a forest filled with tall trees and listened to birds singing in the distance. " +
        "After an hour, the trail became steeper. " +
        "Kavin started feeling tired. " +
        "His uncle told everyone to take a short break and drink water. " +
        "After resting, they continued slowly. " +
        "As they climbed higher, the air became cooler and the village below looked smaller. " +
        "Suddenly, they reached a place where the trail divided into two paths. " +
        "One path had a clear trail marker, while the other disappeared between some rocks. " +
        "Arjun wanted to explore the unknown path, but his uncle stopped him. " +
        "\"A mysterious path is not always a safe path,\" he explained. " +
        "They followed the marked trail. " +
        "After walking for another hour, they discovered an old wooden sign pointing toward a viewpoint. " +
        "They followed the sign and reached a large flat rock. " +
        "From there, they could see the entire valley below. " +
        "Meera took out her notebook and drew the beautiful landscape. " +
        "Kavin noticed something shining on the mountain above them. " +
        "\"Look! Is that the silver rock?\" he asked. " +
        "Everyone looked up and saw sunlight reflecting from a large stone near the summit. " +
        "They became excited, but their uncle reminded them that the summit could only be reached if the weather and trail conditions were safe. " +
        "Fortunately, the weather remained clear, so they continued carefully along the marked route. " +
        "Near the top, the wind became stronger. " +
        "They put on their jackets and walked slowly. " +
        "Finally, they reached the summit. " +
        "In front of them stood a large smooth rock that sparkled brightly under the sunlight. " +
        "\"We made it!\" Arjun shouted happily. " +
        "The three friends stood quietly for a moment and admired the view. " +
        "They could see green forests, winding roads, small houses, and a shining river far below. " +
        "Kavin said, \"Now I understand why people call this Silver Peak.\" " +
        "Their uncle took a photograph of the group near the safe viewpoint. " +
        "They did not climb onto the dangerous side of the rock or disturb the surrounding area. " +
        "After spending a short time at the summit, they began their journey back down the mountain. " +
        "The return journey was easier because they knew the route, but they continued walking carefully. " +
        "By sunset, they had safely returned to the village. " +
        "The three friends were tired but extremely happy. " +
        "That evening, they looked at the photographs and talked about everything they had seen. " +
        "Arjun realized that the most important part of their adventure was not reaching the highest point. " +
        "It was learning how to prepare, listen to experienced people, stay together, and respect nature. " +
        "Meera smiled and said, \"The mountain taught us more than we expected.\" " +
        "Kavin nodded and replied, \"And next time, I am bringing more snacks!\" " +
        "Everyone laughed. " +
        "From that day on, the three friends remembered Silver Peak as the mountain that taught them that courage becomes stronger when it is guided by wisdom and responsibility. " +
        "The End."
},

{
    id: 43,

    category: "Adventure",

    emoji: "🗝️🏫🔍",

    title: "The Mystery of the Golden Key",

    text:
        "Once upon a time, there lived a twelve-year-old boy named Arjun and his best friend Meera. " +
        "They studied at a small school in a peaceful town surrounded by green trees. " +
        "One afternoon, while their teacher was cleaning an old storage room, she discovered a tiny golden key inside a dusty wooden box. " +
        "The key had a strange star-shaped symbol carved into it. " +
        "Arjun and Meera became curious when their teacher showed it to the class. " +
        "\"I wonder what this key opens,\" Arjun whispered. " +
        "Meera smiled and said, \"Maybe there is a secret hidden somewhere in our school.\" " +
        "Their teacher reminded them that they should never explore restricted areas without permission. " +
        "The next day, the school principal allowed Arjun, Meera, and their teacher to investigate the mystery safely. " +
        "They began by looking through some very old school records. " +
        "In one of the records, they found a drawing of the school building from more than fifty years ago. " +
        "The drawing showed a small room that no longer appeared on the modern school map. " +
        "The room was marked with the same star symbol found on the golden key. " +
        "\"This must be connected!\" Meera said excitedly. " +
        "The teacher took them to the oldest part of the school building. " +
        "They walked along a quiet hallway until they reached a large wooden cupboard. " +
        "Behind the cupboard was a narrow wooden door covered with dust. " +
        "There was a tiny golden lock on the door. " +
        "Arjun carefully held up the key. " +
        "\"Should we try it?\" he asked. " +
        "The teacher nodded. " +
        "Arjun gently placed the key into the lock and turned it. " +
        "Click! " +
        "The door slowly opened. " +
        "Behind it was a small room filled with old books, photographs, school trophies, and handwritten notebooks. " +
        "Meera looked around in amazement. " +
        "\"It is like a school museum!\" she said. " +
        "Their teacher carefully opened one of the notebooks. " +
        "It belonged to the school's first headmaster. " +
        "The notebook explained that the room had been created as a special memory room for students and teachers. " +
        "Every year, students had added photographs, drawings, letters, and memories of important school events. " +
        "However, after the school building was renovated, everyone forgot about the hidden room. " +
        "Arjun found an old photograph showing students standing in front of the school many years ago. " +
        "Meera recognized the name of one student in the photograph because she was her grandmother. " +
        "\"Look! My grandmother studied here!\" Meera shouted happily. " +
        "She carefully showed the photograph to her teacher. " +
        "The discovery became very special for Meera because she had found a piece of her family's history inside her own school. " +
        "The principal decided to restore the room and turn it into a small school history museum. " +
        "Students and teachers brought old photographs, certificates, drawings, and stories to add to the collection. " +
        "Meera brought a photograph of her grandmother, while Arjun donated an old school notebook that his father had kept. " +
        "A few weeks later, the hidden room was opened for the entire school. " +
        "The golden key was placed inside a glass display case with a small information board explaining its history. " +
        "Arjun and Meera stood proudly beside it. " +
        "Their teacher smiled and said, \"Sometimes the greatest mysteries are not about treasure. They are about discovering the stories that people have forgotten.\" " +
        "Arjun looked at the golden key and nodded. " +
        "He realized that their adventure had helped the school remember its past. " +
        "From that day forward, the hidden room became one of the most loved places in the school. " +
        "Every student who visited it learned that history can be found in unexpected places if we are curious enough to look. " +
        "The End."
},

{
    id: 44,

    category: "Funny",

    emoji: "🐒🎩",

    title: "The Monkey Who Wore a Giant Hat",

    text:
        "Once upon a time, in a bright and cheerful jungle, there lived a funny little monkey named Milo. " +
        "Milo loved bananas, swinging from trees, and making all the animals laugh. " +
        "One sunny morning, Milo was walking through the jungle when he found something strange lying under a big tree. " +
        "It was a giant red hat with a long feather sticking out of the top. " +
        "Milo picked it up and looked at himself. \"Wow! I look like a jungle king!\" he said proudly. " +
        "The hat was much bigger than Milo's head, but he decided to wear it anyway. " +
        "He pulled the hat down over his ears and marched through the jungle. " +
        "\"Good morning, everyone! Make way for King Milo!\" he shouted. " +
        "Mia the rabbit saw him and started laughing. \"Milo, that hat is bigger than you!\" " +
        "\"Of course! A great king needs a great hat!\" Milo replied. " +
        "Then Milo tried to climb a tree while wearing the giant hat. " +
        "He grabbed a branch and jumped. But the big hat got stuck on another branch. " +
        "\"Oh no! My royal hat!\" shouted Milo. " +
        "He pulled and pulled, but the hat would not move. " +
        "Suddenly, a strong wind blew through the jungle. WHOOSH! " +
        "The hat flew off the branch and landed on a sleepy crocodile. " +
        "The crocodile opened his eyes and looked very surprised. " +
        "\"Why is there a giant hat on my head?\" he asked. " +
        "All the animals started laughing. " +
        "Milo quickly ran over. \"Sorry, Mr. Crocodile! That is my royal hat!\" " +
        "The crocodile stood up, and the hat fell over his eyes. " +
        "He took a few steps but could not see where he was going. " +
        "\"I can't see! I can't see!\" he shouted. " +
        "He walked straight into a bush with a loud BOOM! " +
        "Milo laughed so hard that he fell onto the grass. " +
        "The crocodile finally removed the hat and handed it back to Milo. " +
        "\"Here you go, Your Majesty,\" he said with a smile. " +
        "Milo put the hat on again, but this time he held it tightly with both hands. " +
        "Just then, a flock of birds flew overhead. One little bird saw Milo's giant hat and thought it was a giant nest. " +
        "The bird quickly landed on top of the hat. " +
        "\"Hey! I'm not a tree!\" Milo shouted. " +
        "The bird chirped happily and made itself comfortable. " +
        "Everyone laughed again. " +
        "Milo finally took off the giant hat and placed it on the ground. " +
        "\"Maybe this hat is too big for me,\" he said. " +
        "Mia smiled. \"You don't need a giant hat to be funny, Milo. You are already the funniest monkey in the jungle!\" " +
        "Milo laughed and gave everyone a big banana party. " +
        "From that day on, whenever Milo found something too big for him, he would say, \"That belongs to the crocodile king!\" " +
        "And every animal in the jungle would laugh. " +
        "Milo learned that being yourself and making others happy is much more important than looking like a king. " +
        "The End."
},

{
    id: 45,

    category: "Funny",

    emoji: "🐸🍕",

    title: "The Frog Who Ordered a Pizza",

    text:
        "Once upon a time, in a little pond surrounded by green grass and colorful flowers, there lived a funny frog named Freddie. " +
        "Freddie loved eating flies, crunchy bugs, and sweet little berries. " +
        "But one rainy afternoon, Freddie wanted to try something completely different. " +
        "\"I want to eat pizza!\" he shouted. " +
        "His friend Benny the duck looked surprised. \"Pizza? Frogs don't eat pizza!\" " +
        "\"Why not?\" asked Freddie. \"I am going to order the biggest pizza in the whole pond!\" " +
        "Freddie found an old telephone near a picnic basket and picked it up. " +
        "\"Hello! I would like one giant pizza, please!\" he said. " +
        "The pizza shop worker asked, \"What toppings would you like?\" " +
        "Freddie thought carefully. \"I want flies, worms, and lots of green leaves!\" " +
        "There was a long silence on the phone. " +
        "\"Are you sure?\" asked the worker. " +
        "\"Of course! I am a frog!\" Freddie replied proudly. " +
        "A little later, a delivery boy arrived at the pond carrying a big pizza box. " +
        "Freddie jumped happily. \"My pizza is here!\" " +
        "He opened the box and stared at the pizza. " +
        "There were no flies or worms. Instead, there were mushrooms, tomatoes, cheese, and olives. " +
        "\"Oh no! Where are my flies?\" Freddie cried. " +
        "The delivery boy laughed. \"We don't put flies on pizza!\" " +
        "Freddie picked up a slice and took a tiny bite. " +
        "\"Mmm... this is strange,\" he said. " +
        "He took another bite. \"Mmm... this is actually delicious!\" " +
        "Benny the duck came closer. \"Can I have some?\" " +
        "\"Of course!\" said Freddie. " +
        "Soon, all the pond animals gathered around the pizza. " +
        "The turtle ate a slice. The rabbit ate a slice. Even a tiny mouse took a piece. " +
        "Everyone enjoyed the pizza. " +
        "Then Freddie noticed something very funny. " +
        "A little piece of cheese was stuck to his tongue. " +
        "\"Help! My tongue is wearing a yellow hat!\" Freddie shouted. " +
        "Everyone burst out laughing. " +
        "Freddie tried to pull the cheese off, but it stretched longer and longer. " +
        "\"Look! I have a cheese tongue!\" he said. " +
        "The animals laughed even harder. " +
        "Finally, Freddie pulled the cheese free and ate it. " +
        "\"That was the best pizza adventure ever!\" he said. " +
        "From that day on, Freddie became the first frog in the pond to have a pizza party every Friday. " +
        "But he never ordered flies again. " +
        "He learned that sometimes trying something new can lead to a delicious surprise. " +
        "The End."
},

{
    id: 46,

    category: "Funny",

    emoji: "🐧🕺",

    title: "The Penguin Who Loved to Dance",

    text:
        "Once upon a time, in a cold and snowy land, there lived a cheerful little penguin named Poppy. " +
        "Poppy loved dancing more than anything in the world. " +
        "Every morning, she would slide across the ice, flap her wings, and wiggle her tiny feet. " +
        "One morning, Poppy heard a funny song coming from a nearby hill. " +
        "\"What a wonderful song!\" she said. \"I must dance!\" " +
        "Poppy began moving her feet left and right. " +
        "She spun around and waved her flippers in the air. " +
        "Her friends, Benny the seal and Sammy the snowbird, watched her carefully. " +
        "\"Poppy, what are you doing?\" asked Benny. " +
        "\"I am practicing for the biggest dance show in the snow!\" Poppy replied. " +
        "Benny laughed. \"But penguins cannot dance!\" " +
        "Poppy smiled. \"Maybe this penguin can!\" " +
        "She continued practicing every day. " +
        "She danced on the ice, danced beside the snow, and even danced while carrying a fish. " +
        "One day, Poppy tried a new dance move. " +
        "She jumped into the air, spun around, and landed on the ice. " +
        "But WHOOPS! " +
        "Her feet slipped, and she slid down the hill like a little rocket. " +
        "\"Wheeeee!\" shouted Poppy. " +
        "She slid past Benny, past Sammy, and straight into a pile of soft snow. " +
        "POOF! " +
        "Only her feet were sticking out of the snow. " +
        "Benny and Sammy laughed so hard that they fell onto the ice. " +
        "Poppy popped her head out of the snow and laughed too. " +
        "\"I think that was my fastest dance move ever!\" she said. " +
        "Soon, all the penguins heard about Poppy's funny dancing. " +
        "They decided to organize a big dance competition. " +
        "On the day of the competition, many penguins gathered together. " +
        "Poppy stepped onto the ice and took a deep breath. " +
        "The music began. " +
        "Poppy wiggled her feet, flapped her wings, spun around, and jumped from side to side. " +
        "The other penguins started dancing too. " +
        "Soon, everyone was slipping, spinning, and sliding across the ice. " +
        "One penguin accidentally spun in a circle ten times and became dizzy. " +
        "Another penguin slid backward and landed in a snowbank. " +
        "Everyone laughed and kept dancing. " +
        "At the end, there was no single winner because everyone had so much fun. " +
        "Poppy smiled happily. \"Dancing is not about being perfect. It is about having fun!\" " +
        "Benny nodded. \"And you certainly know how to make everyone laugh!\" " +
        "From that day on, the penguins had a dance party every weekend. " +
        "Poppy became their favorite dance leader, and even the seals joined the fun. " +
        "Whenever someone slipped on the ice, Poppy would shout, \"That was a new dance move!\" " +
        "And everyone would laugh. " +
        "The End."
},

{
    id: 47,

    category: "Princess",

    emoji: "👸🌸",

    title: "Princess Lily and the Secret Garden",

    text:
        "Once upon a time, in a beautiful kingdom surrounded by green hills and sparkling rivers, there lived a kind young princess named Lily. " +
        "Princess Lily lived in a magnificent pink castle with tall towers, golden windows, and colorful gardens. " +
        "She loved flowers, butterflies, and spending time with the people in her kingdom. " +
        "Although Lily was a princess, she did not care about fancy dresses or expensive jewels. " +
        "Her favorite thing was helping others and exploring new places. " +
        "One bright morning, Lily was walking through the castle garden when she noticed a tiny golden butterfly. " +
        "The butterfly flew around her head three times and then disappeared behind an old stone wall. " +
        "\"Where are you going?\" Lily asked curiously. " +
        "She followed the butterfly and discovered a small wooden door hidden behind the bushes. " +
        "The door was covered with vines and colorful flowers. " +
        "Lily had never seen it before. " +
        "She gently pushed the door open. CREEEAK! " +
        "Behind the door was a secret garden filled with beautiful flowers, sparkling fountains, singing birds, and glowing butterflies. " +
        "\"Wow!\" Lily whispered. \"This is the most beautiful garden I have ever seen!\" " +
        "In the middle of the garden stood a large old tree with golden leaves. " +
        "Under the tree was a tiny fairy wearing a blue dress. " +
        "\"Welcome, Princess Lily,\" said the fairy. " +
        "Lily looked surprised. \"You know my name?\" " +
        "The fairy smiled. \"Everyone who has a kind heart is known by the magic of this garden.\" " +
        "The fairy explained that the secret garden had once brought happiness to the whole kingdom. " +
        "But the garden was slowly losing its magic because nobody had visited it for many years. " +
        "\"Can I help the garden?\" Lily asked. " +
        "\"Of course,\" said the fairy. \"The garden needs kindness, care, and love.\" " +
        "Lily immediately got to work. " +
        "She watered the thirsty flowers, removed the dry leaves, and planted new seeds. " +
        "She filled the bird's fountain with fresh water and helped a little rabbit that was trapped between two bushes. " +
        "Every day, Lily returned to the secret garden and cared for it. " +
        "Slowly, something magical began to happen. " +
        "The flowers became brighter. The fountain began to sparkle. The birds returned and filled the garden with beautiful songs. " +
        "One evening, the old golden tree suddenly began to glow. " +
        "Thousands of tiny golden lights floated through the garden like stars. " +
        "The fairy smiled. \"You have brought the magic back, Princess Lily.\" " +
        "Lily looked around happily. \"I only wanted to help.\" " +
        "\"That is exactly why the magic returned,\" said the fairy. " +
        "The next morning, Lily decided to share the secret garden with the people of the kingdom. " +
        "She opened the hidden door and invited children, families, and animals to visit. " +
        "Everyone was amazed by the beautiful flowers and sparkling lights. " +
        "The kingdom became happier than ever before. " +
        "The king and queen were very proud of Lily. " +
        "\"You have discovered something more valuable than gold,\" said the queen. " +
        "Lily smiled. \"What is it, Mother?\" " +
        "The queen replied, \"The magic of kindness.\" " +
        "From that day forward, Princess Lily cared for the secret garden and taught everyone to protect nature and help others. " +
        "Whenever someone planted a flower, helped a friend, or showed kindness to an animal, another golden flower appeared in the garden. " +
        "And so, the secret garden became the happiest place in the entire kingdom. " +
        "Princess Lily learned that true princesses do not become special because they wear crowns. " +
        "They become special because they have kind hearts and use their kindness to make the world more beautiful. " +
        "The End."
},

{
    id: 48,

    category: "Princess",

    emoji: "👑🦄",

    title: "Princess Mia and the Magical Unicorn",

    text:
        "Once upon a time, in a beautiful kingdom surrounded by green forests and sparkling mountains, there lived a cheerful princess named Mia. " +
        "Princess Mia loved exploring the kingdom, helping the villagers, and spending time with the animals in the royal garden. " +
        "One morning, Mia was walking through the forest when she noticed a trail of tiny sparkling stars on the ground. " +
        "\"What could this be?\" she wondered. " +
        "She followed the sparkling trail deeper into the forest. " +
        "Soon, she heard a soft sound behind a tall tree. " +
        "\"Hello? Is someone there?\" asked Mia. " +
        "A beautiful white unicorn slowly stepped out from behind the tree. " +
        "The unicorn had a shining silver horn, a rainbow-colored mane, and bright blue eyes. " +
        "\"Wow! You are beautiful!\" said Mia. " +
        "The unicorn bowed its head and gently touched Mia's hand with its nose. " +
        "\"What is your name?\" Mia asked. " +
        "The unicorn made a soft magical sound. " +
        "Mia smiled. \"I think I will call you Sparkle.\" " +
        "Suddenly, Sparkle looked worried and pointed toward the mountains. " +
        "\"Is something wrong?\" asked Mia. " +
        "Sparkle nodded and began walking quickly through the forest. " +
        "Mia followed her until they reached a small valley. " +
        "There, Mia saw many animals sitting quietly beside a dry stream. " +
        "The rabbits, birds, deer, and squirrels looked sad. " +
        "\"Why is everyone so sad?\" asked Mia. " +
        "A little rabbit explained, \"The magical spring has stopped flowing, and all the animals are thirsty.\" " +
        "Mia looked at Sparkle. \"Can we help them?\" " +
        "Sparkle nodded. " +
        "They climbed toward the top of the mountain where the magical spring was hidden. " +
        "Along the way, they found a large pile of rocks blocking the spring. " +
        "\"We need to move these rocks,\" said Mia. " +
        "Mia tried pushing the biggest rock, but it would not move. " +
        "Sparkle touched the rock with her glowing horn. " +
        "The rock moved a little, but it was still too heavy. " +
        "Mia had an idea. \"We should ask our friends for help!\" " +
        "She called the rabbits, deer, squirrels, and birds. " +
        "All the animals came together. " +
        "The elephants pushed, the deer pulled, the rabbits moved small stones, and the birds carried away tiny pieces. " +
        "Finally, the biggest rock rolled away. " +
        "WHOOSH! " +
        "Clear, sparkling water rushed down the mountain. " +
        "The animals cheered happily. " +
        "\"We did it!\" shouted Mia. " +
        "Sparkle's horn began to glow brighter than ever before. " +
        "A beautiful rainbow appeared across the sky. " +
        "The magical unicorn looked at Mia with a happy smile. " +
        "The animals drank the fresh water and danced around the spring. " +
        "Mia realized that Sparkle had brought her to the valley because she knew Mia would help. " +
        "When Mia returned to the castle, she told the king and queen about her magical adventure. " +
        "The queen smiled proudly. \"You helped an entire forest by working together.\" " +
        "The king nodded. \"A true princess knows that even the smallest helping hand can make a big difference.\" " +
        "From that day on, Mia and Sparkle became the best of friends. " +
        "Whenever the kingdom needed help, Sparkle would appear with her sparkling horn. " +
        "And Princess Mia always remembered that friendship, teamwork, and kindness could make even the greatest problems easier to solve. " +
        "The End."
},

{
    id: 49,

    category: "Princess",

    emoji: "👸🦋",

    title: "Princess Ella and the Talking Butterfly",

    text:
        "Once upon a time, in a beautiful kingdom filled with colorful flowers and sparkling streams, there lived a gentle princess named Ella. " +
        "Princess Ella loved walking through the royal garden every morning. " +
        "She enjoyed watching birds fly, listening to the bees buzz, and smelling the sweet flowers. " +
        "One sunny morning, Ella noticed a beautiful blue butterfly sitting on a pink rose. " +
        "The butterfly had bright golden spots on its wings. " +
        "Ella carefully walked closer. \"Hello, little butterfly,\" she said. " +
        "Suddenly, the butterfly replied, \"Hello, Princess Ella!\" " +
        "Ella jumped in surprise. \"You can talk!\" she exclaimed. " +
        "The butterfly laughed softly. \"Yes, and I need your help.\" " +
        "Ella sat beside the flower. \"What happened?\" " +
        "The butterfly explained that the magical flowers of the forest were losing their colors. " +
        "\"Without their colors, the forest animals will lose their homes and food,\" said the butterfly. " +
        "\"I will help you,\" Ella promised. " +
        "The butterfly flew ahead, and Ella followed it into the enchanted forest. " +
        "Soon, they reached a large meadow where all the flowers had turned gray. " +
        "The butterflies, birds, and bees were sitting sadly among the flowers. " +
        "\"How can we bring the colors back?\" Ella asked. " +
        "The blue butterfly pointed toward a small golden tree in the middle of the meadow. " +
        "\"The Color Crystal is hidden beneath that tree,\" it said. " +
        "Ella carefully looked around the tree and found a tiny golden door in the ground. " +
        "She opened it and discovered a sparkling crystal inside. " +
        "But the crystal was covered in dust. " +
        "\"Maybe it needs to be cleaned,\" Ella said. " +
        "She gently cleaned the crystal with a soft cloth. " +
        "Nothing happened. " +
        "Then the butterfly said, \"The crystal needs something more powerful than a cloth.\" " +
        "\"What does it need?\" asked Ella. " +
        "\"It needs kindness,\" replied the butterfly. " +
        "Ella thought for a moment. " +
        "She picked up a thirsty little flower and gave it water. " +
        "She helped a tiny bird return to its nest. " +
        "She shared her food with a hungry rabbit. " +
        "She also helped the bees find flowers filled with nectar. " +
        "With every kind act, the crystal began to glow brighter. " +
        "Suddenly, the crystal shone with a beautiful rainbow light. " +
        "WHOOSH! " +
        "The rainbow light spread across the meadow. " +
        "The gray flowers quickly changed into bright red, yellow, pink, purple, and blue flowers. " +
        "The birds began to sing, the bees began to buzz, and the butterflies danced through the air. " +
        "The blue butterfly flew around Ella happily. \"You did it!\" " +
        "Ella smiled. \"Everyone helped. Kindness brought the colors back.\" " +
        "The animals cheered and gathered around the princess. " +
        "When Ella returned to the castle, she told the king and queen about the magical butterfly and the enchanted forest. " +
        "Her parents were proud of her. " +
        "From that day forward, Princess Ella visited the forest often and helped the animals whenever they needed her. " +
        "The magical butterfly remained her special friend, and sometimes it would visit her garden just to say hello. " +
        "Princess Ella learned an important lesson: even a small act of kindness can bring happiness and color into someone's life. " +
        "The End."
},

{
    id: 50,

    category: "Princess",

    emoji: "👑🌈",

    title: "Princess Ruby and the Rainbow Castle",

    text:
        "Once upon a time, in a peaceful kingdom surrounded by green hills and sparkling rivers, there lived a cheerful princess named Ruby. " +
        "Princess Ruby had bright eyes, a kind smile, and a great love for colorful things. " +
        "Her favorite colors were red, orange, yellow, green, blue, and purple. " +
        "One morning, Ruby woke up and looked out of her castle window. " +
        "\"Oh! Where did all the colors go?\" she asked in surprise. " +
        "The kingdom looked completely gray. " +
        "The flowers were gray, the trees were gray, and even the river looked gray. " +
        "Ruby quickly ran outside and asked the royal gardener what had happened. " +
        "\"I don't know, Princess,\" he said sadly. \"All the colors disappeared during the night.\" " +
        "Just then, a tiny rainbow bird flew down from the sky. " +
        "\"Princess Ruby!\" chirped the bird. \"I know where the colors are!\" " +
        "Ruby followed the bird toward a tall mountain behind the kingdom. " +
        "At the top of the mountain stood a mysterious castle that Ruby had never seen before. " +
        "The castle had seven tall towers, but all of them were covered in gray clouds. " +
        "\"This must be the Rainbow Castle,\" said the bird. " +
        "Ruby opened the castle door and stepped inside. " +
        "The first room had a giant red crystal. The second room had an orange crystal. " +
        "There were seven rooms, each containing a different color crystal. " +
        "But all the crystals were dark and dull. " +
        "Suddenly, a tiny cloud appeared in front of Ruby. " +
        "\"The Rainbow Castle has lost its magic,\" said the cloud. " +
        "\"How can we bring it back?\" Ruby asked. " +
        "\"Each crystal needs a special gift,\" explained the cloud. " +
        "\"The red crystal needs courage, the orange crystal needs friendship, the yellow crystal needs happiness, the green crystal needs care, the blue crystal needs peace, and the purple crystal needs imagination.\" " +
        "Ruby thought carefully. " +
        "She remembered all the people and animals she had helped in her kingdom. " +
        "She showed courage by walking through a dark room alone. " +
        "She showed friendship by helping the little rainbow bird. " +
        "She showed happiness by singing and dancing with the magical cloud. " +
        "She showed care by watering a small plant growing beside the castle door. " +
        "She found peace by sitting quietly beside a sparkling fountain. " +
        "Finally, she used her imagination to picture the most beautiful rainbow she could think of. " +
        "One by one, the crystals began to glow. " +
        "RED! ORANGE! YELLOW! GREEN! BLUE! PURPLE! " +
        "A brilliant rainbow light filled the entire castle. " +
        "The seven towers began to shine. " +
        "Then a giant rainbow appeared across the sky. " +
        "The rainbow light traveled down the mountain and spread across the kingdom. " +
        "The flowers became colorful again. The trees turned green. The river sparkled blue. " +
        "The villagers came outside and cheered with happiness. " +
        "Ruby smiled as she watched the colors return. " +
        "The little cloud floated beside her. \"You brought the Rainbow Castle back to life,\" it said. " +
        "Ruby shook her head and smiled. \"The colors were already inside all of us. We only needed to remember them.\" " +
        "From that day on, the Rainbow Castle became a magical place where children from the kingdom could visit, play, and learn. " +
        "Princess Ruby visited every weekend with her friends. " +
        "Whenever she saw a rainbow in the sky, she remembered that courage, friendship, happiness, care, peace, and imagination could make life beautiful. " +
        "And the Rainbow Castle continued to shine brightly for many years. " +
        "The End."
},

{
    id: 51,

    category: "Princess",

    emoji: "👸🐉",

    title: "Princess Sophie and the Friendly Dragon",

    text:
        "Once upon a time, in a beautiful kingdom surrounded by tall mountains and green forests, there lived a kind princess named Sophie. " +
        "Princess Sophie loved reading books, riding her little white horse, and helping the people in her kingdom. " +
        "One morning, Sophie heard a very loud sound coming from the mountains. " +
        "\"ROOOAAAR!\" " +
        "The whole castle shook. The windows rattled, and the birds flew away. " +
        "Sophie looked outside and saw a huge cloud of smoke rising from the mountain. " +
        "\"A dragon!\" shouted one of the guards. " +
        "Everyone in the kingdom became frightened. " +
        "But Sophie was curious. \"Maybe the dragon needs help,\" she said. " +
        "She put on her riding boots and walked toward the mountain. " +
        "When she reached a large cave, she heard a strange sound. " +
        "\"Sniff... sniff... achoo!\" " +
        "Sophie looked inside and saw a young green dragon sitting sadly near the entrance. " +
        "The dragon had bright orange wings, tiny horns, and a very long tail. " +
        "\"Hello,\" Sophie said gently. " +
        "The dragon looked surprised. \"You are not afraid of me?\" " +
        "\"No,\" said Sophie. \"You don't look scary. You look sad.\" " +
        "The dragon lowered his head. \"My name is Toby. I am trying to learn how to fly, but I keep falling.\" " +
        "Sophie smiled. \"Maybe I can help you practice.\" " +
        "Toby looked excited. \"Really?\" " +
        "\"Of course!\" said Sophie. " +
        "They went outside the cave. Toby spread his wings and jumped into the air. " +
        "FLAP! FLAP! FLAP! " +
        "He flew for three seconds and then landed in a bush. " +
        "BOOM! " +
        "Sophie laughed. \"That was a very good first try!\" " +
        "Toby popped his head out of the bush. \"I think the bush liked me.\" " +
        "Sophie laughed even harder. " +
        "They practiced again and again. " +
        "At first, Toby could fly only a few steps. " +
        "Then he flew across a small stream. " +
        "Finally, he flew all the way around the mountain. " +
        "\"I did it!\" shouted Toby happily. " +
        "Suddenly, Sophie heard a cry from the forest. " +
        "\"Help! Help!\" " +
        "Sophie and Toby quickly flew toward the sound. " +
        "They found a group of villagers trapped on the other side of a fallen tree. " +
        "The tree was too heavy for the villagers to move. " +
        "Toby carefully grabbed the tree with his strong claws and lifted it away. " +
        "The villagers were free. " +
        "\"Thank you!\" they shouted. " +
        "Sophie smiled. \"Toby is not a scary dragon. He is a helpful dragon!\" " +
        "The villagers realized that they had been afraid of Toby simply because they did not know him. " +
        "They invited Toby to the kingdom. " +
        "Toby was nervous at first, but Sophie stayed beside him. " +
        "When the people saw Toby helping children, carrying heavy things, and making funny faces, they began to love him. " +
        "Soon, Toby became the kingdom's friendly dragon. " +
        "Every evening, he flew above the castle and made colorful shapes in the sky with tiny clouds of smoke. " +
        "Sometimes he made hearts. Sometimes he made stars. Once, he accidentally made a giant chicken. " +
        "Everyone laughed. " +
        "Princess Sophie and Toby became the best of friends. " +
        "Sophie learned that appearances can sometimes be misleading. " +
        "Toby learned that being different was nothing to be ashamed of. " +
        "Together, they showed the kingdom that kindness and friendship can turn fear into trust. " +
        "And from that day forward, whenever someone heard a loud \"ROOOAAAR!\" above the kingdom, they smiled and said, \"There goes our friendly dragon!\" " +
        "The End."
},




];

updateStoryCounts();

function showSuggestedStories() {

    const container = document.getElementById("suggestedStories");

    if (!container || !stories.length) {
        return;
    }

    // Get current story ID from URL
    const params = new URLSearchParams(window.location.search);
    const currentId = Number(params.get("id"));

    // Remove current story
    const otherStories = stories.filter(story => story.id !== currentId);

    // Randomly shuffle stories
    const shuffledStories = [...otherStories].sort(() => Math.random() - 0.5);

    // Select 4 random stories
    const suggestedStories = shuffledStories.slice(0, 4);

    container.innerHTML = suggestedStories.map(story => {

        return `
            <a href="story.html?id=${story.id}" class="suggested-card">

                <div class="suggested-emoji">
                    ${story.emoji}
                </div>

                <h3>${story.title}</h3>

                <div class="suggested-category">
                    ${story.category} Story
                </div>

            </a>
        `;

    }).join("");
}

showSuggestedStories();



/* =========================================
   HOMEPAGE
========================================= */

const storyGrid = document.getElementById("storyGrid");

const showAllButton = document.getElementById("showAll");


function displayStories(list) {

    if (!storyGrid) {
        return;
    }


    storyGrid.innerHTML = "";


    if (!list.length) {
        storyGrid.innerHTML = `
            <div class="search-empty">
                <h3>No stories found 🔎</h3>
                <p>Try another title, category, or keyword.</p>
            </div>
        `;
        return;
    }


    list.forEach(function(story) {


        const card = document.createElement("article");

        card.className = "story-card";


        card.innerHTML = `

            <div class="story-cover">

                ${story.emoji}

            </div>


            <div class="story-body">

                <h3>
                    ${story.title}
                </h3>


                <div class="story-meta">

                    📚 ${story.category}

                    ·

                    ⏱ 4 min

                </div>


                <a
                    href="story.html?id=${story.id}"
                    class="read-button">

                    📖 Read Story

                </a>

            </div>

        `;


        storyGrid.appendChild(card);

    });

}



if (storyGrid) {

    displayStories(stories);

}



/* =========================================
   SHOW ALL
========================================= */

if (showAllButton) {

    showAllButton.addEventListener("click", function() {

        displayStories(stories);

    });

}



/* =========================================
   LIVE STORY SEARCH
========================================= */

const storySearch = document.getElementById("storySearch");
const clearSearch = document.getElementById("clearSearch");
const searchResultCount = document.getElementById("searchResultCount");

function filterStoriesBySearch(query) {

    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        displayStories(stories);

        if (searchResultCount) {
            searchResultCount.textContent = "";
        }

        if (clearSearch) {
            clearSearch.hidden = true;
        }

        return;
    }

    const filteredStories = stories.filter(function(story) {

        const searchableText = [
            story.title,
            story.category,
            story.text,
            story.emoji
        ].join(" ").toLowerCase();

        return searchableText.includes(normalizedQuery);

    });

    displayStories(filteredStories);

    if (searchResultCount) {
        searchResultCount.textContent =
            filteredStories.length +
            (filteredStories.length === 1 ? " story found" : " stories found");
    }

    if (clearSearch) {
        clearSearch.hidden = false;
    }

}

if (storySearch) {
    storySearch.addEventListener("input", function() {
        filterStoriesBySearch(storySearch.value);
    });
}

if (clearSearch) {
    clearSearch.addEventListener("click", function() {
        storySearch.value = "";
        filterStoriesBySearch("");
        storySearch.focus();
    });
}

/* =========================================
   CATEGORY FILTER
========================================= */

const categoryButtons =
    document.querySelectorAll(".category-card");


categoryButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        const category =
            button.getAttribute("data-category");


        const filteredStories =
            stories.filter(function(story) {

                return story.category === category;

            });


        displayStories(filteredStories);


        document
            .getElementById("stories")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});



/* =========================================
   STORY PAGE
========================================= */

const storyTitle =
    document.getElementById("storyTitle");


if (storyTitle) {


    const params =
        new URLSearchParams(window.location.search);


    const storyId =
        Number(params.get("id"));


    const story =
        stories.find(function(item) {

            return item.id === storyId;

        });


    if (story) {


        document.title =
            story.title + " | Kids Park";


        document.getElementById("storyEmoji")
            .textContent = story.emoji;


        document.getElementById("storyTitle")
            .textContent = story.title;


        document.getElementById("storyCategory")
            .textContent =
            "📚 " + story.category;


        createStoryWords(story.text);


        setupSpeech(story.text);

    }

}



/* =========================================
   CREATE WORDS
========================================= */

function createStoryWords(text) {

    const storyText =
        document.getElementById("storyText");

    if (!storyText) {
        return;
    }

    storyText.innerHTML = "";

    /*
       Keep the original text intact for speech highlighting,
       while visually separating sentences into readable paragraphs.
    */
    const parts = text.split(/(?<=[.!?])\s+/);

    parts.forEach(function(part, index) {

        const paragraph = document.createElement("p");
        paragraph.className = "story-paragraph";

        const words = part.split(/(\s+)/);

        words.forEach(function(word) {

            if (word.trim() === "") {

                paragraph.appendChild(
                    document.createTextNode(word)
                );

            } else {

                const span =
                    document.createElement("span");

                span.className = "story-word";
                span.textContent = word;

                paragraph.appendChild(span);

            }

        });

        storyText.appendChild(paragraph);

        /* Preserve the single space between sentences from the original text. */
        if (index < parts.length - 1) {
            storyText.appendChild(
                document.createTextNode(" ")
            );
        }

    });

}



/* =========================================
   TEXT TO SPEECH
========================================= */

function setupSpeech(text) {


    const listenButton =
        document.getElementById("listenButton");


    const stopButton =
        document.getElementById("stopButton");


    if (!listenButton || !stopButton) {
        return;
    }


    let speech;


    let wordIndex = 0;


    listenButton.addEventListener(
        "click",
        function() {


            if (!("speechSynthesis" in window)) {

                alert(
                    "Your browser does not support text-to-speech."
                );

                return;

            }


            /*
               Stop previous speech.
            */

            window.speechSynthesis.cancel();


            /*
               Remove old highlight.
            */

            removeHighlights();


            /*
               Create speech object.
            */

            speech =
                new SpeechSynthesisUtterance(text);


            /*
               English story.

               If later you add Tamil stories,
               change this dynamically to:

               speech.lang = "ta-IN";

               For English:

               speech.lang = "en-US";
            */

            speech.lang = "en-US";


            speech.rate = 0.85;


            speech.pitch = 1;


            speech.volume = 1;


            /*
               Browser speech engine gives
               information about the spoken
               sentence.

               This event helps us move the
               highlighted word.
            */

            speech.onboundary =
                function(event) {


                    if (
                        event.name === "word"
                    ) {


                        highlightWord(
                            event.charIndex
                        );

                    }

                };


            speech.onend =
                function() {

                    removeHighlights();

                };


            speech.onerror =
                function() {

                    removeHighlights();

                };


            window.speechSynthesis
                .speak(speech);

        }
    );



    stopButton.addEventListener(
        "click",
        function() {

            window.speechSynthesis.cancel();

            removeHighlights();

        }
    );

}



/* =========================================
   HIGHLIGHT CURRENT WORD
========================================= */

function highlightWord(charIndex) {


    const wordElements =
        document.querySelectorAll(
            ".story-word"
        );


    if (!wordElements.length) {
        return;
    }


    /*
       Build the text position
       of every word.
    */

    let currentPosition = 0;


    let selectedIndex = -1;


    wordElements.forEach(
        function(element, index) {


            const word =
                element.textContent;


            const start =
                currentPosition;


            const end =
                currentPosition + word.length;


            if (
                charIndex >= start &&
                charIndex <= end
            ) {

                selectedIndex = index;

            }


            currentPosition =
                end + 1;

        }
    );


    if (selectedIndex === -1) {
        return;
    }


    removeHighlights();


    const activeWord =
        wordElements[selectedIndex];


    activeWord.classList.add("active");


    /*
       Automatically move the page
       so the spoken word stays visible.
    */

    activeWord.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}



/* =========================================
   REMOVE HIGHLIGHTS
========================================= */

function removeHighlights() {


    const words =
        document.querySelectorAll(
            ".story-word.active"
        );


    words.forEach(function(word) {

        word.classList.remove("active");

    });

}



/* =========================================
   FOOTER YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNavbar = document.getElementById("mainNavbar");

if (menuToggle && mainNavbar) {

    menuToggle.addEventListener("click", function() {

        mainNavbar.classList.toggle("mobile-open");

        const icon = menuToggle.querySelector("i");
        const isOpen = mainNavbar.classList.contains("mobile-open");

        if (isOpen) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
            menuToggle.setAttribute("aria-label", "Close menu");
            menuToggle.setAttribute("aria-expanded", "true");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            menuToggle.setAttribute("aria-label", "Open menu");
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

    mainNavbar.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            mainNavbar.classList.remove("mobile-open");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-label", "Open menu");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


/* =========================
   FOOTER YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



