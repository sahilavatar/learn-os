# learn-os

**Browse 60+ free university CS courses in one place.**

Live demo → https://sahilavatar.github.io/learn-os 

Built on top of the incredible [cs-video-courses](https://github.com/Developer-Y/cs-video-courses) repo (70k+ ⭐) — learnOS is an open-source interface layer that organizes those courses into a searchable, categorized learning dashboard.

---

## What it is

open-source visual interface for the coures:

- **17 categories** — Algorithms, ML, Deep Learning, NLP, OS, Security, LLMs, and more
- **One-click access** — direct links to YouTube playlists and university course pages  
- **Search** across 60+ courses by title, institution, or topic
- **Zero account required** — fully static, works offline, no tracking

## Stack

Pure HTML/CSS/JS · No framework · No backend · No build step · GitHub Pages

## Run locally

```bash
git clone https://github.com/sahilavatar/learn-os.git
cd learn-os
python3 -m http.server 8080
# visit http://localhost:8080
```

## Roadmap

- Progress tracking (localStorage)
- User accounts + Supabase sync  
- Stripe enrollment for premium features
- AI powered coursework and modules. 
- AI-graded exams (Claude API)
- Completion certificates (PDF + LinkedIn badge)

Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md)

## Credits

All course content sourced from [Developer-Y/cs-video-courses](https://github.com/Developer-Y/cs-video-courses).  
learnOS is the interface, not the content.

## License

MIT
