# Project "HTV"

This was a student project I wrote around 2019-2020 for a local
semiconductor testing company called HTV in Bensheim.

The project consists of an [AWS Lambda](https://aws.amazon.com/pm/lambda/) function hosting a ML image classification model, classifying 3 different image "types" (Eisen-Nickel, Nachverzinnt, Kupfer). The model was trained with [Tensorflow](https://www.tensorflow.org/) in Python, however, it was served with JavaScript.

The project is no longer online today and was never put into production, this serves solely as a reference.

## Structure
- `/api`: [AWS Lambda](https://aws.amazon.com/pm/lambda/) function hosting the model.
- `/site`: [Svelte](https://svelte.dev/) frontend, uses [Routify](https://routify.dev/).
- `/assets`: Images, pictures and materials.

## Reflections (2025)
- I wouldn't use [Serverless Framwork](https://www.serverless.com/) or [AWS Lambda](https://aws.amazon.com/pm/lambda/) again. Instead I would opt for [Docker](https://www.docker.com/) containers as they provide a more suitable level of abstraction and more flexible deployment options.
- Overall code quality is poor - useless abstractions such as `/api/smarch-lib`, hard-coded values, few comments, lacking auth, ...
- While [Svelte](https://svelte.dev/) still isn't as popular as [React](https://react.dev/), it's ecosystem has grown nicely and [SvelteKit](https://svelte.dev/docs/kit/introduction) is now a solid choice for new projects.
- Hosting a "prototype"/"student project" on [AWS](https://aws.amazon.com/) wasn't a great idea - I am using [Fly.io](https://fly.io/) for such cases now.

## Assets
![Overview](/assets/overview.png)
![AWS Lambda GUI](/assets/aws-lambda-gui.JPG)
![Severless Framework Execution](/assets/serverless-exec.jpg)

