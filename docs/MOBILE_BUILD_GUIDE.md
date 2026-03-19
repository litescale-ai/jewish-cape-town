# Mobile Build & iPhone Testing Guide

## Prerequisites	

### 1. Accounts & Secrets

You need to set these as **GitHub repository secrets** (Settings → Secrets → Actions):

| Secret                          | What                     | Where to get it                                                                           |
| ------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| `EXPO_TOKEN`                  | Expo access token        | [expo.dev/accounts/settings/access-tokens](https://expo.dev/accounts/settings/access-tokens) |
| `APPLE_ID`                    | Your Apple ID email      | Your Apple account                                                                        |
| `APPLE_TEAM_ID`               | 10-char team ID          | [developer.apple.com/account](https://developer.apple.com/account) → Membership             |
| `ASC_APP_ID`                  | App Store Connect app ID | Create app in ASC → App Information → Apple ID                                          |
| `APPLE_APP_SPECIFIC_PASSWORD` | App-specific password    | [appleid.apple.com](https://appleid.apple.com) → Sign-In → App-Specific Passwords          |
| `CLOUDFLARE_API_TOKEN`        | CF API token             | [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)     |
| `CLOUDFLARE_ACCOUNT_ID`       | CF account ID            | Dashboard → Workers → Account ID                                                        |

### 2. Apple Developer Program

You **must** have an Apple Developer Program membership ($99/year) to:

- Sign iOS builds
- Install `.ipa` on a real iPhone
- Distribute via TestFlight

### 3. Register Your iPhone

For **ad-hoc** testing (preview builds), your device UDID must be registered:

```bash
# Get your iPhone UDID (connect via USB, then):
# Option A: Finder → click your iPhone → click the serial number until UDID shows
# Option B:
idevice_id -l

# Register with EAS (adds to your provisioning profile automatically):
npx eas-cli device:create
```

This prompts for a URL you open on the iPhone — it installs a temporary profile that reports the UDID back to Expo, which registers it with Apple.

---

## Building

### Via GitHub Actions (CI)

1. Go to **Actions** tab in your GitHub repo
2. Select **"Build Mobile Apps"**
3. Click **"Run workflow"**
4. Choose platform (`ios`, `android`, or `all`) and profile (`preview` for testing)
5. Wait for build to complete (~30-45 min for iOS, ~15-20 min for Android)
6. Download the artifact from the workflow run's **Artifacts** section

### Locally (faster for iteration)

```bash
# Install EAS CLI
npm install -g eas-cli

# Log in to Expo
eas login

# Build for your iPhone (ad-hoc distribution)
eas build --platform ios --profile preview --local

# Build Android APK
eas build --platform android --profile preview --local
```

---

## Installing on Your iPhone	

### Option A: Via Finder (macOS)

1. Download the `.ipa` from GitHub Actions artifacts
2. Connect your iPhone via USB
3. Open Finder → click your iPhone in the sidebar
4. Drag the `.ipa` file onto the Finder window

### Option B: Via ideviceinstaller (CLI)

```bash
brew install ideviceinstaller
ideviceinstaller -i ./build/jewish-cape-town.ipa
```

### Option C: Via Apple Configurator 2

1. Download [Apple Configurator 2](https://apps.apple.com/app/apple-configurator-2/id1037126344) from Mac App Store
2. Connect iPhone → drag `.ipa` onto device

### Option D: TestFlight (best for sharing with others)

```bash
# After building with production profile:
eas submit --platform ios --profile production
```

This uploads to App Store Connect → TestFlight. Testers install via the TestFlight app.

---

## What Each Build Profile Does

| Profile         | iOS Output         | Android Output   | Distribution               | Use case                              |
| --------------- | ------------------ | ---------------- | -------------------------- | ------------------------------------- |
| `development` | Simulator build    | Debug APK        | Local only                 | Development with hot reload           |
| `preview`     | Ad-hoc `.ipa`    | Release `.apk` | Internal (UDID registered) | **Testing on your real iPhone** |
| `production`  | App Store `.ipa` | `.aab` bundle  | App Store / Play Store     | Public release                        |
