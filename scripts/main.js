Hooks.on('diceSoNiceReady', (dice3d) => {

    dice3d.addSystem({id: "Ranger11Danger-black", name: "Ranger11Danger-black"}, false);
    dice3d.addSystem({id: "Ranger11Danger-red", name: "Ranger11Danger-red"}, false);
	dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/Ranger11Danger/textures/fuck_text_black.webp",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
	  "modules/Ranger11Danger/textures/yeet_text_black.webp"
    ],
	bumpMaps: ["modules/Ranger11Danger/textures/fuck_text_bump.webp",,,,,,,,,,,,,,,,,,,"modules/Ranger11Danger/textures/yeet_text_bump.webp"],
    system: "Ranger11Danger-black",
	fontScale: 1.0
   },"d20");

   dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/Ranger11Danger/textures/fuck_text_red.webp",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
	  "modules/Ranger11Danger/textures/yeet_text_red.webp"
    ],
	bumpMaps: ["modules/Ranger11Danger/textures/fuck_text_bump.webp",,,,,,,,,,,,,,,,,,,"modules/Ranger11Danger/textures/yeet_text_bump.webp"],
    system: "Ranger11Danger-red",
	fontScale: 1.0
   },"d20");

});