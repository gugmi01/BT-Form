document.addEventListener('DOMContentLoaded', function() {
  var otherInputLabel = document.getElementById("j_id0:SiteTemplate:pc_donation_form:donationInputFieldVert");
  var occurInput = document.getElementById("pc_donation_occurrences");
  var otherButton = document.querySelector("tr:nth-child(7) label");
  var otherInput = document.getElementById("j_id0:SiteTemplate:pc_donation_form:donationOptionsPicklistVert:6");
  var occurInput = document.getElementById("pc_donation_occurrences");
  var mobNav = document.getElementById("toggle-main-navigation");
  var top = document.getElementById("top");
  var credits = document.querySelector('.credits');
  var policy = document.querySelector('p:nth-child(5)');
  var textarea = document.getElementById('j_id0:SiteTemplate:campaignHtmlContent');


  function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
  }

  //Replace header and policy ae
  var fragment = create('<div class="bbutton"><a href="http://www.breakthrough.org">Back to Breakthrough.org</a></div>');
  var policyfrag = create('<p><span style="font-size: small;"><em>View our </em></span><em><a href="http://www.breakthrough.org/privacy-policy"><span style="font-size: small;">Donor Privacy Policy</span></a></em><span style="font-size: small;"><em>.</em></span></p>');

  top.appendChild(fragment);
  textarea.appendChild(policyfrag)
  otherInputLabel.setAttribute("placeholder", "Other amount");
  otherInputLabel.className += " hideNow";
  occurInput.className += " hideNow";
  mobNav.className += " hideNow";
  credits.className += " hideNow";
  policy.className += " hideNow";



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

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      occurInput.classList.remove("hideNow");
    } else {
      occurInput.className += " hideNow";
    }
  });
}, false);
