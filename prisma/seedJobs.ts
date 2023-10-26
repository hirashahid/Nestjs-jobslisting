import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const jobsData = [
  {
    uuid: '2b9a3c17-53e9-4f7a-b2c0-06b22c5c9dd2',
    title: 'Data Engineer',
    company: 'TechData Innovations',
    location: 'San Francisco, CA',
    description:
      'TechData Innovations is looking for a skilled Data Engineer to design and build data pipelines and infrastructure to support our data-driven initiatives.',
    requirements:
      "Key Responsibilities:\n- Design and implement data pipelines for data extraction, transformation, and loading (ETL).\n- Collaborate with data scientists and analysts to ensure data availability and quality.\n- Develop and maintain data warehouse solutions.\n- Monitor and optimize data processing workflows.\n\nQualifications:\n- Bachelor's or Master's degree in Computer Science or a related field.\n- Proven experience in data engineering and ETL processes.\n- Strong knowledge of data warehousing technologies.\n- Proficiency in SQL and one or more programming languages (e.g., Python, Java).\n- Experience with data integration and big data technologies (e.g., Hadoop, Spark).\n- Strong problem-solving and communication skills.",
    responsibilities:
      '- Design and build data pipelines for data extraction, transformation, and loading.\n- Collaborate with data scientists and analysts to ensure data quality and availability.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunity to work on cutting-edge data projects.\n- Collaborative and innovative work environment.\n- Career growth and development opportunities.',
  },
  {
    uuid: '67fb117e-8e6e-4555-9075-2f8709352ed0',
    title: 'Frontend Developer',
    company: 'WebTech Solutions',
    location: 'New York, NY',
    description:
      'WebTech Solutions is seeking a talented Frontend Developer to create user-friendly web applications and interfaces for our clients.',
    requirements:
      "Key Responsibilities:\n- Develop user-friendly web applications with a focus on responsive design.\n- Collaborate with UX/UI designers to implement visual elements and interactive features.\n- Optimize web applications for speed and scalability.\n- Debug and troubleshoot issues as they arise.\n\nQualifications:\n- Bachelor's or Master's degree in Computer Science or a related field.\n- Proven experience in frontend development with proficiency in HTML, CSS, and JavaScript.\n- Strong knowledge of frontend frameworks (e.g., React, Angular, Vue.js).\n- Familiarity with RESTful APIs and web performance optimization.\n- Strong problem-solving and communication skills.",
    responsibilities:
      '- Develop user-friendly and responsive web applications.\n- Collaborate with UX/UI designers to implement visual elements and interactive features.',
    benefits:
      '- Competitive salary and benefits package.\n- Opportunities to work on diverse projects.\n- Creative and dynamic work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: '9c0ff1ca-b3d7-4ab1-9463-79117a1e7b3a',
    title: 'Marketing Manager',
    company: 'MarketPro Solutions',
    location: 'Chicago, IL',
    description:
      'MarketPro Solutions is looking for an experienced Marketing Manager to lead marketing initiatives and strategies for our clients.',
    requirements:
      "Key Responsibilities:\n- Develop and execute marketing strategies to drive business growth.\n- Lead a team of marketing professionals and collaborate with cross-functional teams.\n- Analyze market trends and customer insights to inform marketing campaigns.\n- Manage marketing budgets and ROI analysis.\n\nQualifications:\n- Bachelor's or Master's degree in Marketing or a related field.\n- Proven experience in marketing leadership roles.\n- Strong knowledge of digital marketing, SEO, and social media advertising.\n- Excellent leadership and communication skills.\n- Analytical mindset for data-driven decision-making.",
    responsibilities:
      '- Develop and execute marketing strategies for client campaigns.\n- Lead a team of marketing professionals and collaborate with cross-functional teams.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunities to work with diverse clients and industries.\n- Collaborative and innovative work environment.\n- Professional growth and development opportunities.',
  },
  {
    uuid: 'be06ac3f-769b-437a-90b1-75ce0e256036',
    title: 'UX/UI Designer',
    company: 'DesignCraft Studio',
    location: 'Los Angeles, CA',
    description:
      'DesignCraft Studio is seeking a creative and talented UX/UI Designer to create intuitive and visually appealing user experiences for digital products.',
    requirements:
      "Key Responsibilities:\n- Design and prototype user interfaces for websites and mobile applications.\n- Collaborate with product managers and developers to ensure design feasibility.\n- Conduct user research and usability testing to inform design decisions.\n- Stay up-to-date with design trends and best practices.\n\nQualifications:\n- Bachelor's or Master's degree in Design or a related field.\n- Proven experience in UX/UI design with a strong portfolio.\n- Proficiency with design tools such as Sketch, Figma, or Adobe XD.\n- Understanding of user-centered design principles.\n- Strong problem-solving and communication skills.",
    responsibilities:
      '- Design and prototype user interfaces for digital products.\n- Collaborate with product managers and developers to ensure design feasibility.',
    benefits:
      '- Competitive salary and benefits package.\n- Opportunities to work on diverse and exciting design projects.\n- Creative and collaborative work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: 'f2c8bf6d-c4ce-4f6e-aa3e-cac7a9e00b32',
    title: 'Software Quality Assurance Engineer',
    company: 'TechTesters Inc.',
    location: 'San Jose, CA',
    description:
      'TechTesters Inc. is seeking a Software Quality Assurance Engineer to ensure the high quality and reliability of our software products.',
    requirements:
      "Key Responsibilities:\n- Develop and execute test plans, test cases, and test scripts.\n- Perform manual and automated testing of software applications.\n- Identify and report defects and issues for resolution.\n- Collaborate with development teams to ensure software quality.\n\nQualifications:\n- Bachelor's or Master's degree in Computer Science or a related field.\n- Proven experience in software quality assurance and testing.\n- Familiarity with testing tools and frameworks.\n- Strong problem-solving and communication skills.\n- Attention to detail and a passion for quality assurance.",
    responsibilities:
      '- Develop and execute test plans and test cases for software applications.\n- Collaborate with development teams to ensure software quality.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunities to work on cutting-edge software projects.\n- Collaborative and dynamic work environment.\n- Career growth and development opportunities.',
  },
  {
    uuid: '4d6782ad-d5f5-44aa-a2ea-1b27676b577e',
    title: 'Sales Representative',
    company: 'SalesPro Connect',
    location: 'Dallas, TX',
    description:
      'SalesPro Connect is looking for a motivated Sales Representative to generate new leads and drive sales growth for our services and products.',
    requirements:
      "Key Responsibilities:\n- Identify and engage with potential customers through outbound sales efforts.\n- Present and demonstrate company products to prospects.\n- Close sales and meet or exceed sales targets.\n- Maintain and expand client relationships through excellent customer service.\n\nQualifications:\n- Bachelor's degree in Business or a related field.\n- Proven experience in sales or business development.\n- Strong communication and interpersonal skills.\n- Self-motivated and results-driven.\n- Ability to work independently and as part of a team.",
    responsibilities:
      '- Identify and engage with potential customers through outbound sales efforts.\n- Close sales and meet or exceed sales targets.',
    benefits:
      '- Competitive commission-based compensation and benefits package.\n- Opportunities for career advancement and growth.\n- Supportive and energetic work environment.\n- Sales training and development programs.',
  },
  {
    uuid: '628cb367-0757-4429-99df-ff68ab2084a1',
    title: 'DevOps Engineer',
    company: 'DevOps Solutions Co.',
    location: 'Austin, TX',
    description:
      'DevOps Solutions Co. is seeking a skilled DevOps Engineer to build and maintain scalable and reliable infrastructure for our cloud-based services.',
    requirements:
      "Key Responsibilities:\n- Design, implement, and manage infrastructure as code (IaC).\n- Automate deployment and configuration processes.\n- Monitor and troubleshoot system performance and reliability.\n- Collaborate with development and IT teams for continuous integration and delivery (CI/CD).\n\nQualifications:\n- Bachelor's or Master's degree in Computer Science or a related field.\n- Proven experience in DevOps and cloud infrastructure (e.g., AWS, Azure, GCP).\n- Proficiency with DevOps tools and practices (e.g., Docker, Kubernetes, Jenkins).\n- Strong problem-solving and communication skills.\n- Knowledge of security and compliance best practices.",
    responsibilities:
      '- Design and manage infrastructure as code (IaC).\n- Automate deployment and configuration processes.\n- Collaborate with development and IT teams for CI/CD.',
    benefits:
      '- Competitive salary and benefits package.\n- Opportunity to work on cutting-edge cloud infrastructure projects.\n- Collaborative and innovative work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: '8101a2c2-7d82-4f36-bd3a-01eb9d8e1d1e',
    title: 'HR Manager',
    company: 'TalentHub Inc.',
    location: 'New York, NY',
    description:
      'TalentHub Inc. is looking for an experienced HR Manager to lead human resources functions and talent management strategies.',
    requirements:
      "Key Responsibilities:\n- Develop and implement HR policies and procedures.\n- Manage talent acquisition, onboarding, and employee relations.\n- Ensure compliance with labor laws and regulations.\n- Support employee development and performance management.\n\nQualifications:\n- Bachelor's or Master's degree in Human Resources or a related field.\n- Proven experience in HR management roles.\n- Strong knowledge of HR best practices and labor laws.\n- Excellent interpersonal and communication skills.\n- Leadership and organizational skills.",
    responsibilities:
      '- Develop and implement HR policies and procedures.\n- Manage talent acquisition and employee relations.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunities to shape HR strategies and policies.\n- Collaborative and supportive work environment.\n- Professional development and training programs.',
  },
  {
    uuid: 'cd10d3a3-5a7b-46a3-8c36-00753b5626c1',
    title: 'Full Stack Developer',
    company: 'CodeCrafters Co.',
    location: 'Seattle, WA',
    description:
      'CodeCrafters Co. is seeking a Full Stack Developer to design and build web applications from front-end to back-end for various projects.',
    requirements:
      "Key Responsibilities:\n- Develop and maintain web applications using modern web technologies.\n- Collaborate with cross-functional teams on project requirements.\n- Ensure responsive design and optimal user experience.\n- Debug and troubleshoot issues as they arise.\n\nQualifications:\n- Bachelor's or Master's degree in Computer Science or a related field.\n- Proven experience in full stack development with proficiency in both front-end and back-end technologies.\n- Strong knowledge of web development frameworks (e.g., React, Node.js, Express).\n- Familiarity with databases (SQL and NoSQL).\n- Strong problem-solving and communication skills.",
    responsibilities:
      '- Develop and maintain web applications from front-end to back-end.\n- Collaborate with cross-functional teams on project requirements.',
    benefits:
      '- Competitive salary and benefits package.\n- Opportunities to work on diverse and exciting web development projects.\n- Collaborative and innovative work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: 'f117b7ab-e645-4a47-ba8d-86f3c762d2d7',
    title: 'Graphic Designer',
    company: 'VisualCraft Studio',
    location: 'Los Angeles, CA',
    description:
      'VisualCraft Studio is seeking a creative Graphic Designer to design visual materials and branding for various projects.',
    requirements:
      "Key Responsibilities:\n- Create visual assets, including graphics and illustrations.\n- Collaborate with clients and team members on design projects.\n- Ensure brand consistency across all materials.\n- Stay up-to-date with design trends and software tools.\n\nQualifications:\n- Bachelor's or Masters degree in Design or a related field.\n- Proven experience in graphic design with a strong portfolio.\n- Proficiency with design tools (e.g., Adobe Creative Suite).\n- Strong problem-solving and communication skills.\n- Creative and artistic mindset.",
    responsibilities:
      '- Create visual assets, including graphics and illustrations.\n- Collaborate with clients and team members on design projects.',
    benefits:
      '- Competitive salary and benefits package.\n- Opportunities to work on diverse and creative design projects.\n- Collaborative and visually inspiring work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: 'c07f5c9a-e3d1-4a0f-95c5-4061a0ad0831',
    title: 'Data Analyst',
    company: 'Data Insights Ltd.',
    location: 'Boston, MA',
    description:
      'Data Insights Ltd. is looking for a Data Analyst to gather and analyze data to provide valuable insights and support decision-making.',
    requirements:
      "Key Responsibilities:\n- Collect, clean, and analyze data from various sources.\n- Generate reports and data visualizations for stakeholders.\n- Collaborate with business teams to understand data requirements.\n- Identify data trends and anomalies to drive business improvements.\n\nQualifications:\n- Bachelor's or Masters degree in a relevant field (e.g., Statistics, Data Science).\n- Proven experience in data analysis and reporting.\n- Proficiency with data analysis tools (e.g., Excel, Tableau).\n- Strong problem-solving and communication skills.\n- Attention to detail and a passion for data.",
    responsibilities:
      '- Collect and analyze data from various sources.\n- Generate reports and data visualizations for stakeholders.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunities to work on data-driven projects.\n- Collaborative and data-focused work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: '6aae72c2-c0bf-4d13-978f-7b8acac2b035',
    title: 'Accountant',
    company: 'FinancePros Inc.',
    location: 'Chicago, IL',
    description:
      'FinancePros Inc. is looking for a detail-oriented Accountant to manage financial records, budgets, and reporting for clients.',
    requirements:
      "Key Responsibilities:\n- Manage financial records and accounts for clients.\n- Prepare financial statements and reports.\n- Collaborate with clients and auditors for financial audits.\n- Ensure compliance with accounting principles and regulations.\n\nQualifications:\n- Bachelor's or Masters degree in Accounting or Finance.\n- Proven experience in accounting or financial management.\n- Proficiency with accounting software and spreadsheets.\n- Attention to detail and analytical skills.\n- Strong problem-solving and communication skills.",
    responsibilities:
      '- Manage financial records and accounts for clients.\n- Prepare financial statements and reports.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunities to work with diverse clients and financial accounts.\n- Collaborative and financial-focused work environment.\n- Professional growth and learning opportunities.',
  },
  {
    uuid: '8b71e28c-098a-4b86-b69b-d03463de343a',
    title: 'Customer Support Specialist',
    company: 'SupportHub Solutions',
    location: 'Dallas, TX',
    description:
      'SupportHub Solutions is seeking a Customer Support Specialist to assist customers and provide exceptional service and solutions.',
    requirements:
      'Key Responsibilities:\n- Assist customers with inquiries, issues, and product support.\n- Respond to customer inquiries via email, chat, or phone.\n- Document and manage customer interactions and feedback.\n- Collaborate with internal teams to resolve customer concerns.\n\nQualifications:\n- Bachelors degree in a relevant field (e.g., Business, Communications).\n- Proven experience in customer support or service roles.\n- Strong communication and interpersonal skills.\n- Problem-solving and empathy skills for customer interactions.\n- Ability to work in a fast-paced and customer-centric environment.',
    responsibilities:
      '- Assist customers with inquiries and product support.\n- Respond to customer inquiries and document interactions.',
    benefits:
      '- Competitive salary and benefits package.\n- Opportunities to make a positive impact on customer satisfaction.\n- Collaborative and customer-focused work environment.\n- Professional growth and training programs.',
  },
  {
    uuid: '11cf7b8e-4bb2-4a49-a150-e0aa07072fe6',
    title: 'Project Manager',
    company: 'ProjectPro Solutions',
    location: 'Austin, TX',
    description:
      'ProjectPro Solutions is looking for an experienced Project Manager to oversee and deliver successful projects for clients.',
    requirements:
      "Key Responsibilities:\n- Lead project planning, execution, and monitoring activities.\n- Manage project teams, budgets, and timelines.\n- Communicate with clients and stakeholders to ensure project success.\n- Identify and mitigate project risks and issues.\n\nQualifications:\n- Bachelor's or Masters degree in Project Management or a related field.\n- Proven experience in project management roles.\n- Strong leadership and communication skills.\n- Knowledge of project management methodologies and tools.\n- Problem-solving and organizational skills.",
    responsibilities:
      '- Lead project planning, execution, and monitoring activities.\n- Manage project teams, budgets, and timelines.',
    benefits:
      '- Competitive compensation and benefits package.\n- Opportunities to lead diverse and challenging projects.\n- Collaborative and results-focused work environment.\n- Professional growth and learning opportunities.',
  },
];

async function main() {
  for (const data of jobsData) {
    await prisma.job.create({
      data,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
