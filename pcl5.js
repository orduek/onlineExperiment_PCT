/*
 * PCL-5
 * author: Or Duek
 * created on Mon Dec 27 2022
 *
 */

var jsPsych = initJsPsych();

var pcl_labels = [
  "Not at all",
  "A little bit",
  "Moderately",
  "Quite a bit",
  "Extremely"
];

var pcl5 = {
  type: jsPsychSurveyLikert,
  preamble: "<p>Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem carefully and then circle one of the numbers to the right to indicate how much you have been bothered by that problem in the past month.</p>",
  questions: [
    {
      prompt: "Repeated, disturbing, and unwanted memories of the stressful experience",
      name: "PCL5_1",
      required: true,
      labels: pcl_labels
    },
    {
      prompt: "Repeated, disturbing dreams of the stressful experience?",
      name: "PCL5_2",
      required: true,
      labels: pcl_labels
    },
    {
      prompt: "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?",
      name: "PCL5_3",
      required: true,
      labels: pcl_labels
    },
    {
      prompt: "Feeling very upset when something reminded you of the stressful experience?",
      name: "PCL5_4",
      required: true,
      labels: pcl_labels
    },
    {
      prompt: "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?",
      name: "PCL5_5",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Avoiding memories, thoughts, or feelings related to the stressful experience? ",
      name: "PCL5_6",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)? ",
      name: "PCL5_7",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Trouble remembering important parts of the stressful experience? ",
      name: "PCL5_8",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?",
      name: "PCL5_9",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Blaming yourself or someone else for the stressful experience or what happened after it? ",
      name: "PCL5_10",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Having strong negative feelings such as fear, horror, anger, guilt, or shame?",
      name: "PCL5_11",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Loss of interest in activities that you used to enjoy? ",
      name: "PCL5_12",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Feeling distant or cut off from other people?",
      name: "PCL5_13",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?",
      name: "PCL5_14",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Irritable behavior, angry outbursts, or acting aggressively?",
      name: "PCL5_15",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Taking too many risks or doing things that could cause you harm?",
      name: "PCL5_16",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Being “superalert” or watchful or on guard?",
      name: "PCL5_17",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Feeling jumpy or easily startled?",
      name: "PCL5_18",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Having difficulty concentrating?",
      name: "PCL5_19",
      required: true,
      labels: pcl_labels
    },
    {
      prompt:
        "Trouble falling or staying asleep?",
      name: "PCL5_20",
      required: true,
      labels: pcl_labels
    },
  ]
};
const SURVEY_PCL5 = [
    [
      {
        type: "likert-table",
        prompt:
          "Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem carefully and then circle one of the numbers to the right to indicate how much you have been bothered by that problem in the past month.",
        options: [
          "Not at all",
          "A little bit",
          "Moderately",
          "Quite a bit",
          "Extremely"
        ],
        required: true,
        randomize_statement_order: true,
        statements: [
          {
            prompt: "Repeated, disturbing, and unwanted memories of the stressful experience",
            name: "PCL5_1",
            required: true,
          },
          {
            prompt: "Repeated, disturbing dreams of the stressful experience?",
            name: "PCL5_2",
            required: true,
          },
          {
            prompt: "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?",
            name: "PCL5_3",
            required: true,
          },
          {
            prompt: "Feeling very upset when something reminded you of the stressful experience?",
            name: "PCL5_4",
            required: true,
          },
          {
            prompt: "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?",
            name: "PCL5_5",
            required: true,
          },
          {
            prompt:
              "Avoiding memories, thoughts, or feelings related to the stressful experience? ",
            name: "PCL5_6",
            required: true,
          },
          {
            prompt:
              "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)? ",
            name: "PCL5_7",
            required: true,
          },
          {
            prompt:
              "Trouble remembering important parts of the stressful experience? ",
            name: "PCL5_8",
            required: true,
          },
          {
            prompt:
              "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?",
            name: "PCL5_9",
            required: true,
          },
          {
            prompt:
              "Blaming yourself or someone else for the stressful experience or what happened after it? ",
            name: "PCL5_10",
            required: true,
          },
          {
            prompt:
              "Having strong negative feelings such as fear, horror, anger, guilt, or shame?",
            name: "PCL5_11",
            required: true,
          },
          {
            prompt:
              "Loss of interest in activities that you used to enjoy? ",
            name: "PCL5_12",
            required: true,
          },
          {
            prompt:
              "Feeling distant or cut off from other people?",
            name: "PCL5_13",
            required: true,
          },
          {
            prompt:
              "Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?",
            name: "PCL5_14",
            required: true,
          },
          {
            prompt:
              "Irritable behavior, angry outbursts, or acting aggressively?",
            name: "PCL5_15",
            required: true,
          },
          {
            prompt:
              "Taking too many risks or doing things that could cause you harm?",
            name: "PCL5_16",
            required: true,
          },
          {
            prompt:
              "Being “superalert” or watchful or on guard?",
            name: "PCL5_17",
            required: true,
          },
          {
            prompt:
              "Feeling jumpy or easily startled?",
            name: "PCL5_18",
            required: true,
          },
          {
            prompt:
              "Having difficulty concentrating?",
            name: "PCL5_19",
            required: true,
          },
          {
            prompt:
              "Trouble falling or staying asleep?",
            name: "PCL5_20",
            required: true,
          },
        ],
      },
    ],
  ];