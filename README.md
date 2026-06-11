# Android-Stuffs

Index of Android projects by [Otterdays](https://github.com/Otterdays).

---

## Projects

### [SoundPax](https://github.com/Otterdays/SoundPax)

16-pad **MPC / soundboard** for Android tablets — record samples, assign to pads, play with low-latency multi-voice playback.

| | |
|---|---|
| **Stack** | Flutter (UI) + Rust (WAV I/O, DSP, bank persistence) via [flutter_rust_bridge](https://cjycode.com/flutter_rust_bridge/) v2 |
| **Status** | Phase 1 MVP — pad grid, record, playback, sound banks |
| **Target** | Android tablets (primary) |

**Highlights**

- 4×4 pad grid with tap-to-record and polyphonic playback (16 voices)
- Peak normalize, sound bank save/load/delete (JSON + WAV)
- Rust engine for audio processing; Flutter for UI

```bash
git clone https://github.com/Otterdays/SoundPax.git
cd SoundPax
flutter pub get
flutter run
```

→ [SoundPax repo](https://github.com/Otterdays/SoundPax) · [README](https://github.com/Otterdays/SoundPax#readme)

---

## Adding a project

When a new Android project ships, add a section above with:

- One-line description
- Stack and status
- Clone/run snippet if useful
- Link to the repo
