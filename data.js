const cvData = {
    personal: {
        profilePic: "assets/profile.png",
        email: "r.frecer@gmail.com",
        github: "https://github.com/rfrecer",
        linkedin: "https://www.linkedin.com/in/robert-frecer-924561169",
        academia: "https://cuni.academia.edu/RobertFrecer",
        goodreads: "https://www.goodreads.com/author/show/8585122.Robert_Frecer"
    },

    skills: [
        { id: "strat_plan", name: "Strategic planning", color: "green" },
        { id: "cost_ben", name: "Cost-benefit analysis", color: "green" },
        { id: "proc_eng", name: "Process engineering", color: "green" },
        { id: "proj_man", name: "Project management", color: "blue" },
        { id: "proc_imp", name: "Process implementation", color: "blue" },
        { id: "rom_arch", name: "Roman archaeology", color: "brown" },
        { id: "anc_econ", name: "Ancient economy", color: "brown" },
        { id: "react", name: "React.js", color: "gray" },
        { id: "front_des", name: "Frontend design", color: "gray" },
        { id: "sql", name: "SQL", color: "gray" },
        { id: "notion", name: "Notion", color: "gray" },
        { id: "ui_des", name: "UI design", color: "gray" },
        { id: "g_workspace", name: "Google Workspace", color: "gray" },
        { id: "figma", name: "Figma", color: "gray" },
        { id: "perf_eval", name: "Performance evaluation", color: "yellow" },
        { id: "uni_teach", name: "University teaching", color: "yellow" },
        { id: "site_ops", name: "Site operations", color: "default" },
        { id: "hiring", name: "Hiring", color: "default" },
        { id: "legal_comp", name: "Legal compliance", color: "default" },
        { id: "cx", name: "Customer experience", color: "orange" },
        { id: "copywriting", name: "Copywriting", color: "orange" }
    ],

    experience: [
        {
            title: "Business Consultant",
            company: "Gisat",
            url: "https://gisat.cz",
            date: "Mar 2023 – present&nbsp;", 
            bullets: [
                "Designed and implemented new tools and workflows for a 35-member R&D team using Google Workspace and Notion",
                "Developed and delivered training in project management to employees in management roles",
                "Led projects delivering EO services to international clients",
                "Implemented a new performance evaluation framework to foster accountability and ownership",
                "Initiated and directed an overhaul of brand identity and communication strategy"
            ],
            tags: [
                "proc_eng", "strat_plan", "proj_man", "notion", "proc_imp", 
                "react", "perf_eval", "g_workspace", "figma"
            ]
        },
        {
            title: "Site Director",
            company: "Represent.com",
            url: "https://represent.com",
            date: "Apr 2022 – Feb 2023",
            bullets: [
                "Directed all site operations for the Prague office, overseeing a team of approximately 20 employees",
                "Managed the Czech corporate entity with full legal, payroll and regulatory responsibilities"
            ],
            tags: [
                "site_ops", "perf_eval", "proc_imp", "legal_comp", "g_workspace"
            ]
        },
        {
            title: "Director of Operations & Customer Experience",
            company: "Represent.com",
            url: "https://represent.com",
            date: "Jul 2018 – Jan 2023",
            bullets: [
                "Managed team leaders in Operations and Customer Experience departments, fostering a culture of positive and honest leadership",
                "Prepared cost-benefit analyses for major strategic initiatives to inform executive decision-making",
                "Acted in various roles as VOC, stakeholder and product owner for API integrations with internal and external engineering teams"
            ],
            tags: [
                "perf_eval", "proj_man", "strat_plan", "g_workspace"
            ]
        },
        {
            title: "Head of Customer Experience & Operations",
            company: "Represent.com",
            url: "https://represent.com",
            date: "Apr 2016 – Jul 2018",
            bullets: [
                "Built and scaled high-performing Customer Experience teams in Prague and Los Angeles",
                "Partnered with engineering to enhance customer-facing features and improve the user experience of internal dashboards.",
                "Prepared cost-benefit analyses for major strategic initiatives to inform executive decision-making",
                "Managed API integrations with key partners, including printers and external vendors."
            ],
            tags: [
                "hiring", "cost_ben", "proj_man", "g_workspace"
            ]
        },
        {
            title: "Customer Experience Manager",
            company: "Represent.com",
            url: "https://represent.com",
            date: "Mar 2015 – Mar 2016",
            bullets: [
                "Handled customer-facing strategy and communication for leading influencer merch brand based in Los Angeles",
                "Drove UI redesign of internal dashboards and tools to raise operational efficiency by 80%"
            ],
            tags: [
                "cx", "ui_des", "copywriting"
            ]
        },
        {
            title: "Assistant Lecturer in Roman Archaeology",
            company: "Charles University",
            url: "https://cuni.cz",
            date: "Feb 2014 – Jun 2015",
            bullets: [
                "Taught undergraduate courses Studies in the Ancient Economy and Roman Archaeology at the Institute of Classical Archaeology (Faculty of Arts)"
            ],
            tags: [
                "uni_teach", "rom_arch", "anc_econ"
            ]
        },
        {
            title: "Translator",
            company: "Freelance",
            url: "",
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
            url: "https://cuni.cz",
            date: "Sep 2007 – Jun 2015",
            details: "Doctoral thesis: Gerulata: The Lamps. Roman Lamps in a Provincial Context. Conducted research in the economy of Roman lamps and proposed an original model of production by subsidiary workshops that explained finds of lamp “copies” which had long been misattributed."
        },
        {
            degree: "Master of Arts (Mgr.), Classical Archaeology",
            university: "Charles University",
            url: "https://cuni.cz",
            date: "Sep 2010 – Sep 2012",
            details: "Master’s thesis: Roman Lamps from the Cemeteries of Gerulata (Rusovce)."
        },
        {
            degree: "Bachelor of Arts (Bc.), Classical Archaeology",
            university: "Charles University",
            url: "https://cuni.cz",
            date: "Sep 2007 – Sep 2010",
            details: "Bachelor’s thesis: Roman Civilian Buildings North of the Limes Romanus in the Danube Lowland."
        }
    ],

    projects: [
        {
            title: "Terez Frecerová Portfolio",
            url: "https://terezfrecerova.sk/",
            date: "2026",
            image: "assets/terez-frecerova-2.jpg",
            description: "Artist portfolio website for singer, songwriter and author Terez Frecerová.",
            tags: [
                "react", "front_des"
            ]
        },
        {
            title: "Sustainable Landscape for Integrated Management",
            url: "https://gisat.github.io/app-slim-maps/",
            date: "2023 – 2024",
            image: "assets/slim-2.jpg",
            description: "A series of geospatial products showing the dynamics of landscape change and risk of natural disasters such as floods, wildfires and drought, in Zambia. Services were developed in close cooperation with Zambian government and public institutions through in-person user research, validation, and training. The project was funded by CzechAid.",
            tags: [
                "react", "front_des"
            ]
        },
        {
            title: "Špaňodolinské granty",
            url: "https://rfrecer.github.io/spanodolinske-granty/",
            date: "2025",
            image: "assets/granty-1.jpg",
            description: "A map of traditional waterwells in the historical mining village of Špania Dolina, Slovakia. This medieval network of mountain streams was engineered to supply the village with drinking water but has recently mostly dried out or become polluted. The project aims to initiate restoration efforts of this unique water source, its importance highlighted by recent years of drought caused by climate change.",
            tags: [
                "front_des"
            ]
        },
        {
            title: "Archaeological Fieldwork & Research",
            url: "",
            date: "2009 – 2015",
            image: "assets/archaeology-2.jpg",
            description: "Directed international archaeological excavations and surveys across Slovakia, Sicily, and Bulgaria. Key achievements include the discovery of Roman-style buildings and a Celtic coin hoard at Bratislava Castle, the comprehensive study and publication of Roman lamps from Gerulata, and the mapping of ancient city walls in Eryx, Sicily. This fieldwork required rigorous project management, cross-border academic collaboration, and extensive data analysis.",
            tags: [
                "rom_arch", "anc_econ"
            ]
        }
    ],

    affiliations: [
        { emoji: "🇺🇸", text: "Benjamin Franklin Transatlantic Fellows Initiative (’06 Alumnus)" },
        { emoji: "🇪🇺", text: "European Association of Archaeologists" },
        { emoji: "🇪🇺", text: "Limes Congress" },
        { emoji: "🇨🇿", text: "Klub Alumni Univerzity Karlovy" }
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