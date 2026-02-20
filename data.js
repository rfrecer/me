const cvData = {
    personal: {
        profilePic: "assets/profile.png",
        email: "r.frecer@gmail.com",
        github: "https://github.com/rfrecer",
        linkedin: "https://www.linkedin.com/in/robert-frecer-924561169",
        academia: "https://cuni.academia.edu/RobertFrecer",
        goodreads: "https://www.goodreads.com/author/show/8585122.Robert_Frecer"
    },

    bio: [
        "With a decade of operational leadership in technology and merchandising, my work is driven by a need for resource efficiency. I lead high-performing international teams, engineer scalable processes, and direct complex projects ranging from post-merger corporate integrations to delivering geospatial services to governments.",
        "My background includes a PhD in Classical Archaeology. While tech management requires crafting rigorous systems, archaeology trained me as a pattern matcher who evaluates fragments to see the bigger picture. Whether optimizing a global supply chain or building a team, my approach remains pragmatic. I believe the best solution to every problem is out there, you just have to be willing to find it."
    ],

    skills: [
        { id: "strat_plan", name: "Strategic planning", color: "green" },
        { id: "cost_ben", name: "Cost-benefit analysis", color: "green" },
        { id: "proc_eng", name: "Process engineering", color: "green" },
        { id: "proj_man", name: "Project management", color: "blue" },
        { id: "tech_pm", name: "Technical project management", color: "blue" },
        { id: "proc_imp", name: "Process implementation", color: "blue" },
        { id: "rom_arch", name: "Roman archaeology", color: "brown" },
        { id: "anc_econ", name: "Ancient economy", color: "brown" },
        { id: "ai_dev", name: "AI-assisted development", color: "gray" },
        { id: "git", name: "Git / Version control", color: "gray" },
        { id: "html_css", name: "HTML/CSS", color: "gray" },
        { id: "sql", name: "SQL", color: "gray" },
        { id: "notion", name: "Notion", color: "gray" },
        { id: "ui_des", name: "UI design", color: "gray" },
        { id: "g_workspace", name: "Google Workspace", color: "gray" },
        { id: "figma", name: "Figma", color: "gray" },
        { id: "web_mapping", name: "Web mapping", color: "yellow" },
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
                "perf_eval", "g_workspace", "figma"
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
                "Guided executive decision-making through comprehensive cost-benefit analyses on complex integrations and global scaling efforts",
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
                "Partnered with engineering to enhance customer-facing features and improve the user experience of internal dashboards",
                "Established cost-benefit analysis frameworks for strategic initiatives to inform early executive decision-making",
                "Managed API integrations with key partners, including printers and external vendors"
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
            bullets: [
                "Doctoral thesis: <a href='https://dspace.cuni.cz/handle/20.500.11956/77969' target='_blank' class='inline-link'>Gerulata: The Lamps. Roman Lamps in a Provincial Context</a>",
                "Conducted research in the economy of Roman lamps and proposed an original model of production by subsidiary workshops that explained finds of lamp “copies” which had long been misattributed"
            ]
        },
        {
            degree: "Master of Arts (Mgr.), Classical Archaeology",
            university: "Charles University",
            url: "https://cuni.cz",
            date: "Sep 2010 – Sep 2012",
            bullets: [
                "Master’s thesis: <a href='https://dspace.cuni.cz/handle/20.500.11956/42712' target='_blank' class='inline-link'>Roman Lamps from the Cemeteries of Gerulata (Rusovce)</a>"
            ]
        },
        {
            degree: "Bachelor of Arts (Bc.), Classical Archaeology",
            university: "Charles University",
            url: "https://cuni.cz",
            date: "Sep 2007 – Sep 2010",
            bullets: [
                "Bachelor’s thesis: <a href='https://dspace.cuni.cz/handle/20.500.11956/38226' target='_blank' class='inline-link'>Roman Civilian Buildings North of the Limes Romanus in the Danube Lowland</a>"
            ]
        }
    ],

    projects: [
        {
            title: "Gisat Website",
            url: "https://gisat.github.io/gisat-website",
            date: "2026",
            thumbnail: "assets/gisat-1.jpg",
            image: "assets/gisat-2.jpg",
            description: "Designed and developed the company website from the ground up for a remote sensing firm based in Prague. Built outside of traditional frameworks utilizing Vanilla JS, HTML/CSS, and AI-assisted coding workflows, resulting in a highly modular, data-driven, and resource-efficient architecture.",
            tags: [
                "ai_dev", "html_css", "git"
            ]
        },
        {
            title: "Terez Frecerová Portfolio",
            url: "https://terezfrecerova.sk/",
            date: "2026",
            thumbnail: "assets/terez-frecerova-1.jpg",
            image: "assets/terez-frecerova-2.jpg",
            description: "Designed, developed, and hosted an artist portfolio website for singer, songwriter, and author Terez Frecerová. Built using modern frontend tooling (Vite, Tailwind CSS, React) combined with AI-assisted development protocols to accelerate delivery.",
            tags: [
                "ai_dev", "html_css", "git"
            ]
        },
        {
            title: "Sustainable Landscape for Integrated Management",
            url: "https://gisat.github.io/app-slim-maps/",
            date: "2023 – 2024",
            thumbnail: "assets/slim-1.jpg",
            image: "assets/slim-2.jpg",
            description: "Managed the delivery of a suite of geospatial products for the Zambian public sector, funded by CzechAid. Coordinated directly with ministries and agencies on the ground in Zambia to gather user requirements, acting as the primary bridge between stakeholders and two distinct technical teams (Earth Observation data and Web Application development). Rapidly prototyped and deployed the initial public-facing portal to house the data, ensuring UI/UX consistency across products, while overseeing the long-term development of the final platform.",
            tags: [
                "tech_pm", "web_mapping", "ui_des"
            ]
        },
        {
            title: "Špaňodolinské granty",
            url: "https://rfrecer.github.io/spanodolinske-granty/",
            date: "2025",
            thumbnail: "assets/granty-2.jpg",
            image: "assets/granty-1.jpg",
            description: "An end-to-end solo project mapping traditional waterwells in the historical mining village of Špania Dolina, Slovakia. Managed the complete project lifecycle, including field photography, copywriting, and the development of an interactive web portal (built via AI-assisted workflows) to highlight the climate-driven degradation of this medieval water network.",
            tags: [
                "ai_dev", "web_mapping", "copywriting"
            ]
        },
        {
            title: "Archaeological Fieldwork & Research",
            url: "",
            date: "2009 – 2015",
            thumbnail: "assets/archaeology-1.jpg",
            image: "assets/archaeology-2.jpg",
            description: "Directed international archaeological fieldwork and surveys across Slovakia, Sicily, and Bulgaria between 2009 and 2015. Key fieldwork included uncovering Roman-style buildings and a Celtic coin hoard at Bratislava Castle, surveying the ancient city walls of Eryx, and excavating a Roman settlement near Stroyno. The role required cross-border academic collaboration, complex logistical planning, and the rigorous synthesis and publication of material data, culminating in the comprehensive study of Roman lamps from the cemeteries of Gerulata.",
            tags: [
                "rom_arch", "anc_econ", "proj_man"
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
        "Frecer, R. 2015. <a href='https://karolinum.cz/knihy/frecer-gerulata-the-lamps-15016' target='_blank' class='inline-link'>Gerulata: The Lamps. Roman Lamps in a Provincial Context</a>. Prague: Karolinum, 420 p. ISBN 978-80-246-2710-6",
        "Frecer, R. 2015. <i>New evidence on the organization of the Roman lamp industry. The lamps of Gerulata (Bratislava-Rusovce)</i>. Paper presented at the XXIII. Limes Congress in Ingolstadt, Germany.",
        "Frecer, R. 2015. (ed.) <i>Contacts, Migrations and Climate Change: Conference in honor of Jan Bouzek</i>. Prague: Institute of Classical Archaeology, 82 p. ISBN 978-80-260-7957-6",
        "Frecer, R. 2015. <a href='https://www.academia.edu/11106318/Stoicism_in_Practice_The_Cosmopolitanism_of_Cicero_and_the_Development_of_Roman_Citizenship' target='_blank' class='inline-link'>Stoicism in Practice: The Cosmopolitanism of Cicero and the Development of Roman Citizenship</a>. Self-published, 19 p.",
        "Tušlová, P., Weissová, B., Bakhardziev, S., Čisťakova, V., Frecer, R., Janouchová, P. 2015. <a href='https://www.academia.edu/66955096/The_Stroyno_Archaeological_Project_Report_on_the_Season_2015' target='_blank' class='inline-link'>The Stroyno Archaeological Project, Report on the Season 2015</a>. In: Studia Hercynia XIX/1–2, pp. 243–261",
        "Frecer, R. 2014. <a href='https://www.academia.edu/10654573/A_Unique_Roman_Upper_Lamp_Mold_from_Brigetio' target='_blank' class='inline-link'>A Unique Roman Upper Lamp Mold from Brigetio</a>. In: Zbornik Slovenského národného múzea CVIII - Archeológia 24, pp. 127-132",
        "Frecer, R. 2013. <i>Lux Mortis: A material study of Roman lamps in funerary practice</i>. Paper presented at the 19th EAA Annual Meeting, Plzeň, Czech Republic.",
        "Frecer, R., Soták, Š. 2013. <a href='https://www.academia.edu/3589646/ImageSizeNormalizer_Vytvorenie_jednotnej_mierky_pre_fotografie_na_pr%C3%ADklade_katal%C3%B3gu_r%C3%ADmskych_l%C3%A1mp_z_pohreb%C3%ADsk_Gerulaty' target='_blank' class='inline-link'>ImageSize Normalizer: Vytvorenie jednotnej mierky pre fotografie na priklade katalógu rímskych lámp z pohrebísk Gerulaty</a>. Poster presentation at Počítačová podpora v archeológii 2013 conference in Kočovce, Slovakia",
        "Frecer, R. 2013. <a href='https://www.academia.edu/5928018/Roman_Lamps_of_Gerulata_and_their_Role_in_Funerary_Rites' target='_blank' class='inline-link'>Roman Lamps of Gerulata and their Role in Funeral Rites</a>. In: Zborník Slovenského národného múzea CVII – Archeológia 23, pp. 51-60"
    ]
};