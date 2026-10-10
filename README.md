# Text Studio

A standalone HTML/CSS/JavaScript portfolio project by Nikita Rysiev.

Open index.html, or serve the folder with any static HTTP server. No installation or build is needed. Use ?lang=pl, ?lang=en, ?lang=de or ?lang=uk to select the interface language. All assets are included locally.

Text analysis stays in memory and does not send text to a server. Words include Unicode letters/numbers and internal apostrophes or hyphens. Character counts use grapheme clusters where Intl.Segmenter is available. Paragraphs are separated by blank lines; sentence counts use punctuation heuristics. Reading time assumes 200 words/minute. Plain-text reports can be copied or downloaded. The editor is limited to 200,000 characters.

The logo links to the portfolio. The dedicated back button has been removed for a cleaner header.

## Interface

The responsive interface includes Polish, English, German and Ukrainian, a light/dark theme, local date and time, keyboard-accessible controls and reduced-motion support.

A word goal with progress and a focus mode complement the live statistics. The animated preview reflects actual word and character counts. The text stays in the browser and is not uploaded.
