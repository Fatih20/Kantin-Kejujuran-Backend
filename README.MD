# Honest Canteen

This is a repository containing the back-end portion of honest canteen that is hosted on Heroku with their postgreSQL add-on.
You're not recommended to host the back-end locally, use the app instead [here](https://courageous-gumdrop-00bd28.netlify.app/).

## Run the back-end locally

1. Clone the repository to your local device with `git clone`
2. Make a `.env` file containing the below content to store the needed environment variable.
   ```
   PORT=3000
   CLIENT_SITE=https://courageous-gumdrop-00bd28.netlify.app,http://localhost:8080
   DATABASE_HOST=ec2-23-23-151-191.compute-1.amazonaws.com
   DATABASE_NAME=dd167i2hol169s
   DATABASE_PASSWORD=8d44fa0976978e6472b84347cc0e1abeefa10e5e2836fda3cdc3d823e3be3afe
   DATABASE_PORT=5432
   DATABASE_URL=postgres://dcqvhhvbitxhnt:8d44fa0976978e6472b84347cc0e1abeefa10e5e2836fda3cdc3d823e3be3afe@ec2-23-23-151-191.compute-1.amazonaws.com:5432/dd167i2hol169s
   DATABASE_USER=dcqvhhvbitxhnt
   KEYJWT="sfvjklmfjkvvn"
   ISSUER=ibukantin
   EXPIRE_TIME = 86400
   ```
3. Run `npm run watch-ts`
4. Run `npm run watch-node`
5. Access the API by going to the `localhost:3000` endpoint

Please note that by default only `localhost:8080` can consume the API, unless modifications are made to the environment variable.
