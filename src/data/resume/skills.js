// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'SQLite3/SQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Programming Languages'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter + Google Colab',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Python'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'PySpark',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['OS'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['OS'],
  },
  {
    title: 'Latex',
    competency: 4,
    category: ['Document creation'],
  },
  {
    title: 'Excel + Word + Powerpoint',
    competency: 4,
    category: ['Document creation'],
  },
  {
    title: 'Catia',
    competency: 3,
    category: ['CAD'],
  },
  {
    title: 'Solidworks',
    competency: 4,
    category: ['CAD'],
  },
  {
    title: 'Sketchup',
    competency: 3,
    category: ['CAD'],
  },
  {
    title: 'Tennis',
    competency: 4,
    category: ['Sport'],
  },
  {
    title: 'Running',
    competency: 3,
    category: ['Sport'],
  },
  {
    title: 'Cooking',
    competency: 4,
    category: ['Other'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#1782zb',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
