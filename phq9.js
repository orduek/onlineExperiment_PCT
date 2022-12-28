/*
 * survey_phq9.js
 * author: evan kirkiles
 * created on Wed Dec 07 2022
 * 2022 the nobot space,
 */
var jsPsych = initJsPsych();

var phq9_labels = [
  "Not at all",
          "Several days",
          "More than half of the days",
          "Nearly every day"
];

var phq9 = {
  type: jsPsychSurveyLikert,
  preamble: "<p>How often have you been bothered by the following over the past 2 weeks?</p>",
  questions: [
    {
      prompt: "Little interest or pleasure in doing things?",
      name: "PHQ9_0",
      required: true,
      labels: phq9_labels
    },
    {
      prompt: "Feeling down, depressed, or hopeless?",
      name: "PHQ9_1",
      required: true,
      labels: phq9_labels
    },
    {
      prompt: "Trouble falling or staying asleep, or sleeping too much?",
      name: "PHQ9_2",
      required: true,
      labels: phq9_labels
    },
    {
      prompt: "Feeling tired or having little energy?",
      name: "PHQ9_3",
      required: true,
      labels: phq9_labels
    },
    {
      prompt: "Poor appetite or overeating?",
      name: "PHQ9_4",
      required: true,
      labels: phq9_labels
    },
    {
      prompt:
        "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
      name: "PHQ9_5",
      required: true,
      labels: phq9_labels
    },
    {
      prompt:
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
      name: "PHQ9_6",
      required: true,
      labels: phq9_labels
    },
    {
      prompt:
        "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
      name: "PHQ9_7",
      required: true,
      labels: phq9_labels
    },
    {
      prompt:
        "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
      name: "PHQ9_8",
      required: true,
      labels: phq9_labels
    }
  ]
};

const SURVEY_PHQ9 = [
    [
      {
        type: "likert-table",
        prompt:
          "How often have you been bothered by the following over the past 2 weeks?",
        options: [
          "Not at all",
          "Several days",
          "More than half of the days",
          "Nearly every day",
        ],
        required: true,
        randomize_statement_order: true,
        statements: [
          {
            prompt: "Little interest or pleasure in doing things?",
            name: "PHQ9_0",
            required: true,
          },
          {
            prompt: "Feeling down, depressed, or hopeless?",
            name: "PHQ9_1",
            required: true,
          },
          {
            prompt: "Trouble falling or staying asleep, or sleeping too much?",
            name: "PHQ9_2",
            required: true,
          },
          {
            prompt: "Feeling tired or having little energy?",
            name: "PHQ9_3",
            required: true,
          },
          {
            prompt: "Poor appetite or overeating?",
            name: "PHQ9_4",
            required: true,
          },
          {
            prompt:
              "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
            name: "PHQ9_5",
            required: true,
          },
          {
            prompt:
              "Trouble concentrating on things, such as reading the newspaper or watching television?",
            name: "PHQ9_6",
            required: true,
          },
          {
            prompt:
              "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
            name: "PHQ9_7",
            required: true,
          },
          {
            prompt:
              "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
            name: "PHQ9_8",
            required: true,
          },
        ],
      },
    ],
  ];