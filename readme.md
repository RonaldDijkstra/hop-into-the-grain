# HOP! Into the Grain Festival 2019

[![CircleCI branch](https://img.shields.io/circleci/project/github/RonaldDijkstra/hop-into-the-grain/master.svg)](https://circleci.com/gh/RonaldDijkstra/hop-into-the-grain)

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/0a564ece-5dea-4338-b9b1-333824808bbb/deploy-status)](https://app.netlify.com/sites/wildfestivalgroningen/deploys)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=RonaldDijkstra/wildfestivalgroningen)](https://dependabot.com) -->

A website for a Craft Beer & Music Festival in Groningen.

Saturday the 25th of May 2019 @ EM2 Groningen, The Netherlands.

## About this website

This website is built with [Middleman](https://middlemanapp.com/) with [Middleman Template by ThoughtBot](https://github.com/thoughtbot/middleman-template) and is multilanguage ready. This website is deployed with and to [Netlify](https://www.netlify.com/).  

## Before Setup

-   Install [Homebrew](https://brew.sh/index_nl)

    `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

-   Install [rbenv](https://github.com/rbenv/rbenv) with [ruby-build](https://github.com/rbenv/ruby-build)

    `brew install rbenv ruby-build`

-   Install Ruby 2.4.3

    `rbenv install 2.4.3`

## Setup & Serve

After you have cloned this repo, follow these steps to run the website:

-   Run the setup script to set up your machine with the necessary dependencies:

    ```bash
    bin/setup
    ```

-   Start the Middleman server.

    ```bash
    rake serve
    ```

    You should now be able to view the website at <http://localhost:4567>.

## Build & Proof

-   Build

    ```bash
    rake build
    ```

-   Proof

    ```bash
    rake proof
    ```
