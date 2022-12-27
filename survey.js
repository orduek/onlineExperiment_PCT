/* --------------------------------- SURVEYS -------------------------------- */

var jsPsych = initJsPsych({
        
    on_finish: function() {
        jsPsych.data.displayData();
        var interaction_data = jsPsych.data.getInteractionData();
        //console.log(interaction_data.json());
    }
});
timelineS = []
// 1. Age / experiment enjoyment survey
var stage_surveys = {
    type: jsPsychSurvey,
    pages: [
      [
        {
          type: "text",
          prompt: "How old are you?",
          name: "survey_age",
          required: true,
        },
        {
            type: "multi-choice",
            prompt: "Are you?",
            name: "survey_gender",
            options: ["Male", "Female", "Other/prefer not to answer"],
            required: true,
          },
          {
            type: "multi-choice",
            prompt:
              "Please specify the highest level of education you have completed.",
            name: "survey_education",
            options: [
              "Some High School",
              "High School",
              "Bachelor's Degree",
              "Master's Degree",
              "Ph.D. or higher",
              "Trade School",
              "Prefer not to say",
            ],
            required: true,
          },
       
      ],
      [
        {
          type: "multi-choice",
          prompt: "What is your annual household income?",
          name: "survey_income",
          options: [
            "Less than $25,000",
            "$25,000 - $50,000",
            "$50,000 - $100,000",
            "$100,000 - $200,000",
            "More than $200,000",
            "Prefer not to say",
          ],
          required: true,
        },
        {
          type: "multi-choice",
          prompt: "Are you Hispanic or Latino?",
          name: "survey_hispanicorlatino",
          options: ["Yes", "No", "Prefer not to answer"],
          required: true,
        },
        {
          type: "multi-choice",
          prompt: "What is your race?",
          name: "survey_race",
          options: [
            "White",
            "Black or African American",
            "Asian",
            "American Indian/Alaskan native",
            "Native Hawaiian or Other Pacific Islander",
            "Other or Mixed",
            "Prefer not to say",
          ],
          required: true,
        },
      ],
    ],
    
  };

 // timelineS.push(stage_surveys)