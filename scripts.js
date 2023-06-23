// script.js

document.getElementById('random-scene-button').addEventListener('click', function() {
  var scenes = ['scene1', 'scene2', 'scene3'];
  var randomScene = scenes[Math.floor(Math.random() * scenes.length)];
  window.location.href = randomScene + '.html';
});

document.getElementById('

jump-into-sea-button').addEventListener('click', function() {
  // Code to implement the "Jump into the sea" functionality
  // Add your custom logic here
});

document.getElementById('play-audio-button').addEventListener('click', function() {
  var audioElements = [
    document.getElementById('audio-scene1'),
    document.getElementById('audio-scene2'),
    document.getElementById('audio-scene3')
  ];
  var randomIndex = Math.floor(Math.random() * audioElements.length);
  audioElements[randomIndex].play();
});
