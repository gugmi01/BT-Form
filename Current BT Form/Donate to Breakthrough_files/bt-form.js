document.addEventListener('DOMContentLoaded', function() {
  var otherInputLabel = document.getElementById("j_id0:SiteTemplate:pc_donation_form:donationInputFieldVert");
  var occurInput = document.getElementById("pc_donation_occurrences");
  var otherButton = document.querySelector("tr:nth-child(7) label");
  var otherInput = document.getElementById("j_id0:SiteTemplate:pc_donation_form:donationOptionsPicklistVert:6");
  var occurInput = document.getElementById("pc_donation_occurrences");
  var mobNav = document.getElementById("toggle-main-navigation");
  var top = document.getElementById("top");

  function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
  }

  var fragment = create('<div class="bbutton"><a href="http://www.breakthrough.org">Back to Breakthrough.org</a></div>');
  // You can use native DOM methods to insert the fragment:
  // document.body.insertBefore(fragment, document.body.childNodes[6]);
  top.appendChild(fragment);
  otherInputLabel.setAttribute("placeholder", "Other amount");
  otherInputLabel.className += " hideNow";
  occurInput.className += " hideNow";
  mobNav.className += " hideNow";

  otherButton.addEventListener("click", function() {
    if (otherInputLabel.classList.contains("hideNow")) {
      otherInputLabel.classList.remove("hideNow");
    } else if (otherInput.checked = false) {
      otherInputLabel.className += " hideNow";
    } else {
      otherInputLabel.className += " hideNow";
    }
  });

  var checkbox = document.querySelector("#pc_recurring_donation_options > input");
  // var otherbox = document.querySelector("#j_id0\3ASiteTemplate\3Apc_donation_form\3A donationOptionsPicklistVert\3A 6");
  //
  // otherbox.addEventListener('change', function() {
  //   if (this.checked) {
  //     otherInput.classList.remove("hideNow");
  //   } else {
  //     otherInput.className += " hideNow";
  //   }
  // });

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      occurInput.classList.remove("hideNow");
    } else {
      occurInput.className += " hideNow";
    }
  });
}, false);
