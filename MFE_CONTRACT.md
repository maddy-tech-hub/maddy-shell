# MFE Contract

This document defines the integration boundaries between `maddy-shell`, `maddy-login`, and `maddy-widgets`.

## Repo Boundaries

`maddy-shell`
- owns host routing and remote mounting
- owns shell state that coordinates remotes
- owns integration contracts and fallback behavior

`maddy-login`
- owns all authentication UI and auth feature behavior
- exposes auth screens to the shell
- emits shell events instead of importing shell internals

`maddy-widgets`
- owns reusable widgets and shared UI building blocks
- exposes presentation-focused modules to the shell
- stays free of host orchestration logic

## Local Development Ports

- `maddy-shell`: `3000`
- `maddy-login`: `3001`
- `maddy-widgets`: `3002`

## Module Federation Containers

Shell references:
- `auth_remote@http://localhost:3001/remoteEntry.js`
- `ui_remote@http://localhost:3002/remoteEntry.js`

Shell config:
- [webpack.mfe.config.js](/D:/Repository's/Maddy tech site/maddy-shell/webpack.mfe.config.js)

Auth container:
- `auth_remote`

Auth exposes:
- `./LoginScreen`
- `./SignupScreen`
- `./ForgetScreen`

Auth config:
- [webpack.mfe.config.js](/D:/Repository's/Maddy tech site/maddy-login/webpack.mfe.config.js)

UI container:
- `ui_remote`

UI exposes:
- `./Header`
- `./Footer`
- `./WhatsAppWidget`
- `./Profile`
- `./ContactWidget`
- `./CardSection`
- `./Card`
- `./Button`
- `./SectionHeading`
- `./SurfaceCard`

UI config:
- [webpack.mfe.config.js](/D:/Repository's/Maddy tech site/maddy-widgets/webpack.mfe.config.js)

## Shared Dependency Strategy

Share only runtime-critical libraries as singletons:
- `react`
- `react-dom`
- `react-router-dom`
- `styled-components`

Do not broadly share all dependencies from `package.json`.

## Cross-MFE Communication

Shell event names currently in use:
- `maddy:navigate`
- `maddy:auth-changed`

Shell event contract:
- [eventBus.ts](/D:/Repository's/Maddy tech site/maddy-shell/src/shared/lib/mfe/eventBus.ts)

Shell subscription bridge:
- [useShellBridge.ts](/D:/Repository's/Maddy tech site/maddy-shell/src/app/hooks/useShellBridge.ts)

Auth emitter:
- [eventBus.ts](/D:/Repository's/Maddy tech site/maddy-login/src/shared/lib/shell/eventBus.ts)

## Startup Flow

Run each repo independently:

1. Start `maddy-login`
2. Start `maddy-widgets`
3. Start `maddy-shell`

This keeps package management isolated per repo and preserves clean ownership boundaries.

## Architecture Rules

Do:
- keep auth logic in `maddy-login`
- keep reusable widgets in `maddy-widgets`
- keep shell logic in `maddy-shell`
- expose only stable remote entry modules
- pass data through props or typed events

Do not:
- import shell store internals into remotes
- duplicate widget implementations inside the shell
- place auth API logic in the shell
- let widgets own navigation/state orchestration
