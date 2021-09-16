import { setModalRoot, unsetModalRoot } from '.';

describe('setModalRoot', () => {
  it('should append the modal root into the document body', () => {
    expect(document.body).toMatchInlineSnapshot(`<body />`);

    setModalRoot();

    expect(document.body).toMatchInlineSnapshot(`
      <body>
        <div
          id="modal-root"
        />
      </body>
    `);
  });
});

describe('unsetModalRoot', () => {
  it('should remove the modal root of the document body', () => {
    expect(document.body).toMatchInlineSnapshot(`
      <body>
        <div
          id="modal-root"
        />
      </body>
    `);

    unsetModalRoot();

    expect(document.body).toMatchInlineSnapshot(`<body />`);
  });
});
