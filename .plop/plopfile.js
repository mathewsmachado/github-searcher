const components = {
  from: 'templates/components',
  to: '../src/components/{{pascalCase name}}',
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'New UI Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component:',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: `${components.from}/index.hbs`,
        path: `${components.to}/index.tsx`,
      },
      {
        type: 'add',
        templateFile: `${components.from}/types.hbs`,
        path: `${components.to}/types.ts`,
      },
      {
        type: 'add',
        templateFile: `${components.from}/styles.hbs`,
        path: `${components.to}/styles.ts`,
      },
      {
        type: 'add',
        templateFile: `${components.from}/stories.hbs`,
        path: `${components.to}/stories.tsx`,
      },
      {
        type: 'add',
        templateFile: `${components.from}/tests.hbs`,
        path: `${components.to}/tests.tsx`,
      },
    ],
  });
};
