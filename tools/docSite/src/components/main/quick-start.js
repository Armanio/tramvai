import React from 'react';
import { Code } from '../code';
import { BaseLink } from '../base-link';

const code = `$ npm install -g @tramvai/cli
$ tramvai new new-app
$ cd new-app && npm start`;

export function QuickStart() {
  return (
    <div className="row padding--lg main-section">
      <div className="col col--4 col--offset-4">
        <h3 className="text--center">Быстрый старт</h3>
        <p className="text--center">
          Для создания, разработки и сборки приложения создана мощная и функциональная CLI
        </p>
        <Code language="sh">{code}</Code>
        <div className="text--center">
          <BaseLink to="docs/get-started/create-app">Начало работы</BaseLink>
        </div>
      </div>
    </div>
  );
}