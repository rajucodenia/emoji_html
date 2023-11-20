let timerId; // Variable to store the timer ID

function hideEmoji(element_obj) {
  element_obj.style.display = "none";
}

function getSetEmoji(emoji_val, hand_raise) {
  if (hand_raise) {
    var show_emoji_hand = document.getElementById("show-emoji-hand");
    show_emoji_hand.style.display = "inline-block";
    show_emoji_hand.innerText = emoji_val;
    setTimeout(hideEmoji, 10000, show_emoji_hand);
  } else {
    var show_emoji = document.getElementById("show-emoji");
    show_emoji.style.display = "inline-block";
    show_emoji.innerText = emoji_val;

    // Clear the previous timer if it exists
    if (timerId) {
      clearTimeout(timerId);
    }

    // Set a new timer
    timerId = setTimeout(() => {
      hideEmoji(show_emoji);
    }, 5000);
  }
}

// function showEmojiOption(params) {
//   var toggle_emoji_option = document.getElementById("toggle-emoji-option");
//   var emojireactionbutton = document.getElementById("emoji-reaction-button");

//   var displayProperty = window.getComputedStyle(toggle_emoji_option).getPropertyValue("display");
//   if (displayProperty === "none") {
//     toggle_emoji_option.style.display = "block";
//   } else {
//     toggle_emoji_option.style.display = "none";
//   }
//   var optons = document.getElementsByClassName("emoji-option");
//   var emoji_option_click = false;
//   for (var i = 0; i < optons.length; i++) {
//     optons[i].addEventListener("click", function (event) {
//       emoji_option_click = true;
//       // You can use event.currentTarget to refer to the element that triggered the event
//     });
//   }
//   document.addEventListener("click", function (event) {
//     console.log("click");
//     if (event.target !== toggle_emoji_option && event.target !== emojireactionbutton && !emoji_option_click) {
//       toggle_emoji_option.style.display = "none";
//     }
//   });
// }

// ----------------------------------------------------------------
function showEmojiOption(params) {
  var toggle_emoji_option = document.getElementById("toggle-emoji-option");
  var emojireactionbutton = document.getElementById("emoji-reaction-button");

  var optons = document.getElementsByClassName("emoji-option");
  var emoji_option_click = false;

  function handleEmojiOptionClick(event) {
    emoji_option_click = true;
  }

  for (var i = 0; i < optons.length; i++) {
    optons[i].addEventListener("click", handleEmojiOptionClick);
  }

  document.addEventListener("click", function (event) {
    if (
      event.target !== toggle_emoji_option &&
      !toggle_emoji_option.contains(event.target) && // Check if the click is not within toggle_emoji_option
      event.target !== emojireactionbutton &&
      !event.target.classList.contains("emoji-option") &&
      !emoji_option_click
    ) {
      toggle_emoji_option.style.display = "none";
    }

    emoji_option_click = false;
  });

  // emojireactionbutton.addEventListener("click", function (event) {
  //   if (toggle_emoji_option.style.display === "block") {
  //     toggle_emoji_option.style.display = "none";
  //   } else {
  //     toggle_emoji_option.style.display = "block";
  //   }
  //   event.stopPropagation(); // Prevent the click event from propagating to the document
  // });
  var displayProperty = window.getComputedStyle(toggle_emoji_option).getPropertyValue("display");
  if (displayProperty === "none") {
    toggle_emoji_option.style.display = "block";
  } else {
    toggle_emoji_option.style.display = "none";
  }
}
