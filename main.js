var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" ,"https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Ripul Chhabra(Father)", "Binnie Chhabra (Mother)", ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 2
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [ "https://i.postimg.cc/wjMnFtMX/father.jpg" ];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Ripul Chhabra (father)"];

    
 
    document.getElementById("family_member_image").src = updatedImage ;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
