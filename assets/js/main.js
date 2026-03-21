// Target the root div in our HTML
const appMount = document.getElementById("app-mount");

// --- THEME TOGGLE LOGIC ---
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  render(); // Re-render to swap the sun/moon icons
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  // Default to dark mode if no preference is saved, since you are a backend dev!
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }
}

// --- UI COMPONENTS ---

function renderNavbar() {
  const isDark = document.documentElement.classList.contains("dark");

  // SVG Icons
  const moonIcon = `<svg class="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
  const sunIcon = `<svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
  const menuIcon = `<svg class="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;

  // Helper scripts for the slide-down animation
  const toggleMenuScript = `
    document.getElementById('mobile-menu').classList.toggle('max-h-0');
    document.getElementById('mobile-menu').classList.toggle('opacity-0');
    document.getElementById('mobile-menu').classList.toggle('max-h-[500px]');
    document.getElementById('mobile-menu').classList.toggle('opacity-100');
    document.getElementById('mobile-backdrop').classList.toggle('opacity-0');
    document.getElementById('mobile-backdrop').classList.toggle('pointer-events-none');
  `.replace(/\s+/g, ' ').trim();

  const closeMenuScript = `
    document.getElementById('mobile-menu').classList.add('max-h-0', 'opacity-0');
    document.getElementById('mobile-menu').classList.remove('max-h-[500px]', 'opacity-100');
    document.getElementById('mobile-backdrop').classList.add('opacity-0', 'pointer-events-none');
  `.replace(/\s+/g, ' ').trim();

  return `
        <div id="mobile-backdrop" onclick="${closeMenuScript}" class="fixed inset-0 z-40 bg-slate-900/20 dark:bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none md:hidden"></div>

        <nav class="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-ide-bg/90 border-b border-slate-200 dark:border-ide-border">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="#" class="flex-shrink-0 font-bold text-2xl tracking-tighter text-slate-900 dark:text-white hover:opacity-80 transition-opacity" aria-label="Back to top">
                        ASDT<span class="text-brand">.</span>
                    </a>
                    
                    <div class="hidden md:flex space-x-6 items-center font-medium text-sm">
                        <a href="#experience" class="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Experience</a>
                        <a href="#projects" class="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Architecture</a>
                        <a href="#skills" class="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Skills</a>
                        <a href="#dashboard" class="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Proof of Work</a>
                        <a href="#resources" class="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Resources</a>
                        <a href="#contact" class="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Contact</a>
                        <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
                            ${isDark ? sunIcon : moonIcon}
                        </button>
                    </div>

                    <div class="flex items-center space-x-2 md:hidden">
                        <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
                            ${isDark ? sunIcon : moonIcon}
                        </button>
                        <button onclick="${toggleMenuScript}" class="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Open Menu">
                            ${menuIcon}
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" class="absolute top-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 md:hidden">
                <div class="bg-white/95 dark:bg-ide-bg/95 border-b border-slate-200 dark:border-ide-border backdrop-blur-md px-4 pt-2 pb-6 space-y-2 flex flex-col items-center font-medium text-sm shadow-xl">
                    <a href="#experience" onclick="${closeMenuScript}" class="block w-full py-3 text-center text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Experience</a>
                    <a href="#projects" onclick="${closeMenuScript}" class="block w-full py-3 text-center text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Architecture</a>
                    <a href="#skills" onclick="${closeMenuScript}" class="block w-full py-3 text-center text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Skills</a>
                    <a href="#dashboard" onclick="${closeMenuScript}" class="block w-full py-3 text-center text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Proof of Work</a>
                    <a href="#resources" onclick="${closeMenuScript}" class="block w-full py-3 text-center text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Resources</a>
                    <a href="#contact" onclick="${closeMenuScript}" class="block w-full py-3 text-center text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    `;
}

function renderHero() {
    const data = portfolioData.personal;
    return `
        <section id="hero" class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            <div class="max-w-3xl flex-1 text-center md:text-left cursor-default">
                <p class="text-brand font-semibold tracking-wide uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    Hi, my name is
                </p>
                <h1 class="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                    ${data.name}.
                </h1>
                <h2 class="text-3xl sm:text-5xl font-bold text-slate-500 dark:text-slate-400 mb-6 tracking-tight">
                    I build scalable enterprise systems.
                </h2>
                <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
                    I'm a computer science engineer specializing in backend architecture, secure authentication, and high-performance APIs. 
                    Currently exploring AI-driven development and open-sourcing my technical notes to empower the community.
                </p>
                <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#projects" class="px-8 py-4 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-all shadow-lg shadow-brand/30">
                        View Architecture
                    </a>
                    <a href="#dashboard" class="px-8 py-4 rounded-lg border-2 border-slate-300 dark:border-ide-border text-slate-700 dark:text-slate-300 hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand font-semibold transition-all">
                        Proof of Work
                    </a>
                </div>
            </div>

            <div class="flex-shrink-0 relative group md:mr-10 mt-10 md:mt-0">
                <div class="absolute inset-0 bg-brand rounded-full blur-3xl opacity-20 dark:opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img src="${data.image}" alt="${data.name}" class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white dark:border-ide-surface shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" onerror="this.src='https://ui-avatars.com/api/?name=Akhilesh+Tiwari&size=512&background=0ea5e9&color=fff'" />
            </div>

        </section>
    `;
}

function renderExperience() {
  const expHTML = portfolioData.experience
    .map(
      (exp) => `
        <div class="relative border-l border-slate-300 dark:border-ide-border ml-3 pl-6 pb-10">
            <div class="absolute w-3 h-3 bg-brand rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
            <div class="mb-1 text-sm text-brand font-semibold tracking-wider">${exp.period}</div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">${exp.role} <span class="text-slate-500 dark:text-slate-400">@ ${exp.company}</span></h3>
            <ul class="mt-4 space-y-2 text-slate-600 dark:text-slate-400 list-disc list-inside">
                ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
        </div>
    `,
    )
    .join("");

  return `
        <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center">
                <span class="text-brand mr-3">01.</span> Experience
            </h2>
            <div class="mt-8">${expHTML}</div>
        </section>
    `;
}

function renderProjects() {
  const projHTML = portfolioData.projects
    .map(
      (proj) => `
        <div class="group relative bg-white dark:bg-ide-surface border border-slate-200 dark:border-ide-border rounded-xl p-6 sm:p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:border-brand/50">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand transition-colors">${proj.title}</h3>
            <p class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">${proj.subtitle}</p>
            <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                ${proj.description}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
                ${proj.tech.map((t) => `<span class="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-ide-bg text-slate-600 dark:text-brand rounded-full border border-slate-200 dark:border-ide-border/50">${t}</span>`).join("")}
            </div>
            <a href="${proj.link}" target="_blank" class="inline-flex items-center text-brand hover:text-brand-light font-semibold transition-colors">
                View Architecture <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
        </div>
    `,
    )
    .join("");

  return `
        <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center">
                <span class="text-brand mr-3">02.</span> Featured Architecture
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${projHTML}
            </div>
        </section>
    `;
}

function renderSkills() {
  const skillsHTML = portfolioData.skills
    .map(
      (skillGroup) => `
        <div class="mb-8">
            <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-ide-border pb-2">${skillGroup.category}</h3>
            <div class="flex flex-wrap gap-3">
                ${skillGroup.items
                  .map(
                    (item) => `
                    <span class="px-4 py-2 bg-white dark:bg-ide-surface border border-slate-200 dark:border-ide-border/50 text-slate-700 dark:text-slate-300 font-medium rounded-lg shadow-sm hover:border-brand dark:hover:border-brand transition-colors cursor-default">
                        ${item}
                    </span>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");

  return `
        <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center">
                <span class="text-brand mr-3">03.</span> Technical Arsenal
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                ${skillsHTML}
            </div>
        </section>
    `;
}

function renderResources() {
  const resourcesHTML = portfolioData.resources
    .map(
      (res) => `
        <a href="${res.link}" target="_blank" class="block p-6 bg-slate-50 dark:bg-ide-surface border border-slate-200 dark:border-ide-border rounded-xl hover:bg-slate-100 dark:hover:bg-ide-border transition-all group">
            <div class="flex justify-between items-start mb-4">
                <div class="p-2 bg-brand/10 dark:bg-brand/20 rounded-lg text-brand">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-brand transition-colors">${res.type}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${res.title}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">${res.description}</p>
        </a>
    `,
    )
    .join("");

  return `
        <section id="resources" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div class="mb-12">
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
                    <span class="text-brand mr-3">04.</span> Open Source & Resources
                </h2>
                <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
                    I believe in giving back to the community. Here you can find my structured notes, technical guides, and future referral opportunities.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${resourcesHTML}
            </div>
        </section>
    `;
}

function renderDashboard() {
  const dash = portfolioData.dashboard;

  // GitHub Live API Cards (using a transparent theme to blend with your Dark/Light mode)
  const githubStreak = `https://github-readme-streak-stats.herokuapp.com/?user=${dash.github}&theme=transparent&hide_border=true&title_color=0ea5e9&text_color=64748b&icon_color=0ea5e9&sideNums=64748b&sideLabels=64748b&ring=0ea5e9&fire=0ea5e9`;
  const githubLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${dash.github}&layout=compact&theme=transparent&hide_border=true&title_color=0ea5e9&text_color=64748b`;

  const linkedinHTML = dash.linkedinPosts
    .map(
      (post) => `
        <a href="${post.link}" target="_blank" class="block p-4 rounded-lg bg-slate-50 dark:bg-ide-bg border border-slate-200 dark:border-ide-border/50 hover:border-brand dark:hover:border-brand transition-colors group">
            <p class="text-xs text-brand mb-1 font-semibold">${post.date}</p>
            <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand transition-colors">${post.title}</h4>
        </a>
    `,
    )
    .join("");

  return `
        <section id="dashboard" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center">
                <span class="text-brand mr-3">04.</span> Proof of Work
            </h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                    <a href="https://github.com/${dash.github}" target="_blank" class="block bg-white dark:bg-ide-surface border border-slate-200 dark:border-ide-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <svg class="w-5 h-5 mr-2 text-brand" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                            GitHub Activity
                        </h3>
                        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <img src="${githubStreak}" alt="GitHub Streak" class="w-full sm:w-1/2 object-contain filter dark:brightness-110" />
                            <img src="${githubLangs}" alt="GitHub Top Languages" class="w-full sm:w-1/2 object-contain filter dark:brightness-110" />
                        </div>
                    </a>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a href="https://leetcode.com/u/${dash.leetcode.username}" target="_blank" class="bg-white dark:bg-ide-surface border border-slate-200 dark:border-ide-border rounded-xl p-6 pb-2 hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col">
                            <div class="mb-2">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                                            <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.705-1.15-.705-1.863s.238-1.396.705-1.862l2.302-2.288c.466-.467 1.114-.664 1.827-.664s1.361.197 1.828.664l.823.823-1.493 1.493-.823-.823c-.22-.22-.505-.308-.823-.308s-.603.088-.823.308l-2.302 2.288c-.22-.22-.308.505-.308.823s.088.603.308.823l4.332 4.363c.22.22.505.308.823.308s.603-.088.823-.308l2.697-2.607-1.503-1.494zM20.647 7.02l-3.356-3.355c-.467-.467-1.111-.662-1.824-.662s-1.357.195-1.824.662l-4.332 4.363c-.467.467-.705 1.15-.705 1.863s.238 1.396.705 1.862l2.302 2.288c.466.467 1.114.664 1.827.664s1.361-.197 1.828-.664l.823-.823-1.493-1.493-.823.823c-.22.22-.505.308-.823.308s-.603-.088-.823-.308l-2.302-2.288c-.22-.22-.308-.505-.308-.823s.088-.603.308-.823l4.332-4.363c.22-.22.505-.308.823-.308s.603.088.823.308l3.356 3.355-1.494 1.503z"/></svg>
                                            LeetCode
                                        </h3>
                                        <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">Global Rank: <span class="font-bold text-yellow-600 dark:text-yellow-500">${dash.leetcode.rank}</span></p>
                                    </div>
                                </div>
                                
                                <div class="flex items-end gap-4 relative z-10 border-t border-slate-100 dark:border-ide-border/50 pt-4 mt-2">
                                    <div class="text-center pr-4 border-r border-slate-200 dark:border-ide-border">
                                        <p class="text-3xl font-extrabold text-slate-800 dark:text-slate-200 leading-none">${dash.leetcode.solved}</p>
                                        <p class="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Solved</p>
                                    </div>
                                    <div class="flex-grow space-y-1">
                                        <div class="flex justify-between text-xs font-semibold text-emerald-500"><span class="opacity-80">Easy</span> <span>${dash.leetcode.easy}</span></div>
                                        <div class="flex justify-between text-xs font-semibold text-amber-500"><span class="opacity-80">Med</span> <span>${dash.leetcode.medium}</span></div>
                                        <div class="flex justify-between text-xs font-semibold text-rose-500"><span class="opacity-80">Hard</span> <span>${dash.leetcode.hard}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center mt-auto">
                                <span class="text-[10px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-ide-bg px-2 py-1 rounded-md">Updated: ${dash.leetcode.updatedAt}</span>
                            </div>
                        </a>
                        
                        <a href="${dash.hackerrank.link}" target="_blank" class="bg-white dark:bg-ide-surface border border-slate-200 dark:border-ide-border rounded-xl p-6 pb-2 hover:shadow-lg transition-shadow flex flex-col">
                            <div class="mb-2">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-lg font-bold text-green-500 dark:text-white">HackerRank</h3>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    ${dash.hackerrank.badges.map(b => `<span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-full border border-green-200 dark:border-green-800/50">${b}</span>`).join('')}
                                </div>
                                
                            </div>
                            <div class="flex justify-center mt-auto">
                                <span class="text-[10px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-ide-bg px-2 py-1 rounded-md">Updated: ${dash.hackerrank.updatedAt}</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="bg-white dark:bg-ide-surface border border-slate-200 dark:border-ide-border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
                    <h3 class="text-lg font-bold dark:text-white mb-4 flex items-center text-[#0A66C2]">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        Professional Insights
                    </h3>
                    <div class="flex-grow space-y-3">
                        ${linkedinHTML}
                    </div>
                    <a href="https://linkedin.com/in/asdtiwari" target="_blank" class="mt-4 text-sm text-center text-slate-500 hover:text-brand transition-colors font-medium">View Full Profile &rarr;</a>
                </div>
            </div>
        </section>
    `;
}

function renderContact() {
  const contact = portfolioData.contact;

  return `
        <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200 dark:border-ide-border mt-10">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <p class="text-brand font-semibold tracking-wide uppercase mb-3">05. What's Next?</p>
                <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
                <p class="text-slate-600 dark:text-slate-400 text-lg">
                    Whether you have a question, a system architecture problem to solve, or are looking to hire a dedicated backend engineer, my inbox is always open.
                </p>
            </div>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
                <a href="mailto:${contact.email}" class="w-full sm:w-auto px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-all shadow-lg shadow-brand/30 text-center flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Say Hello
                </a>
                <a href="tel:${contact.phone.replace(/\s+/g, "")}" class="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 dark:border-ide-border text-slate-700 dark:text-slate-300 hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand font-semibold rounded-lg transition-all text-center flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Call Me
                </a>
            </div>
        </section>
    `;
}

function renderFooter() {
  const contact = portfolioData.contact;
  const year = new Date().getFullYear();

  return `
        <footer class="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-ide-border">
            <div class="flex justify-center gap-6 mb-4">
                <a href="${contact.github}" target="_blank" class="hover:text-brand transition-colors" aria-label="GitHub">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="${contact.linkedin}" target="_blank" class="hover:text-brand transition-colors" aria-label="LinkedIn">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <p class="text-sm">Built with pure Vanilla JS & Tailwind CSS</p>
            <p class="text-xs mt-2 opacity-75">&copy; ${year} Akhilesh Tiwari. All rights reserved.</p>
        </footer>
    `;
}

// Final Master Render Function
function render() {
  appMount.innerHTML = `
        ${renderNavbar()}
        <main>
            ${renderHero()}
            ${renderExperience()}
            ${renderProjects()}
            ${renderSkills()}
            ${renderDashboard()}
            ${renderResources()}
            ${renderContact()}
        </main>
        ${renderFooter()}
    `;
}

// Boot up the application
initTheme();
render();
