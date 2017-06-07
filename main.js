const rect = new mojs.Shape({
  shape : 'rect',
  left : '50%',
  fill : 'none',
  radius : { 20 : 100 },
  stroke : { 'magenta' : 'yellow' },
  strokeWidth : { 10 : 1 },
  strokeDasharray : '100%',
  strokeDashoffset : { '-100%' : '0%' },
  angle : { '-180' : 0 },

  duration : 2000
})


const circle = new mojs.Shape({
  shape : 'circle',
  fill : 'none',
  radius : 20,
  stroke : { 'with' : 'cyan'},
  strokeWidth : { 10 : 1 },
  strokeDasharray : '100%',
  strokeDashoffset : { '-100%' : '0%' },
  yoyo : true,

  delay : 3100,
  duration : 1000
})

const triangle = new mojs.Shape({
    shape : 'polygon',
    fill : 'none',
    radius : 110 ,
    radiusY : 110 ,
    stroke : { 'white' : 'red' },
    strokeWidth : 1,
    strokeDasharray : '100%',
    strokeDashoffset : { '-100%' : '0%' },
    angle : 180,
    top : '48.9%',

    delay : 1800,
    duration : 1200


})

const timeline = new mojs.Timeline({ delay : 0 });
timeline.add(rect, triangle, circle)

new MojsPlayer({ add : timeline, isPlaying : true, isRepeat: true});
