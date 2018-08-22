var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];

  var imgFiles = [];
  var vidFiles = [];
  var ext = "";
  var fileName = "";

  for(var i = 0; i < files.length; i++){
    fileName = files[i];
    console.log(fileName);
    ext = fileName.charAt(fileName.length-3);
    //use .includes
    if(ext === "."){
        for(var j = (fileName.length-3); j < fileName.length; j++){
            ext += fileName.charAt(j);    
        }
        if(ext === ".mov" || ext === ".avi" || ext === ".mp4" ){
            vidFiles.append(files[i]);
        }
        if(ext === ".png" || ext === ".gif" || ext === ".jpg"){
            imgFiles.append(files[i]);
        }
    }else {
        ext = fileName.charAt(fileName.length-4);
        if(ext === "."){
            for(var j = (fileName.length-4); j < fileName.length; i++){
                ext += fileName.charAt(j);     
            }
            if(ext === ".mpeg"){
                vidFiles.append(files[i]);
            }
            if(ext === "jpeg"){
                imgFiles.append(files[i]);
            }
        }
    }
  }

  console.log(vidFiles);
  console.log(imgFiles);

/*
  //solution 1

  var imageArray = [];
       var movieArray = [];


       for (var i = 0; i < files.length; i++) {

           if (files[i].includes(".mov") || files[i].includes(".mp4") || files[i].includes(".avi") || files[i].includes(".mpg") || files[i].includes(".mpeg")) {
               movieArray.push(files[i]);
           }
           else if (files[i].includes(".jpg") || files[i].includes(".jpeg") || files[i].includes(".gif") || files[i].includes(".png")) {
               imageArray.push(files[i]);
           }
       };

       console.log(files);
       console.log(movieArray);
       console.log(imageArray);
*/