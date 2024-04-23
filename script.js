document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var parent = document.querySelector(".data1");
    var data3 = document.querySelector(".data3");
    var data4 = document.querySelector(".data4");
    var data5 = document.querySelector(".data5");
    var data6 = document.querySelector(".data6");
    var data7 = document.querySelector(".data7");
    var data8 = document.querySelector(".data8");
    var data9 = document.querySelector(".data9");
    var data11 = document.querySelector(".data11");
     
    var triggerBottom1 = window.innerHeight/ 50;
    var triggerBottom2 = window.innerHeight /1;
    var triggerBottom3 = window.innerHeight/ 25;

    

    var data3Top = data3.getBoundingClientRect().top;
    var parentTop = parent.getBoundingClientRect().top;
    var data4Top = data4.getBoundingClientRect().top;
    var data5Top = data5.getBoundingClientRect().top;
    var data6Top = data6.getBoundingClientRect().top;
    var data7Top = data7.getBoundingClientRect().top;
    var data8Top = data8.getBoundingClientRect().top;
    var data9Top = data9.getBoundingClientRect().top;
    var data11Top = data11.getBoundingClientRect().top;


    if (parentTop < triggerBottom1) {
      parent.querySelectorAll(".block1").forEach(child => {
        child.classList.add("animate");
      });
      parent.querySelectorAll(".block2").forEach(child => {
        child.classList.add("animate2");
      });
      parent.querySelectorAll(".block3").forEach(child => {
        child.classList.add("animate3");
      });
      parent.querySelectorAll(".block4").forEach(child => {
        child.classList.add("animate4");
      });
      parent.querySelectorAll(".block5").forEach(child => {
        child.classList.add("animate5");
      });
    } else {
      parent.querySelectorAll(".block1").forEach(child => {
        child.classList.remove("animate");
      });
      parent.querySelectorAll(".block2").forEach(child => {
        child.classList.remove("animate2");
      });
      parent.querySelectorAll(".block3").forEach(child => {
        child.classList.remove("animate3");
      });
      parent.querySelectorAll(".block4").forEach(child => {
        child.classList.remove("animate4");
      });
      parent.querySelectorAll(".block5").forEach(child => {
        child.classList.remove("animate5");
      });
    }

    if (data3Top < triggerBottom3) {
      data3.querySelectorAll(".rad").forEach(data3child => {
        data3child.classList.add("animater");
      });
      data3.querySelectorAll(".text").forEach(data3child => {
        data3child.classList.add("animate-texth1");
      });
      data3.querySelectorAll(".text").forEach(data3child => {
        data3child.classList.add("animate-textp");
      });
    } else {
      data3.querySelectorAll(".rad").forEach(data3child => {
        data3child.classList.remove("animater");
      });
      data3.querySelectorAll(".text").forEach(data3child => {
        data3child.classList.remove("animate-texth1");
      });
      data3.querySelectorAll(".text").forEach(data3child => {
        data3child.classList.remove("animate-textp");
      });
    }

    if (data4Top < triggerBottom2) {
      
      data4.querySelectorAll(".block1").forEach(data4child => {
        data4child.classList.add("animate-block1");
      });
      data4.querySelectorAll(".block2").forEach(data4child => {
        data4child.classList.add("animate-block2");
      });
      data4.querySelectorAll(".block3").forEach(data4child => {
        data4child.classList.add("animate-block3");
      });
      data4.querySelectorAll(".block4").forEach(data4child => {
        data4child.classList.add("animate-block4");
      });
      data4.querySelectorAll(".block5").forEach(data4child => {
        data4child.classList.add("animate-block5");
      });
      data4.querySelectorAll(".block6").forEach(data4child => {
        data4child.classList.add("animate-block6");
      });
    } else {
      data4.querySelectorAll(".block1").forEach(data4child => {
        data4child.classList.remove("animate-block1");
      });
      data4.querySelectorAll(".block2").forEach(data4child => {
        data4child.classList.remove("animate-block2");
      });
      data4.querySelectorAll(".block3").forEach(data4child => {
        data4child.classList.remove("animate-block3");
      });
      data4.querySelectorAll(".block4").forEach(data4child => {
        data4child.classList.remove("animate-block4");
      });
      data4.querySelectorAll(".block5").forEach(data4child => {
        data4child.classList.remove("animate-block5");
      });
      data4.querySelectorAll(".block6").forEach(data4child => {
        data4child.classList.remove("animate-block6");
      });
    }

    if (data5Top < triggerBottom2) {
      data5.querySelectorAll(".text1, .text4").forEach(data5child =>{
        data5child.classList.add("animate-block1_4");
      });
      data5.querySelectorAll(".text2, .text3").forEach(data5child =>{
        data5child.classList.add("animate-block2_3");
      });
    } else {
      data5.querySelectorAll(".text1, .text4").forEach(data5child => {
        data5child.classList.remove("animate-block1_4");
      });
      data5.querySelectorAll(".text2, .text3").forEach(data5child => {
        data5child.classList.remove("animate-block2_3");
      });
    }

    if (data7Top < triggerBottom2) {
      data7.querySelectorAll(".prawy7").forEach(data7child => {
        data7child.classList.add("animation-data7-prawy7")
    });
    data7.querySelectorAll(".div1").forEach(data7child => {
      data7child.classList.add("animation-data7-div1")
  });
    data7.querySelectorAll(".div2").forEach(data7child => {
      data7child.classList.add("animation-data7-div2")
  });
    data7.querySelectorAll(".div3").forEach(data7child => {
      data7child.classList.add("animation-data7-div3")
  });
    data7.querySelectorAll(".div4").forEach(data7child => {
      data7child.classList.add("animation-data7-div4")
  });
    data7.querySelectorAll(".div5").forEach(data7child => {
      data7child.classList.add("animation-data7-div5")
  });
    data7.querySelectorAll(".div6").forEach(data7child => {
      data7child.classList.add("animation-data7-div6")
});
    } else {
      data7.querySelectorAll(".prawy7").forEach(data7child => {
        data7child.classList.remove("animation-data7-prawy7")
  });
  
    data7.querySelectorAll(".div1").forEach(data7child => {
      data7child.classList.remove("animation-data7-div1")
  });
    data7.querySelectorAll(".div2").forEach(data7child => {
      data7child.classList.remove("animation-data7-div2")
  }); 
    data7.querySelectorAll(".div3").forEach(data7child => {
      data7child.classList.remove("animation-data7-div3")
  });
    data7.querySelectorAll(".div4").forEach(data7child => {
      data7child.classList.remove("animation-data7-div4")
  });
    data7.querySelectorAll(".div5").forEach(data7child => {
      data7child.classList.remove("animation-data7-div5")
  });
    data7.querySelectorAll(".div6").forEach(data7child => {
      data7child.classList.remove("animation-data7-div6")
  });
    }

    if (data8Top < triggerBottom2) {
      data8.querySelectorAll(".block1").forEach(data8child => {
        data8child.classList.add("animate-data8-block1") 
      });
        data8.querySelectorAll(".block2").forEach(data8child => {
          data8child.classList.add("animate-data8-block2") 
      });
        data8.querySelectorAll(".block3").forEach(data8child => {
          data8child.classList.add("animate-data8-block3") 
      });
        data8.querySelectorAll(".block4").forEach(data8child => {
          data8child.classList.add("animate-data8-block4") 
      });
        data8.querySelectorAll(".block5").forEach(data8child => {
          data8child.classList.add("animate-data8-block5") 
      });
        data8.querySelectorAll(".block6").forEach(data8child => {
          data8child.classList.add("animate-data8-block6") 
      });
    } else {
      data8.querySelectorAll(".block1").forEach(data8child => {
      data8child.classList.remove("animate-data8-block1") 
    });
      data8.querySelectorAll(".block2").forEach(data8child => {
        data8child.classList.remove("animate-data8-block2") 
    });
      data8.querySelectorAll(".block3").forEach(data8child => {
        data8child.classList.remove("animate-data8-block3") 
    });
      data8.querySelectorAll(".block4").forEach(data8child => {
        data8child.classList.remove("animate-data8-block4") 
    });
      data8.querySelectorAll(".block5").forEach(data8child => {
        data8child.classList.remove("animate-data8-block5") 
    });
      data8.querySelectorAll(".block6").forEach(data8child => {
        data8child.classList.remove("animate-data8-block6") 
    });
    }


    if (data6Top < triggerBottom2) {
      data6.querySelectorAll (".Pawikion").forEach(data8child => {
        data8child.classList.add("animate-pawikon") 
      });
      data6.querySelectorAll (".textg").forEach(data8child => {
        data8child.classList.add("animate-textg") 
      });
      data6.querySelectorAll (".textg1, .textg2").forEach(data8child => {
        data8child.classList.add("animate-textg1_2") 
      });
      data6.querySelectorAll (".resort").forEach(data8child => {
        data8child.classList.add("animate-resort") 
      });
      data6.querySelectorAll (".apartments").forEach(data8child => {
        data8child.classList.add("animate-apartments") 
      });
    }else{
      data6.querySelectorAll (".Pawikion").forEach(data8child => {
        data8child.classList.remove("animate-pawikon") 
      });
      data6.querySelectorAll (".textg").forEach(data8child => {
        data8child.classList.remove("animate-textg") 
      });
      data6.querySelectorAll (".textg1, .textg2").forEach(data8child => {
        data8child.classList.remove("animate-textg1_2") 
      });
      data6.querySelectorAll (".resort").forEach(data8child => {
        data8child.classList.remove("animate-resort") 
      });
      data6.querySelectorAll (".apartments").forEach(data8child => {
        data8child.classList.remove("animate-apartments") 
      });
    }

    if (data9Top < triggerBottom2) {
      data9.querySelectorAll(".block1").forEach(data9child => {
        data9child.classList.add("animate-block1_9")
      });
      data9.querySelectorAll(".block2").forEach(data9child => {
        data9child.classList.add("animate-block2_9")
      });
      data9.querySelectorAll(".block3").forEach(data9child => {
        data9child.classList.add("animate-block3_9")
      });
      data9.querySelectorAll(".block4").forEach(data9child => {
        data9child.classList.add("animate-block4_9")
      });
      data9.querySelectorAll(".block5").forEach(data9child => {
        data9child.classList.add("animate-block5_9")
      });
      data9.querySelectorAll(".block6").forEach(data9child => {
        data9child.classList.add("animate-block6_9")
      });
    }else{
      data9.querySelectorAll(".block1").forEach(data9child => {
        data9child.classList.remove("animate-block1_9")
    });
    data9.querySelectorAll(".block2").forEach(data9child => {
      data9child.classList.remove("animate-block2_9")
    });
    data9.querySelectorAll(".block3").forEach(data9child => {
      data9child.classList.remove("animate-block3_9")
    });
    data9.querySelectorAll(".block4").forEach(data9child => {
      data9child.classList.remove("animate-block4_9")
    });
    data9.querySelectorAll(".block5").forEach(data9child => {
      data9child.classList.remove("animate-block5_9")
    });
    data9.querySelectorAll(".block6").forEach(data9child => {
      data9child.classList.remove("animate-block6_9")
    });
  }

  if (data11Top < triggerBottom2) {
    data11.querySelectorAll(".location-phone").forEach(data11child => {
      data11child.classList.add("animate-location-phone")
    });
    data11.querySelectorAll(".contact-email").forEach(data11child => {
      data11child.classList.add("animate-contact-email")
    });
  }else{
    data11.querySelectorAll(".location-phone").forEach(data11child => {
      data11child.classList.remove("animate-location-phone")
    });
    data11.querySelectorAll(".contact-email").forEach(data11child => {
      data11child.classList.remove("animate-contact-email")
    });
  }
  });
});
