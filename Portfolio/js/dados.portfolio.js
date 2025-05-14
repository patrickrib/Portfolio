const dadosPortfolio = {
    'pt-br': {
        tituloPagina: "Portfólio",
        tituloTopo: "Portfólio",
        projetos: [
            {
                id: "ouro-verde",
                titulo: "Unidas S.A. (antiga Ouro Verde)",
                resumo: "Migração e evolução do ERP Dynamics AX com foco em arquitetura e integrações estratégicas.",
                detalhes: [
                    "Atuação como Arquiteto de Soluções na migração do Dynamics AX 2009 para 2012 R3.",
                    "Desenvolvimento e manutenção de integrações com mais de 30 sistemas, incluindo SAP, SalesForce, RH, Portais e Locavia.",
                    "Colaboração com equipes de DBA, DevOps e infraestrutura em ambientes multicloud (Azure e AWS).",
                    "Criação de metadados distribuídos utilizados em relatórios executivos e operacionais.",
                    "Envolvimento direto em processos de integração, arquitetura e sustentação técnica por vários anos."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012 R3", "X++", "AIF", "SalesForce",
                    "SAP", "Azure", "AWS", "Jira", "DevOps", "SQL Server"
                ]
            },
            {
                id: "fiep",
                titulo: "FIEP (Federação das Indústrias do Paraná)",
                resumo: "Suporte à implantação do Dynamics 365 com foco em relatórios analíticos e contabilidade pública.",
                detalhes: [
                    "Desenvolvimento de relatórios analíticos e painéis de controle no Dynamics 365.",
                    "Apoio à equipe funcional na configuração de processos contábeis específicos do setor público.",
                    "Adaptação a regras fiscais e contábeis não convencionais, com forte aprendizado sobre contabilização reversa.",
                    "Participação em um ambiente com alto nível de governança e validação técnica."
                ],
                tecnologias: ["D365 FO", "Power BI", "SQL Server", "Contabilidade Pública", "Power Platform"]
            },
            {
                id: "seb",
                titulo: "SEB S.A. (Sistema Educacional Brasileiro)",
                resumo: "Adaptação do Dynamics 365 para operações educacionais em escala nacional.",
                detalhes: [
                    "Customizações no módulo de contas a receber para lidar com múltiplos perfis de cliente: aluno e responsável financeiro.",
                    "Ajustes nos processos de faturamento e contabilização, considerando emissão em lote de notas fiscais por unidade.",
                    "Geração de relatórios gerenciais e operacionais voltados à área administrativa das escolas.",
                    "Integrações e modelagens específicas para adaptar o ERP corporativo à realidade educacional do grupo SEB."
                ],
                tecnologias: ["D365 FO", "Power Platform", "SQL Server", "Contas a Receber", "Relatórios Gerenciais"]
            },
            {
                id: "frigelar",
                titulo: "Frigelar",
                resumo: "Projeto completo de migração para o Dynamics AX 2012 com foco em tributos, fiscal e varejo.",
                detalhes: [
                    "Migração de sistema legado para o Dynamics AX 2012 cobrindo todos os estados brasileiros.",
                    "Customizações fiscais para cálculo automático de impostos e validação de NCM no momento da venda.",
                    "Implantação e adequação do módulo de Varejo (Retail) com integração a impressoras fiscais.",
                    "Desenvolvimento e manutenção da NF-e com respostas rápidas a mudanças da Receita Federal.",
                    "Integrações com plataformas de marketplace e soluções tributárias externas."
                ],
                tecnologias: [
                    "Dynamics AX 2012", "X++", "Retail", "NF-e", "SQL Server",
                    "Integração Fiscal", "Marketplace", "Impressoras Fiscais"
                ]
            },
            {
                id: "colombo",
                titulo: "Colombo",
                resumo: "Migração e implantação do Dynamics AX 2012 com foco em logística e transporte (TMS).",
                detalhes: [
                    "Migração completa do Dynamics AX 2009 para o AX 2012 com reestruturação de processos.",
                    "Implantação e adaptação extensiva do módulo de TMS, com diversas customizações para atender à operação logística.",
                    "Desenvolvimento de regras fiscais e customizações para cálculo de impostos por UF e tipo de produto.",
                    "Atuação técnica e funcional com foco em performance e estabilidade do ERP em ambiente produtivo."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012", "X++", "TMS", "Tributação", "SQL Server"
                ]
            },
            {
                id: "milwaukee",
                titulo: "Milwaukee Tool (Cliente Internacional)",
                resumo: "Liderança técnica em migrações de ERP e atuação em times globais com Azure e Power Platform.",
                detalhes: [
                    "Migração do Dynamics AX 2012 para Oracle Cloud ERP em um projeto internacional 100% em inglês.",
                    "Atuação como líder técnico, coordenando integrações e validações com múltiplas equipes (ERP, .NET, Hybris, CRM).",
                    "Participação em times técnicos diversos com foco atual em soluções CRM e Power Apps.",
                    "Trabalho com recursos avançados da Azure: Functions, Service Bus, Event Grid, Logic Apps, API Management, etc.",
                    "Ambiente colaborativo com times dos EUA, México e Europa, com entregas ágeis e alto grau de autonomia."
                ],
                tecnologias: [
                    "Dynamics AX 2012", "Oracle ERP", "Azure Functions", "Event Grid", "Service Bus",
                    "Power Apps", ".NET", "Hybris", "Azure DevOps", "API Management"
                ]
            },
            {
                id: "propex",
                titulo: "Propex S/A",
                resumo: "Projeto completo em produção, WMS e contabilidade de custos no Dynamics AX 2012 R3.",
                detalhes: [
                    "Desenvolvimento do conceito de Ordem de Produção Ampla no módulo de produção, com geração automática de ordens secundárias.",
                    "Implantação de controle com até 14 níveis de consumo e customizações na contabilização de custos com apoio direto do time contábil.",
                    "Atuação técnica em customizações críticas do WMS e no gerenciamento de qualidade.",
                    "Integração com sistemas de pesagem de matérias-primas e produtos finais.",
                    "Autonomia total para pesquisar, propor e implementar soluções técnicas em diversas áreas do ERP."
                ],
                tecnologias: [
                    "Dynamics AX 2012 R3", "Produção", "Contabilidade de Custos", "X++", "WMS",
                    "Gerenciamento de Qualidade", "SQL Server", "AX Costing", "Pesagem Industrial"
                ]
            },
            {
                id: "uninter",
                titulo: "Uninter e Uninter Informática",
                resumo: "Migração completa entre versões do Dynamics AX e implantação inteligente do módulo de produção.",
                detalhes: [
                    "Participação ativa na migração do AX 2009 para o AX 2012, e posteriormente para o Dynamics 365.",
                    "Criação de banco intermediário (staging) para acelerar a migração de grandes volumes de dados, reduzindo tempo de execução de 30 dias para 2 dias.",
                    "Customizações no módulo de produção que integravam pedidos do site à geração automática de ordens de produção com leitura por código de barras.",
                    "Treinamento para usuários de Contas a Receber, além de suporte contábil e fiscal.",
                    "Integração com sistemas acadêmicos via RabbitMQ e desenvolvimento de soluções práticas para os técnicos de montagem."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012", "Dynamics 365", "X++", "RabbitMQ",
                    "SQL Server", "Staging DB", "Contas a Receber", "Produção", "Integração Acadêmica"
                ]
            },
            {
                id: "ibema",
                titulo: "IBEMA Papelcartão",
                resumo: "Primeiro projeto com Dynamics AX, com entregas industriais e migração concluída com sucesso para o AX 2012.",
                detalhes: [
                    "Início da trajetória com Dynamics AX 2009 em um projeto de migração do sistema legado em Delphi.",
                    "Criação do módulo de controle de créditos FSC (Forest Stewardship Council) para rastreabilidade ambiental.",
                    "Integrações industriais com Greycon Mill e Greycon Studio para planejamento e execução da produção.",
                    "Desenvolvimento de solução para coletores industriais, permitindo registro direto das ordens de produção.",
                    "Evolução do projeto culminando com a migração para Dynamics AX 2012 de forma bem-sucedida."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012", "X++", "FSC", "Greycon Mill",
                    "Greycon Studio", "Integração Industrial", "Coletores", ".NET", "Java"
                ]
            },
            {
                id: "itau",
                titulo: "Itaú e Itaú BBA",
                resumo: "Liderança técnica em projetos críticos com foco em otimização de sistemas, banco de dados e gestão de entregas.",
                detalhes: [
                    "Responsável pela manutenção e evolução de mais de 30 sistemas, incluindo aplicações ASP, .NET, Access e Oracle PL/SQL.",
                    "Atuação como líder técnico alocado por consultoria, chegando a atuar diretamente dentro do banco como ponte entre analistas e a equipe de desenvolvimento.",
                    "Criação e manutenção do sistema BOLETO, com customizações específicas por cliente e controle via metadados distribuídos.",
                    "Visitação constante ao Itaú BBA (SP), interagindo com times técnicos, gerentes de projeto, setor jurídico (DEJUR) e áreas de negócio.",
                    "Projetos de otimização de scripts SQL, reduzindo consultas de horas para segundos."
                ],
                tecnologias: [
                    "ASP", "ASP.NET", ".NET", "VB", "Oracle PL/SQL", "SQL Server",
                    "Access", "VBA", "Metadados Distribuídos", "Otimização de Queries"
                ]
            },
            {
                id: "red-maple",
                titulo: "Red Maple",
                resumo: "Manutenção e integração de módulo de pagamentos com cartões no Dynamics 365 CRM.",
                detalhes: [
                    "Responsável por customizações e suporte ao módulo de pagamentos com cartões de crédito e cartão presente no Dynamics 365 CE.",
                    "Desenvolvimento de integrações com sistemas de cartão e merchants utilizando o recurso Dual Write entre D365 FO, CE e Business Central.",
                    "Participação em um ambiente regulamentado, com padrões exigentes de conformidade PCI.",
                    "Comunicação com clientes e parceiros internacionais totalmente em inglês.",
                    "Aprimoramento contínuo no uso de CRM e na arquitetura de integrações entre múltiplos sistemas Microsoft."
                ],
                tecnologias: [
                    "Dynamics 365 CE", "Dual Write", "Power Platform", "D365 FO", "D365 BC",
                    "Integrações com cartão", "PCI Compliance", "Azure", "CRM"
                ]
            },
            {
                id: "outros-clientes",
                titulo: "Outros clientes e projetos relevantes",
                resumo: "Atuação técnica e funcional em projetos internacionais e consultorias em Dynamics 365 e AX.",
                detalhes: [
                    "Participação em projetos conduzidos totalmente em espanhol com empresas como Securitas e Indra, utilizando Dynamics 365 Finance and Operations.",
                    "Projeto com Médicos Sem Fronteiras envolvendo empresa de Portugal e comunicação com a equipe da Suíça, integralmente em inglês.",
                    "Contribuições em ambientes regulados e multiculturais com entrega de integrações, suporte funcional, documentação e automações em Dynamics AX e D365.",
                    "Experiência com múltiplos domínios como saúde, segurança, manufatura e serviços, adaptando soluções às necessidades locais e internacionais."
                ],
                tecnologias: [
                    "Dynamics 365 FO", "Dynamics AX 2009", "Dynamics AX 2012", "X++", "Integrações",
                    "Azure DevOps", "Consultoria Funcional", "Documentação Técnica", "Suporte Multilingue"
                ]
            }
        ]
    },
    'en-us': {
        tituloPagina: "Portfolio",
        tituloTopo: "Portfolio",
        projetos: [
            {
                id: "ouro-verde",
                titulo: "Unidas S.A. (formerly Ouro Verde)",
                resumo: "ERP migration and architecture project with large-scale system integrations.",
                detalhes: [
                    "Acted as Solutions Architect in the migration from Dynamics AX 2009 to AX 2012 R3.",
                    "Led the development and maintenance of over 30 system integrations including SAP, SalesForce, HR platforms, Portals and Locavia.",
                    "Worked closely with DBA, DevOps and infrastructure teams in a multicloud environment (Azure and AWS).",
                    "Designed distributed metadata models used for executive reporting and operational dashboards.",
                    "Long-term involvement with solution architecture, technical governance and strategic systems integration."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012 R3", "X++", "AIF", "SalesForce",
                    "SAP", "Azure", "AWS", "Jira", "DevOps", "SQL Server"
                ]
            },
            {
                id: "fiep",
                titulo: "FIEP (Federation of Industries of Paraná)",
                resumo: "Supported Dynamics 365 implementation focusing on analytical reporting and public sector accounting.",
                detalhes: [
                    "Developed analytical reports and dashboards within Dynamics 365.",
                    "Provided support for functional teams on accounting processes tailored to public sector standards.",
                    "Worked with reverse accounting flows and fiscal rules unique to governmental environments.",
                    "Gained valuable experience in a high-governance, validation-heavy project."
                ],
                tecnologias: ["D365 FO", "Power BI", "SQL Server", "Public Sector Accounting", "Power Platform"]
            },
            {
                id: "seb",
                titulo: "SEB S.A. (Brazilian Educational System)",
                resumo: "Adapted Dynamics 365 for large-scale educational operations across the country.",
                detalhes: [
                    "Customized the Accounts Receivable module to handle both student and financial guardian as clients.",
                    "Adjusted billing and accounting flows to support daily batch invoice generation per school unit.",
                    "Delivered tailored managerial and operational reports to support educational administration.",
                    "Modeled and integrated ERP components to align with the business logic of the education sector."
                ],
                tecnologias: ["D365 FO", "Power Platform", "SQL Server", "Accounts Receivable", "Managerial Reporting"]
            },
            {
                id: "frigelar",
                titulo: "Frigelar",
                resumo: "Automation and process optimization using Dynamics AX and Power Platform.",
                detalhes: [
                    "Workflow automation with Power Automate.",
                    "Performance and stability improvements.",
                    "Technical support for internal rollout."
                ],
                tecnologias: ["Dynamics AX", "Power Automate", "Azure DevOps"]
            },
            {
                id: "colombo",
                titulo: "Colombo",
                resumo: "ERP migration and TMS implementation using Dynamics AX 2012 with fiscal and logistic customizations.",
                detalhes: [
                    "Full migration from Dynamics AX 2009 to 2012 with process restructuring.",
                    "Deployment and extensive customization of the TMS module to meet logistic operation needs.",
                    "Development of tax calculation logic based on product and state-specific rules.",
                    "Technical and functional involvement focused on ERP performance and production stability."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012", "X++", "TMS", "Tax Rules", "SQL Server"
                ]
            },
            {
                id: "milwaukee",
                titulo: "Milwaukee Tool (International Client)",
                resumo: "Technical leadership in ERP migrations and multi-team collaboration using Azure and Power Platform.",
                detalhes: [
                    "Led the migration from Dynamics AX 2012 to Oracle Cloud ERP in a fully English-speaking environment.",
                    "Coordinated integration and validation efforts across ERP, .NET, Hybris and CRM teams.",
                    "Participated in various technical squads, currently focused on CRM solutions using Power Apps.",
                    "Worked with advanced Azure technologies: Functions, Service Bus, Event Grid, Logic Apps, API Management.",
                    "Collaborated with teams across the US, Mexico, and Europe under agile methodology with high ownership."
                ],
                tecnologias: [
                    "Dynamics AX 2012", "Oracle ERP", "Azure Functions", "Event Grid", "Service Bus",
                    "Power Apps", ".NET", "Hybris", "Azure DevOps", "API Management"
                ]
            },
            {
                id: "propex",
                titulo: "Propex S/A",
                resumo: "End-to-end Dynamics AX 2012 R3 implementation for production, WMS and cost accounting.",
                detalhes: [
                    "Created the concept of Extended Production Orders, similar to AP/AR contract-based workflows, generating automated child orders with full routing and tracking.",
                    "Handled up to 14 consumption levels, and partnered with accounting to fully fix AX’s flawed cost calculation logic.",
                    "Developed critical WMS customizations and optimized Quality Management flows.",
                    "Integrated industrial weight scales for raw materials and finished products.",
                    "Worked autonomously across modules, learning and applying complex topics in real-time delivery."
                ],
                tecnologias: [
                    "Dynamics AX 2012 R3", "Production", "Cost Accounting", "X++", "WMS",
                    "Quality Management", "SQL Server", "AX Costing", "Industrial Weighing"
                ]
            },
            {
                id: "uninter",
                titulo: "Uninter and Uninter Informática",
                resumo: "Full ERP migration and smart production module implementation integrated with academic systems.",
                detalhes: [
                    "Led the migration from AX 2009 to AX 2012 and later to Dynamics 365.",
                    "Designed a custom staging database that reduced migration runtime from 30 days to 2 days.",
                    "Developed a production automation flow where sales orders from the website triggered production orders, integrated with barcode scanning.",
                    "Delivered training for Accounts Receivable users and supported accounting and tax reconciliation.",
                    "Integrated multiple academic systems using RabbitMQ and provided usability enhancements for hardware assembly technicians."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012", "Dynamics 365", "X++", "RabbitMQ",
                    "SQL Server", "Staging DB", "Accounts Receivable", "Production", "Academic Integration"
                ]
            },
            {
                id: "ibema",
                titulo: "IBEMA Papelcartão",
                resumo: "First Dynamics AX project, delivering industrial solutions and a successful migration to AX 2012.",
                detalhes: [
                    "Started with Dynamics AX 2009 in a project to replace a legacy Delphi-based system.",
                    "Developed FSC (Forest Stewardship Council) credit tracking module for sustainability compliance.",
                    "Integrated production planning systems Greycon Mill and Greycon Studio.",
                    "Built handheld data collection software for shop floor production order tracking.",
                    "Project evolved into a successful migration to Dynamics AX 2012."
                ],
                tecnologias: [
                    "Dynamics AX 2009", "Dynamics AX 2012", "X++", "FSC", "Greycon Mill",
                    "Greycon Studio", "Industrial Integration", "Handheld Devices", ".NET", "Java"
                ]
            },
            {
                id: "itau",
                titulo: "Itaú and Itaú BBA",
                resumo: "Technical leadership across mission-critical systems, database performance and internal delivery coordination.",
                detalhes: [
                    "Managed and enhanced over 30 distinct systems including ASP, .NET, Access, and Oracle PL/SQL applications.",
                    "Worked as a tech lead through a consultancy, later interacting directly with Itaú staff to gather and distribute tasks.",
                    "Developed and maintained the 'BOLETO' system, handling metadata-based customizations for hundreds of clients.",
                    "Frequently traveled from Curitiba to São Paulo to meet with internal teams, analysts, and legal departments like DEJUR.",
                    "Delivered large-scale SQL query optimizations, reducing hours-long scripts to seconds."
                ],
                tecnologias: [
                    "ASP", "ASP.NET", ".NET", "VB", "Oracle PL/SQL", "SQL Server",
                    "Access", "VBA", "Distributed Metadata", "SQL Optimization"
                ]
            },
            {
                id: "red-maple",
                titulo: "Red Maple",
                resumo: "CRM maintenance and integration for credit and gift card payment solutions using Dynamics 365.",
                detalhes: [
                    "Maintains and customizes payment modules for credit and gift cards within Dynamics 365 CE.",
                    "Develops integrations with payment systems and merchants using Dual Write between D365 FO, CE and Business Central.",
                    "Works in a PCI-compliant environment with strong regulatory and integration requirements.",
                    "Engages in full English communication with clients and partners internationally.",
                    "Continuously improves CRM capabilities and cross-system architecture within the Microsoft ecosystem."
                ],
                tecnologias: [
                    "Dynamics 365 CE", "Dual Write", "Power Platform", "D365 FO", "D365 BC",
                    "Card Integrations", "PCI Compliance", "Azure", "CRM"
                ]
            },
            {
                id: "other-clients",
                titulo: "Other Clients and International Projects",
                resumo: "Technical and functional participation in international projects and consulting services using Dynamics 365 and AX.",
                detalhes: [
                    "Worked in full-Spanish projects for clients such as Securitas and Indra using Dynamics 365 Finance and Operations.",
                    "Collaborated with Médecins Sans Frontières via a Portuguese partner, in a fully English-speaking context with the Swiss team.",
                    "Contributed to regulated, multicultural environments delivering integrations, documentation, and functional support.",
                    "Handled solutions across different sectors such as healthcare, security, manufacturing, and services."
                ],
                tecnologias: [
                    "Dynamics 365 FO", "Dynamics AX 2009", "Dynamics AX 2012", "X++", "Integrations",
                    "Azure DevOps", "Functional Consulting", "Technical Documentation", "Multilingual Support"
                ]
            }
        ]
    }
};
