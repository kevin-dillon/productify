// PRODUCTIVITY
let productivityEntries=[
    'Listening to ambient noises while working helps some people get things done faster.',
    'While multitasking may seem like a good idea, it can hurt effectiveness of the tasks you are doing.',
    'Move locations around your home if you need a change of location while working.',
    'If you tend to forget, write things down.',
    'Starting a task can sometimes be the hardest part.',
    'Try to minimize environmental distractions while working.',
    'Set intervals to take breaks, overworking can affect productivity.',
    'Some people work better if they have a set routine, or if they have time dedicated to work.',
    'Break down a larger task into multiple smaller tasks -- divide and conquer.',
    'Add important dates and deadlines to your calendar in advance.',
    '“Measure twice, cut once”',
    'Learn keyboard shortcuts to help become a power user.',
    'The Pomodoro Technique is a time management method, focused on working on a task for 25 minutes and then having a 5 minute break.',
    'If a task takes less than 5 minutes, try to get it out of the way.',
    'Tackle the hardest task first.',
    'Limit phone notifications.',
    'Recording yourself instead of initially typing something can be helpful.',
    'Work durings times of the day where you are productive, but keep it consistent.',
    'Unsubscribe from newsletters that you don’t read.',
    'Don’t overextend yourself.',
];

let productivityExp=[
    'Some people work better with no noises, but immersion in ambient music can help reduce anxiety by \
    allowing people to put aside what is on their mind and focus on their surroundings.',
    'It is unsustainable.Switching between tasks makes it difficult to tune out distractions and can cause \
    mental blocks that can slow you down. Ultimately, multitasking results in less effective and efficient \
    work with decreased mental organizational capabilities.',
    'If you do not have room to move around, dedicate a specific area for work only.',
    'You can write on paper or on something like your phone.',
    'Doing one part is better than doing nothing.',
    'Noise-cancelling earphones are nice if you can afford them.',
    'Try not to overwork youself.',
    'Write this down on your calendar.',
    'A task can seem less daunting from this perspective.',
    'Set notifications a week before a deadline,',
    'It is more time efficient if you make a mistake.',
    'You do not have to memorize all of them, but adding a couple frequently used shortcuts to your repertoire can be beneficial.',
    'There are variations of this method, see which one works best for you.',
    'Completing any task, even a small one, is an accomplishment.',
    'This does not apply to when taking tests/exams, get the easier questions out of the way first in that situation.',
    'Some people get phantom phone buzzes, where they feel notifications when there is not one.',
    'Another option is text-to-speech..',
    'It can be hard for your mind to adjust to this.',
    'Most newsletter emails have an "unsubscribe" button at the button of the page.',
    'Burning youself out is a real thing, and can have immediate consequences.',
];

function displayProductivity() {
    let index=Math.floor(Math.random()*productivityEntries.length);
    let div=document.querySelector('#productivity');
    let productivity=`<div class='card'>
    <p>${productivityEntries[index]}</p>
    </div>`;
    div.innerHTML=productivity;
    return index;
}

function expandProductivity() {
    let div=document.querySelector('#expProductivity');
    let productivity=`<div class='card'>
    <p>${productivityExp[displayProductivity()]}</p>
    </div>`;
    div.innerHTML=productivity;
  }

// PHYSICAL HEALTH
let physicalEntries=[
    'Exercise with family.',
    'Stand up or walk around while you read and answer emails and other messages on your laptop or phone.',
    'Listen to music and dance.',
    'Try to do some exercise each day for at least 10 minutes.',
    'Do exercise while watching tv.',
    'Eat nutritious foods like fruits or vegetables.',
    'Stay hydrated, keep a refillable water bottle and drink it throughout the day.',
    'Take short active breaks during the day.',
    'Try to follow a video exercise routine or an online exercise class.',
    'Stand up as much as possible.',
    'Limit foods high in sodium, added sugar and saturated fat.',
    'Wash your hands thoroughly for at least 20 seconds.',
    'Maintain a low-carb, high-fat diet to sustain your energy throughout the day.',
];

let physicalExp=[
    'Exercising is a great way to improve energy levels. Doing so with family helps you stay motivated and connects you to each other.',
    'For many people, their days are very sedentary. Walking around while still doing work allows you to maximize your time while allowing you to change positions.',
    'Let out your emotions and dance to your favorite songs to get your blood flowing and take a break from your screen.',
    'Watch some Youtube workout videos to learn which exercises you can do at home.',
    'It can be difficult to find time to exercise. Running on the treadmill or stretching while watching TV helps you decompress after a long day while still staying active.',
    'Feed your brain with the nutrients it needs.',
    'Water is essential to heightening your brain function and maintaining energy levels.',
    'Taking breaks will help you focus better.',
    "If you're not sure what to do for exercise, following along with an instructional video from trained professionals will help you stay active and connect with other people.",
    'Opt in for a standing desk or move to a different location to work every once in a while. Take a break to spend time with those around you to limit your screen time as well.',
    'These foods stay in your bloodstream for longer periods of time and are harder to break down. Opt for protein instead.',
    'Limit your risk of getting sick by making sure points of contact are cleaned regularly.',
    'Carbohydrates are absorbed immediately while fats take longer to break down, thereby sustaining your energy for longer. Examples of fat-rich foods include nuts, seeds, avocado, eggs, and olives.',
];

function displayPhysical() {
    let index=Math.floor(Math.random()*physicalEntries.length);
    let div=document.querySelector('#physical');
    let physical=`<div class='card'>
    <p>${physicalEntries[index]}</p>
    </div>`;
    div.innerHTML=physical;
    return index;
}

function expandPhysical() {
  let div=document.querySelector('#expPhys');
  let physical=`<div class='card'>
  <p>${physicalExp[displayPhysical()]}</p>
  </div>`;
  div.innerHTML=physical;
}

//MENTAL Health

let mentalEntries = [
    'Write down your schedule for your day.',
    'Reach out to a friend you haven’t spoken to in a while (conversation starters: what you’ve been doing in quarantine, how you’ve (re)designed your workspace, what you’re looking forward to once quarantine is over, have you picked up any new hobbies, etc.)',
    'Take a nap.',
    'Log off of social media for the rest of the day (if your work permits).',
    'Schedule a movie night with friends or family.',
    'Write down your thoughts in a journal.',
    'Block news channels on your devices and ask your friends to give you a quick debriefing.',
    'Clean your work area.',
    'Leave the house (while staying socially distant).',
    'Write down what you want to achieve today.',
    'Say no. Set boundaries.',
    'Check in on friends and family.',
    'Take in the present.',
    'Stand up.',
    'Close your eyes for 20 seconds.',
    'Develop a work buddy system to keep yourselves accountable.',
];

let mentalExp = [
    '<h1 class="exp-header">It can reduce stress.</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" \
        alt="computer rocket image"><ul class="exp-text"><li>Knowing what you need to to in advance is key to productivity</li><li>\
        You will be less stressed since you already have a plan</li> </ul>',
    '<h1 class="exp-header">Reconnecting.</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" \
        alt="computer rocket image"><ul class="exp-text"><li>Connecting with people again can help your mental health.</li><li>\
        You can rekindle past friendships and talk to someone new</li> </ul>',
    '<h1 class="exp-header">Tired?</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg"\
        alt="computer rocket image"><ul class="exp-text"><li>20 minutes is the sweet spot for a power nap</li><li>Naps can leave you feeling more alert, energetic, and productive, however, napping 30-60 minutes can leave you even groggier.</li><li>For maximum efficiency, rest in a cool, dark room free from distractions.</li> </ul>',
    '<h1 class="exp-header">Social Media Detox.</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Another option is to disable an app to prevent yourself from using it.</li><li>Turn off your phone or put it in another room to limit the urge to go check your phone.</li> </ul>',
    '<h1 class="exp-header">Quality Time.</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Allows you to spend time with people you care about.</li><li>Sit back and relax for a couple of hours enjoying time with your friends and family, or even just by yourself. You deserve a break.</li> </ul>',
    '<h1 class="exp-header">Journal</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>It is important to be aware of your thoughts and acknowledging how you feel. </li><li>Journaling can calm your thoughts down a bit and ease your stress</li> </ul>',
    '<h1 class="exp-header">News Detox</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Seeing bad news can be detrimental to your mental health.</li><li>If you want to still be in the loop of current events, we would suggest limiting your time spent on the news, or talking to a friend about current events. This can foster growth and you can learn new perspectives.</li> </ul>',
    '<h1 class="exp-header">Clean!</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>It can be a change of activity and you get a result of a clean workspace.</li><li>Cleaning your work space can allow for deeper focus due to working in an uncluttered area + it will give you a sense of accomplishment.</li> </ul>',
    '<h1 class="exp-header">Step Outside!</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Go for a walk/run and enjoy the outdoors if you can. Taking a breath of fresh air can be very relaxing and ease your stress a bit.</li><li>Since we are stuck in quarantine, it is super important to still be moving around.</li> </ul>',
    '<h1 class="exp-header">Plan</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Similar to planning out your day, writing down one goal make you excited about the day and make you more likely to work towards that goal.</li><li>Crossing off that goal at the end of the day will give you a huge sense of accomplishment. Even if you do not complete it, you still worked towards a goal!</li> </ul>',
    '<h1 class="exp-header">No!</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Don\'t be afraid to say no!</li><li>It\'s important to be able to set boundaries, whether its social or work related.</li> </ul>',
    '<h1 class="exp-header">Check In</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>Reach out to friends and family. It will be super nice to catch up with them and see how they\'re doing.</li><li>Many of us are stuck in isolation and would definitely appreciate you reaching out to them.</li> </ul>',
    '<h1 class="exp-header">The Present</h1> <img class="exp-img" src="https://image.flaticon.com/icons/svg/2906/2906010.svg" alt="computer rocket image"><ul class="exp-text"><li>It may be hard to see right now, but there will be a time where the problems you\'re facing will subside.</li><li>It\'s important to be able to stay in the present rather than worrying about the past or future. It\'s way easier said than done, but focus on the present by pushing out negative thoughts and trying to immerse yourself in your work or activity you enjoy.</li> </ul>',

    'It can boost you mental health.',
    'It is like taking a mental break.',
    'It can help you be motivated to do work.',
];

function displayMental() {
    let index=Math.floor(Math.random()*mentalEntries.length);
    let div=document.querySelector('#mental');
    let mental=`<div class='card'>
    <p>${mentalEntries[index]}</p>
    </div>`;
    div.innerHTML=mental;
    return index;
}

function expandMental() {
  let div=document.querySelector('#exp');
  let mental=`<div class='explanation'>
  <p>${mentalExp[displayMental()]}</p>
  </div>`;
  div.innerHTML=mental;
}
