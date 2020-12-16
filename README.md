# nutcache-challenge-lianedias

.Net Core + React simple API

### Requirements

You should have installed to run this project:

* Node v10+
* Dotnet Core 5

### Running the solution

 1. go to the backend project at src/Nutcache.API
 2. run the command:
 `dotnet run`
 (opt) Run through Visual Studio on NutcacheVue launch profile.
 3. go to the frontend project at src/client-app
 4. run these commands:
```
yarn
yarn dev
```
or
```
npm install
npm run dev
```
 5. Then you should be able to run the solution via https://localhost:3000 

(opt) You can also use the swagger interface to test backend endpoint at
https://localhost:5001/swagger/index.html


### What is missing?
* Had some problems with cors, also at the end so I left delete method untested
* No unit Tests were done
* There are some fields without validation, but I used fluentValidation in some of them and they are giving the right info on user feedback
* I've tried to implement on react (also created a branch called react-ui) but was stuck on some parts. But it's runnable branch to see how the frontend were going as react + antd