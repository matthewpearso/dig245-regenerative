
# Regenerative

![numbers](assets/img/regenerative.png)

<sup>Images (from left): [Generative Splines](https://www.behance.net/gallery/40247813/Generative-Splines) Hyper Glu; [Arc Bicycle](https://www.futura-sciences.com/tech/actualites/imprimante-3d-arc-bicycle-decouvrez-premier-velo-imprime-3d-soudage-91153/) Delft University of Technology (2016); [The Sherwin Series](https://joelledietrick.com/site/sherwin) Joelle Dietrick (2011); [Heydar Aliyev Centre](https://www.zaha-hadid.com/architecture/heydar-aliyev-centre/) Zaha Hadid (2012) </sup>



## Introduction

This assignment asks you to create a web page that can generate new iterations of itself based on some changeable data source. This could be input from the user, other available data (e.g. time, location, etc.), or pure randomness.

<a href="assets/img/Generative_Design_Process-retouched.png"><img src="assets/img/Generative_Design_Process-retouched.png" align="right" width="450"></a>

Nearly every software or dynamic website generates their interfaces using data. Even a boring shopping website uses cookies to identify and customize pages for users ([regardless who stands to benefit](https://www.justice.gov/opa/pr/amazon-marketplace-seller-pleads-guilty-price-fixing-dvds-and-blu-ray-discs)).

This process is evident in many other "design" contexts. For example, [Generative Design](https://en.wikipedia.org/wiki/Generative_design) is a related cultural trend that, similar to data-driven websites, uses coded rules and algorithms to create (and recreate) concepts and forms for architecture, objects, behaviors, animations, games, and much more. This diagram from, [Generative Design: Visualize, Program, and Create with JavaScript in p5.js](http://www.generative-gestaltung.de/) by Groß, Bohnacker, and Laub, shows how these processes can create new iterations, using varying degrees of input from the creator, to ideate or solve specific design or aesthetic problems. Regardless of your approach, your project should mimic or somehow find inspiration in these processes, to reflect your own thinking on the subject.



<details>
<summary>Learning Objectives, Preparation, Rubric</summary>

### Learning Objectives

Students who complete this assignment will be able to:

- Describe how to use data to create generative processes in software, design, architecture, etc.
- Compare outcomes of generative processes across disciplines.
- Write pseudo code and build a prototype to plan and develop a web application.
- Use HTML, CSS, Bootstrap, and JS build  final application.
- Design an identity for the project that communicates a theme or concept


### Preparation

Complete the following to prepare for this assignment. See [Resources](#resources) for additional information as needed.

- [Codecademy: JS 3-1 Functions](https://www.codecademy.com/learn/introduction-to-javascript) (1-7)
- [Codecademy: JS 4-1 Scope](https://www.codecademy.com/learn/introduction-to-javascript) (1-4)
- [Codecademy: JS 5-1 Arrays](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
- [Codecademy: JS 6-1 Loops](https://www.codecademy.com/learn/introduction-to-javascript) (1–7)
- Javascript.info JS [Comparison](https://javascript.info/comparison), [Logical operators](https://javascript.info/logical-operators), [Functions](https://javascript.info/function-basics), [Loops: while and for](https://javascript.info/while-for)


### Rubric

See Moodle.

</details>






## Design

Follow the prompt in Chapter 8 of *Critical Web Design* ... 

1. Find [inspiration](#inspiration) in other works.
1. Develop a concept for your project. Consider the above prompt and inspiration.
1. Use [Figma](https://figma.com) to create a wireframe and design iterations for your project. Start with desktop design, then create the mobile layout once you have made a few iterations. 
1. Use Figma to diagram any data transformations or flowcharts as needed. Show the different stages of the user experience or how your app changes depending on the content.


## Code

1. Fork this repository and clone it to your machine.
1. Begin the code portion by writing out the pseudocode for your project. [See this activity for practice](https://github.com/omundy/learn-computing/blob/main/topics/computational-thinking.md#pseudocode). Save the pseudocode in a comment in your Javascript.
1. Use HTML, CSS, and JS to code your design inside `index.html`
1. Use Javascript variables, conditional logic, loops, etc. to somehow change the page every time it loads.
1. Use images, other media, or code libraries as needed.


## Publish

1. [Save and refresh](https://github.com/omundy/learn-computing/blob/main/topics/keyboard-shortcuts.md#web-development-edit-save-refresh-loop) your work in the browser often to see your changes.
1. Commit changes regularly.
1. Confirm valid [HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/) <sup>([?](https://github.com/omundy/dig245-critical-web-design/blob/main/topics/html-css/css.md#css-validation))</sup>
1. When finished, push, publish, and post all deliverables to Moodle per documentation in the Assignments.

















## Resources

### Technology

- Course resources [HTML](https://github.com/omundy/dig245-critical-web-design/blob/main/topics/html-css/html.md), [CSS](https://github.com/omundy/dig245-critical-web-design/blob/main/topics/html-css/css.md), [JS](https://github.com/omundy/dig245-critical-web-design/blob/main/topics/javascript/javascript.md), [Figma](https://github.com/omundy/dig245-critical-web-design#figma), [Bootstrap](https://github.com/omundy/dig245-critical-web-design#bootstrap)
- [Mozilla Developer Guides](https://developer.mozilla.org/en-US/docs/Web/Guide)


### Inspiration

- 📚 "Off the Grid" (chapter 6) and "Generative Design" (chapter 8) in *Critical Web Design*
- Chapter [examples](https://criticalwebdesign.github.io/book/#chapter-8-generative-design): 
[Haiku (Birds)](https://criticalwebdesign.github.io/book/06-off-the-grid/examples/birds.html), 
[Generative (Jean) Arp](https://criticalwebdesign.github.io/book/08-generative-design/8-3), 
[Band Name Generator](https://criticalwebdesign.github.io/book/08-generative-design/examples/band-name-generator), [Music Venue Generator](https://criticalwebdesign.github.io/book/08-generative-design/examples/music-venue-generator.html), [String Art Generator](https://criticalwebdesign.github.io/book/08-generative-design/examples/string-art-generator/dist/) 
- Related projects (and tags [#randomness](https://criticalwebdesign.github.io/index#randomness) [#remix](https://criticalwebdesign.github.io/index#remix)) in the [Critical Web Design Index](https://criticalwebdesign.github.io/index/)...
  - Chris Baker, Mike Lacher, and Richard Baker [Troll the NSA](http://ilovechrisbaker.com/troll-the-nsa/) (2013)
  - Rafaël Rozendaal [Abstract Browsing](http://www.abstractbrowsing.net) (2014)
  - Colleen Josephson and Kyle Miller [endless.horse](http://endless.horse) (2015)
  - Mark Sample [Two Moji](http://fugitivetexts.net/twomoji) (2018)
  - Tero Parviainen [How Generative Music Works](https://teropa.info/loop/)
  - Kevan Davis [eBay Feedback Generator](http://thesurrealist.co.uk/feedback) (2005)
  - 0x72 [pixeldudesmaker](https://0x72.itch.io/pixeldudesmaker) (example of [sprite](https://raw.githubusercontent.com/omundy/sample-unity-animation/main/Assets/Sprite_Anim_Fred/Textures/fred-cinemachine-2.gif))


### Articles

- 📚 Dan Howarth "[Generative Design Software Will Give Designers ‘Superpowers’](https://www.dezeen.com/2017/02/06/generative-design-software-will-give-designers-superpowers-autodesk-university/)" (2017), [video](https://www.youtube.com/watch?v=h7gq7OrbgxY) (2:18) 
- Eduardo Souza "[How Will Generative Design Impact Architecture?](https://www.archdaily.com/937772/how-will-generative-design-impact-architecture)" (2020)
- Others from this [Random Article Generator](https://codepen.io/owenmundy/pen/PomvjqW?editors=1010)



### Data sources

- [faker.js](https://www.npmjs.com/package/faker) and [hosted version](https://fakercloud.com/api), and [similar projects](https://awesomeopensource.com/projects/faker)
- [public-apis](https://github.com/public-apis/public-apis), [apilist.fun](https://apilist.fun/), and [No Auth APIs](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/) - free APIs for software and web development. For example: [Cat Facts](https://alexwohlbruck.github.io/cat-facts/), [Free IP Geolocation API](https://freegeoip.app/json/), [Random User](https://randomuser.me/api/)



<details>
<summary>Past examples</summary>
  
- 2024
	- Julia [Queer Anthem Generator](https://siqjulia.github.io/dig245-regenerative/)
- 2023
    - David [Click Anywhere](https://davidmhilton.github.io/dig245-regenerative/)
    - Alp [Network](https://alpnix.github.io/dig245-regenerative/)
    - Riana [CelebMorph Randomizer](https://rianadoctor.github.io/dig245-regenerative/)
    - Jeremy [The Future in Colours](https://jeremykemp1.github.io/dig245-regenerative/)
    - Tyler [G H O S T](https://tyleryandt18.github.io/dig245-regenerative/)
    - Richard [Music by Mood](https://aequor29.github.io/dig245-regenerative/)
    - Nam [OptiMedia Networks (OMN)](https://namdao2508.github.io/dig245-regenerative/)
    - Meredith [Your Future in 10](https://merhaines.github.io/dig245-regenerative/)
    <!-- - Patrick [Island Adventure](https://patrick-leary.github.io/dig245-regenerative/) -->
    - Erika [Music Generator](https://erikan14.github.io/dig245-regenerative/)†
- 2021
    - Annelise [Road Trip](https://anclaire.github.io/dig245-regenerative)
    - Drew [Probability Football](https://drdibble.github.io/dig245-regenerative)
    - Erina [Ominous Fortune Cookies](https://erlee1.github.io/dig245-regenerative)
    - Emma [Card Game Generator](https://emmelton.github.io/dig245-regenerative)
    - Meng [Clothes Generator](https://mengfw-02.github.io/dig245-regenerative/)
    - Maurillio [Math Quiz](https://maurilio-saddoud.github.io/dig245-regenerative)
    - Henry [Random Dessert Selector](https://hehowell.github.io/Random-Dessert-Selector)
    - Caroline [SPOOK-IFY](https://casigl.github.io/dig245-regenerative)
    - Anh [Ghibli Movie Generator](https://anhhoang1402.github.io/dig245-regenerative)
- Past
    - Amy [Game Boy]
    - Eric [Washing Machine]
- 2009
    - Jose [Band Name Generator](https://www.youtube.com/watch?v=mUeBQCInZ2o&list=PLhpnnpt3tw-RiiFG9p_OJgjAfH-6kyAIK&index=16)
- 2008
    - Rachel Rossin [Random Paint Splatter]
- 2007
    - Alexander [String Art Generator]

†not currently live

</details>
