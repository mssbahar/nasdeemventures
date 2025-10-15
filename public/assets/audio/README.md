# Background Music

To add background music to the website:

1. Place your audio file in this directory
2. Name it `background-music.mp3` (or update the path in MusicToggle.tsx)
3. Ensure the file is:
   - In MP3 format for maximum browser compatibility
   - Looped seamlessly for continuous playback
   - Subtle and non-intrusive
   - Around 2-3 minutes long to avoid repetition

## Recommended Audio Specifications:
- Format: MP3
- Bitrate: 128kbps or lower (for web optimization)
- Duration: 2-3 minutes (will loop automatically)
- Volume: Mixed at 20-30% of full volume
- Style: Ambient, instrumental, or subtle corporate background music

## Example Usage:
```typescript
// In MusicToggle.tsx, uncomment and update this line:
audioRef.current.src = '/assets/audio/background-music.mp3'
```
