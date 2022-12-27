/* This is the PCT task (see Duek et al., 2014). Here we choose to between 2 pairs of images.
    One pair is associated with reward (i.e., correct answer leads to +25 points), and one answer is associated
    with no reward (i.e, 0). The second pair is associated with punishment, i.e., correct answer avoids punishment
    (0 points) and incorrect is fined (-25 points). 0 is ambigous. 

    */
    /* timeline var*/
    var jsPsych = initJsPsych({
        
        on_finish: function() {
            jsPsych.data.displayData();
            var interaction_data = jsPsych.data.getInteractionData();
            //console.log(interaction_data.json());
        }
    });
    
    var timeline = [];
    var nBlocks = 4; // set number of blocks
    /* Welcome page */
    var welcome = {
        type: jsPsychHtmlButtonResponse,
        choices: ["Continue"],
        stimulus: "<p>Welcome! This is the Probabilistic Classification Experiment</p> Press the button to continue"
    };

    timeline.push(welcome)
    /* Build the main algorithm before starting presentation etc.
    Randomize 2 reward and 2 punishment stimuli for 20 time each (one block for now)
    */

    var images = ['static/images/shape1.jpg','static/images/shape2.jpg', 'static/images/shape3.jpg', 
'static/images/shape4.jpg']

    var preload = {
        type: jsPsychPreload,
        images: ['static/images/shape1.jpg','static/images/shape2.jpg', 'static/images/shape3.jpg', 
    'static/images/shape4.jpg']
        };

    timeline.push(preload) //preloading all images before trial begins
    var randImages = jsPsych.randomization.repeat(images, 1)
    //console.log(randImages)

    var aR = randImages[0] /* first image */
    var bR = randImages[1]
    var aP = randImages[2] // punishment images as well 
    var bP = randImages[3]

    /* set variables for wrong and right answers */
    var pWrong
    var pType
    /* need to generate randomization and feedback according to contingencies
    then need to add points to the correct/incorrect feedback*/
    /*Set number of trials per stimulus */
    nTrials = 12 // trials per image
    proportion = 0.75///set proportion of contingency
    nNonCont = nTrials * (1-proportion)
    //console.log(nNonCont)
    var feedback_stim =  Array(nTrials).fill(0)



    // full screen
    var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
    };

    timeline.push(enter_fullscreen);

    /* instructions
    In this experiment, you will be shown pictures, and you will guess
whether those pictures belong to Category A or Category B. A picture
does not always belong to the same category each time you see it.
If you guess correctly, you may win points. If you guess wrong, you
may lose points. You will see a running total of your points as you
play. We will start you off with a few points now. Press continue to begin
    */
   var instructions = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Continue"],
    stimulus: "In this experiment, you will be shown pictures, and you will guess whether those pictures belong to Category A or Category B. A picture does not always belong to the same category each time you see it. If you guess correctly, you may win points. If you guess wrong, you may lose points. You will see a running total of your points as you play. We will start you off with a few points now. <p>Press continue to begin</p>"
   };

   timeline.push(instructions);
    //var feebackA1 = Array(nTrials).fill(0) ///feedback array correspond to correct/incorrect per stimulus
    // change last n spot to add some 1n's 
    // create the entire block experiment
    var block_exp = []
    for (let i=0; i<nTrials*4; i++) {
        if (i<nTrials){
            block_exp.push(aR)
        } else if (i>=nTrials & i<nTrials*2) {
            block_exp.push(bR)
        } else if (i>=nTrials*2 & i<nTrials*3) {
            block_exp.push(aP)
        } else {
            block_exp.push(bP)
        }
    }


// need to generate arrays of feedback for the entire experiment before running
// to do so, loop via building the array, pushin nTrial randomized ordered answers per block
for (let i=0; i <nNonCont; i++){
        feedback_stim[i] = 1
    }

var feedback_stim_shuffled_aR = [] 
var feedback_stim_shuffled_bR = []
var feedback_stim_shuffled_aP = []
var feedback_stim_shuffled_bP = []
var block_exp_shuffle = []
for (let i=0; i<nBlocks; i++) {
    feedback_stim_shuffled_aR.push(jsPsych.randomization.repeat(feedback_stim, 1)) //shuffle the feedback stim)
    feedback_stim_shuffled_bR.push(jsPsych.randomization.repeat(feedback_stim, 1)) //shuffle the feedback stim)
    feedback_stim_shuffled_aP.push(jsPsych.randomization.repeat(feedback_stim, 1)) //shuffle the feedback stim)
    feedback_stim_shuffled_bP.push(jsPsych.randomization.repeat(feedback_stim, 1)) //shuffle the feedback stim)
    block_exp_shuffle.push(jsPsych.randomization.repeat(block_exp, 1));
}

//console.log(feedback_stim_shuffled_aR)
    
    //console.log(block_exp)
var points = 500; ///number of points to collect
for (let b=0; b<2; b++){
    var block = b+1;
    /* Preloading data */

    // var preload = {
    //     type: jsPsychPreload,
    //     images: ['static/images/greenapple.jpg', 'static/images/redapple.jpg']
    // };
    // shuffle block before we begin
    
   
   
    //** looping through to run one block
    for (let i = 0; i < block_exp_shuffle[b].length; i++) {
   
    
    var fixation = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<div style="font-size: 60px;">+</div>',
        choices: "NO_KEYS",
        trial_duration: function(){
            return jsPsych.randomization.sampleWithoutReplacement([250,500,750,1000], 1)[0];
        },
        data: {
            task: 'fixation',
            block: block
        }  
    };
    timeline.push(fixation);

    var categorization_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: "<img src=" + block_exp_shuffle[b][i] + " width=300 height=300></img><p>Is it an A or a B?</p>",
        choices: ['A', 'B'],
        margin_horizontal: '30px',
        data: {
            task: 'trial',
            block: block,
            valence: ''
        },
        on_finish: function(data){
         // set feedback for this trial
        if (block_exp_shuffle[b][i] === aR) {
            feedback_s = feedback_stim_shuffled_aR[b].pop()
            pType = 25;
            pWrong = 0;
            data.valence = 'reward'
        } else if (block_exp_shuffle[b][i]=== bR) {
            feedback_s = feedback_stim_shuffled_bR[b].pop()
            pType = 25;
            pWrong = 0;
            data.valence = 'reward'
        } else if (block_exp_shuffle[b][i]===aP) {
            feedback_s = feedback_stim_shuffled_aP[b].pop()
            pType = 0;
            pWrong = -25;
            data.valence = 'punishment'
        } else {
            feedback_s = feedback_stim_shuffled_bP[b].pop()
            pType = 0;
            pWrong = -25;
            data.valence = 'punishment'
        }
        // Score the response as correct or incorrect.
        if(data.response===feedback_s){
        data.correct = true;
        points = points + pType
        } else {
        data.correct = false; 
        points = points + pWrong
        }
        
        }
    };
    
    timeline.push(categorization_trial);
        
    var feedback = {
    type: jsPsychHtmlKeyboardResponse,
    choices: "NO_KEYS",
    trial_duration: 1200,
    data: {
        task: 'feedback',
        block: block
    },
    stimulus: function(){
        // The feedback stimulus is a dynamic parameter because we can't know in advance whether
        // the stimulus should be 'correct' or 'incorrect'.
        // Instead, this function will check the accuracy of the last response and use that information to set
        // the stimulus value on each trial.
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        //console.log(jsPsych.data.get().last(1).values()[0].correct)
        if(last_trial_correct){
        return "<h1 style=color:blue><p><strong>"+pType+"</strong></p></h1><h1 style= color:teal><p> Total of "+points+" points</p></h1>"; // the parameter value has to be returned from the function
        } else {
        return "<h1 style=color:blue><p><strong>"+pWrong+"</strong></p></h1><h1 style=color:teal><p> Total of "+points+" points</p></h1>"; // the parameter value has to be returned from the function
        }
        }
      };
    

    timeline.push(feedback);

    };
    
    var endBlock = {
        type: jsPsychHtmlButtonResponse,
        choices: ["Continue"],
        stimulus: "<p>Take a break!</p> Press the button to continue"
    };

    var endExp = {
        type: jsPsychHtmlButtonResponse,
        choices: ["Continue"],
        stimulus: "<p>Thank you for your participation!</p> Press the button to continue"
    };
    if (block===(nBlocks)) {
    timeline.push(endExp); 
    } else {
        timeline.push(endBlock); 
    }
};    

//jsPsych.run(timeline);
