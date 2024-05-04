use('p5')
/*defining*/
  /*for p5.js objects*/
  let ball_x = windowWidth / 2;
  let ball_y = 10;
  let ball_speed_x = 1;
  let ball_speed_y = 1;
  let ball_radius = 5;
  let brick_height = 20;
  let brick_width = 30;
  let brick_column = 24;
  let brick_row = 12;
	let brick_score = 1;
  let bricks = new Array(brick_column);
	let sum_brick_column = new Array(brick_column);
  for(let c = 0; c < brick_column; c++){
    bricks[c] = new Array(brick_row);
    sum_brick_column[c] = 0;
    for (let r = 0; r < brick_row; r ++){
      bricks[c][r] = brick_score;
    }
  }
  // let score = 0;
	let clock = 0.0;
	/*for marching.js objects*/
  let red_flag = false;
  let green_flag = false;
  let blue_flag = false;
  let sphere_radius = 0.5;
  let sphere_x = 0;
  let sphere_y = -1;
  let sphere_z = 0;
  let light_radius = 2;
  let mat1 = Material( 'phong', Vec3(.05), Vec3(.5), Vec3(1), 8, Vec3(1,50,5) )
  let mat2 = Material( 'phong', Vec3(.05), Vec3(.5), Vec3(1), 8 )
  Light( Vec3(sphere_x, sphere_y, light_radius * 2), Vec3(1) )
  red_light = Light(Vec3(sphere_x, sphere_y + light_radius, sphere_z), Vec3(0, 0, 0))
  green_light = Light(Vec3(sphere_x + light_radius * (-sqrt(3) / 2), sphere_y + light_radius * (-1 / 2), sphere_z), Vec3(0, 0, 0))
  blue_light = Light(Vec3(sphere_x + light_radius * (sqrt(3) / 2), sphere_y + light_radius * (-1 / 2), sphere_z), Vec3(0, 0, 0))
	/*for audio */
	drums = EDrums()
  let kick_flag = false;
  let hat_flag = false;
/*setting up*/
setup = function() {
  createCanvas(int(windowWidth), int(windowHeight / 2));
  //noLoop();
}
resizeCanvas(int(windowWidth), int(windowHeight / 2));
/*drawing*/
draw = function(){
  background(0);
  fill(255);
  noStroke();
  circle(ball_x, ball_y, ball_radius * 2);
  rect(mouseX - 50, height - 50, 100, 10);
  stroke(255);
  for(let i = 0; i < brick_column; i ++){
    sum_brick_column[i] = 0;
    for (let j = 0; j < brick_row; j++) {
      if(i == 0) fill(255, 0, 0, 255 / bricks[i][j]);
      if(i == 1) fill(255, 63, 0, 255 / bricks[i][j]);
      if(i == 2) fill(255, 127, 0, 255 / bricks[i][j]);
      if(i == 3) fill(255, 191, 0, 255 / bricks[i][j]);
      if(i == 4) fill(255, 255, 0, 255 / bricks[i][j]);
      if(i == 5) fill(191, 255, 0, 255 / bricks[i][j]);
      if(i == 6) fill(127, 255, 0, 255 / bricks[i][j]);
      if(i == 7) fill(63, 255, 0, 255 / bricks[i][j]);
      if(i == 8) fill(0, 255, 0, 255 / bricks[i][j]);
      if(i == 9) fill(0, 255, 63, 255 / bricks[i][j]);
      if(i == 10) fill(0, 255, 127, 255 / bricks[i][j]);
      if(i == 11) fill(0, 255, 191, 255 / bricks[i][j]);
      if(i == 12) fill(0, 255, 255, 255 / bricks[i][j]);
      if(i == 13) fill(0, 191, 255, 255 / bricks[i][j]);
      if(i == 14) fill(0, 127, 255, 255 / bricks[i][j]);
      if(i == 15) fill(0, 63, 255, 255 / bricks[i][j]);
      if(i == 16) fill(0, 0, 255, 255 / bricks[i][j]);
      if(i == 17) fill(63, 0, 255, 255 / bricks[i][j]);
      if(i == 18) fill(127, 0, 255, 255 / bricks[i][j]);
      if(i == 19) fill(191, 0, 255, 255 / bricks[i][j]);
      if(i == 20) fill(255, 0, 255, 255 / bricks[i][j]);
      if(i == 21) fill(255, 0, 191, 255 / bricks[i][j]);
      if(i == 22) fill(255, 0, 127, 255 / bricks[i][j]);
      if(i == 23) fill(255, 0, 63, 255 / bricks[i][j]);
      if(bricks[i][j]){
        sum_brick_column[i] += brick_score;
        rect(width / 2 - brick_width * brick_column / 2 + brick_width * i, 50 + brick_height * j, brick_width, brick_height);
      }
    }
  }
  if ((ball_y + ball_radius == height - 50  && (ball_x >= mouseX - 50 && ball_x <= mouseX + 50)) || (ball_y - ball_radius == 0) ){
    ball_speed_y  = -ball_speed_y ;
  }
  if (ball_x - ball_radius == 0 || ball_x + ball_radius == width){
    ball_speed_x  = -ball_speed_x ;
  }
  for(let i = 0; i < brick_column; i ++){
    for (let j = 0; j < brick_row; j++) {
      if (bricks[i][j]){
        if((ball_x + ball_radius == width / 2 - brick_width * brick_column / 2 + brick_width * i || ball_x - ball_radius == width / 2 - brick_width * brick_column / 2 + brick_width * (i + 1)) && (ball_y >= 50 + brick_height * j && ball_y <= 50 + brick_height * (j + 1))){
          bricks[i][j] = 0;
          ball_speed_x = -ball_speed_x;
          // score += 1;
          if(i >= 0 && i <= 7){
            red_light.color.r = 1;
            green_light.color.g = 1;
            blue_light.color.b = 0;
          }else if(i >= 8 && i <= 15){
            red_light.color.r = 0;
            green_light.color.g = 1;
            blue_light.color.b = 1;
          }else if(i >= 16 && i <= 23){
            red_light.color.r = 1;
            green_light.color.g = 0;
            blue_light.color.b = 1;
          }
        }
        if((ball_x >= width / 2 - brick_width * brick_column / 2 + brick_width * i && ball_x <= width / 2 - brick_width * brick_column / 2 + brick_width * (i + 1)) && (ball_y - ball_radius == 50 + brick_height * j || ball_y + ball_radius== 50 + brick_height * (j + 1))){
          bricks[i][j] = 0;
          ball_speed_y = -ball_speed_y;
          //score += 1;
          if(i >= 0 && i <= 7){
            red_light.color.r = 1;
            green_light.color.g = 1;
            blue_light.color.b = 0;
          }else if(i >= 8 && i <= 15){
            red_light.color.r = 0;
            green_light.color.g = 1;
            blue_light.color.b = 1;
          }else if(i >= 16 && i <= 23){
            red_light.color.r = 1;
            green_light.color.g = 0;
            blue_light.color.b = 1;
          }
        }
      }
    }
  }
  // if(score >= 10 && ball_speed_x ** 2 == 1){
    // ball_speed_x *= 2;
    // ball_speed_y *= 2;
    // print("higher ball speed")
  //  }
  // if(score >= 20 && ball_speed_x ** 2 == 4){
    // ball_speed_x *= 1.5;
    // ball_speed_y *= 1.5;
    // print("highest ball speed")
  //  }
  if (ball_y + ball_radius == height){
    // for(let i = 0; i < brick_column; i ++){
    //   for (let j = 0; j < brick_row; j++) {
    //     // if (bricks[i][j]){
    //     //   bricks[i][j] = 2;
    //     //   ball_speed_x = 0;
    //     //   ball_speed_y = 0; 
    //     // }
    //   }
    // }   
    ball_speed_y  = -ball_speed_y;
  }
  for(let i = 0; i < brick_column; i ++){
    if (sum_brick_column[i] != brick_row * brick_score){
      for (let j = 0; j < brick_row; j++) {
          if (bricks[i][j])bricks[i][j] = brick_score * (brick_score * ( 1 + 0.5 * sin(clock)));
      }
      if (i == 13){
        kick_flag = true;
      }
      if (i == 16){
        hat_flag = true;
      }
    }
  }
  clock += QUARTER_PI / 2;
  ball_x += ball_speed_x;
  ball_y += ball_speed_y;
  //print("Score : ", score);
}
  Union2(
    Sphere(sphere_radius).material( mat1 ).translate(sphere_x, sphere_y),
    Plane().material( mat2 ).translate(sphere_x, sphere_y)
  )
    .render()
  // loop();
  // if (kick_flag){
  //   kik = Kick().trigger.seq( 1,1/4 )
  // }
  // if (hat_flag){
  //   hat = Hat({ decay:.0125 }).trigger.seq( [ _, 1, _, .5 ], 1/8 )
  // }