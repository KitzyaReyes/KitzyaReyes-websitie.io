let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#3E1321">Desarrolladora Web Front-End, Comercio Internacional, Embajadora, Traductora. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
