import React, { useEffect, useState } from 'react';
import { Award, CheckCircle2, ChevronRight, Images, Trophy, X } from 'lucide-react';
import Reveal from './common/Reveal';
import { useLanguage } from '../i18n/LanguageContext';

const competitions = [
  {
    id: 'iymc',
    category: 'International Competition',
    name: 'International Youth Math Challenge (IYMC)',
    shortDescription: 'An international mathematics competition that develops problem-solving, logical reasoning, analytical thinking, and creativity.',
    description: 'An international mathematics competition for high school and university students that challenges participants with mathematical problems and develops problem-solving, logical reasoning, analytical thinking, and creativity.',
    images: [
      '/assets/competitions/iymc-logo.png',
      '/assets/competitions/iymc-student-1.jfif',
      '/assets/competitions/iymc-student-2.jfif'
    ],
    whatWeDo: [
      ['🧠', 'Problem-Solving', 'Solve challenging mathematical problems using logical and creative approaches.'],
      ['📐', 'Mathematical Reasoning', 'Apply mathematical concepts to unfamiliar and challenging situations.'],
      ['💡', 'Creative Thinking', 'Explore different approaches and strategies to reach solutions.'],
      ['🌍', 'International Competition', 'Compete with students from different countries.'],
      ['⏱️', 'Challenge & Time Management', 'Develop the ability to work accurately under competition conditions.'],
      ['📚', 'Independent Learning', 'Explore mathematics beyond the classroom.']
    ],
    gains: [
      'Stronger mathematical and analytical thinking',
      'Advanced problem-solving skills',
      'Experience with international academic competitions',
      'Greater confidence in mathematics',
      'Certificates and recognition according to competition results',
      'An opportunity to demonstrate mathematical abilities on an international platform'
    ],
    achievement: 'Successfully participated in the IYMC and completed the competition requirements. The student also received a special honor for submitting the solution as a digitally written document and achieved the Qualification Round.'
  },
  {
    id: 'arab-innovation-investment-fund',
    category: 'Innovation & Entrepreneurship',
    name: 'Arab Innovation and Investment Fund Competition',
    shortDescription: 'A competition that helps students transform innovative solutions to real-world challenges into practical projects and prototypes.',
    description: 'The Arab Innovation and Investment Fund Competition encourages students to develop innovative ideas and practical solutions to real-world challenges. It provides students with an opportunity to transform their ideas into projects, develop prototypes, and present their solutions in a competitive environment.',
    images: [
      '/assets/competitions/arab-innovation-logo.jpg',
      '/assets/competitions/arab-innovation-team-1.jfif',
      '/assets/competitions/arab-innovation-team-2.jfif',
      '/assets/competitions/arab-innovation-team-3.jfif'
    ],
    whatWeDo: [
      ['💡', 'Idea Generation & Innovation', 'Identify real-world problems and develop creative solutions.'],
      ['🔍', 'Problem Analysis', 'Understand the problem, target users, and required solution.'],
      ['🛠️', 'Prototype Development', 'Turn the idea into a practical prototype or working model.'],
      ['📊', 'Project & Business Planning', "Develop the project's concept, feasibility, and potential impact."],
      ['🎤', 'Presentation & Pitching', 'Prepare students to present and defend their projects before judges.'],
      ['🚀', 'Entrepreneurship Skills', 'Build innovation, teamwork, communication, and entrepreneurial skills.']
    ],
    gains: [
      'Experience in developing real-world innovative projects',
      'Practical problem-solving and critical-thinking skills',
      'Experience in project development and pitching',
      'Exposure to innovation and entrepreneurship',
      'Recognition through competition awards and certificates according to the competition results'
    ],
    achievement: 'The Agrisky Project received financial support and business incubation through the Arab Innovation and Investment Fund Competition, helping the team develop and advance its innovative project.'
  },
  {
    id: 'tech-tank',
    category: 'Technology & Innovation',
    name: 'Tech Tank Competition',
    shortDescription: 'An innovation and technology competition where students turn creative technology-based solutions into practical projects and prototypes.',
    description: 'Tech Tank is an innovation and technology competition that challenges students to develop creative technology-based solutions to real-world problems. Participants transform their ideas into practical projects, build prototypes, and present their solutions to a panel of judges.',
    images: [
      '/assets/competitions/tech-tank-logo.jfif',
      '/assets/competitions/tech-tank-team-1.jfif',
      '/assets/competitions/tech-tank-team-2.jfif',
      '/assets/competitions/tech-tank-team-3.jfif',
      '/assets/competitions/tech-tank-team-4.jfif'
    ],
    whatWeDo: [
      ['💡', 'Innovation & Idea Development', 'Identify real-world problems and create technology-based solutions.'],
      ['🛠️', 'Prototype Development', 'Design and build working prototypes to demonstrate their ideas.'],
      ['💻', 'Technology Application', 'Apply programming, electronics, AI, IoT, and other technical skills to projects.'],
      ['🎤', 'Pitching & Presentation', 'Present projects and explain the solution, impact, and technical approach.'],
      ['🤝', 'Teamwork', 'Collaborate as a team to plan, develop, and improve the project.'],
      ['🚀', 'Entrepreneurial Thinking', 'Learn how to transform a technical idea into a practical and impactful solution.']
    ],
    gains: [
      'Real-world project development experience',
      'Stronger technical and problem-solving skills',
      'Experience in innovation and entrepreneurship',
      'Presentation and pitching skills',
      'Teamwork and communication skills',
      'Exposure to judges, experts, and the innovation ecosystem',
      'Recognition, awards, and opportunities according to competition results'
    ],
    achievement: 'Student achievement details will be added when the competition results are available.'
  },
  {
    id: 'arab-programming-week-2024',
    category: 'Programming & Artificial Intelligence',
    name: 'Arab Programming Week 2024',
    shortDescription: 'A regional Arab initiative combining programming, artificial intelligence, and digital creativity to build smart applications for the Arabic language.',
    description: 'The Arab Programming Week 2024 was the fourth edition of an Arab regional initiative organized by ALECSO in cooperation with the King Salman Global Academy for Arabic Language and the Tunisian Association for Educational Initiatives. The 2024 edition focused on “Smart Applications for the Arabic Language”, combining programming, artificial intelligence, and digital creativity to develop students’ technological skills.',
    images: [
      '/assets/competitions/arab-programming-week-cover.jfif',
      '/assets/competitions/arab-programming-week-team-1.jfif',
      '/assets/competitions/arab-programming-week-team-2.jfif'
    ],
    whatWeDo: [
      ['💻', 'Develop Programming Skills', 'Create websites, applications, games, and other digital projects.'],
      ['🤖', 'Explore Artificial Intelligence', 'Apply AI and prompt engineering to creative and educational projects.'],
      ['💡', 'Develop Innovative Solutions', 'Use technology to create solutions related to Arabic language and culture.'],
      ['🎨', 'Build Digital Creativity', 'Transform ideas into interactive digital products.'],
      ['🧠', 'Strengthen Problem-Solving Skills', 'Apply programming and technology to practical challenges.'],
      ['🌍', 'Participate in Arab-Level Competition', 'Compete with students from across the Arab world. The 2024 edition involved 19 Arab countries and nearly 3 million participants.']
    ],
    gains: [
      'Practical programming and technology experience',
      'Experience using AI and prompt engineering',
      'Creative and problem-solving skills',
      'Experience developing and presenting digital projects',
      'Exposure to a regional Arab competition',
      'Certificates and recognition based on participation and competition results'
    ],
    achievement: '🥉 3rd Place – Republic Level. One of our teams achieved 3rd place nationwide in the Arab Programming Week 2024 competition.'
  },
  {
    id: 'next-era',
    category: 'Technology & Innovation',
    name: 'Next Era Competition',
    shortDescription: 'An innovation and technology competition where students transform creative, technology-driven solutions into practical projects and prototypes.',
    description: 'Next Era is an innovation and technology competition that encourages students to develop creative, technology-driven solutions to real-world challenges. It provides students with an opportunity to transform their ideas into practical projects, develop prototypes, and present their solutions in a competitive environment.',
    images: [
      '/assets/competitions/next-era-cover.jfif',
      '/assets/competitions/next-era-team-1.jfif',
      '/assets/competitions/next-era-team-2.jfif',
      '/assets/competitions/next-era-team-3.jfif'
    ],
    whatWeDo: [
      ['💡', 'Innovation & Idea Development', 'Identify challenges and develop creative solutions.'],
      ['💻', 'Technology & Programming', 'Apply programming and emerging technologies to build solutions.'],
      ['🛠️', 'Prototype Development', 'Turn concepts into functional prototypes or working models.'],
      ['🧠', 'Problem-Solving', 'Apply analytical and critical-thinking skills to real-world problems.'],
      ['🎤', 'Presentation & Pitching', 'Present projects and communicate ideas clearly.'],
      ['🤝', 'Teamwork', 'Collaborate to design, develop, and improve projects.']
    ],
    gains: [
      'Practical technical and project-development experience',
      'Stronger innovation and problem-solving skills',
      'Experience in building and presenting technology projects',
      'Teamwork, communication, and leadership skills',
      'Exposure to innovation and entrepreneurship',
      'Recognition and awards based on competition results'
    ],
    achievement: 'Student achievement details will be added when the competition results are available.'
  },
  {
    id: 'ecpc',
    category: 'Competitive Programming',
    name: 'Egyptian Collegiate Programming Contest (ECPC)',
    shortDescription: 'Egypt’s national competitive programming contest, challenging three-person teams to solve advanced algorithmic problems under time pressure.',
    description: 'The Egyptian Collegiate Programming Contest (ECPC) is Egypt’s national competitive programming contest for university students and serves as the official qualifying competition for the Africa & Arab Collegiate Programming Championship (ACPC). Teams of three students solve challenging algorithmic problems under time constraints, developing advanced problem-solving, algorithmic thinking, teamwork, and programming skills.',
    images: [
      '/assets/competitions/ecpc-team-1.jfif',
      '/assets/competitions/ecpc-team-2.jfif',
      '/assets/competitions/ecpc-team-3.jfif',
      '/assets/competitions/ecpc-team-4.jfif',
      '/assets/competitions/ecpc-team-5.jfif'
    ],
    whatWeDo: [
      ['💻', 'Competitive Programming', 'Practice solving complex programming problems efficiently.'],
      ['🧠', 'Algorithmic Thinking', 'Apply algorithms and data structures to challenging problems.'],
      ['🔍', 'Problem-Solving', 'Analyze problems and develop optimized solutions.'],
      ['⏱️', 'Performance Under Pressure', 'Solve multiple problems within a limited competition time.'],
      ['🤝', 'Teamwork', 'Collaborate as a team to divide problems and develop solutions.'],
      ['🚀', 'Advanced Programming Skills', 'Strengthen coding and computational thinking skills.'],
      ['🌍', 'Competition Experience', 'Gain experience in a national competition connected to the regional ACPC and international ICPC ecosystem.']
    ],
    gains: [
      'Strong problem-solving and algorithmic skills',
      'Advanced experience in data structures and algorithms',
      'Teamwork and communication skills',
      'Experience solving problems under time pressure',
      'Exposure to competitive programming',
      'Opportunities to progress toward regional and international programming competitions through the ECPC → ACPC pathway'
    ],
    achievement: 'Student achievement details will be added when the competition results are available.'
  },
  {
    id: 'eistf',
    category: 'Science & Technology Fair',
    name: 'Egypt International Science and Technology Fair (EISTF)',
    shortDescription: 'An annual science and technology fair where students showcase research, present innovative projects, and compete for awards.',
    description: 'EISTF hosts an annual event for students from all over Egypt, as well as other countries, to showcase their research and compete for awards in different categories. The fair expands students’ minds, deepens their creativity, and helps them develop interpersonal and professional skills, equipping participants to apply their experiences to future careers and projects.',
    images: [
      '/assets/competitions/eistf-logo.png',
      '/assets/competitions/eistf-awards.jfif',
      '/assets/competitions/eistf-students.jfif'
    ],
    whatWeDo: [
      ['🔬', 'Scientific Research', 'Explore real-world problems and develop research-based solutions.'],
      ['💡', 'Innovation & Creativity', 'Transform ideas into innovative scientific and technological projects.'],
      ['🛠️', 'Project Development', 'Design, build, test, and improve working prototypes.'],
      ['💻', 'Technology Application', 'Apply programming, engineering, AI, electronics, and other technologies.'],
      ['🎤', 'Project Presentation', 'Present research and explain methodology and results to judges.'],
      ['🧠', 'Scientific Thinking', 'Develop analytical thinking, experimentation, and evidence-based problem-solving.'],
      ['🌍', 'International Exposure', 'Present projects alongside students from Egypt and other countries.']
    ],
    gains: [
      'Stronger scientific research skills',
      'Practical technical and engineering experience',
      'Innovation and problem-solving skills',
      'Experience developing research projects and prototypes',
      'Presentation and communication skills',
      'Exposure to national and international scientific competition',
      'Opportunities for awards, special recognition, and further competition opportunities'
    ],
    achievement: 'Student achievement details will be added when the competition results are confirmed.'
  },
  {
    id: 'isf',
    category: 'Innovation Support',
    name: 'Innovators Support Fund (ISF)',
    shortDescription: 'An Egyptian organization supporting talented students, innovators, and entrepreneurs in developing scientific and technological solutions.',
    description: 'The Innovators Support Fund (ISF) is an Egyptian organization that supports talented students, innovators, and entrepreneurs in developing scientific and technological solutions to real-world challenges. Its programs provide opportunities for training, innovation development, competitions, and support for promising projects.',
    images: ['/assets/competitions/isf-logo.png'],
    whatWeDo: [
      ['💡', 'Innovative Ideas', 'Develop innovative ideas and practical solutions.'],
      ['🔬', 'Science & Technology', 'Apply scientific and technological knowledge to real-world challenges.'],
      ['🛠️', 'Prototype Development', 'Develop, test, and improve working prototypes.'],
      ['📊', 'Practical Projects', 'Turn innovative ideas into practical projects.'],
      ['🎤', 'Presentation & Pitching', 'Develop confident presentation and pitching skills.'],
      ['🚀', 'Entrepreneurship', 'Explore entrepreneurship and commercialization opportunities.']
    ],
    gains: [
      'Innovation and creativity skills for turning ideas into solutions',
      'Research and technical skills applied to real-world problems',
      'Hands-on experience building and improving projects and prototypes',
      'Understanding how innovative ideas can become projects and startups',
      'Confidence presenting ideas and projects to judges and experts',
      'Teamwork, leadership, and communication skills'
    ],
    achievement: 'Student achievement details will be added when a confirmed project result is available.'
  }
];

function CompetitionImage({ competition, onOpen }) {
  return (
    <article
      className="card-interactive"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && onOpen()}
      style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 14, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,.04)', height: '100%' }}
    >
      <div className="img-zoom-container" style={{ height: 250, background: '#F8FAFC' }}>
        <img src={competition.images[0]} alt={competition.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        <span style={{ position: 'absolute', top: 12, left: 12, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(17,24,39,.86)', color: '#fff', padding: '6px 11px', borderRadius: 999, fontSize: 11, fontWeight: 700 }}>
          <Images size={14} /> {competition.images.length} {competition.images.length === 1 ? 'photo' : 'photos'} inside
        </span>
      </div>
      <div style={{ padding: 22 }}>
        <span style={{ color: 'var(--primary-red)', fontSize: 12, fontWeight: 800, textTransform: 'uppercase' }}>{competition.category}</span>
        <h3 style={{ fontSize: '1.25rem', margin: '7px 0 9px', color: '#111827' }}>{competition.name}</h3>
        <p style={{ color: '#4B5563', fontSize: '.9rem', lineHeight: 1.65, marginBottom: 18 }}>{competition.shortDescription}</p>
        <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: 13, color: 'var(--primary-red)', fontSize: 13, fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          View full competition details <ChevronRight size={17} />
        </div>
      </div>
    </article>
  );
}

function CompetitionSlideshow({ competition }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % competition.images.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [competition.images.length]);

  return (
    <div style={{ position: 'relative', height: 270, background: '#F8FAFC', overflow: 'hidden' }}>
      <img
        src={competition.images[imageIndex]}
        alt={`${competition.name} — image ${imageIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: imageIndex === 0 ? 'contain' : 'cover', transition: 'opacity .35s ease' }}
      />
      <div style={{ position: 'absolute', left: 16, bottom: 14, display: 'flex', gap: 6 }}>
        {competition.images.map((_, index) => (
          <span key={index} style={{ width: index === imageIndex ? 20 : 8, height: 8, borderRadius: 99, background: index === imageIndex ? 'var(--primary-red)' : 'rgba(255,255,255,.9)', boxShadow: '0 1px 4px rgba(0,0,0,.25)', transition: 'all .25s' }} />
        ))}
      </div>
    </div>
  );
}

export default function CompetitionsSection() {
  const { isArabic } = useLanguage();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const close = (event) => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [selected]);

  return (
    <section id="competitions" style={{ padding: '90px 0', background: '#F8FAFC' }}>
      <div className="container">
        <Reveal effect="fade-up">
          <div className="section-title-wrapper">
            <h2>{isArabic ? 'المسابقات والإنجازات الطلابية' : 'Competitions & Student Achievements'}</h2>
            <p>{isArabic ? 'مساحات تنافسية تطور مهارات طلابنا وتبرز إنجازاتهم محليًا ودوليًا' : 'Competitive experiences that develop our students’ skills and celebrate their achievements locally and internationally'}</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 390px))', gap: 24, justifyContent: 'center' }}>
          {competitions.map((competition, index) => (
            <Reveal key={competition.id} effect="fade-up" delay={index * 100}>
              <CompetitionImage competition={competition} onOpen={() => setSelected(competition)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" data-lenis-prevent onClick={() => setSelected(null)} role="presentation" style={{ overflowY: 'auto', overscrollBehavior: 'contain' }}>
          <div className="modal-dialog" data-lenis-prevent onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="competition-title" style={{ maxWidth: 780, overflowY: 'auto', overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ position: 'relative' }}>
              <CompetitionSlideshow competition={selected} />
              <button onClick={() => setSelected(null)} aria-label="Close competition details" style={{ position: 'absolute', top: 14, right: 14, width: 38, height: 38, border: 0, borderRadius: '50%', background: 'rgba(17,24,39,.82)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}><X size={19} /></button>
            </div>
            <div style={{ padding: '30px clamp(22px, 5vw, 38px) 38px' }}>
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, fontSize: 12, textTransform: 'uppercase' }}>Competition Name</span>
              <h3 id="competition-title" style={{ fontSize: '1.65rem', color: '#111827', margin: '5px 0 16px' }}>{selected.name}</h3>
              <DetailHeading icon={<Award size={19} />} title="Competition Description" />
              <p style={paragraphStyle}>{selected.description}</p>
              <DetailHeading icon={<Trophy size={19} />} title="What We Do" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 10, marginBottom: 26 }}>
                {selected.whatWeDo.map(([emoji, title, text]) => <div key={title} style={{ padding: 13, borderRadius: 9, background: '#F9FAFB', color: '#4B5563', fontSize: 13, lineHeight: 1.55 }}><strong style={{ color: '#111827' }}>{emoji} {title}</strong><br />{text}</div>)}
              </div>
              <DetailHeading icon={<CheckCircle2 size={19} />} title="What Students Gain" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 9, marginBottom: 26 }}>
                {selected.gains.map((gain) => <div key={gain} style={{ display: 'flex', gap: 8, color: '#374151', fontSize: 13.5, lineHeight: 1.5 }}><CheckCircle2 size={17} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: 2 }} />{gain}</div>)}
              </div>
              <DetailHeading icon={<Trophy size={19} />} title="Student Achievement" />
              <div style={{ ...paragraphStyle, marginBottom: 0, padding: '16px 18px', borderLeft: '4px solid var(--primary-red)', background: '#FFF7F7', borderRadius: 7 }}>{selected.achievement}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const paragraphStyle = { color: '#4B5563', fontSize: '.96rem', lineHeight: 1.75, marginBottom: 26 };

function DetailHeading({ icon, title }) {
  return <h4 style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#111827', fontSize: '1rem', margin: '0 0 10px' }}><span style={{ color: 'var(--primary-red)', display: 'flex' }}>{icon}</span>{title}</h4>;
}
