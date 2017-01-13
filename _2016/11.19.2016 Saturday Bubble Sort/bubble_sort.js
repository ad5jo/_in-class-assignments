//
      function sort_media (){
        var files = ["pavans_first_birthday.mov",
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
          var image_files = [];
          var video_files = [];
          var other_files = [];

          var i_length = files.length;

          for (var i = 0; i < i_length; i++)
          {
            //
            var s_name = files[i];
            var i_index_of_dot = s_name.indexOf(".");
            var s_ext = s_name.substring(i_index_of_dot);

            if (s_ext === ".jpg" || s_ext === ".gif" || s_ext === ".jpeg"  ||s_ext === ".png" ){
                image_files.push(s_name);

            }
            else if ( s_ext === ".mov" || s_ext === ".avi" || s_ext === ".mpeg"  ||s_ext === ".mp4" ||s_ext === ".mpg" ){
                video_files.push(s_name);
            }
          else {
                other_files.push(s_name);
            }


          }
            console.log( "image_files: " + image_files)
            console.log( " " )

            console.log( "video_files: " + video_files)
                        console.log( " " )

            console.log( "other_files: " + other_files)
            
      }