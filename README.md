# SAFiRLab.github.io
Official github website for the SAFiRLab

## Preview the website locally

The site is built with Jekyll. On macOS, you might need to install a recent Ruby with Homebrew first:

```sh
brew install ruby
echo 'export PATH="$(brew --prefix ruby)/bin:$PATH"' >> ~/.zshrc
exec zsh
ruby -v   # should show 3.x
gem install bundler
```

Then, from the repository folder:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000 in your browser. Jekyll rebuilds the site when you edit a file. Stop the server with `Ctrl+C`.
