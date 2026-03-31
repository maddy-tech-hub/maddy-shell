# maddy-shell

Host shell for the Maddy microfrontend platform.

## Ownership

This repo owns:
- host routing
- remote integration
- shell-level navigation
- shell session orchestration
- host-side error boundaries
- shared host state required for integration

This repo does not own:
- auth screen implementation
- reusable widget implementation
- login business rules
- widget visual internals

## Local Development

Requirements:
- Node `24.14.1`
- npm `10+`

Start repos in this order:

1. `maddy-login`
2. `maddy-widgets`
3. `maddy-shell`

Commands:

```powershell
cd "D:\Repository's\Maddy tech site\maddy-login"
npm install
npm run start:dev
```

```powershell
cd "D:\Repository's\Maddy tech site\maddy-widgets"
npm install
npm run start:dev
```

```powershell
cd "D:\Repository's\Maddy tech site\maddy-shell"
npm install
npm run start:dev
```

Default local port:
- `3000`

Remote defaults in local development:
- auth remote: `http://localhost:3001/remoteEntry.js`
- UI remote: `http://localhost:3002/remoteEntry.js`

## Contract Doc

Integration contract lives in:
- [MFE_CONTRACT.md](/D:/Repository's/Maddy tech site/maddy-shell/MFE_CONTRACT.md)

