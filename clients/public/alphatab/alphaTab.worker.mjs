/*!
 * alphaTab v1.6.0 (, build 19)
 *
 * Copyright © 2025, Daniel Kuschny and Contributors, All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Integrated Libraries:
 *
 * Library: TinySoundFont
 * License: MIT
 * Copyright: Copyright (C) 2017, 2018 Bernhard Schelling
 * URL: https://github.com/schellingb/TinySoundFont
 * Purpose: SoundFont loading and Audio Synthesis
 *
 * Library: SFZero
 * License: MIT
 * Copyright: Copyright (C) 2012 Steve Folta ()
 * URL: https://github.com/stevefolta/SFZero
 * Purpose: TinySoundFont is based on SFZEro
 *
 * Library: Haxe Standard Library
 * License: MIT
 * Copyright: Copyright (C)2005-2025 Haxe Foundation
 * URL: https://github.com/HaxeFoundation/haxe/tree/development/std
 * Purpose: XML Parser & Zip Inflate Algorithm
 *
 * Library: SharpZipLib
 * License: MIT
 * Copyright: Copyright © 2000-2018 SharpZipLib Contributors
 * URL: https://github.com/icsharpcode/SharpZipLib
 * Purpose: Zip Deflate Algorithm for writing compressed Zips
 *
 * Library: NVorbis
 * License: MIT
 * Copyright: Copyright (c) 2020 Andrew Ward
 * URL: https://github.com/NVorbis/NVorbis
 * Purpose: Vorbis Stream Decoding
 *
 * Library: libvorbis
 * License: BSD-3-Clause
 * Copyright: Copyright (c) 2002-2020 Xiph.org Foundation
 * URL: https://github.com/xiph/vorbis
 * Purpose: NVorbis adopted some code from libvorbis.
 *
 * @preserve
 * @license
 */

// Load the main AlphaTab script (make sure this file exists at the path below)
importScripts("/alphatab/alphaTab.js");

// Initialize the worker if AlphaTab has been properly loaded
if (self.alphaTab && alphaTab.Environment && typeof alphaTab.Environment.initializeWorker === 'function') {
  alphaTab.Environment.initializeWorker();
} else {
  console.error("❌ AlphaTab worker initialization failed. Make sure 'alphaTab.js' is correctly loaded.");
}