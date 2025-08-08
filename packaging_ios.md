
# iOS (.ipa) — Expo / React Native workflow (recommended path)

Apple requires a Mac (or cloud Mac) to build & sign an `.ipa`. The easiest modern route is Expo with EAS Build:

1. Create an Expo wrapper (or convert the frontend into a React Native app reuse components).
2. Install EAS CLI and configure expo account & Apple Developer credentials.
3. Build:
   ```bash
   eas build -p ios --profile production
   ```
4. To install on device or App Store, you need an Apple Developer account ($99/year) and proper signing profiles.

**Notes & alternatives:**
- You can also use React Native CLI + Xcode on a Mac.
- For testing on your device without App Store, use TestFlight via App Store Connect.
