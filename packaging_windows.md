
# Packaging for Windows (Tauri - recommended) / Electron (alternative)

## Tauri (recommended)
Tauri produces a lightweight native app using your web build. Requires Rust toolchain + node.

1. Install Rust: https://www.rust-lang.org/tools/install
2. From project root:
   ```bash
   npm run build
   cd src-tauri
   # initialize tauri if not yet: npx tauri init
   npm install
   npm run tauri build
   ```
3. The `.exe` will be available in `src-tauri/target/release/bundle/msi` or similar.

**Notes:**
- Tauri produces smaller binaries than Electron and is more secure.
- Windows signing requires code signing certificate (for production).

## Electron (alternative)
1. Add electron-builder / electron dependencies.
2. Create an `electron` main process that loads the production `out` build.
3. Use `electron-builder` to build an installer.

