import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import IconsBlock from "@/components/IconsBlock";
import ExperienceBlock from "@/components/ExperienceBlock";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const experienceYears: number = new Date().getFullYear() - new Date('Nov 2018').getFullYear();
  return (
    <>
      <ThemeSwitcher />
      <ContactForm></ContactForm>
      <div className="grid sm:grid-row md:grid-cols-3 h-screen w-full p-2">
        <div className="bg-green rounded-2xl flex flex-col p-4 text-white dark:text-black">
          <div className="self-center w-6/12 aspect-square relative rounded-full overflow-hidden bg-white">
            <Image src="/images/gleb.webp" alt="Gleb's photo" fill sizes="(max-width: 768px) 100vw, 50vw" priority
              className="object-cover scale-125 object-top-left -translate-x-2 hover:rotate-[999deg] duration-10000 animate-walking"></Image>
          </div>

          <h2>About me</h2>
          <p>Experienced Full-Stack Web Developer with {experienceYears}+ years.</p>
          <p>I specialize in business process automation and scalable development — bridging code with real business value.</p>
          <p>I've built blazing-fast frontends, engineered internal tools that saved entire teams dozens of hours per month, and contributed to game engines.</p>
          <p>I bring structure to chaos. My work reduces friction, boosts performance, and often pays for itself in saved time or new revenue.</p>
          <p>I'm not just a developer — I'm a system thinker, a detail-driven builder, and a problem-solver who treats every product like my own.</p>
          <p>I love programming — but more importantly, my programming gets results.</p>
          <SectionTitle>Contacts</SectionTitle>
          <IconsBlock></IconsBlock>
          <SectionTitle>Languages</SectionTitle>
          <ul>
            <li>English</li>
            <li>Ukrainian</li>
            <li>Russian</li>
          </ul>

          <SectionTitle>Expertise</SectionTitle>
          <ul>
            <li>Technical Leadership</li>
            <li>Creativity & Adaptability</li>
            <li>Web Performance</li>
            <li>Process Automation</li>
            <li>Critical Thinking</li>
            <li>Communication & Teamwork</li>
            <li>Attention to Detail</li>
            <li>Analytical Mindset</li>
            <li>Thoroughness / Precision</li>
            <li>Problem Solving</li>
            <li>Leadership & Responsibility</li>
          </ul>
        </div>

        <div className="md:col-span-2 flex flex-col md:pl-2">
          <div className="grid grid-cols-12 grid-rows-4 text-orange">
            <h1 className="col-start-1 sm:col-start-3 shadow-black text-shadow-lg uppercase">Gleb</h1>
            <h1 className="col-start-2 sm:col-start-4 shadow-black text-shadow-lg row-start-2 uppercase">Snezhko</h1>
            <h1 className="col-start-3 sm:col-start-6 shadow-black text-shadow-lg row-start-3 uppercase">Web</h1>
            <h1 className="col-start-3 sm:col-start-7 shadow-black text-shadow-lg row-start-4 uppercase">Developer</h1>
          </div>

          <SectionTitle inverted={true} small={true}>Experience</SectionTitle>
          <ExperienceBlock
            year={'Jan 2025 - Present'}
            stack={'WordPress, PHP, Node.js, Bitrix24, Git, Telegram API, CF7, Polylang, WPForms, Fluent, Contact Form 7, Search'}
            title={'Full-Stack Developer — ‘Flexsol’'}>
            <ul>
              <li>Handled all frontend, backend, and devops tasks</li>
              <li>Fixed a critical vulnerability that hackers used to redirect traffic and inject backdoors</li>
              <li>Created a lead sending system from the website to a Telegram group via a bot</li>
              <li>Reinvented Bitrix forms by adding new features/functions</li>
              <li>Developed email templates following best practices</li>
              <li>Configured GTM and redirects</li>
              <li>Optimized the website, significantly improving loading speed</li>
              <li>Reduced lead processing workload by 50% thanks to automations</li>
              <li>Set up a full email infrastructure for the domain: configured DNS records, implemented email forwarding, SMTP authentication, and API integration for sending emails from the frontend.</li>
            </ul>
          </ExperienceBlock>
          <ExperienceBlock
            year={'Feb 2022 - Dec 2024'}
            stack={'TypeScript, Node.js, Pixi.js, Webpack, npm, Git, JavaScript, AnimatedSprite, Webgl, Gsap, Tween.js, Json, Jenkins, Jira'}
            title={'Middle Frontend Developer (RnD) – ‘Playtech’'}>
            <ul>
              <li>Worked on a complex game engine for slot games, participated in optimization, maintenance, and development of new features</li>
              <li>Converted project build from Gulp to Webpack, doubling the speed</li>
              <li>Developed a game from scratch on the engine</li>
              <li>Successfully completed RnD tasks</li>
              <li>Created an internal npm package templating tool for rapid game creation</li>
              <li>Rewrote the Showcase project from scratch, adapting it to the new engine version</li>
              <li>Participated in daily meetings, recorded training videos for new employees, and constantly helped colleagues</li>
            </ul>
          </ExperienceBlock>
          <ExperienceBlock
            year={'Jan 2020 - Feb 2022'}
            stack={'TypeScript, PHP, SCSS, Bootstrap, Amocrm, RetailCRM, Webpack, API'}
            title={'CTO / Full-Stack – ‘Octavia’'}>
            <ul>
              <li>Built the website from scratch considering business needs</li>
              <li>Fully supervised the technical part of the project and made decisions on all tasks</li>
              <li>Optimized conversions through UX/UI and custom sales funnels in CRM</li>
              <li>Created a web application for the call center with API synchronization with warehouse software and CRM</li>
              <li>Integrated Amocrm and RetailCRM, wrote custom PHP connectors</li>
              <li>Conducted A/B tests and analyzed user behavior</li>
            </ul>
          </ExperienceBlock>
          <ExperienceBlock
            year={'Nov 2018 - Dec 2020'}
            stack={'JavaScript, CSS, JQuery, Bash, Stylus, Firebase, HTML, Cordova, GitLab'}
            title={'Frontend Developer – ‘Yclients’'}>
            <ul>
              <li>Built Cordova applications and published them in the AppStore and PlayMarket</li>
              <li>Automated tasks using bash scripts</li>
              <li>Developed UI and logic for the website, connected APIs and fixed bugs</li>
              <li>Used Firebase for notifications</li>
            </ul>
          </ExperienceBlock>


          <SectionTitle inverted={true} small={true}>Education</SectionTitle>
          <ExperienceBlock
            year={'2015-2020'}
            stack={'C++, C#, Assembler'}
            title={'National Technical University ‘Kharkiv Polytechnic Institute’'}>
            Master's Degree in System Analysis.
          </ExperienceBlock>
          <ExperienceBlock
            year={'in 2015'}
            stack={'Pascal, Math'}
            title={'LLC Private Institution ‘Professional Lyceum’'}
            period='(a lot of time)'>
            Programming started in 9th grade.
          </ExperienceBlock>

          <SectionTitle inverted={true} small={true}>Skills Summary</SectionTitle>
          <ul>
            <li>
              <span>Frontend: </span>
              <ul className="pl-4 odd">
                <li><span>Basic: </span>TypeScript, JavaScript, HTML, CSS</li>
                <li><span>Frameworks: </span>Next.js, React</li>
                <li><span>GameDev: </span>Pixi.js, WebGL, Gsap, Tween.js, Canvas, ECS</li>
                <li><span>CSS: </span>Tailwind, SCSS/SASS, Bootstrap, Preprocessors</li>
                <li><span>Bundlers: </span>Webpack, Vite, Rollup, ESbuild, Gulp</li>
                <li><span>Testing: </span>e2e, A/B testing</li>
                <li><span>API integrations:</span>Telegram, CRM's, etc...</li>
                <li><span>Other: </span>JQuery, JSON, npm, RegExp, Email layout (high compatibility), GTM, Jira, Jenkins, Mailgun, CI/CD</li>
              </ul>
            </li>
            <li>
              <span>Backend: </span>Node.js (CLI tools, API integrations), PHP,
              Firebase (notifications, integrations), Bash (scripts, automation)
            </li>
            <li>
              <span>CMS / WordPress: </span>Deep customization of plugins and themes, ACF, CF7, WPForms, Fluent Forms, SearchWP
              Polylang, WPML, Ajax search, custom PHP code, Security (audit, vulnerability elimination)
            </li>
            <li>
              <span>CRM: </span> Full setup, site integration, business process design, automation: Bitrix24, Amocrm, RetailCRM and others
            </li>
            <li><span>DevOps: </span>SSH, DNS, SMTP, SSL, Redirects, .htaccess, hosting settings</li>
            <li><span>Automation: </span>automation/optimization of business processes (reducing costs and time),
              internal CLI tool creation, implementation of new solutions, integration between systems via API</li>
          </ul>
        </div>

        <div className="pb-20 md:pb-4"></div>
      </div>
    </>
  );
}
