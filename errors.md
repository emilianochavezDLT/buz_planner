# Errors That I Run Into 

### Multiple Versions of React Installed

[Errors from The Offical React Webiste | This Specfically is about Hooks](https://react.dev/warnings/invalid-hook-call-warning)

- This is an error that into when I was using react for the first time. 
    - I would get a blank screen when using the routing component and there is nothing wrong with the code.
    - In the console it would show up as:
```java
dispatcher is null

or 

Invalid Hook Call
```
- What these errors mean?
    - Duplicate React Installs
    - Mismatched Versions of React
    - Or Breaking rules of Hooks

- To fix such error, I removed the node_modules and package-lock.json files from both the client and root directory.

- In the Root Directory 
```bash
rm -rf node_modules
rm package-lock.json
npm install
```
- In the Client Directory (React App)
```bash
cd client
rm -rf node_modules
rm package-lock.json
npm install
```
