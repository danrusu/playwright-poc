# playwright-poc

Plywright usage POC

## 1. Prerequisites

### 1.1. [Node.js v22+](https://nodejs.org/en/download)

```bash
# check node and npm versions
node -v
# v22.17.1
npm -v
# 10.8.2
```

### 1.2. [VS Code](https://code.visualstudio.com/download)

### 1.3. [Playwright](https://playwright.dev/)

## 2. Project setup

```bash
# install
npm install

# format code (prettier)
npm run format

# build (tsc)
npm run build
```

## 3. Execute tests

```bash
npm run test:demo
```

## 5. Reports

### 5.1. View html report

```bash
npm run report
```

## 6. SonarQube

### 6.1 Install and start [SonarQube Community Build](https://docs.sonarsource.com/sonarqube-community-build/try-out-sonarqube)

### 6.2 Scan the code

```bash
npm install -g @sonar/scan

# run as admin
sonar -Dsonar.host.url=http://localhost:9000 -Dsonar.token=$SONAR_TOKEN -Dsonar.projectKey=playwright-poc
```
