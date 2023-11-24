Thanks for showing interest to contribute to Design Blocks 🥳, you rock!

When it comes to open source, there are different ways you can contribute, all of which are valuable. Here's a few
guidelines that should help you as you prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Design Blocks:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of [this page](https://github.com/openkitrun/design-blocks))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/design-blocks.git
cd design-blocks
```

3. Setup all the dependencies and packages by running `pnpm install`. This command will install dependencies.

> If you run into any issues during this step, kindly reach out to the Design Blocks team here:
> [Design Blocks Discord](https://discord.gg/design-blocks)

## Development

To improve our development process, we've set up tooling and systems. Design Blocks uses a monorepo structure with the
followin structure:

### Directory Structure

| Package                                              | Description                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| [@blocks-colors](../packages/@blocks-colors)         | Contains all color tokens from Tailwindcss Colors, Radix Colors.                  |
| [@blocks-primitives](../packages/@blocks-primitives) | Contains primitive components.                                                    |
| [@blocks-system](../packages/@blocks-system)         | Functions to generate style props, access, and generate tokens.                   |
| [@blocks-theme](../packages/@blocks-theme)           | All tokens for use as style props and providers for token configuration.          |
| [@blocks-types](../packages/@blocks-types)           | Common types used across all packages.                                            |
| [@blocks-unstyled](../packages/@blocks-unstyled)     | Style-agnostic components, independent of token configuration.                    |
| [@blocks-utils](../packages/@blocks-utils)           | Common utilities used in packages, with a few exported specifically for `native`. |
| [block](../packages/block)                           | Function to create styled blocks for React Native.                                |
| [native-dictionary](../packages/native)              | All core exports necessary for the proper functioning of Design Blocks.           |
| [tsconfig](../packages/tsconfig)                     | Contains shared TS                                                                |

### Tooling

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [react-native-builder-bob
  ](https://callstack.github.io/react-native-builder-bob/) to bundle packages
- [biomejs](https://biomejs.dev/) to format and lint
- [Changeset](https://github.com/atlassian/changesets) for changes documentation, changelog generation, and release
  management.

### Commands

**`pnpm install`**: bootstraps the entire project, symlinks all dependencies for cross-component development and builds
all components.

**`pnpm build`**: run build for all packages.

**`pnpm release`**: publish changed packages.

**`pnpm dev`**: starts example of expo.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when the PR author is a collaborator, that
counts as one.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this
repository.

When you create a commit we kindly ask you to follow the convention `category(scope or module): message` in your commit
message while using one of the following categories:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above categories

If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/.

### Steps to PR

1. Fork of the panda repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention `[type/scope]`. For example
   `fix/box` or `docs/box-type`. `type` can be either `docs`, `fix`, `feat`, `build`, or any other
   conventional commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/openkitrun/design-blocks/blob/main/CONTRIBUTING.md#commit-convention).

4. Run `pnpm changeset` to create a detailed description of your changes. This will be used to generate a changelog when
   we publish an update. [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).
   Please note that you might have to run `git fetch origin main:master` (where origin will be your fork on GitHub)
   before `pnpm changeset` works.

> If you made minor changes like CI config, biomejs, etc, you can run `pnpm changeset add --empty` to generate an empty
> changeset file to document your changes.

## Want to help improve the docs?

Our docsite lives in the [website](https://github.com/openkitrun/design-blocks-website).

## License

By contributing your code to the panda GitHub repository, you agree to license your contribution under the MIT license.
