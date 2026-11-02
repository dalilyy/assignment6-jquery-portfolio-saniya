$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 1: tag, ID and class selectors; text() and css().
  $("body").css("scroll-behavior", "smooth");       // tag selector
  $("#mainHeadline").css("letter-spacing", "-2px"); // ID selector
  $(".hero-intro").css("max-width", "490px");       // class selector

  $("#changeGreeting").on("click", function () {
    $("#mainHeadline").html('Welcome to my <span class="accent">portfolio.</span><br>Let’s create something great.');
  });

  // Light and dark themes.
  $("#lightTheme").on("click", function () { $("body").removeClass("dark-theme"); });
  $("#darkTheme").on("click", function () { $("body").addClass("dark-theme"); });

  // Task 2: hide(), show(), toggle().
  $("#hideStatus").on("click", function () { $("#statusMessage, #funFacts").hide(250); });
  $("#showStatus").on("click", function () { $("#statusMessage, #funFacts").show(250); });
  $("#toggleStatus").on("click", function () { $("#statusMessage, #funFacts").toggle(250); });

  // Task 3: fadeIn(), fadeOut(), fadeToggle().
  $("#fadeIn").on("click", function () { $("#galleryImages").children().fadeIn(500); });
  $("#fadeOut").on("click", function () { $("#galleryImages").children().fadeOut(500); });
  $("#fadeToggle").on("click", function () { $("#galleryImages").children().fadeToggle(500); });

  // Task 4: slideUp(), slideDown(), slideToggle().
  $(".accordion-heading").on("click", function () {
    const panel = $(this).next(".accordion-panel");
    const isOpen = $(this).attr("aria-expanded") === "true";
    // Close other panels with slideUp, then open/close the selected one.
    $(".accordion-panel").not(panel).slideUp(300);
    $(".accordion-heading").not(this).attr("aria-expanded", "false");
    if (isOpen) {
      panel.slideUp(300);
      $(this).attr("aria-expanded", "false");
    } else {
      panel.slideDown(300);
      $(this).attr("aria-expanded", "true");
    }
  });
  // Explicit slideToggle support on double click as an additional interaction.
  $(".accordion-heading").on("dblclick", function () {
    $(this).next(".accordion-panel").stop(true, true).slideToggle(300);
  });

  // Task 5: append(), prepend(), remove(); reject empty input.
  function getNewSkill() {
    const value = $("#newSkill").val().trim();
    if (!value) {
      $("#skillFeedback").text("Please enter a skill before adding it.");
      $("#newSkill").focus();
      return null;
    }
    $("#skillFeedback").text("");
    return $("<li>").append($("<span>").text(value), $("<span>").addClass("skill-tag").text("New skill"));
  }
  $("#addSkill").on("click", function () {
    const item = getNewSkill();
    if (item) { $("#skillList").append(item); $("#newSkill").val(""); }
  });
  $("#prependSkill").on("click", function () {
    const item = getNewSkill();
    if (item) { $("#skillList").prepend(item); $("#newSkill").val(""); }
  });
  $("#removeSkill").on("click", function () {
    const lastItem = $("#skillList li").last();
    if (lastItem.length) {
      lastItem.remove();
      $("#skillFeedback").text("Last skill removed.");
    } else {
      $("#skillFeedback").text("There are no skills left to remove.");
    }
  });
  $("#newSkill").on("keydown", function (event) {
    if (event.key === "Enter") { event.preventDefault(); $("#addSkill").trigger("click"); }
  });

  // Task 6: attr() changes the social link destination.
  let alternateLink = false;
  $("#changeLink").on("click", function () {
    alternateLink = !alternateLink;
    if (alternateLink) {
      $("#socialLink").attr("href", "https://www.linkedin.com/").text("Visit LinkedIn ↗");
      $("#linkFeedback").text("Link destination changed to LinkedIn.");
    } else {
      $("#socialLink").attr("href", "https://github.com/").text("Visit my GitHub ↗");
      $("#linkFeedback").text("Link destination changed back to GitHub.");
    }
  });

  // Task 7: val() reads live form values; text() displays them safely.
  $("#visitorName").on("input", function () {
    $("#namePreview").text($(this).val() || "—");
  });
  $("#visitorEmail").on("input", function () {
    $("#emailPreview").text($(this).val() || "—");
  });
  $("#contactForm").on("submit", function (event) { event.preventDefault(); });

  // Task 8: animate skill bars from 0 to target and back to 0.
  let barsAnimated = false;
  $("#animateSkills").on("click", function () {
    const bars = $(".bar-fill");
    bars.stop(true);
    if (!barsAnimated) {
      bars.each(function (index) {
        $(this).animate({ width: $(this).attr("data-width") }, 850 + index * 180);
      });
      $(this).html("Reset My Skills <span>↺</span>");
      barsAnimated = true;
    } else {
      bars.animate({ width: "0%" }, 650);
      $(this).html('Animate My Skills <span>↗</span>');
      barsAnimated = false;
    }
  });
});
