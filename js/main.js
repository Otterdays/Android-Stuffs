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
    name: "Arteria",
    url: "https://github.com/Otterdays/GAME-Arteria",
    description:
      "Cosmic idle RPG inspired by Melvor Idle and RuneScape. React Native (Expo) with a headless TypeScript engine and offline progression.",
  },
  {
    name: "Arteria V2",
    url: "https://github.com/Otterdays/Arteria-V2-Gradle-Edition-Reloaded",
    description:
      "Native Android rebuild of Arteria — idle RPG with offline ticks, skills, crafting, and combat. Kotlin, Jetpack Compose, and Room persistence.",
  },
  {
    name: "Android Game 4",
    url: "https://github.com/Otterdays/Android-Game-4",
    description:
      "Random Godot side project for Android. GDScript, shaders, and mobile export experiments.",
  },
  {
    name: "Lorenzez Notez",
    url: "https://github.com/Otterdays/Lorenzez-Notez",
    description:
      "Collaborative family note-taking app for Android. Room for private notes, Firebase for shared family sync, and invite-link groups.",
  },
  {
    name: "Shadow Pulse",
    url: "https://github.com/Otterdays/Shadow-Pulse",
    description:
      "Dark atmospheric survival game — dodge shadows, collect fragments, and manage your light. Kotlin and Jetpack Compose.",
  },
  {
    name: "Nebula Camera",
    url: "https://github.com/Otterdays/Nebula-Camera",
    description:
      "Premium Android camera app with dark glassmorphism UI and a Gravity Orb stability assistant. CameraX, zoom presets, and gallery in Compose.",
  },
  {
    name: "Brain Busters",
    url: "https://github.com/Otterdays/Brain-Busters",
    description:
      "Cognitive games suite — blackjack, poker, chess, puzzles, and more vs AI opponent Jeeves. Kotlin, Jetpack Compose, and Room.",
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
