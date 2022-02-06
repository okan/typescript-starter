# typescript-starter

a simple TypeScript starter template

![Test workflow status](https://github.com/okan/typescript-starter/actions/workflows/test.yml/badge.svg)

## how to use?
first of all, you need to create a new repo from this template repo by clicking "use this template" button above. (this is not something that is compulsory to do but is the simplest way)

after that, run the following command by replacing the relevant fields with what is appropriate for you:

```bash
git clone https://github.com/<your_user_name>/<your_repository_name>.git
```

then;
- npm install
- npm run start

run with nodemon to watch changes automatically:
- npm run dev

### testing
this template supports unit testing on top of the Jest. index.ts has a dummy function for running tests for the first time. you may probably not need this method, you can delete it.

To run the tests:
- npm run test

There is also watching support for the tests:
- npm run test:watch