import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  roots: ['<rootDir>'],
  testRegex: '.spec.ts$',
  modulePaths: ['./'],
  moduleNameMapper: pathsToModuleNameMapper({
    "@/*": ["*"],
    "@utils/*": ["src/utils/*"],
    "@errors/*": ["src/errors/*"],
    "@db/*": ["db/*"],
    "@middlewares/*": ["src/api/middlewares/*"],
    "@pTypes/*": ["src/types/*"],
    "@api/*": ["src/api/*"],
  }),
  globalSetup: '<rootDir>/env/dotenv-test.ts',
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
};

export default config;
