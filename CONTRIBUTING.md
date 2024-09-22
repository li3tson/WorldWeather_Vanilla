
# :building_construction: Contributing Guide

Hey, there :wave:! I'm really excited to see that someone is interested in contributing to Adda Weather! Before submitting your contribution, please read the following guide.

## :man_technologist: Repo Setup

To develop locally, fork the Adda Weather repository and clone it in your local machine.

To run the project in your local environment, simply open the index.html file in any browser or use the vscode live server extension or even if you prefer, you can create a simple local server to run the project.

## :file_folder: Folder structure

```
.
├── src             # Contains all the resources the website needs to function properly.
|   └── assets      # Contains all static resources like images and icons.
|   |   ├──  icons  # Contains all project icons.
|   |   └──  images # Contains all project images.
|   |
|   ├── scripts     # Contains all JavaScript files.
|   └── styles      # Contains all CSS files.
|
└── public          # Contains all static files that will be served directly by the web server.
```

## :bug: Report bugs

If you are interested in fixing some bugs that you probably found in the application, please check the steps below

- `Identify the bug`:

     - Clearly describe the incorrect behavior you are seeing.
     - Write down the steps to reproduce the bug.

- `Check if the bug has already been reported`:

     - Before reporting the bug, check if it has been previously reported. Many bug tracking systems have search features to make this easier.

- `Gather information`:

     - Note the operating system, browser, software version, and any other relevant information that could help reproduce the bug.
     - If possible, capture screenshots or screen recordings to demonstrate the incorrect behavior.

- `Report the bug`:

     - Use a bug tracking system to report the bug.
     - If there is no formal system, report the bug through the appropriate channel, such as email or creating an issue.
     - Please fill out the bug report with as much detail as possible, including:
         - Descriptive title of the bug
         - Detailed description of the incorrect behavior
         - Steps to reproduce the bug
         - System information (OS, browser, version)
         - Screenshots or screen recordings (optional)

- `Track Progress`:

     - The person responsible for fixing the bug may contact you for clarification. Respond promptly to any questions.
     - You can periodically check the status of the bug to see if it has been fixed in a future release.

## :construction_worker_man: Pull Request Guidelines

- Checkout a topic branch from a base branch (e.g. `main`), and merge back against that branch.

- If adding a new feature:
	- Add accompanying test case.
	- Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first, and have it approved before working on it.

- If fixing a bug:

  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log (e.g. `fix: update entities encoding/decoding (fix #3899)`).
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

- It's OK to have multiple small commits as you work on the PR. GitHub can automatically squash them before merging.

- Make sure tests pass!

- No need to worry about code style as long as you have installed the dev dependencies. Modified files are automatically formatted with Prettier on commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)).

- PR title must follow the [commit message convention](./.github/commit-convention.md) so that changelogs can be automatically generated.

---

**Thank you for your contribution!** :heart:
