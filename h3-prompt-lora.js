/*!
 * h3-prompt-lora.js
 * An additive option library for H3 Prompt Builder (Wildcat6700/h3-prompt-builder).
 *
 * Registers itself as a JSON library source called "Original + H3 Adult" and, when the
 * app is on its default library, switches to it automatically. Adds 179 private options
 * across 10 new groups and extends 8 existing groups. Nothing in the app is modified
 * except one extra entry in the library dropdown.
 *
 * Install: drop this file next to index.html. The script tag is already in index.html.
 * Manual: H3PromptLoRA.activate()  |  H3PromptLoRA.pack  |  H3PromptLoRA.download()
 *
 * No dependencies. No build step. No model weights - "LoRA" here means a plugin.
 */
(function () {
  "use strict";

  var ID = "h3-adult";
  var NAME = "Original + H3 Adult";
  var FILE = "h3-adult-pack.json";

  var PACK = {
    version: 1,
    name: "H3 Adult Direction",
    groups: [

      /* ---------------------------------------------------------------- CAST */
      { id: "xcast", label: "Cast - who is in frame", target: "detailed_description", multi: false, order: 2,
        default: ["x-cast-futa-solo"],
        options: [
          { id: "x-cast-futa-solo", label: "Futanari solo", requiresSubjects: 1, text: "<Subject 1> is a futanari: a woman with a penis. Describe her only as a woman with a penis and never mention a vulva. The penis is extremely long, heavy and pendulous." },
          { id: "x-cast-futa-futa", label: "Futanari + Futanari", requiresSubjects: 2, text: "Both subjects are futanari: women with a penis. Describe them only as women with a penis and never mention a vulva. Each has an extremely long heavy penis; keep both bodies and both shafts clearly separate and never merge or duplicate them." },
          { id: "x-cast-futa-woman", label: "Futanari + Woman", requiresSubjects: 2, text: "<Subject 1> is a futanari: a woman with a penis, described only that way with no mention of a vulva. <Subject 2> is a woman with a vulva. Keep the two anatomies distinct." },
          { id: "x-cast-woman-futa", label: "Woman + Futanari", requiresSubjects: 2, text: "<Subject 1> is a woman with a vulva. <Subject 2> is a futanari: a woman with a penis, described only that way. When a shaft is needed from <Subject 1> it is a strap-on, which reads as a rigid shaft that does not flex." },
          { id: "x-cast-futa-man", label: "Futanari + Man", requiresSubjects: 2, text: "<Subject 1> is a futanari: a woman with a penis, described only that way with no mention of a vulva. <Subject 2> is a man with a penis. Keep both shafts separate and never duplicate them." },
          { id: "x-cast-man-futa", label: "Man + Futanari", requiresSubjects: 2, text: "<Subject 1> is a man with a penis. <Subject 2> is a futanari: a woman with a penis, described only that way with no mention of a vulva. Keep both shafts separate." },
          { id: "x-cast-woman-woman", label: "Woman + Woman", requiresSubjects: 2, text: "Both subjects are women with a vulva. Any shaft used is a strap-on, which reads as a rigid shaft that does not flex." },
          { id: "x-cast-man-woman", label: "Man + Woman", requiresSubjects: 2, text: "<Subject 1> is a man with a penis. <Subject 2> is a woman with a vulva." }
        ] },

      /* ------------------------------------------------------------ RELATION */
      { id: "xrel", label: "Position relation", target: "detailed_description", multi: false, order: 11, default: [],
        options: [
          { id: "x-rel-face", label: "Face to face", requiresSubjects: 2, text: "The two are chest to chest and face to face, close enough to feel each other breathe." },
          { id: "x-rel-abehind", label: "A behind B", requiresSubjects: 2, text: "{A} is behind {B}." },
          { id: "x-rel-bbehind", label: "B behind A", requiresSubjects: 2, text: "{B} is behind {A}." },
          { id: "x-rel-standover", label: "Standing over", requiresSubjects: 2, text: "{A} stands over {B}, who kneels." },
          { id: "x-rel-side", label: "Side by side", requiresSubjects: 2, text: "They lie side by side, both facing the lens." },
          { id: "x-rel-aseated", label: "A seated, B standing", requiresSubjects: 2, text: "{A} sits while {B} stands over {A}." },
          { id: "x-rel-bseated", label: "B seated, A standing", requiresSubjects: 2, text: "{B} sits while {A} stands over {B}." },
          { id: "x-rel-backtoback", label: "Back to back", requiresSubjects: 2, text: "They are back to back, facing opposite directions." },
          { id: "x-rel-ontop", label: "A on top", requiresSubjects: 2, text: "{A} is on top, bearing down on {B}." }
        ] },

      /* ----------------------------------------------------------------- ACT */
      { id: "xact", label: "Act / position", target: "detailed_description", multi: false, order: 95, default: [],
        options: [
          { id: "x-act-solo", label: "Solo stroking", requiresSubjects: 1, text: "{A} stands with weight settled on one hip and strokes {A}'s own penis with a closed fist, slow and firm, thumb dragging over the glans on every upstroke." },
          { id: "x-act-hiproll", label: "Seated hip roll", requiresSubjects: 1, text: "{A} leans back on both hands with the hips lifted, the shaft standing up off the body, and rolls the hips in a slow figure of eight so the shaft swings." },
          { id: "x-act-lying", label: "Lying down stroke", requiresSubjects: 1, text: "{A} lies back and works the shaft with long slow strokes, knees fallen apart." },
          { id: "x-act-handjob", label: "Handjob", requiresSubjects: 2, text: "{B} wraps a hand around {A}'s penis and strokes it with a wet closed fist, twisting at the top." },
          { id: "x-act-blowjob", label: "Blowjob", requiresSubjects: 2, text: "{B} kneels and takes {A}'s penis into the mouth, lips sealing around the shaft while the free hand works the base." },
          { id: "x-act-titfuck", label: "Titfuck", requiresSubjects: 2, text: "{A}'s penis slides between {B}'s breasts, {B} pressing them together around the shaft and rocking." },
          { id: "x-act-missionary", label: "Missionary", requiresSubjects: 2, text: "{A} penetrates {B} face to face, the shaft sinking into {B}'s body, hips meeting in slow deep thrusts." },
          { id: "x-act-cowgirl", label: "Cowgirl", requiresSubjects: 2, text: "{B} straddles {A} and lowers onto the shaft, hips rolling in a slow grind." },
          { id: "x-act-doggy", label: "Doggystyle", requiresSubjects: 2, text: "{B} on all fours, {A} behind gripping {B}'s hips and driving into {B} from behind, {B}'s back arched deep." },
          { id: "x-act-sidefrombehind", label: "Side from behind", requiresSubjects: 2, text: "{A} and {B} lie on their sides, {A} curled behind {B}, entering from behind while both bodies rock as one." },
          { id: "x-act-standingfrombehind", label: "Standing from behind", requiresSubjects: 2, text: "{A} takes {B} from behind against a wall, {B}'s cheek pressed to the plaster, {A}'s hips driving up." },
          { id: "x-act-carry", label: "Standing carry", requiresSubjects: 2, text: "{A} holds {B} up against the body, {B}'s legs locked around the waist, {B} bouncing on the shaft." },
          { id: "x-act-cumback", label: "Cum on back", requiresSubjects: 2, text: "{A} pulls out and comes across {B}'s lower back and spine." },
          { id: "x-act-cumface", label: "Cum on face", requiresSubjects: 2, text: "{A} pulls out and comes across {B}'s face and open mouth." },
          { id: "x-act-cumbreasts", label: "Cum on breasts", requiresSubjects: 2, text: "{A} pulls out and comes across {B}'s breasts and nipples, pooling in the cleavage." },
          { id: "x-act-creampie", label: "Creampie", requiresSubjects: 2, text: "{A} buries deep and comes inside {B}, staying sheathed through every pulse before slipping out." },
          { id: "x-act-anal", label: "Anal", requiresSubjects: 2, text: "{A} pushes into {B}'s anus, the sphincter gripping and dragging on the shaft with each thrust." },
          { id: "x-act-scissor", label: "Scissoring", requiresSubjects: 2, text: "{A} and {B} scissoring, vulva pressed flat to vulva, hips grinding in slow circles." },
          { id: "x-act-frot", label: "Frotting", requiresSubjects: 2, text: "{A} and {B} pressed together, both shafts rubbing side by side in one fist." },
          { id: "x-act-revcowgirl", label: "Reverse cowgirl", requiresSubjects: 2, text: "{B} straddles {A} facing away, taking the shaft from behind while {A} watches {B}'s back." },
          { id: "x-act-69", label: "69", requiresSubjects: 2, text: "{A} lies back while {B} straddles {A}'s face, and {A} keeps stroking the shaft." },
          { id: "x-act-fingering", label: "Fingering", requiresSubjects: 2, text: "{B} kneels between {A}'s legs and works two fingers in, thumb circling the clitoris." },
          { id: "x-act-footjob", label: "Footjob", requiresSubjects: 2, text: "{A} stands over {B}, {B} gripping the ankles as the shaft slides between {B}'s feet." },
          { id: "x-act-mutual", label: "Mutual", requiresSubjects: 2, text: "{A} and {B} face to face, each working the other in a slow mirrored rhythm." },
          { id: "x-act-double", label: "Double pleasure", requiresSubjects: 2, text: "{A} enters {B} while the free hand reaches around and works {B}'s own shaft in time with the thrusts." },
          { id: "x-act-legup", label: "Leg up", requiresSubjects: 2, text: "{A} lifts {B}'s leg onto a shoulder and drives deep, both watching the shaft slide in and out." },
          { id: "x-act-bentover", label: "Bent over", requiresSubjects: 2, text: "{B} bent over the edge of a surface, {A} standing behind with both hands on {B}'s hips, taking {B} in long strokes." },
          { id: "x-act-seatedbj", label: "Seated blowjob", requiresSubjects: 2, text: "{A} sits and leans back, {B} kneeling between {A}'s thighs with a mouth on the shaft and both hands gripping the hips." },
          { id: "x-act-side69", label: "Side 69", requiresSubjects: 2, text: "{A} and {B} head to tail on their sides, each with a mouth full and a hand working the shaft." }
        ] },

      /* ---------------------------------------------------------------- MOOD */
      { id: "mood", label: "Expression & mood", target: "detailed_description", multi: false, order: 110, default: [],
        options: [
          { id: "x-mood-shy", label: "Shy / embarrassed", text: "shy and embarrassed: {A} keeps breaking eye contact, cheeks and chest flushed pink, a nervous half-smile {A} keeps trying to swallow, glancing down the body and then away like {A} has been caught." },
          { id: "x-mood-teasing", label: "Teasing / confident", text: "teasing and confident: a slow smirk, eyes locked on the lens, deliberately unhurried, dragging every movement out because {A} knows exactly what this looks like." },
          { id: "x-mood-desperate", label: "Desperate / needy", text: "desperate and needy: brows pinched, mouth open, panting, chasing the feeling and pushing the hips forward to meet the hand, greedy and impatient." },
          { id: "x-mood-playful", label: "Playful / giggly", text: "playful and giggly: loose and silly, laughing between breaths, biting the lip, bouncing on the heels, treating this as fun rather than a performance." },
          { id: "x-mood-wrecked", label: "Wrecked", text: "wrecked and overwhelmed: glassy unfocused eyes, hair stuck to the forehead, jaw hanging slack, unable to hold any rhythm, every touch landing as too much." },
          { id: "x-mood-dominant", label: "Dominant", text: "dominant and in control: steady gaze, chin up, an unhurried grip, dictating the pace and watching the other body react to it." },
          { id: "x-mood-submissive", label: "Submissive", text: "submissive and obedient: soft waiting eyes, chin tilted up, body offered forward, following every cue and reacting to each one." },
          { id: "x-mood-cocky", label: "Cocky show-off", text: "cocky and showing off: grinning straight at the lens, hips swinging wide, enjoying being looked at." },
          { id: "x-mood-sleepy", label: "Sleepy / lazy", text: "sleepy and lazy: half-lidded eyes, slow heavy blinks, warm and loose, moving like {A} woke up exactly like this." },
          { id: "x-mood-drunk", label: "Drunk / horny", text: "drunk and horny: flushed all the way down the neck, glassy eyes, uncoordinated grabby hands, grinning at nothing, careless and loud." },
          { id: "x-mood-nervous", label: "Nervous first time", text: "nervous and new: trembling hands, quick shallow breaths, wide eyes, flinching slightly then relaxing into it." },
          { id: "x-mood-tender", label: "Tender / intimate", text: "tender and intimate: soft focus, small private smiles, foreheads close, quiet and deliberate, like there is all the time in the world." },
          { id: "x-mood-feral", label: "Feral", text: "feral and thoughtless: teeth bared, growling exhales, hair everywhere, moving hard and without any plan." },
          { id: "x-mood-composed", label: "Composed / detached", text: "cool and composed: minimal expression, only the smallest tells giving it away, almost clinical until it breaks." }
        ] },

      /* ----------------------------------------------------------------- ARC */
      { id: "arc", label: "Performance arc", target: "detailed_description", multi: false, order: 140, default: [],
        options: [
          { id: "x-arc-steadybuild", label: "Erotic - steady build", text: "The shot is one unbroken climb: composure thins in visible stages from settled to undone, with no reset. Beats: [0-2s] settled and absorbed in the act; [2-5s] the breath deepens and the first flush rises up the neck; [5-8s] the rhythm firms and the eyes lose focus; [8-11s] the jaw slackens and small sounds escape; [11-14s] the pace breaks and the hips take over; [14s+] release, then heavy open-mouthed breathing." },
          { id: "x-arc-collapse", label: "Erotic - sudden collapse", text: "It holds together, holds together, and then loses all of it in one single beat. Beats: [0-3s] calm and settled, almost bored; [3-6s] a flicker and a swallowed sound; [6-9s] still holding, jaw tight, breathing controlled; [9-11s] it breaks all at once; [11-13s] gasping and shaking with no rhythm left; [13s+] limp and breathing hard." },
          { id: "x-arc-edged", label: "Erotic - edged", text: "It climbs close, stops just short, climbs again, each recovery shorter than the last until it cannot be held. Beats: [0-3s] climbing steadily; [3-5s] stops just short, whole body tense; [5-7s] resumes, already closer; [7-9s] stops again with a shorter recovery; [9-12s] cannot stop it now; [12s+] overshoots into shaking." },
          { id: "x-arc-overstim", label: "Erotic - overstimulated", text: "It is already past the peak and hypersensitive, every touch jolting through the body. Beats: [0-3s] already past the peak; [3-6s] every contact jolts; [6-9s] twitching, whining, overshooting; [9-12s] hands pushing away and pulling back; [12s+] aftershock shivers." },
          { id: "x-arc-slowburn", label: "Erotic - slow burn", text: "A long slow burn with the tension coiling quietly and the payoff held back as long as possible. Beats: [0-4s] barely moving, tension coiling; [4-8s] slow deliberate strokes; [8-12s] tension visible in the thighs and jaw; [12-16s] quickening against its will; [16-20s] the payoff held back; [20s+] release." },
          { id: "x-arc-playfulferal", label: "Erotic - playful to feral", text: "It starts light and teasing and ends rough and thoughtless. Beats: [0-3s] grinning, loose, teasing; [3-6s] quicker, laughter thinning out; [6-9s] gripping hard, teeth showing; [9-12s] hard and thoughtless; [12s+] wrecked." },
          { id: "x-arc-ruined", label: "Erotic - ruined", text: "It comes and then keeps going straight through it until the body is shaking. Beats: [0-3s] building; [3-6s] it comes; [6-10s] keeps going past it; [10-14s] oversensitive, shaking, laughing; [14s+] collapsed." },
          { id: "x-arc-afterglow", label: "Erotic - afterglow heavy", text: "The last third is pure aftermath: limp, glossy, breathing hard, a dopey smile. Beats: [0-4s] the act finishing; [4-7s] release; [7-11s] limp, breathing hard, glossy skin; [11-15s] dopey smile, hair stuck to the forehead; [15s+] stillness with the chest still heaving." }
        ] },

      /* --------------------------------------------------------------- TELLS */
      { id: "xtells", label: "Arousal tells", target: "detailed_description", multi: true, order: 125, default: [],
        options: [
          { id: "x-tell-flush", label: "Flushed", text: "chest and neck flushed blotchy pink" },
          { id: "x-tell-nipples", label: "Hard nipples", text: "nipples hard and pebbled" },
          { id: "x-tell-goosebumps", label: "Goosebumps", text: "goosebumps across the arms" },
          { id: "x-tell-thighs", label: "Trembling thighs", text: "thighs trembling and unsteady" },
          { id: "x-tell-toes", label: "Curling toes", text: "toes curling" },
          { id: "x-tell-hips", label: "Hips bucking", text: "hips bucking out of control" },
          { id: "x-tell-arch", label: "Back arching", text: "the back arching off the surface" },
          { id: "x-tell-grip", label: "White knuckles", text: "knuckles white where the hand grips" },
          { id: "x-tell-breath", label: "Hitching breath", text: "the breath hitching mid-sound" },
          { id: "x-tell-lip", label: "Biting lip", text: "teeth sunk into the lower lip" },
          { id: "x-tell-eyes", label: "Eyes rolling", text: "eyes rolling back and then refocusing" },
          { id: "x-tell-sweat", label: "Sweat sheen", text: "sweat beading on the sternum and collarbones" },
          { id: "x-tell-hair", label: "Hair stuck down", text: "hair stuck flat to the forehead" },
          { id: "x-tell-jaw", label: "Slack jaw", text: "the jaw going slack" },
          { id: "x-tell-shiver", label: "Spine shiver", text: "a shiver running up the spine" },
          { id: "x-tell-belly", label: "Fluttering belly", text: "the belly fluttering with each breath" },
          { id: "x-tell-meet", label: "Meeting the thrust", text: "pushing back to meet every thrust" },
          { id: "x-tell-hands", label: "Trembling hands", text: "a fine tremble in the hands" }
        ] },

      /* ------------------------------------------------------------------ VO */
      { id: "xvo", label: "Vocal style", target: "detailed_description", multi: false, order: 132, default: [],
        options: [
          { id: "x-vo-silent", label: "Silent / clenched", text: "Almost silent: everything held in the throat with only a tight hum escaping." },
          { id: "x-vo-breathy", label: "Breathy", text: "Small breathy sighs riding every stroke." },
          { id: "x-vo-whimper", label: "Whimpering", text: "High thin whimpers that break on the exhale." },
          { id: "x-vo-loud", label: "Loud / unashamed", text: "Open-mouthed moans with no attempt to keep quiet." },
          { id: "x-vo-filthy", label: "Filthy talk", text: "Muttered swearing and short blunt instructions between breaths." },
          { id: "x-vo-giggle", label: "Giggling", text: "Laughter tangled into the moans." },
          { id: "x-vo-gasp", label: "Gasping", text: "Sharp gasps at every contact with the air catching in the chest." },
          { id: "x-vo-beg", label: "Begging", text: "A repeated desperate please, barely a word." },
          { id: "x-vo-growl", label: "Growling", text: "Growling exhales through the teeth." },
          { id: "x-vo-shudder", label: "Shuddering exhale", text: "A long shuddering exhale after the peak, then an embarrassed giggle." }
        ] },

      /* -------------------------------------------------------------- CAMERA */
      { id: "camera", label: "Camera movement", target: "detailed_description", multi: false, order: 40, default: [],
        options: [
          { id: "x-cam-handheld", label: "Handheld micro-jitter", text: "The camera is handheld with a fine micro-jitter, breathing with the operator: low-amplitude drift that settles smoothly rather than sharp shake, with no digital zoom." },
          { id: "x-cam-followhips", label: "Follow the hips", text: "The camera tracks with the hips and matches their rhythm, keeping the subject at a constant distance and screen scale while the background parallax develops continuously." },
          { id: "x-cam-shake", label: "Building shake", text: "The camera shake increases in amplitude as the pace builds, then settles again before the final beat." },
          { id: "x-cam-sway", label: "Gentle drift sway", text: "The camera sways on a slow gentle drift, a dreamy low-amplitude float with a level horizon." },
          { id: "x-cam-cranedown", label: "Crane down the body", text: "The camera cranes slowly downward from face to hips, keeping the optical axis on the body and the focal length fixed." }
        ] },

      /* ---------------------------------------------------------------- LENS */
      { id: "lens", label: "Lens & perspective", target: "detailed_description", multi: false, order: 32, default: [],
        options: [
          { id: "x-lens-18", label: "18 mm ultra wide", text: "Use an approximately 18 mm full-frame-equivalent ultra-wide rectilinear perspective, close to the subject so the near element is dramatically larger than the far one." },
          { id: "x-lens-20", label: "20 mm close wide", text: "Use an approximately 20 mm full-frame-equivalent wide perspective at close range, exaggerating the nearest body part while keeping vertical lines straight." },
          { id: "x-lens-fisheye", label: "8 mm circular fisheye", text: "Use an approximately 8 mm circular fisheye perspective with strong barrel distortion, the centre bowed outward and the extreme edges curving. Do not let the distortion flatten the body; keep the nearest forms round and full rather than stretched flat." },
          { id: "x-lens-anamorphic", label: "40 mm anamorphic", text: "Use an approximately 40 mm anamorphic perspective with gentle oval bokeh, a slightly wide horizontal field and restrained horizontal flare." }
        ] },

      /* --------------------------------------------------------------- ANGLE */
      { id: "angle", label: "Camera height & angle", target: "detailed_description", multi: false, order: 33, default: [],
        options: [
          { id: "x-ang-ground", label: "Ground level", text: "Place the camera on the floor looking up, so the body towers overhead and the nearest part of it hangs down toward the lens." },
          { id: "x-ang-hip", label: "Hip height", text: "Place the camera level with the hips at point-blank range, so the nearest element is at the lens and the body recedes behind it." },
          { id: "x-ang-betweenlegs", label: "Fisheye from between the legs", text: "Place the camera low and between the legs looking up the body, the nearest element bowed outward by the lens." },
          { id: "x-ang-rear", label: "Rear angle", text: "Place the camera behind the subject so the back and buttocks are nearest and the shaft is glimpsed between the legs." },
          { id: "x-ang-34", label: "Three-quarter front", text: "Place the camera about 30 degrees around from the front so the near shoulder is closest and the body crosses the frame diagonally." },
          { id: "x-ang-profile", label: "Side profile", text: "Place the camera at 90 degrees for a clear side profile with the full length of the shaft in silhouette." },
          { id: "x-ang-ots", label: "Over the shoulder", text: "Place the camera past a shoulder so the shoulder is the nearest element in soft focus and the action is framed beyond it." },
          { id: "x-ang-bedside", label: "Bedside, mattress height", text: "Place the camera at mattress height beside the bed, the edge of the mattress nearest to the lens." },
          { id: "x-ang-topdownbed", label: "Top-down on the bed", text: "Place the camera directly above the bed looking straight down, the body spread below and the crown of the head nearest." }
        ] },

      /* ------------------------------------------------------------- FRAMING */
      { id: "framing", label: "Framing", target: "detailed_description", multi: false, order: 30, default: [],
        options: [
          { id: "x-fr-headless", label: "Headless crop", text: "Use a headless crop from just under the chin to the knees, so the face is out of frame and the body carries the shot." },
          { id: "x-fr-hipsknees", label: "Hips to knees", text: "Frame from the hips to the knees, making the genitals and the point of contact the subject of the shot." },
          { id: "x-fr-crotch", label: "Close on the point of contact", text: "Frame tight on the point of contact so the join between bodies fills the frame and stays readable as it moves." },
          { id: "x-fr-facebreasts", label: "Face and breasts", text: "Frame on the face and breasts so the expression and the chest fill the upper frame with the shaft entering from below." },
          { id: "x-fr-legsfeet", label: "Legs and feet", text: "Frame the legs and feet, keeping the lower body and any foot contact fully inside the frame." },
          { id: "x-fr-wide", label: "Wide with the whole room", text: "Frame wide with the whole supplied room visible and the body small within it, so the space reads as much as the body." },
          { id: "x-fr-tightsubject", label: "Tight on the subject only", text: "Frame tight enough that the body fills the frame edge to edge with no visible room around it." }
        ] },

      /* ------------------------------------------------------------- LIGHTING */
      { id: "lighting", label: "Lighting", target: "detailed_description", multi: false, order: 60, default: [],
        options: [
          { id: "x-li-chiaroscuro", label: "Hard chiaroscuro", text: "Light with a hard single source: deep black shadow against bright skin, a strong shadow edge across the body, and specular highlights on wet surfaces." },
          { id: "x-li-bedside", label: "Warm bedside lamp", text: "Light with a warm low bedside lamp from one side, soft falloff, warm skin and a dark room beyond the lamp." },
          { id: "x-li-overcast", label: "Cool overcast", text: "Light with cool flat overcast daylight, even and shadowless, cool skin tones." },
          { id: "x-li-neon", label: "Neon rim", text: "Light with a hard neon rim tracing the body edge in colour, with a dim fill so the face stays readable." },
          { id: "x-li-golden", label: "Golden hour", text: "Light with low golden hour sun raking across the skin, warm highlights and long soft shadows." },
          { id: "x-li-ring", label: "Ring light", text: "Light with a bright flat ring light on axis, even skin with a soft circular catchlight." },
          { id: "x-li-candle", label: "Candlelight", text: "Light with flickering candlelight from below, warm and unstable, shadows moving on the body." },
          { id: "x-li-bathroom", label: "Bathroom strip light", text: "Light with a hard bathroom strip light directly overhead, top-down and unforgiving, with deep shadows under the body." },
          { id: "x-li-backlit", label: "Backlit", text: "Backlight the subject against a bright window so the body is rimmed and the front is in soft fill." }
        ] },

      /* ----------------------------------------------------------------- TIME */
      { id: "time", label: "Time & pace", target: "detailed_description", multi: false, order: 50, default: [],
        options: [
          { id: "x-ti-slowmo", label: "Slow motion 0.5x", text: "Play the action in slow motion at half speed, every impact and every wobble stretched out and deepened." },
          { id: "x-ti-veryslow", label: "Very slow 0.25x", text: "Play the action in very slow motion at quarter speed, almost floating, with the fluid behaviour fully visible." },
          { id: "x-ti-ramp", label: "Speed ramp into slow motion", text: "Start at real time and ramp smoothly into slow motion, so the opening is natural and the climax is stretched." }
        ] },

      /* -------------------------------------------------------------- SETTING */
      { id: "xset", label: "Setting / room", target: "detailed_description", multi: false, order: 70, default: [],
        options: [
          { id: "x-set-bedroom", label: "Bedroom", text: "The scene is a bedroom with rumpled sheets and one lamp on." },
          { id: "x-set-bathroom", label: "Bathroom mirror", text: "The scene is a small tiled bathroom in front of a mirror; keep the reflection geometry and handedness consistent." },
          { id: "x-set-shower", label: "Shower", text: "The scene is a running shower with water sheeting down the glass; water runs on the skin without washing away anything already there." },
          { id: "x-set-living", label: "Living room", text: "The scene is a living room with a low couch and a paused television." },
          { id: "x-set-kitchen", label: "Kitchen counter", text: "The scene is a kitchen counter with the overhead light on late at night." },
          { id: "x-set-studio", label: "Studio backdrop", text: "The scene is a seamless plain studio backdrop with nothing else in frame." },
          { id: "x-set-hotel", label: "Hotel room", text: "The scene is a hotel room with heavy curtains and a hard mattress." },
          { id: "x-set-sauna", label: "Sauna", text: "The scene is a hot cedar sauna with steam in the air and a sheen of sweat on the skin." },
          { id: "x-set-car", label: "Car back seat", text: "The scene is the cramped back seat of a parked car." },
          { id: "x-set-poolside", label: "Poolside", text: "The scene is a poolside lounger in bright sun." },
          { id: "x-set-office", label: "Office desk", text: "The scene is an office desk with blinds half drawn and hard daylight in stripes." },
          { id: "x-set-changing", label: "Changing room", text: "The scene is a gym changing room with lockers and benches and hard echo." },
          { id: "x-set-balcony", label: "Balcony at dusk", text: "The scene is a balcony at dusk with city light behind the subject." },
          { id: "x-set-dressing", label: "Dressing room", text: "The scene is a dressing room with a lit mirror and clothes hanging." },
          { id: "x-set-floor", label: "Bare floor", text: "The scene is a bare floor against a plain wall, with nothing but the body and its shadow in frame." }
        ] },

      /* ---------------------------------------------------------------- AUDIO */
      { id: "xaudio", label: "Soundscape override", target: "overall_soundscape", multi: false, order: 205, default: [],
        options: [
          { id: "x-au-wetsolo", label: "Wet stroking audio (solo)", text: "Close and unmixed: the slick wet sound of a fist working the shaft on every stroke, growing faster and wetter as it builds. Breathing runs deep at first, then shallow and urgent, breaking into low moans, a sharp gasp at the moment it comes and a long shuddering exhale. An embarrassed giggle at the end." },
          { id: "x-au-wetpartner", label: "Wet partnered audio", text: "Close and unmixed: wet skin contact and slick friction on every thrust, the slap of hips at the deepest point, growing faster and wetter as it builds. Breathing is audible from both bodies, one low and one high, breaking into moans, a sharp gasp at the peak and a long shuddering exhale after." },
          { id: "x-au-breath", label: "Breathing and moans only", text: "Close and unmixed: only breath and voice, no room tone and no music. Deep at first, then shallow and urgent, breaking into low moans and a sharp gasp at the peak." },
          { id: "x-au-room", label: "Quiet room tone", text: "Low quiet room tone with subtle skin and sheet movement, restrained and unmixed, no music and no invented voices." },
          { id: "x-au-wetroom", label: "Room tone plus wet contact", text: "A low room tone under close wet contact sounds: slick friction and skin on skin, synchronised to the visible movement, never a continuous unrelated bed." }
        ] },

      /* ---------------------------------------------------------------- FLUID */
      { id: "xfluid", label: "Fluid extras", target: "detailed_description", multi: true, order: 105, default: [],
        options: [
          { id: "x-fl-precumbead", label: "Precum bead", text: "A bead of precum gathers and stretches at the tip, holding before it breaks." },
          { id: "x-fl-precumthread", label: "Precum thread", text: "Precum strings in an unbroken thread from the tip down, stretching and thinning without vanishing." },
          { id: "x-fl-glazed", label: "Glazed shaft", text: "The shaft is glazed and glossy along its whole length, catching the light on every surface." },
          { id: "x-fl-sweat", label: "Sweat sheen", text: "A sheen of sweat across the chest and stomach, glossy under the light." },
          { id: "x-fl-spit", label: "Spit trail", text: "A trail of spit runs down the shaft and stays there, glossy and wet." },
          { id: "x-fl-lube", label: "Lube shine", text: "Lube shines on the shaft and the point of contact, slick and reflective." },
          { id: "x-fl-alwayswet", label: "Always wet", text: "The shaft is glistening wet from base to tip at all times, catching the light along its whole length." }
        ] },

      /* ---------------------------------------------------------------- PACKS */
      { id: "xpacks", label: "Detail packs", target: "detailed_description", multi: true, order: 170,
        default: ["x-pk-neverstill", "x-pk-weight", "x-pk-thin", "x-pk-pulse", "x-pk-persist"],
        options: [
          { id: "x-pk-neverstill", label: "Never still (anti-stiff)", text: "Nothing about the body is ever still. Breath moves the ribs, weight shifts, fingers flex and re-grip, the jaw slackens and tightens, blinking, swallowing and swaying continue throughout. No pose is held frozen for more than a moment." },
          { id: "x-pk-weight", label: "Penis weight & flex", text: "The penis is not rigid. It flexes and bends under its own weight. When it moves it lags behind the body, swinging with momentum, the shaft bowing slightly along its length. When gripped or pushed it bends at the point of contact and springs back. The glans droops and sways with gravity when unsupported. Every motion carries a soft wobble and rebound, heavy and pendulous, never stiff or straight." },
          { id: "x-pk-thin", label: "Cum thickness", text: "Cum is fluid and slightly runny, never thick or gloopy. It spurts in thin fast ropes that break apart mid-air into separate droplets. It runs quickly down the shaft in a light stream rather than a heavy bead. Semi-translucent, glossy and wet-looking. Never dense, never creamy, never stringy." },
          { id: "x-pk-pulse", label: "Ejaculation physics", text: "Cum leaves the penis in discrete pulses, not a continuous stream. Each spurt is a separate event: the shaft contracts and jerks, throwing cum out on the contraction, then a beat of stillness before the next. The first spurt is strongest and travels furthest in a high arc; each following spurt is shorter and weaker and lands closer, until the last ones barely clear the tip. After the spurts stop, cum dribbles slowly down the shaft in a bead, gathering at the base before dripping off. The penis keeps twitching throughout. Never a steady pour." },
          { id: "x-pk-persist", label: "Cum persistence", text: "Cum that lands on skin stays exactly there. It does not fade, vanish or dry out. It stays glossy and wet-looking on the body for the entire clip, holding its shape and position, never disappearing mid-shot." }
        ] },

      /* ---------------------------------------------------------------- FLAGS */
      { id: "xflags", label: "Continuity flags", target: "detailed_description", multi: true, order: 180,
        default: ["x-fl-mirror", "x-fl-lock"],
        options: [
          { id: "x-fl-mirror", label: "Partner mirrors reactions", text: "The same involuntary arousal tells run through the second subject in mirrored form, so neither body ever reads as stiff, bored or posed." },
          { id: "x-fl-lock", label: "Hard continuity lock", text: "Keep identity, hair, body proportions, penis length and the room identical to the references from the first frame to the last, with no drift and no morphing. AVOID a third arm, duplicated limbs, a second penis, hands swapping owners, the shaft going rigid and straight, and the room changing." }
        ] }
    ]
  };

  function withApp(fn) {
    if (globalThis.H3Builder && globalThis.H3Libraries) { fn(); return; }
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (globalThis.H3Builder && globalThis.H3Libraries) { clearInterval(timer); fn(); }
      else if (tries > 60) { clearInterval(timer); }
    }, 50);
  }

  function install() {
    var B = globalThis.H3Builder, L = globalThis.H3Libraries;

    try { B.validatePack(PACK); }
    catch (e) { console.warn("[h3-prompt-lora] pack rejected by the app:", e.message); }

    if (!L.SOURCES.some(function (s) { return s.id === ID; })) {
      L.SOURCES.push({ id: ID, label: NAME, files: [FILE] });
    }

    if (!L.loadPacks.__h3adult) {
      var original = L.loadPacks;
      L.loadPacks = function (sourceId, fetcher) {
        if (sourceId === ID) return Promise.resolve([JSON.parse(JSON.stringify(PACK))]);
        return original.call(L, sourceId, fetcher);
      };
      L.loadPacks.__h3adult = true;
    }

    var sel = document.getElementById("librarySource");
    if (sel && !sel.querySelector('option[value="' + ID + '"]')) {
      var opt = document.createElement("option");
      opt.value = ID;
      opt.textContent = NAME;
      sel.appendChild(opt);
    }

    if (sel && (sel.value === "saved" || sel.value === "" || sel.value === "original")) {
      sel.value = ID;
      sel.dispatchEvent(new Event("change"));
    }
  }

  function activate() {
    var sel = document.getElementById("librarySource");
    if (!sel) return false;
    if (!sel.querySelector('option[value="' + ID + '"]')) install();
    sel.value = ID;
    sel.dispatchEvent(new Event("change"));
    return true;
  }

  function download() {
    var url = URL.createObjectURL(new Blob([JSON.stringify(PACK, null, 2)], { type: "application/json" }));
    var a = document.createElement("a");
    a.href = url; a.download = FILE; a.click();
    setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
  }

  var mod = {
    id: ID, name: NAME, version: "1.0.0", kind: "prompt-lora", target: "h3-prompt-builder",
    api: 1, pack: PACK, install: install, activate: activate, download: download,
    groupCount: PACK.groups.length,
    optionCount: PACK.groups.reduce(function (n, g) { return n + g.options.length; }, 0)
  };

  globalThis.H3PromptLoRA = mod;
  if (globalThis.document) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { withApp(install); });
    else withApp(install);
  }
})();
