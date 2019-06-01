##Simple Node.JS Docker starter kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintainability](https://api.codeclimate.com/v1/badges/4470e74a51e067b8e282/maintainability)](https://codeclimate.com/github/rowanfuchs/Simple-Node.JS-Docker-starter-kit/maintainability)

| Content  |
| :------------ |
| custom-env |
| express |
| mongoose |
| nunjucks |
| pino |
| pino-pretty |

### Installation Instructions:
1. Create your build with the following command (replace the brackets with your details)
    * `sudo docker build -t {{your docker hub account}}/{{your app name}} .`
1. Go into app and run 
    * `cp example.env .env.production`
    * `cp example.env .env.development`
2. Create a MongoDb database for the project
3. Configure your `.env` files
4. Set up your Dockerfile to start `start:development` or `start:production`
5. Run your application with the following command (replace the brackets with your details)
    * `sudo docker run -p 3000:3000 -v {{your application directory path}}:/usr/src/app -i -t {{your docker hub account}}/{{your app name}}`


## License

### MIT

Copyright (c) 2018 Rowan Fuchs, https://rowanfuchs.nl

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
