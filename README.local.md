# 1

Globally only once on the computer
```bash
$ sudo npm install -g @nestjs/cli
$ nest -v # check installation by getting version number
```
Create new project
```bash
$ nest new <project-name>
```
Start the app
```bash
$  npm run start:dev
```

### nestjs entities:
> every entity is a class
- controllers
  - creating endpoints
- modules
- services
- guards
- data transfer objects
- ...

## Controller
needs a decorator @Controller  
```js
import { Controller, Get } from '@nesjs/common';

@Controller('endpoint')
export class AppController {
  // is route '/endpoint/route'
  @Get('route') 
  getMethod () {
    return 'something'
  }
}
```