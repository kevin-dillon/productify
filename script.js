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

function displayProductivity() {
    let index=Math.floor(Math.random()*productivityEntries.length);
    let div=document.querySelector('#productivity');
    let productivity=`<div class="card">
    <p>${productivityEntries[index]}</p>
    </div>`;
    div.innerHTML=productivity;
}
