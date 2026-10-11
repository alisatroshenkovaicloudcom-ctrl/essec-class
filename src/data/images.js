/*
 * ─────────────────────────────────────────────────────────────
 *  IMAGE REGISTRY — every image on the site is set here.
 * ─────────────────────────────────────────────────────────────
 *  To replace or add an image:
 *    1. Drop the file into  src/assets/images/
 *    2. Import it below and put it on the matching key.
 *
 *  A key set to `null` renders a clearly labelled frosted
 *  placeholder showing the key name (e.g. "glace-15ml-product"),
 *  so it is obvious which Canva export belongs there.
 *
 *  The four images below are the originals extracted from the
 *  glacé design file.
 */
import heroBottle from '../assets/images/glace-hero-bottle.jpg'
import singapore from '../assets/images/singapore-marina-bay.jpg'
import iceCube from '../assets/images/glace-ice-cube.jpg'
import capCloseup from '../assets/images/glace-cap-closeup.jpg'
import iceCubes from '../assets/images/glace-ice-cubes.jpg'
import evereden from '../assets/images/competitor-evereden.png'
import suuBalm from '../assets/images/competitor-suu-balm.png'
import cerave from '../assets/images/competitor-cerave.png'
import laneige from '../assets/images/competitor-laneige.png'

export const images = {
  // Page 1 — cover: the ice-cube bottle on ice
  'glace-hero-image': heroBottle,
  // Page 2 — Marina Bay skyline
  'singapore-skyline': singapore,
  // Page 3 — competitor product cut-outs (transparent PNGs from the Canva slide)
  'competitor-evereden': evereden,
  'competitor-suu-balm': suuBalm,
  'competitor-cerave': cerave,
  'competitor-laneige': laneige,
  // Page 5 — ice cube in water
  'glace-ice-photo': iceCube,
  // The 3 laws deep-dive sections
  'glace-law-double-jeopardy': iceCube,
  'glace-law-heavy-buyer': capCloseup,
  // Duplication of Purchase slide — pile of ice cubes
  'glace-law-duplication': iceCubes,
  // Page 6 — distinctive brand assets
  'glace-wordmark': null, // optional logo image; until set, the wordmark is drawn in type
  'glace-asset-ice-cube': capCloseup,
  'glace-asset-product': heroBottle,
  'glace-asset-frost': iceCube,
  // Page 7 — central ice imagery
  'glace-mental-availability': heroBottle,
  // Page 8 — retail photo/mockup. While null, an icy-blue shelf display is
  // built in code from the original bottle photo (see S08Physical.jsx).
  'glace-retail-display': null,
  // Page 9 — portfolio mockups
  'glace-50ml-product': heroBottle,
  'glace-15ml-product': null, // ← add the 15 ml mockup here
  // Page 10 — the e-commerce mockup is built in code (see S10Digital.jsx);
  // this is the texture / packaging close-up beside it
  'glace-texture-closeup': capCloseup,
  // Page 12 — closing image
  'glace-closing-bottle': heroBottle,
}
