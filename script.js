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
    'Some people work better with no noises.',
    'It is unsustainable.',
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
  'Get dressed.',
  'Block news channels on your devices and ask your friends to give you a quick debriefing.',
  'Clean your work area.',
  'Leave the house (while staying socially distant).',
  'Write down what you want to achieve today.',
  'Give your friend a compliment.',
  'Say no. Set boundaries.',
  'Check in on friends and family.',
  'Take some time for yourself.',
  'Take in the present.',
  'Stand up.',
  'Close your eyes for 20 seconds.',
  'Keep in touch with your friends and family.',
  'Develop a work buddy system to keep yourselves accountable.',
];

let mentalExp = [
  'Writing down your schedule implements structure in your day, which can help you stay motivated.',
  'wow.',
  'naptime.',
  'no social media.',
  'where do cows like to go? to the moovies.',
  'journal.',
  'put on clothes.',
  'no news.',
  'tidy.',
  'go outside.',
  'goals.',
  'compliment.',
  'no.',
  'Check in.',
  'Take some time for yourself.',
  'Take in the present.',
  'Stand up.',
  'Close your eyes for 20 seconds.',
  'Keep in touch with your friends and family.',
  'Develop a work buddy system to keep yourselves accountable.',
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