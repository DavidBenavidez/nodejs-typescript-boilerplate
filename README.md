# Express Boilerplate

## Description
- Main branch uses typescript
  - Typeorm
- javascript branch uses... javascript
  - Sequelize

## File structure
. \
+-- app.js initializes routes.js \
+-- routes.js mounts controller \
+-- controllers \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- injects use-cases \
+-- use-cases \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- injects repository \
+-- respository \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- injects database