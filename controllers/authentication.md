# Authentication using JWT

### Psuedo Codeish

1. Create .env file in the root of the project
    
    a. Write in the file 
    ```javascript
        ACCESS_TOKEN_SECRET=random64hex
        REFRESH_TOKEN_SECRET=random64hex
    ```
    b. use the command ```node``` in the command line 
    
    c.  Using crypto use this js line
    ```javascript
        > require('crypto').randomBytes(64).toString('hex') //Hit Enter
        'secret'//Copy without the quotes
    ```

    d. Paste secret into .env file for ```ACCESS_TOKEN_SECRET```

    e. Repeat for ```REFRESH_TOKEN_SECRET```

2. Install Middleware

    a. Dependices
    ```bash
        npm install jsonwebtoken cookie-parser dotenv
    ```

3. Coding Time using JWT
    
    a. In the controller folder in the ```user_controller.js``` file. Create a login point
    ```javascript

        OPTIONAL
        function genAccessToken(user){
            RETURN GENERATE ACCESS TOKEN USING THE USER AND JWT SECRET FROM .env
        }
        
        //This function not really needed and you can just create it in the login if userfound logic.
        // It might be better because you are just using it one time.
        function genRefreshToken(user){
            RETURN GENERATE REFRESH TOKEN USING THE USER AND JWT SECRET FROM .env
        }

        
        const logIn = async (req, res) => {

                GETTING USER CREDENTIALS
                
                try{

                    VALLIDATE USER CREDINTALS

                    //Will return True or False if user is found
                    AWAIT HERE TO FIND USER IN DATABASE 

                    if (IF THE USER IS FOUND){
                        
                        GENERATE TOKEN
                        GENERATE THE REFRESH TOKEN
                        STORE THE REFRESH TOKEN IN COOKIE FOR SECURITY
                        
                        RETURN IN RESPONSE AND SET TO 200
                    }
                    else{

                        RETURN A RESPOINSE OF 400 AND TRY AGAIN
                    }
                }
                catch{
                    SOMETHING WENT WRONG WITH LOGGIN IN
                }
        }
    ```

    b. In the same file create a refresh-token endpoint
    ```javascript
    
        const refresh_token =  (req, res) => {

            GET REFRESH TOKEN FROM COOKIE

            if(IF THERE IS NOT A REFRESH TOKEN){
                RETURN A RESPOSE OF 403 FOR ACCESS DENIED

            }
            else{
                VERIFY REFRESH TOKEN FIRST

                if(IF THERE IS AN ERROR){
                    RETURN A 403 FOR ACCESS DENIED
                }
                else{
                    GENERATE ACCESS TOKEN
                    RETURN NEW ACCESS TOKEN TO CLIENT TO ACCESS APIs AGAIN

                }
            }
        }
    ```
    c. Authenticating the token for routes
    ```javascript
        const verifyJWT (req, res, next) {

            CHECK IF THERE IS AN AUTH HEADER
            
            if(NO AUTH HEADER) RETURN A 401

            ELSE: THE AUTH HEADER EXIST AND SPLIT('')[1]
            
            VERIFY THE TOKEN (TOKEN, ACCESS_SECRET,
            (ERR, DECODED) => {
                IF THERE ERROR THEN SEND 403

                ELSE SET THE REQ.USER TO THE USER
                
                NEXT FUNCTION
            });

            
        }
    ```

## Flow of Logging In
1. User Logs In:
   - Server issues an access token (expires in 15 minutes).
   - Server issues a refresh token (expires in 7 days).
   - Access token is sent to the client (e.g., stored in localStorage).
   - Refresh token is stored in an HTTP-only cookie.

2. Making Requests with Access Token:
   - Client sends the access token in the Authorization header for each request.
   - Server verifies the access token.
   - If valid, the request is processed.

3. Access Token Expires (15 minutes later):
   - Client sends a request to a protected route.
   - Server responds with 401/403 (Unauthorized/Forbidden) because the access token is expired.

4. Client Calls the /refresh-token Route:
   - Client sends a request to /refresh-token automatically using the refresh token.
   - Server verifies the refresh token.
   - If valid, a new access token (valid for another 15 minutes) is issued.
   - Client uses the new access token for future requests.

5. Refresh Token Expires (e.g., after 7 days):
   - Once the refresh token expires, the user is required to log in again to get a new refresh token and access token.
