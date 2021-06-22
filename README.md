# Express Boilerplate

## Description
- Main branch uses typescript
  - Typeorm
- javascript branch uses... javascript
  - Sequelize

## Env file
### Create a dotenv (.env) file with the following format:
```
DB_HOST=127.0.0.1
DB_NAME=""
DB_PORT=8080
DB_USER=root
DB_PASSWORD=""
DB_PORT=3306

```
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