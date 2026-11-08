FROM ruby:3.4-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /site

# Install gems first so this layer is cached until the Gemfile changes
COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v "$(tail -n 1 Gemfile.lock | tr -d ' ')" \
    && bundle install

EXPOSE 4000 35729

# --force_polling: file-change events don't cross Windows/macOS bind mounts
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]
