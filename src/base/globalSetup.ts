import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

async function globalSetup(_config: FullConfig) {
  const testEnv = process.env.TEST_ENV || 'test';
  dotenv.config({
    path: `.env.${testEnv}`,
    override: true,
  });
}

export default globalSetup;
