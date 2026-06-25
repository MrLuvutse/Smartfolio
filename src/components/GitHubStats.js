import React from 'react';

var username = 'MrLuvutse';

var statsUrl = 'https://github-readme-stats.vercel.app/api?username=' + username + '&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1e1e2e&title_color=6c63ff&icon_color=ff6584&text_color=f0f0ff';

var langsUrl = 'https://github-readme-stats.vercel.app/api/top-langs/?username=' + username + '&layout=compact&theme=tokyonight&hide_border=true&bg_color=1e1e2e&title_color=6c63ff&text_color=f0f0ff';

var streakUrl = 'https://github-readme-streak-stats.herokuapp.com/?user=' + username + '&theme=tokyonight&hide_border=true&background=1e1e2e&ring=6c63ff&fire=ff6584&currStreakLabel=f0f0ff';

var profileUrl = 'https://github.com/' + username;

export default function GitHubStats() {
  return (
    <section className="section" style={{ background: 'var(--bg-3)' }}>
      <div className="container">

        <div className="badge">Open Source</div>
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-sub">My open source contributions and activity</p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
        }}>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <img
              src={statsUrl}
              alt="GitHub Stats"
              style={{ borderRadius: '12px', maxWidth: '100%' }}
            />
            <img
              src={langsUrl}
              alt="Top Languages"
              style={{ borderRadius: '12px', maxWidth: '100%' }}
            />
          </div>

          <img
            src={streakUrl}
            alt="GitHub Streak"
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          />

          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View GitHub Profile
          </a>

        </div>
      </div>
    </section>
  );
}