# Express JWT (JSON Web Token)

this repository an example how to use JSON Web Token on Express framework NodeJS.

### Installation

1. Fork the repository if you want to add the repository to your repositories.

2. Clone the repository to your local computer

   ```bash
   > git clone https://github.com/rzkytmgr/express-jwt
   ```

3. Install all dependencies

   ```bash
   > npm install
   ```

4. Now, you can run the app

   ```bas
   > npm run dev
   ```

5. Open the app in port `4001` on your browser



### Environment

Before run the apps, you must copy the `env` file and rename it to `.env` , then you can set the value of `SECRET_KEY` in your `.env` file, that secret key will used as key for your JSON Web Token encrypt.



### Rest Guide

It's all up to you, if you want to use Postman or whatever to test the endpoint you can do it. but here in this section i will guide you using Visual Studio Code extension called `REST Client` . Click the link if you want to see the [REST Client repository](https://github.com/Huachao/vscode-restclient) or Go here if you want to download the [REST Client VSCode Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) .

To access the auth routes, you need to set the `Authorization` key on your request header you can see the example in [authenticate.token.rest](https://github.com/rzkytmgr/express-jwt/blob/master/rest/authenticate.token.rest) file. Before that, you must generate your JSON Web Token on `http://localhost:4001/tokenize/generate` or you can open [generate.token.rest](https://github.com/rzkytmgr/express-jwt/blob/master/rest/generate.token.rest) file to see the example request then pass it as value in your `Authorization` value in your every request.

