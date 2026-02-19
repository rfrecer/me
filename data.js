const cvData = {
    experience: [
        {
            title: "Business Consultant",
            company: "Gisat",
            date: "Mar 2023 – present",
            bullets: [
                "Designed and implemented new tools and workflows for a 35-member R&D team using Google Workspace and Notion",
                "Developed and delivered training in project management to employees in management roles",
                "Led projects delivering EO services to international clients",
                "Implemented a new performance evaluation framework to foster accountability and ownership",
                "Initiated and directed an overhaul of brand identity and communication strategy"
            ],
            tags: [
                { name: "Process engineering", color: "green" },
                { name: "Strategic planning", color: "green" },
                { name: "Project management", color: "blue" },
                { name: "Notion", color: "gray" },
                { name: "Process implementation", color: "blue" },
                { name: "React.js", color: "gray" },
                { name: "Performance evaluation", color: "blue" },
                { name: "Google Workspace", color: "gray" },
                { name: "Figma", color: "gray" }
            ]
        },
        {
            title: "Site Director",
            company: "Represent.com",
            date: "Apr 2022 – Feb 2023",
            bullets: [
                "Directed all site operations for the Prague office, overseeing a team of approximately 20 employees",
                "Managed the Czech corporate entity with full legal, payroll and regulatory responsibilities"
            ],
            tags: [
                { name: "Site operations", color: "blue" },
                { name: "Performance evaluation", color: "blue" },
                { name: "Process implementation", color: "blue" },
                { name: "Legal compliance", color: "red" },
                { name: "Google Workspace", color: "gray" }
            ]
        },
        {
            title: "Director of Operations & Customer Experience",
            company: "Represent.com",
            date: "Jul 2018 – Jan 2023",
            bullets: [
                "Managed team leaders in Operations and Customer Experience departments, fostering a culture of positive and honest leadership",
                "Prepared cost-benefit analyses for major strategic initiatives to inform executive decision-making",
                "Acted in various roles as VOC, stakeholder and product owner for API integrations with internal and external engineering teams"
            ],
            tags: [
                { name: "Performance evaluation", color: "blue" },
                { name: "Project management", color: "blue" },
                { name: "Strategic planning", color: "green" },
                { name: "Google Workspace", color: "gray" }
            ]
        },
        {
            title: "Head of Customer Experience & Operations",
            company: "Represent.com",
            date: "Apr 2016 – Jul 2018",
            bullets: [
                "Built and scaled high-performing Customer Experience teams in Prague and Los Angeles",
                "Partnered with engineering to enhance customer-facing features and improve the user experience of internal dashboards.",
                "Prepared cost-benefit analyses for major strategic initiatives to inform executive decision-making",
                "Managed API integrations with key partners, including printers and external vendors."
            ],
            tags: [
                { name: "Hiring", color: "blue" },
                { name: "Cost-benefit analysis", color: "green" },
                { name: "Project management", color: "blue" },
                { name: "Google Workspace", color: "gray" }
            ]
        },
        {
            title: "Customer Experience Manager",
            company: "Represent.com",
            date: "Mar 2015 – Mar 2016",
            bullets: [
                "Handled customer-facing strategy and communication for leading influencer merch brand based in Los Angeles",
                "Drove UI redesign of internal dashboards and tools to raise operational efficiency by 80%"
            ],
            tags: [
                { name: "Customer experience", color: "brown" },
                { name: "UI design", color: "gray" },
                { name: "Copywriting", color: "brown" }
            ]
        },
        {
            title: "Assistant Lecturer in Roman Archaeology",
            company: "Charles University",
            date: "Feb 2014 – Jun 2015",
            bullets: [
                "Taught undergraduate courses Studies in the Ancient Economy and Roman Archaeology at the Institute of Classical Archaeology (Faculty of Arts)"
            ],
            tags: [
                { name: "University teaching", color: "brown" },
                { name: "Roman archaeology", color: "brown" },
                { name: "Ancient economy", color: "brown" }
            ]
        },
        {
            title: "Translator",
            company: "Freelance",
            date: "Jun 2007 – Mar 2015",
            bullets: [
                "Translated legal and medical texts for various clients including O2, the Ministry of Health (Slovakia), and Union"
            ],
            tags: []
        }
    ],

    education: [
        {
            degree: "Doctor of Philosophy (PhD.), Classical Archaeology",
            university: "Charles University",
            date: "Sep 2007 – Jun 2015",
            location: "Prague",
            details: "Doctoral thesis: Gerulata: The Lamps. Roman Lamps in a Provincial Context. Conducted research in the economy of Roman lamps and proposed an original model of production by subsidiary workshops that explained finds of lamp “copies” which had long been misattributed."
        },
        {
            degree: "Master of Arts (Mgr.), Classical Archaeology",
            university: "Charles University",
            date: "Sep 2010 – Sep 2012",
            location: "Prague",
            details: "Master’s thesis: Roman Lamps from the Cemeteries of Gerulata (Rusovce)."
        },
        {
            degree: "Bachelor of Arts (Bc.), Classical Archaeology",
            university: "Charles University",
            date: "Sep 2007 – Sep 2010",
            location: "Prague",
            details: "Bachelor’s thesis: Roman Civilian Buildings North of the Limes Romanus in the Danube Lowland."
        }
    ],

    projects: [
        {
            title: "Terez Frecerová Portfolio",
            url: "https://terezfrecerova.sk/",
            description: "Artist portfolio website for singer, songwriter and author Terez Frecerová, ©️2026",
            bullets: [],
            tags: [
                { name: "React.js", color: "gray" },
                { name: "Frontend design", color: "gray" }
            ]
        },
        {
            title: "Sustainable Landscape for Integrated Management (SLIM)",
            url: "https://gisat.github.io/app-slim-maps/",
            description: "A series of geospatial products showing the dynamics of landscape change and risk of natural disasters such as floods, wildfires and drought, in Zambia. Services were developed in close cooperation with Zambian government and public institutions through in-person user research, validation, and training. The project was funded by CzechAid.",
            bullets: [],
            tags: [
                { name: "React.js", color: "gray" },
                { name: "Frontend design", color: "gray" }
            ]
        },
        {
            title: "Špaňodolinské granty",
            url: "https://rfrecer.github.io/spanodolinske-granty/",
            description: "A map of traditional waterwells in the historical mining village of Špania Dolina, Slovakia. This medieval network of mountain streams was engineered to supply the village with drinking water but has recently mostly dried out or become polluted. The project aims to initiate restoration efforts of this unique water source, its importance highlighted by recent years of drought caused by climate change. ©️2025",
            bullets: [],
            tags: [
                { name: "Frontend design", color: "gray" }
            ]
        },
        {
            title: "🪔 Archaeology",
            url: "",
            description: "",
            bullets: [
                "Uncovered Roman-style buildings and Celtic coin hoard at Bratislava Castle 🇸🇰 (2009)",
                "Studied and published Roman lamps of Gerulata 🇸🇰 (2011–2015)",
                "Surveyed city walls of Eryx, Sicily 🇮🇹 (2013)",
                "Excavated Roman settlement near Stroyno, Bulgaria 🇧🇬 (2015)"
            ],
            tags: [
                { name: "Roman archaeology", color: "brown" },
                { name: "Ancient economy", color: "brown" }
            ]
        }
    ],

    affiliations: [
        "🇺🇸 Benjamin Franklin Transatlantic Fellows Initiative (’06 Alumnus)",
        "🇪🇺 European Association of Archaeologists",
        "🇪🇺 Limes Congress",
        "🇨🇿 Klub Alumni Univerzity Karlovy"
    ],

    languages: [
        { language: "Slovak", proficiency: "Native" },
        { language: "English", proficiency: "Fluent" },
        { language: "German", proficiency: "Proficient" },
        { language: "Czech", proficiency: "Proficient" }
    ],

    bibliography: [
        "Frecer, R. 2015. Gerulata: The Lamps. Roman Lamps in a Provincial Context. Prague: Karolinum, 420 p. ISBN 978-80-246-2710-6",
        "Frecer, R. 2015. New evidence on the organization of the Roman lamp industry. The lamps of Gerulata (Bratislava-Rusovce). Paper presented at the XXIII. Limes Congress in Ingolstadt, Germany.",
        "Frecer, R. 2015. (ed.) Contacts, Migrations and Climate Change: Conference in honor of Jan Bouzek. Prague: Institute of Classical Archaeology, 82 p. ISBN 978-80-260-7957-6",
        "Frecer, R. 2015. Stoicism in Practice: The Cosmopolitanism of Cicero and the Development of Roman Citizenship. Self-published, 19 p.",
        "Tušlová, P., Weissová, B., Bakhardziev, S., Čisťakova, V., Frecer, R., Janouchová, P. 2015. The Stroyno Archaeological Project, Report on the Season 2015. In: Studia Hercynia XIX/1–2, pp. 243–261",
        "Frecer, R. 2014. A Unique Roman Upper Lamp Mold from Brigetio. In: Zbornik Slovenského národného múzea CVIII - Archeológia 24, pp. 127-132",
        "Frecer, R. 2013. Lux Mortis: A material study of Roman lamps in funerary practice. Paper presented at the 19th EAA Annual Meeting, Plzeň, Czech Republic.",
        "Frecer, R., Soták, Š. 2013. ImageSize Normalizer: Vytvorenie jednotnej mierky pre fotografie na priklade katalógu rímskych lámp z pohrebísk Gerulaty. Poster presentation at Počítačová podpora v archeológii 2013 conference in Kočovce, Slovakia",
        "Frecer, R. 2013. Roman Lamps of Gerulata and their Role in Funeral Rites. In: Zborník Slovenského národného múzea CVII – Archeológia 23, pp. 51-60"
    ]
};