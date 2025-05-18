# After Effects Audio Track Alignment Script

A simple script for After Effects that automatically arranges audio tracks in sequence based on their track numbers.

## Features

- Automatically aligns audio tracks in chronological order based on track numbers
- Works with any album or collection of audio files
- Arranges tracks from the beginning of the composition (0:00)
- Automatically extends composition duration to fit all tracks
- Shows total duration of aligned tracks
- Simple to use with minimal setup

## Installation

1. Download the `audio-track-alignment.jsx` file
2. Save it to a location you can easily access (e.g., your After Effects Scripts folder)

## Requirements

- Adobe After Effects (CC or later recommended)
- Audio files with track numbers in their names

## Usage

1. **Set up your composition:**
   - Import all your audio files into your After Effects project
   - Create or select a composition where you want to arrange the tracks
   - Add all audio files to this composition as layers

2. **Make sure tracks are properly numbered:**
   - Ensure each audio layer has a track number in its name
   - Examples: "1 - Song Name.wav", "2 - Another Song.wav", "#1 Song.wav", etc.
   - The script recognizes numbers at the beginning of names, after a # symbol, or surrounded by non-digits

3. **Run the script:**
   - Go to File > Scripts > Run Script File... (or press Alt+F12)
   - Navigate to where you saved the script file and select it
   - Alternatively, paste the script into the ExtendScript Toolkit and run it from there

4. **Check the results:**
   - The script will arrange all audio layers in sequence
   - You'll see an alert showing how many tracks were aligned and the total duration
   - All tracks will now be positioned one after another from the beginning (0:00)

## How It Works

The script:
1. Identifies all audio layers in the active composition
2. Extracts track numbers from layer names or source file names
3. Sorts the layers by their track numbers
4. Positions each track to start immediately after the previous one ends
5. Updates the composition duration if necessary

## Troubleshooting

- **Tracks not in correct order?** Check that all layer names have clear track numbers
- **Script not running?** Ensure you have permission to run scripts in After Effects
- **Some audio not included?** Make sure all audio layers are in the composition before running