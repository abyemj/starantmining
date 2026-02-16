import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        business: 'Business',
        projects: 'Projects',
        esg: 'ESG',
        vision: 'Vision',
        contact: 'Contact'
      },
      hero: {
        tagline: 'Green Mines · Responsible Mining · Sustainable Future',
        title: 'Starant New Energy Co. Ltd',
        subtitle: 'Focused on Mining Investment & Development in Africa',
        headquarters: 'Headquarters: Hangzhou, Zhejiang, China',
        operations: 'Operations: Nigeria',
        cta: 'Explore Our Projects',
        scroll: 'Scroll to explore'
      },
      about: {
        sectionTitle: 'Company Overview',
        title: 'Innovative Mineral Investment Enterprise',
        subtitle: 'Headquartered in Hangzhou, leveraging digital economy and technological innovation advantages',
        headquarters: {
          title: 'Headquarters Advantage',
          content: 'Starant New Energy Co. Ltd is an innovative enterprise focusing on mining investment and development, headquartered in Hangzhou, Zhejiang Province, China. Hangzhou, a city renowned for its digital economy and innovative vitality, provides Starant with unique geographical advantages and abundant talent resources.'
        },
        innovation: {
          title: 'Technological Innovation',
          content: 'Leveraging Hangzhou\'s strong technological innovation atmosphere and broad international vision, the company is committed to applying advanced management concepts and technologies to the development and utilization of global mineral resources.'
        },
        africa: {
          title: 'Deep Roots in Africa',
          content: 'Our core management team has been deeply rooted in Nigeria for over ten years, committed to establishing long-term stable partnerships to ensure the reliability and sustainability of mining investment and development.'
        },
        stats: {
          experience: 'Years of Experience',
          states: 'Nigerian States',
          area: 'Total Area (sq km)',
          minerals: 'Strategic Minerals'
        }
      },
      business: {
        sectionTitle: 'Core Strategy',
        title: 'Strategic Focus on Nigeria',
        subtitle: 'Serving the global new energy industry with responsible mining practices',
        strategicFocus: {
          title: 'Strategic Focus',
          content: 'Starant\'s core business is strategically focused on Nigeria on the African continent. Nigeria possesses abundant undeveloped mineral resources, bringing tremendous development potential to the company.'
        },
        dualMission: {
          title: 'Dual Mission',
          content: 'The company\'s business layout in Nigeria aims to promote local economic development through efficient operations and responsible development, while providing key raw material support for the global new energy industry.'
        },
        valueChain: {
          title: 'Business Value Chain',
          step1: 'Geological Exploration',
          step1Desc: 'Professional team to carry out resource exploration',
          step2: 'Mining Operations',
          step2Desc: 'Responsible mining operations',
          step3: 'Processing & Smelting',
          step3Desc: 'Local smelter put into operation',
          step4: 'International Trade',
          step4Desc: 'High-quality resources transported to the world'
        }
      },
      exploration: {
        sectionTitle: 'Exploration Capability',
        title: 'Professional Team and Advanced Equipment',
        subtitle: 'Scientific exploration and guarantee of resource reserves',
        professionalTeam: {
          title: 'Professional Team',
          content: 'Starant has established a professional geological exploration team in Nigeria, equipped with professional exploration tools and drilling equipment. Combined with third-party independent exploration companies, we have completed various exploration work for our own mining rights.'
        },
        thirdParty: {
          title: 'Third-Party Verification',
          content: 'We entrusted the North China Institute of Geological Exploration and other internationally renowned exploration institutions to conduct independent resource assessment, ensuring the scientificity, accuracy and reliability of exploration data.'
        },
        equipment: {
          title: 'Exploration Equipment & Technology',
          item1: 'Advanced drilling equipment',
          item2: 'Geological radar system',
          item3: 'Sample analysis laboratory',
          item4: 'GPS positioning system'
        },
        stats: {
          area: {
            value: '20+',
            label: 'Total Exploration Area',
            unit: 'sq km'
          },
          drilling: {
            value: '23,000+',
            label: 'Total Drilling Depth',
            unit: 'meters'
          },
          tanb: {
            value: '3,000+',
            label: 'Proven Ta-Nb-Be Resources',
            unit: 'tons'
          },
          gold: {
            value: '5+',
            label: 'Proven Gold Reserves',
            unit: 'tons'
          }
        }
      },
      projects: {
        sectionTitle: 'Key Mining Projects',
        title: 'Lithium, Tantalum, Niobium, Gold, Titanium',
        subtitle: 'Serving the global new energy and high-tech industries',
        overview: {
          title: 'Projects Overview',
          totalArea: 'Total Mining Area',
          miningRights: 'Mining Rights',
          minerals: 'Mineral Types',
          states: 'States Covered'
        },
        lithium: {
          title: 'Lithium Project',
          location: 'Kwara State, Nigeria',
          area: '56 Square Kilometers',
          rights: '2 Exploration Rights + 1 Mining License',
          resources: '10M+ Tons Lithium Ore Resources',
          description: 'As the core material of electric vehicle batteries and energy storage systems, lithium plays an indispensable role in the global energy transformation process.',
          applications: ['Electric vehicle battery', 'Energy storage system', 'Consumer electronics', 'Industrial lubrication']
        },
        tantalum: {
          title: 'Tantalum & Niobium Project',
          location: 'Kwara State, Nigeria',
          area: '28+ Square Kilometers',
          minerals: 'Tantalum, Niobium, Beryllium',
          resources: '10M+ Tons Proven Reserves',
          exploration: 'North China Geological Exploration Institute',
          description: 'Tantalum is widely used in electronic products, aerospace and medical equipment. Niobium significantly improves the strength and toughness of steel.',
          applications: ['Electronic products', 'Aerospace', 'Medical equipment', 'Automotive industry', 'Construction', 'Nuclear energy']
        },
        gold: {
          title: 'Gold Project',
          location: 'Kogi/Niger State, Nigeria',
          area: '120+ Square Kilometers',
          reserves: '5+ Tons Proven Reserves',
          smelter: 'Gold Smelter Operation',
          smelterYear: '2027',
          description: 'As a globally recognized hard currency and important industrial material, gold mining and trading are important components of our business.',
          applications: ['Financial reserves', 'Aerospace', 'Jewelry', 'Electronics industry', 'Medical devices']
        },
        titanium: {
          title: 'Titanium Project',
          location: 'Bayelsa State, Nigeria',
          area: '50+ Square Kilometers',
          rights: '3 Exploration Rights',
          exploration: '2026 Exploration Plan',
          description: 'Titanium has broad application prospects in aerospace, medical and chemical industries due to its light weight, high strength and corrosion resistance.',
          applications: ['Aerospace', 'Medical devices', 'Chemical industry', 'Marine engineering']
        }
      },
      esg: {
        sectionTitle: 'ESG & Sustainability',
        title: 'Green Mine · Responsible Mining · Sustainable Future',
        commitment: {
          title: 'ESG Commitment',
          environment: {
            title: 'Environment',
            items: [
              'Adopt green mining technology',
              'Reduce carbon emissions',
              'Implement ecological restoration',
              'Recycling of water resources'
            ]
          },
          social: {
            title: 'Social',
            items: [
              'Protect labor rights and interests',
              'Support community development',
              'Provide educational and medical support',
              'Promote local employment'
            ]
          },
          governance: {
            title: 'Governance',
            items: [
              'Comply with international standards',
              'Transparent and compliant operation',
              'Improve internal control system',
              'Periodic ESG reports'
            ]
          }
        },
        community: {
          title: 'Community Development',
          infrastructure: {
            title: 'Infrastructure',
            content: 'Build 20 kilometers of roads, improve water and electricity supply, and provide basic living security for surrounding communities.'
          },
          education: {
            title: 'Healthcare & Education',
            content: 'Funded medical projects, provided more than 10 scholarships and educational assistance, promoting community education levels.'
          },
          economic: {
            title: 'Economic Growth',
            content: 'Support the development of more than 10 small enterprises, expand the agricultural market, and promote diversified local economic development.'
          },
          stats: {
            roads: 'Road Construction',
            education: 'Educational Assistance',
            enterprises: 'Enterprise Support',
            jobs: 'Jobs Created'
          }
        },
        greenMining: {
          title: 'Green Mining Philosophy',
          description: 'Starant will continue to increase investment in technological innovation and green mining, exploring more environmentally friendly and efficient mineral development models.',
          measures: [
            'Clean energy use',
            'Waste reduction',
            'Ecological restoration plan',
            'Water resources protection',
            'Land reclamation',
            'Biodiversity conservation'
          ],
          goals: [
            { title: 'Minimize Environmental Impact', desc: 'Reduce environmental impact' },
            { title: 'Enhance Resource Efficiency', desc: 'Improve resource efficiency' },
            { title: 'Promote Community Prosperity', desc: 'Promote community prosperity' },
            { title: 'Follow International Standards', desc: 'Comply with international standards' }
          ]
        }
      },
      vision: {
        sectionTitle: 'Development Vision',
        title: 'Become the World\'s Leading New Energy Mineral Investment and Development Enterprise',
        corporateVision: {
          title: 'Corporate Vision',
          content: 'Starant Mining Ltd is committed to becoming the world\'s leading new energy mineral investment and development enterprise with a grand vision. Our strategic goal is not only to acquire mineral resources, but also to build a sustainable, efficient and responsible global supply chain.'
        },
        mission: {
          title: 'Core Mission',
          content: 'We deeply understand that corporate development must go hand in hand with environmental protection and social responsibility. Therefore, Starant integrates the concept of sustainable development into every business link, strictly following international environmental standards and labor rights protection.'
        },
        strategicFocus: {
          title: 'Strategic Focus',
          items: [
            'Continue to increase investment in technological innovation',
            'Explore environmentally friendly and efficient development models',
            'Improve resource utilization efficiency',
            'Actively expand international cooperation'
          ]
        },
        roadmap: {
          title: 'Development Roadmap',
          year2025: {
            title: '2025 - Deepen Exploration',
            items: ['Complete Ta-Nb-Be mining area exploration', 'Complete Lema Mine Resource Assessment']
          },
          year2026: {
            title: '2026 - Titanium Exploration',
            items: ['Launch Bayelsa titanium deposit exploration', 'Expand lithium mining scale']
          },
          year2027: {
            title: '2027 - Gold Smelting',
            items: ['Gold smelter commences operation', 'Improve industrial chain layout']
          },
          year2030: {
            title: '2030 - World Leading',
            items: ['Become an industry benchmark enterprise', 'Build sustainable supply chain']
          }
        }
      },
      footer: {
        company: 'Starant New Energy Co. Ltd',
        tagline: 'Focused on Mining Investment & Development in Africa',
        address: 'Headquarters: Hangzhou, Zhejiang Province, China',
        headquartersAddress: 'Headquarters: Hangzhou, Zhejiang Province, China',
        operations: 'Operations: Nigeria',
        quickLinks: 'Quick Links',
        contact: 'Contact Us',
        rights: 'All Rights Reserved'
      },
      theme: {
        light: 'Light Mode',
        dark: 'Dark Mode'
      },
      language: {
        en: 'English',
        zh: '中文'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于我们',
        business: '核心业务',
        projects: '矿业项目',
        esg: 'ESG',
        vision: '发展愿景',
        contact: '联系我们'
      },
      hero: {
        tagline: '绿色矿山 · 负责任采矿 · 可持续未来',
        title: '星蚁（浙江）新能源有限公司',
        subtitle: '专注于非洲矿业投资与开发',
        headquarters: '总部：中国浙江省杭州市',
        operations: '运营地：尼日利亚',
        cta: '探索我们的项目',
        scroll: '向下滚动探索'
      },
      about: {
        sectionTitle: '公司简介',
        title: '创新型矿业投资企业',
        subtitle: '总部位于杭州，依托数字经济与科技创新优势',
        headquarters: {
          title: '总部优势',
          content: '星蚁（浙江）新能源有限公司是一家专注于矿业投资与开发的创新型企业，总部位于中国浙江省杭州市。杭州以其数字经济和创新活力闻名，为星蚁提供了独特的地理优势和丰富的人才资源。'
        },
        innovation: {
          title: '科技创新',
          content: '依托杭州浓厚的科技创新氛围和广阔的国际视野，公司致力于将先进的管理理念和技术应用于全球矿产资源的开发利用。'
        },
        africa: {
          title: '深耕非洲',
          content: '我们的核心管理团队在尼日利亚深耕十余年，致力于建立长期稳定的合作关系，确保矿业投资开发的可靠性和可持续性。'
        },
        stats: {
          experience: '年行业经验',
          states: '覆盖尼日利亚州数',
          area: '总面积（平方公里）',
          minerals: '战略矿产种类'
        }
      },
      business: {
        sectionTitle: '核心战略',
        title: '战略聚焦尼日利亚',
        subtitle: '以负责任的采矿实践服务全球新能源产业',
        strategicFocus: {
          title: '战略聚焦',
          content: '星蚁的核心业务战略聚焦于非洲大陆的尼日利亚。尼日利亚拥有丰富的未开发矿产资源，为公司带来了巨大的发展潜力。'
        },
        dualMission: {
          title: '双重使命',
          content: '公司在尼日利亚的业务布局旨在通过高效运营和负责任的发展促进当地经济发展，同时为全球新能源产业提供关键原材料支持。'
        },
        valueChain: {
          title: '业务价值链',
          step1: '地质勘探',
          step1Desc: '专业团队开展资源勘探',
          step2: '采矿作业',
          step2Desc: '负责任的采矿运营',
          step3: '加工冶炼',
          step3Desc: '本地冶炼厂投入运营',
          step4: '国际贸易',
          step4Desc: '优质资源输送全球'
        }
      },
      exploration: {
        sectionTitle: '勘探能力',
        title: '专业团队与先进设备',
        subtitle: '科学勘探与资源储量保障',
        professionalTeam: {
          title: '专业团队',
          content: '星蚁在尼日利亚建立了专业的地质勘探团队，配备专业的勘探工具和钻探设备。结合第三方独立勘探公司，我们完成了自有矿权的各类勘探工作。'
        },
        thirdParty: {
          title: '第三方验证',
          content: '我们委托华北地质勘探院等国际知名勘探机构进行独立资源评估，确保勘探数据的科学性、准确性和可靠性。'
        },
        equipment: {
          title: '勘探设备与技术',
          item1: '先进钻探设备',
          item2: '地质雷达系统',
          item3: '样品分析实验室',
          item4: 'GPS定位系统'
        },
        stats: {
          area: {
            value: '20+',
            label: '累计地质勘探面积',
            unit: '平方公里'
          },
          drilling: {
            value: '23,000+',
            label: '累计钻探深度',
            unit: '米'
          },
          tanb: {
            value: '3,000+',
            label: '已探明钽铍资源',
            unit: '吨'
          },
          gold: {
            value: '5+',
            label: '已探明黄金储量',
            unit: '吨'
          }
        }
      },
      projects: {
        sectionTitle: '核心矿业项目',
        title: '锂、钽、铌、金、钛',
        subtitle: '服务全球新能源和高科技产业',
        overview: {
          title: '项目概览',
          totalArea: '总矿区面积',
          miningRights: '矿业权数量',
          minerals: '涉及矿种',
          states: '覆盖州数'
        },
        lithium: {
          title: '锂矿项目',
          location: '尼日利亚夸拉州',
          area: '56平方公里',
          rights: '2个探矿权 + 1个采矿许可证',
          resources: '1000万吨以上锂矿资源',
          description: '作为电动汽车电池和储能系统的核心材料，锂在全球能源转型过程中发挥着不可替代的作用。',
          applications: ['电动汽车电池', '储能系统', '消费电子', '工业润滑']
        },
        tantalum: {
          title: '钽铌项目',
          location: '尼日利亚夸拉州',
          area: '28+平方公里',
          minerals: '钽、铌、铍',
          resources: '1000万吨以上探明储量',
          exploration: '华北地质勘探院',
          description: '钽因其高熔点、耐腐蚀和优异的导电性而广泛应用于电子产品、航空航天和医疗设备。铌能显著提高钢的强度和韧性。',
          applications: ['电子产品', '航空航天', '医疗设备', '汽车工业', '建筑工程', '核能应用']
        },
        gold: {
          title: '金矿项目',
          location: '尼日利亚科吉州/尼日尔州',
          area: '120+平方公里',
          reserves: '5吨以上探明储量',
          smelter: '黄金冶炼厂投产',
          smelterYear: '2027年',
          description: '作为全球公认的硬通货和重要工业材料，金矿开采和贸易是我们业务的重要组成部分。',
          applications: ['金融储备', '航空航天', '珠宝首饰', '电子工业', '医疗器械']
        },
        titanium: {
          title: '钛矿项目',
          location: '尼日利亚巴耶尔萨州',
          area: '50+平方公里',
          rights: '3个探矿权',
          exploration: '2026年勘探计划',
          description: '钛因其重量轻、强度高、耐腐蚀等特性，在航空航天、医疗和化工行业具有广阔的应用前景。',
          applications: ['航空航天', '医疗器械', '化工行业', '海洋工程']
        }
      },
      esg: {
        sectionTitle: 'ESG与可持续发展',
        title: '绿色矿山 · 负责任采矿 · 可持续未来',
        commitment: {
          title: 'ESG承诺',
          environment: {
            title: '环境',
            items: [
              '采用绿色采矿技术',
              '减少碳排放',
              '实施矿区生态修复',
              '水资源循环利用'
            ]
          },
          social: {
            title: '社会',
            items: [
              '保护劳动者权益',
              '支持社区发展',
              '提供教育和医疗支持',
              '促进当地就业'
            ]
          },
          governance: {
            title: '治理',
            items: [
              '遵守国际标准',
              '透明合规运营',
              '完善内部控制体系',
              '定期ESG报告'
            ]
          }
        },
        community: {
          title: '社区发展',
          infrastructure: {
            title: '基础设施',
            content: '修建20公里道路，改善水电供应，为矿区周边社区提供基本生活保障。'
          },
          education: {
            title: '医疗教育',
            content: '资助医疗项目，提供10个以上奖学金和教育援助，提升社区教育水平。'
          },
          economic: {
            title: '经济增长',
            content: '支持10多家小型企业发展，扩大农业市场，促进当地经济多元化发展。'
          },
          stats: {
            roads: '道路建设',
            education: '教育援助',
            enterprises: '企业支持',
            jobs: '创造就业'
          }
        },
        greenMining: {
          title: '绿色采矿理念',
          description: '星蚁将继续加大技术创新和绿色采矿投入，探索更加环保高效的矿产开发模式。',
          measures: [
            '清洁能源使用',
            '废弃物减量',
            '生态修复计划',
            '水资源保护',
            '土地复垦',
            '生物多样性保护'
          ],
          goals: [
            { title: '减少环境影响', desc: '最小化环境影响' },
            { title: '提高资源效率', desc: '提升资源利用效率' },
            { title: '促进社区繁荣', desc: '推动社区共同繁荣' },
            { title: '遵循国际标准', desc: '遵守国际标准规范' }
          ]
        }
      },
      vision: {
        sectionTitle: '发展愿景',
        title: '成为世界领先的新能源矿业投资开发企业',
        corporateVision: {
          title: '企业愿景',
          content: '星蚁矿业有限公司以宏伟的愿景，致力于成为世界领先的新能源矿业投资开发企业。我们的战略目标不仅是获取矿产资源，更是构建可持续、高效、负责任的全球供应链。'
        },
        mission: {
          title: '核心使命',
          content: '我们深知企业发展必须与环境保护和社会责任并行。因此，星蚁将可持续发展理念融入每一个业务环节，从矿产勘探、开采到加工贸易，严格遵守国际环保标准和劳动者权益保护。'
        },
        strategicFocus: {
          title: '战略重点',
          items: [
            '持续加大技术创新投入',
            '探索环保高效开发模式',
            '提升资源利用效率',
            '积极拓展国际合作'
          ]
        },
        roadmap: {
          title: '发展路线图',
          year2025: {
            title: '2025年 - 深化勘探',
            items: ['完成钽铍矿区勘探', '完成莱马矿区资源评估']
          },
          year2026: {
            title: '2026年 - 钛矿勘探',
            items: ['启动巴耶尔萨钛矿勘探', '扩大锂矿开采规模']
          },
          year2027: {
            title: '2027年 - 黄金冶炼',
            items: ['黄金冶炼厂投产运营', '完善产业链布局']
          },
          year2030: {
            title: '2030年 - 世界领先',
            items: ['成为行业标杆企业', '构建可持续供应链']
          }
        }
      },
      footer: {
        company: '星蚁（浙江）新能源有限公司',
        tagline: '专注于非洲矿业投资与开发',
        address: '总部：中国浙江省杭州市',
        headquartersAddress: '总部：中国浙江省杭州市',
        operations: '运营地：尼日利亚',
        quickLinks: '快速链接',
        contact: '联系我们',
        rights: '版权所有'
      },
      theme: {
        light: '浅色模式',
        dark: '深色模式'
      },
      language: {
        en: 'English',
        zh: '中文'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
