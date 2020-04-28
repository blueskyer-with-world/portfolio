import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Navigation } from '../Navigation';

test('renders correctly', () => {
  const { container } = render(<Navigation toggle={() => {}} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c1 {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 20px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .c0 {
      margin: 0;
      padding: 0;
      padding: 40px;
      position: absolute;
      top: 100px;
      width: 230px;
    }

    <ul
      class="c0"
    >
      <li
        class="c1"
        data-testid="home"
      >
        <a
          class=""
          href="/"
        >
          Home
        </a>
      </li>
      <li
        class="c1"
        data-testid="about"
      >
        <a
          class=""
          href="/about"
        >
          About
        </a>
      </li>
      <li
        class="c1"
        data-testid="portfolio"
      >
        <a
          class=""
          href="/portfolio"
        >
          Portfolio
        </a>
      </li>
      <li
        class="c1"
        data-testid="contact"
      >
        <a
          class=""
          href="/contact"
        >
          Contact
        </a>
      </li>
    </ul>
  `);
});
