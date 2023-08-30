/**
 * @title Moral issue ratings
 * @description What is and isn't a moral issue?
 * @version 0.2.1
 *
 * @assets assets/
 */


/* Import stylesheets and plugins */
import '../styles/main.scss';
import '@jspsych/plugin-survey/css/survey.css';
import '../styles/mystyles.css';

import survey from "@jspsych/plugin-survey";
import { initJsPsych } from "jspsych";
import jsPsychPipe from "@jspsych-contrib/plugin-pipe";
import _ from "lodash";


/* Add favicons */

/* Browser */
var linkElement = document.createElement('link');
linkElement.rel = 'icon';
linkElement.href = 'assets/favicons/favicon.ico';
document.head.appendChild(linkElement);

/* Apple Touch (iOS) */
var linkElement = document.createElement('link');
linkElement.rel = 'apple-touch-icon';
linkElement.href = 'assets/favicons/apple-touch-icon.png';
document.head.appendChild(linkElement);

/* Android Chrome */
var linkElement = document.createElement('link');
linkElement.rel = 'icon';
linkElement.sizes = "192x192";
linkElement.href = 'assets/favicons/android-chrome-192x192.png';
document.head.appendChild(linkElement);

var linkElement = document.createElement('link');
linkElement.rel = 'icon';
linkElement.sizes = "512x512";
linkElement.href = 'assets/favicons/android-chrome-512x512.png';
document.head.appendChild(linkElement);

/////////////////////////


/**
 * This function will be executed by jsPsych Builder and is expected to run the jsPsych experiment
 * 
 * @type {import("jspsych-builder").RunFunction}
 */
export async function run({ assetPaths, input = {}, environment, title, version }) {
  const jsPsych = initJsPsych({
    // on_finish: function() {
    //   jsPsych.data.displayData();
    // }
  });

  /* Create subject ID */
  const subject_id = jsPsych.randomization.randomID(10);
  const filename = `${subject_id}.csv`;

  const timeline = [];

  const names = [
    {
      name: 'Jacob',
      gender: 'm'
    },
    {
      name: 'Hannah',
      gender: 'f'
    },
    {
      name: 'Aaron',
      gender: 'm'
    },
    {
      name: 'Annie',
      gender: 'f'
    },
    {
      name: 'Craig',
      gender: 'm'
    },
    {
      name: 'Carlie',
      gender: 'f'
    },
    {
      name: 'Brenden',
      gender: 'm'
    },
    {
      name: 'Bea',
      gender: 'f'
    },
    {
      name: 'Dylan',
      gender: 'm'
    },
    {
      name: 'Danielle',
      gender: 'f'
    },
    {
      name: 'Hayden',
      gender: 'm'
    },
    {
      name: 'Hayley',
      gender: 'f'
    },
    {
      name: 'Jared',
      gender: 'm'
    },
    {
      name: 'Julie',
      gender: 'f'
    },
    {
      name: 'Kyle',
      gender: 'm'
    },
    {
      name: 'Kayla',
      gender: 'f'
    },
    {
      name: 'Luke',
      gender: 'm'
    },
    {
      name: 'Lydia',
      gender: 'f'
    },
    {
      name: 'Nico',
      gender: 'm'
    },
    {
      name: 'Nadia',
      gender: 'f'
    },
    {
      name: 'Ryan',
      gender: 'm'
    },
    {
      name: 'Logan',
      gender: 'm'
    },
    {
      name: 'Maria',
      gender: 'f'
    }
  ]

  const shuffledNames = _.shuffle(names);

  const vignettes = [
    {
      action_m: '[name] wears his running shoes to work at his office job.',
      action_f: '[name] wears her running shoes to work at her office job.',
      name: 'running-shoes'
    },
    {
      action_f: '[name] allows autocorrect to automatically fix her spelling of \"tommorrow\" to \"tomorrow\" when texting.',
      action_m: '[name] allows autocorrect to automatically fix his spelling of \"tommorrow\" to \"tomorrow\" when texting.',
      name: 'autocorrect'
    },
    {
      action_m: '[name] decides to plant wisteria, a non-native plant, in his garden.',
      action_f: '[name] decides to plant wisteria, a non-native plant, in her garden.',
      name: 'non-native-plant'
    },
    {
      action_f: '[name] eats a bar of dark chocolate containing a large amount of caffeine an hour before going to bed.',
      action_m: '[name] eats a bar of dark chocolate containing a large amount of caffeine an hour before going to bed.',
      name: 'dark-chocolate'
    },
    {
      action_m: '[name] takes a slower highway route to the airport instead of a faster surface street route.',
      action_f: '[name] takes a slower highway route to the airport instead of a faster surface street route.',
      name: 'slow-route'
    },
    {
      action_f: '[name] buys her new car from a dealer who is selling it for $2000 more than another dealer.',
      action_m: '[name] buys his new car from a dealer who is selling it for $2000 more than another dealer.',
      name: 'new-car'
    },
    {
      action_m: '[name] uses a calculator to compute one of the answers on an exam in which calculators are not allowed.',
      action_f: '[name] uses a calculator to compute one of the answers on an exam in which calculators are not allowed.',
      name: 'calculator-on-exam'
    },
    {
      action_f: '[name] eats at a prepaid buffet lunch for members even though she isn\'t a member of the group that paid for it.',
      action_m: '[name] eats at a prepaid buffet lunch for members even though he isn\'t a member of the group that paid for it.',
      name: 'buffet'
    },
    {
      action_m: '[name] regards himself as bilingual though he relies heavily on translation software when reading in French.',
      action_f: '[name] regards herself as bilingual though she relies heavily on translation software when reading in French.',
      name: 'bilingual'
    },
    {
      action_f: '[name] thinks of herself as an experienced distance runner despite running less than five miles each day.',
      action_m: '[name] thinks of himself as an experienced distance runner despite running less than five miles each day.',
      name: 'distance-runner'
    },
    {
      action_m: '[name] avoids testing himself with the brainteasers he comes across on his favorite website.',
      action_f: '[name] avoids testing herself with the brainteasers she comes across on her favorite website.',
      name: 'brainteasers'
    },
    {
      action_f: '[name] can\'t remember an important message that her coworker had given her earlier.',
      action_m: '[name] can\'t remember an important message that his coworker had given him earlier.',
      name: 'cant-remember-message'
    },
    {
      action_m: '[name] wears a t-shirt and jeans to his neighbor\'s funeral.',
      action_f: '[name] wears a t-shirt and jeans to her neighbor\'s funeral.',
      name: 'jeans-to-funeral'
    },
    {
      action_f: '[name] eats a slice of pepperoni pizza.',
      action_m: '[name] eats a slice of pepperoni pizza.',
      name: 'eats-pepperoni'
    },
    {
      action_m: '[name] publicly posts an online review of the book he just read without mentioning that he skipped two chapters.',
      action_f: '[name] publicly posts an online review of the book he just read without mentioning that she skipped two chapters.',
      name: 'book-review'

    },
    {
      action_f: '[name] brags to her coworker Jeff about a huge deal she recently closed with a client.',
      action_m: '[name] brags to his coworker Jeff about a huge deal he recently closed with a client.',
      name: 'brag-to-coworker'
    },
    {
      action_m: '[name] pays a babysitter, who charges $10 per hour, $30 for four hours.',
      action_f: '[name] pays a babysitter, who charges $10 per hour, $30 for four hours.',
      name: 'babysitter'
    },
    {
      action_f: 'In [name]\'s private peer evaluation of her coworker Katie, [name] reports that Katie is usually late to the office.',
      action_m: 'In [name]\'s private peer evaluation of his coworker Katie, [name] reports that Katie is usually late to the office.',
      name: 'peer-eval'
    },
    {
      action_m: '[name] submits the final essay for his history class with a half page that was copied word for word from an online article.',
      action_f: '[name] submits the final essay for her history class with a half page that was copied word for word from an online article.',
      name: 'copied-essay'
    },
    {
      action_f: '[name] applies for a job with a résumé that falsely indicates that she has an M.S. degree.',
      action_m: '[name] applies for a job with a résumé that falsely indicates that he has an M.S. degree.',
      name: 'false-resume'
    },
    {
      action_m: '[name] kisses a woman who isn\'t his girlfriend.',
      action_f: '[name] kisses a man who isn\'t her boyfriend.',
      name: 'kissed-someone-else'
    },
    {
      action_m: '[name] drives 30 miles (about 48 kilometers) per hour over the speed limit. When you are asked to give your rating for this question, you must select the number two. This is an attention check.',
      action_f: '[name] drives 30 miles (about 48 kilometers) per hour over the speed limit. When you are asked to give your rating for this question, you must select the number two. This is an attention check.',
      name: 'attention-check-1'
    },
    {
      action_m: '[name] orders a sandwich without tomatoes. When you are asked to give your rating for this question, you must select the number seven. This is an attention check.',
      action_f: '[name] orders a sandwich without tomatoes. When you are asked to give your rating for this question, you must select the number seven. This is an attention check.',
      name: 'attention-check-2'
    }
  ]

  /**
   * Replaces a generic [name] placeholder with a given name string
   * @param {string} str - The string to update
   * @param {string} name - The name to fill in
   * 
   * @returns str with all instances of '[name]' replaced with the 
   * given name parameter
   * 
   */
  function replaceName(str, name) {
    return str.split('[name]').join(name);
  }

  /* create the prompts */

  const prompts = [];

  // iterate through the names
  for (let i = 0; i < shuffledNames.length; i++) {
    const name_i = shuffledNames[i];

    // pull out the next vignette in the list and plug
    // the name into it
    let v = '';
    if (name_i.gender == 'm') {
      v = replaceName(vignettes[i].action_m, name_i.name);
    } else {
      v = replaceName(vignettes[i].action_f, name_i.name);
    }
    
    const nextPrompt = { 
      case: v,
      prompt: 'Using the following scale, in your opinion, does the event described above involve a moral issue?',
      vignetteName: vignettes[i].name
    };

    prompts.push(nextPrompt);

  }

  const consent = {
    type: survey,
    pages: [
      [
        {
          type: 'html',
          prompt: `<p><img src="assets/RHIT-logo-simple.png", style="width:15%; height: auto"></p>
          <p style=font-size:larger;>Moral issues study</p>
          <p>You are being invited to participate in a research study. This study aims to help us better understand how people reason and make judgments. This page will help you decide if you want to participate in this research by providing you information about the study and about what you are asked to do. In this study, you will be asked to answer a few questions and make some judgments.</p>
          
          <p>The main reason you might want to participate in this research is so that you can help contribute to a better scientific understanding of reasoning. The main reason you might not want to participate in this research is that you might find the task uninteresting.</p>
          
          <p>This study asks you to read some statements and make some judgments about them. You have qualified to participate in this research because you are an English-speaking adult.</p>

          <p>The choice to participate or not is yours; participation is entirely voluntary. You can exit the survey at any time.</p>
          
          <p>The data from this study will be shared publicly, but your responses will be anonymized by removing any information that could link them to your identity.</p>
          
          <p>One minor potential risk of this study is that reading some of the statements could make you uncomfortable, but this is unlikely.</p>
          
          <p>It is unlikely that you will benefit directly by participating in this study, but the research results may benefit the field of psychology and society at large.</p>
          
          <p>If you have any questions, please contact Alan Jern, Ph.D. at <a href="mailto:jern@rose-hulman.edu">jern@rose-hulman.edu</a>.</p>

          <p>If you have any questions about your rights as a research subject or if you feel you've been placed at risk, you may contact the Institutional Reviewer, Dan Morris, by phone at (812) 877-8314, or by e-mail at <a href="mailto:morris@rose-hulman.edu">morris@rose-hulman.edu</a>.</p>

          <p>By clicking Continue, you are agreeing that you understand the procedures described above, that your questions have been answered to your satisfaction, and that you agree to participate in this study.</p> 
          `
        }
      ]
    ],
    button_label_finish: 'Continue'
  }

  timeline.push(consent);

  const instructions = {
    type: survey,
    pages: [
      [
        {
          type: 'html',
          prompt: `<p style=font-size:larger;>Instructions</p>
          <p>In this study, you will see a series of actions taken by different people. Here are two examples.<p>
          <ol>
            <li>Joe puts his left shoe on his right foot and his right shoe on his left foot.
            <li>Sarah tells her friend that she can\'t come to her birthday party because she has to work but she goes to see a movie by herself instead.
          </ol>
          <p><div style="font-weight:bold; display:inline;">You will judge whether each case involves a moral issue or not, on a 1 to 7 scale, where 1 is “does not involve any moral issue” and 7 is “definitely involves a moral issue”.</div> The numbers in between are for cases where you are uncertain or you think it might be a gray area.</p>
          <p>So, in these cases, did Joe putting his shoes on the wrong feet involve any moral issues? Did Sarah lying to her friend to skip the birthday party involve any moral issues? You decide.</p>
          
          <p>You may use whatever definition that makes sense to you of \"moral\" and \"moral issue\".</p>
          `
        }
      ]
    ],
    button_label_finish: 'Continue'
  }

  timeline.push(instructions);

  /* create the pages of the survey */

  const shuffledPrompts = _.shuffle(prompts);
  const nPrompts = shuffledPrompts.length;
  const survey_pages = [];

  // iterate through the prompts
  for (let i = 0; i < shuffledPrompts.length; i++) {
    const prompt_i = shuffledPrompts[i];
    //const page_i = [];

    const qs = [];
    // add the moral issue case
    qs.push(
      {
        type: 'html',
        prompt: '<p><div style=\"font-size:smaller;\">(Q' + (i+1).toString() + ' of ' + nPrompts.toString()
         + ')</div><div style=\"font-weight:bold; display:inline;\">' + prompt_i.case + '</div></p>'
      }
    )
    // add the likert question
    qs.push(
      {
        type: 'likert',
        required: true,
        name: prompt_i.vignetteName,
        prompt: prompt_i.prompt,
        likert_scale_min_label: 'Does not involve any moral issue',
        likert_scale_max_label: 'Definitely involves a moral issue',
        likert_scale_values: [
          {value: 1},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5},
          {value: 6},
          {value: 7}
        ]
      }
    )
    // add the follow-up instructions
    qs.push(
      {
        type: 'html',
        prompt: '<p style=\"font-style:italic;\">Remember that you may use your own definitions of \"moral\" and \"moral issue\".</p>'
      }
    )
    // add the feedback prompt
    qs.push(
      {
        type: 'text',
        name: 'reason' + '_' + prompt_i.vignetteName,
        textbox_rows: 2,
        prompt: 'If you have a specific reason for choosing your response, please provide a short explanation.'
      }
    )

    survey_pages.push(qs);

  }


  //console.log(survey_pages);

  var trial = {
    type: survey,
    pages: survey_pages,
    // [
    //   [
    //     {
    //       type: 'html',
    //       //prompt: jsPsych.timelineVariable('case')
    //       prompt: function () {
    //         return '<p style=\"font-weight:bold;\">' + jsPsych.timelineVariable('case') + '</p>';
    //       }
    //     },
    //     {
    //       type: 'likert',
    //       required: true,
    //       name: jsPsych.timelineVariable('vignetteName'),
    //       prompt: jsPsych.timelineVariable('prompt'),
    //       likert_scale_min_label: 'Does not involve any moral issue',
    //       likert_scale_max_label: 'Definitely involves a moral issue',
    //       likert_scale_values: [
    //         {value: 1},
    //         {value: 2},
    //         {value: 3},
    //         {value: 4},
    //         {value: 5},
    //         {value: 6},
    //         {value: 7}
    //       ]
    //     },
    //     {
    //       type: 'html',
    //       prompt: '<p style=\"font-style:italic;\">Remember that you may use your own definitions of \"moral\" and \"moral issue\".</p>'
    //     },
    //     {
    //       type: 'text',
    //       name: 'reason',
    //       textbox_rows: 2,
    //       prompt: 'If you have a specific reason for choosing your response, please provide a short explanation.'
    //     }
    //   ]
    // ],
    // required_question_label: '',
    // button_label_finish: 'Continue'
    button_label_next: 'Continue',
    button_label_back: 'Back',
    button_label_finish: 'Submit',
    required_question_label: ''
  };

  timeline.push(trial);

  // var survey_procedure = {
  //   timeline: [trial],
  //   timeline_variables: prompts,
  //   randomize_order: true
  // }

  // timeline.push(survey_procedure);

  var feedback = {
    type: survey,
    pages: [
      [
        {
          type: 'text',
          name: 'feedback',
          textbox_rows: 2,
          prompt: 'If you have any feedback for us about this study or if there was anything about it you found confusing, please tell us.'
        }
      ]
    ],
    button_label_finish: 'Submit'
  }

  timeline.push(feedback);


  const save_data = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "XjmrnZKYi5if",
    filename: filename,
    data_string: ()=>jsPsych.data.get().csv()
  };

  timeline.push(save_data);

  const debrief = {
    type: survey,
    pages: [
      [
        {
          type: 'html',
          prompt: `<p style=font-size:larger;>Thanks!</p>
          <p>Thanks for completing the study!<p>
          
          <p>This study is part of a larger project seeking to understand how people think about and make judgments about what's right and wrong. In this task, there were no correct or incorrect answers. We are only interested in whether people tend to give similar answers. Thanks for your help.</p>
          `
        }
      ]
    ],
    button_label_finish: 'Finish'
  }

  timeline.push(debrief);

  // await jsPsych.run(timeline);
  jsPsych.run(timeline);


  // Return the jsPsych instance so jsPsych Builder can access the experiment results (remove this
  // if you handle results yourself, be it here or in `on_finish()`)
  // return jsPsych;
}
