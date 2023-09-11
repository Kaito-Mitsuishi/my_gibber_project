gibber 
intro
  share gabber restart engine
reference source code discord twitter
// hit alt+enter to run all code
// or run line/selection with ctrl+enter.
// ctrl+period to stop all sounds.
 
Theory.tuning = 'slendro'
Theory.mode = null
  
verb  = Reverb( 'space' ).bus()
delay = Delay( '1/3' ).bus().connect( verb, .1 )
  
perc = FM[3]( 'perc' )
  .connect( delay, .65 ).connect( verb, .35 )
  .spread(.975)
  .note.seq( sine( btof(8),7,0 ), 1/8,  0 )
  .note.seq( sine( btof(4),3,0 ), 1/16, 1 )
  .note.seq( sine( btof(8),7,7 ), 1/6,  2 )
  .loudness.seq( sine(4.33,.35,.7)  )
 
kik = Kick()
  .trigger.seq( 1,1/4 )
 
hat = Hat({ decay:.0125 })
  .trigger.seq( [ _, 1, _, .5 ], 1/8 )
 
bass = Synth( 'bass.hollow' )
  .note.seq( [0,1,2,-1], 1 )
  .trigger.seq( [.75,.5,.25], [1/4,1/8] )
 
clave = Clave({ gain:.1 }).connect( verb, .25 )
  .trigger.seq( .5, e = Euclid(3,8) )
 
e.rotate.seq( [1,-1], 2, 0, 4 )
 
fm = FM({ feedback:.0015, decay:1/2 })
  .connect( verb, .35 ).connect( delay, .125 )
  .note.seq( 
    sine( btof(4.5),4,5 ), 
    Hex(0x8032,1/4 ),
    0,
    8
  )
            red_light.color.r = 0;            green_light.color.g = 1;            blue_light.color.b = 1;          }else if(i >= 16 && i <= 23){            red_light.color.r = 1;            green_light.color.g = 0;            blue_light.color.b = 1;          }        }      }    }  }  for(let i = 0; i < brick_column; i ++){    if (sum_brick_column[i] != brick_row * brick_score){      for (let j = 0; j < brick_row; j++) {          if (bricks[i][j])bricks[i][j] = brick_score * (brick_score * ( 1 + 0.5 * sin(clock)));      }    }  }   if(score >= brick_column * brick_row / 2 && ball_speed_x ** 2 == 1){     ball_speed_x *= 2;     ball_speed_y *= 2;     bar_length /= 2;     print("higher ball speed")    }   //if(score >= 20 && ball_speed_x ** 2 == 4){     //ball_speed_x *= 1.5;     //ball_speed_y *= 1.5;     //print("highest ball speed")    //}  if (ball_y + ball_radius >= height){    fill(black)    text("GAME OVER !", width / 2, height / 2)     for(let i = 0; i < brick_column; i ++){       for (let j = 0; j < brick_row; j++) {          if (bricks[i][j]){            bricks[i][j] = 2;           }       }     }       ball_speed_x = 0;    ball_speed_y = 0;    background_color = white;    other_objects_color = black;    brick_side_color = black;    red_light.color.r = 1;    green_light.color.g = 1;    blue_light.color.b = 1;    //ball_speed_y  = -ball_speed_y;  }  if(score == full_score){    text("GAME CLEAR !")    use( 'hydra' ).then( init => init() )    /*for hydra objects*/    const hydra = document.querySelector('.graphics')     ball_speed_x = 0;    ball_speed_y = 0;    red_light.color.r = 0;    green_light.color.g = 0;    blue_light.color.b = 0;  }  clock += QUARTER_PI / 2;  ball_x += ball_speed_x;  ball_y += ball_speed_y;  print("Score : ", score);  } //Sphere  Union2(    Sphere(sphere_radius).material( mat1 ).translate(sphere_x, sphere_y),    Plane().material( mat2 ).translate(sphere_x, sphere_y)  )    .render()  gradient([1,2,4]).mask(voronoi(5,0.3,0.3),3,0.5).color(1,0,3).invert([0,1]).out(o0)
▲
