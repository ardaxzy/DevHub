"use client";

import { useMemo, useState } from "react";

const projects = [
  { name: "OpenSource Atlas", description: "Yeni başlayanlar için katkı rotaları ve açık issue haritası.", tags: ["Next.js", "TypeScript"], author: "Mert Kaya", initials: "MK", color: "bg-amber-200" },
  { name: "Birlikte Öğren", description: "Geliştiricileri çalışma gruplarıyla buluşturan topluluk uygulaması.", tags: ["React", "Node.js"], author: "Duru Yılmaz", initials: "DY", color: "bg-violet-200" },
  { name: "Dev Events", description: "Yerel teknoloji etkinliklerini keşfet, arkadaşlarınla planla.", tags: ["Vue", "Supabase"], author: "Can Demir", initials: "CD", color: "bg-emerald-200" },
];
const technologies = ["Tümü", "Next.js", "React", "Node.js", "TypeScript", "Vue", "Supabase"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState("Tümü");
  const [notice, setNotice] = useState("");
  const filteredProjects = useMemo(() => projects.filter((project) =>
    (activeTech === "Tümü" || project.tags.includes(activeTech)) && `${project.name} ${project.description} ${project.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase()),
  ), [activeTech, query]);

  return <main>
    <nav className="nav wrap"><a className="brand" href="#top">dev<span>hub</span></a><div className="nav-links"><a href="#projects">Projeler</a><a href="#developers">Geliştiriciler</a><a href="#teams">Ekipler</a></div><button className="ghost" onClick={() => setNotice("Giriş akışı yakında eklenecek.")}>Giriş yap</button><button className="primary small" onClick={() => setNotice("Profil oluşturma akışı yakında eklenecek.")}>Topluluğa katıl</button></nav>
    <section id="top" className="hero wrap"><div className="hero-copy"><p className="eyebrow">GELİŞTİRİCİLER İÇİN TOPLULUK</p><h1>Harika şeyler<br /><em>birlikte</em> yapılır.</h1><p className="lead">İlham veren projeleri keşfet, doğru insanlarla tanış ve fikirlerini gerçeğe dönüştür.</p><div className="hero-actions"><a className="primary" href="#projects">Projeleri keşfet <b>→</b></a><button className="text-button" onClick={() => setNotice("Proje oluşturma yakında eklenecek.")}>Projeni paylaş <b>↗</b></button></div></div><div className="hero-art" aria-label="Soyut topluluk illüstrasyonu"><div className="sun" /><div className="orb orb-one" /><div className="orb orb-two" /><div className="profile-card card-one"><span className="avatar peach">EA</span><div><strong>Elif Arslan</strong><small>Frontend developer</small></div><i>✦</i></div><div className="profile-card card-two"><span className="avatar blue">SK</span><div><strong>Selim Korkmaz</strong><small>Open to collaborate</small></div><i>●</i></div><div className="code-card"><span>01</span><span>02</span><span>03</span><b>&lt;/&gt;</b></div></div></section>
    <section className="social-proof"><div className="wrap proof-content"><p>Bir sonraki iş birliğin burada olabilir.</p><div><b>2.4K</b><span>geliştirici</span></div><div><b>380+</b><span>aktif proje</span></div><div><b>52</b><span>ülke</span></div></div></section>
    <section id="projects" className="wrap discover"><div className="section-head"><div><p className="eyebrow">ÖNE ÇIKANLAR</p><h2>Keşfetmeye değer projeler.</h2></div><a href="#projects">Tüm projeleri gör <b>→</b></a></div><div className="filters"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Proje, teknoloji veya konu ara..." aria-label="Proje ara" />{technologies.map((tech) => <button key={tech} className={activeTech === tech ? "filter active" : "filter"} onClick={() => setActiveTech(tech)}>{tech}</button>)}</div><div className="project-grid">{filteredProjects.map((project) => <article className="project-card" key={project.name}><div className="card-top"><span className="folder">▰</span><button aria-label={`${project.name} kaydet`} onClick={() => setNotice(`${project.name} kaydedildi.`)}>♡</button></div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><footer><span className={`avatar ${project.color}`}>{project.initials}</span><span>{project.author}</span><a href="#projects" onClick={() => setNotice(`${project.name} detayları yakında.`)}>İncele →</a></footer></article>)}</div>{filteredProjects.length === 0 && <p className="empty">Bu aramaya uygun proje bulunamadı.</p>}</section>
    <section id="developers" className="wrap community"><div><p className="eyebrow">TOPLULUK</p><h2>Tek başına<br />yapmak zorunda değilsin.</h2></div><p>Fikir alışverişi yapabileceğin, birlikte öğrenebileceğin ve üretebileceğin geliştiricilerle tanış.</p><a className="primary" href="#teams">Geliştiricileri keşfet <b>→</b></a></section><footer id="teams" className="site-footer wrap"><a className="brand" href="#top">dev<span>hub</span></a><p>Geliştiriciler tarafından, geliştiriciler için.</p><span>© 2026 DevHub</span></footer>{notice && <button className="toast" onClick={() => setNotice("")}>{notice} ×</button>}
  </main>;
}
