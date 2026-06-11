const projects = [
  {
    name: "SoundPax",
    url: "https://github.com/Otterdays/SoundPax",
    description:
      "16-pad MPC / soundboard for Android tablets. Record samples, assign to pads, play with low-latency multi-voice playback.",
  },
  {
    name: "Kinetic",
    url: "https://github.com/Otterdays/Kinetic-IDE",
    description:
      "Tablet-first Android IDE with an AI agent loop. Split editor, SAF workspace, streaming tools, and git/shell — built in Jetpack Compose.",
  },
  {
    name: "Arteria V2",
    url: "https://github.com/Otterdays/Arteria-V2-Gradle-Edition-Reloaded",
    description:
      "Native Android idle RPG with offline ticks, skills, crafting, and combat. Kotlin, Jetpack Compose, and Room persistence.",
  },
];

const list = document.getElementById("projects");

for (const project of projects) {
  const li = document.createElement("li");
  li.className = "project-card";
  li.innerHTML = `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}</a>
    <p>${project.description}</p>
  `;
  list.appendChild(li);
}
