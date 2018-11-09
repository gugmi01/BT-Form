document.addEventListener('DOMContentLoaded', function() {
  var otherInputLabel = document.getElementById("j_id0:SiteTemplate:pc_donation_form:donationInputFieldVert");
  var occurInput = document.getElementById("pc_donation_occurrences");
  var otherButton = document.querySelector("tr:nth-child(7) label");
  var otherInput = document.getElementById("j_id0:SiteTemplate:pc_donation_form:donationOptionsPicklistVert:6");


  otherInputLabel.setAttribute("placeholder", "Other amount");
  otherInputLabel.className += " hideNow";


 otherButton.addEventListener("click", function(){
    if (otherInputLabel.classList.contains("hideNow")){
      otherInputLabel.classList.remove("hideNow");
    }
    else if(otherInput.checked = false){
      otherInputLabel.className += " hideNow";
    }
    else{
      otherInputLabel.className += " hideNow";
    }
  });

}, false);
