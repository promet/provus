# Provus 

This is a starter project for Drupal 8/9 projects that provides the following:

* [Emusilfy](http://emulsify.io)-based theme with large number of [beautiful components](https://promet.github.io/ps_component)
* Pre-configured Drupal blocks that integrate with the [beautiful components](https://promet.github.io/ps_component)
* The following basic content types:
  * Articles (News)
  * Pages
  * Events
  * Locations
  * People
  * Landing page
  
This is meant as a starter to clone and build off of. It is not meant to be an upstream.

This is a project of [Promet Source](http://prometsource.com). "Provus" is Old English for foresight which is [Promethean](https://en.wikipedia.org/wiki/Prometheus) trait.

## Demo

Coming soon.

## Test Content

![image](https://user-images.githubusercontent.com/512243/83435528-6fc48600-a40a-11ea-84e6-35fba2aadb99.png)

This project is focused on government and higher-learning use cases though any site that needs to utilize similar components will benefit. There is currently test content that creates "Southport County", a fictional mid-sized US county. Test content for other use cases may be added.

## Drag and Drop Landing Pages

This project creates a starting point for re-usable blocks that can be used with Layout Builder for drag and drop page building.

## Block Types

The following block types are included:

### Link Group

This is the "swiss army knife" block that allows users to create lists of content either dynamically (through Views in the backend) or manually. The current user-interface:

![image](https://user-images.githubusercontent.com/512243/83434225-0e031c80-a408-11ea-85b8-fcfe43dc850c.png)

### Number Group

A block to create a "By the Numbers" group:

![image](https://user-images.githubusercontent.com/512243/83434448-8833a100-a408-11ea-8ed7-280de913c0bf.png)


### Banner

A block to create hero banners:

![image](https://user-images.githubusercontent.com/512243/83434562-bc0ec680-a408-11ea-84eb-8b80e6bbc1b4.png)


### Others

There are others including media items, accordians and buttons.


## Installation

[Install Docksal](https://docs.docksal.io/getting-started/setup/).

Once you've setup docker run:

``fin init``

This will install the database and get you all ready to roll.

### Docksal Commands

Most commands needed to run the project can be found by typing ``fin`` and viewing the "Custom commands".

```yml
Custom commands:
  behat                    	Test behat
  build-artifacts          	Builds sites files.
  build-theme              	Builds theme dist files. Not currently necessary
  import-content           	Imports current site content and menu
  init                     	Initialize stack and site (full reset)
  init-site                	Initialize/reinstall site
  pa11y                    	Test pa11y
  php-cbf                  	Runs PHPCBF on modules
  php-cs                   	Runs PHPCS on modules
  phpunit                  	Runs PHPUnit tests found in custom code
  site-mode                	Site site mode
  storybook                	Run storybook tool locally
  storybook-deploy         	Deploy storybook to the oc-design.prometdev.com site.
  test                     	Test site installation
  test-content             	Imports test content
  theme-lint               	lint theme js
```

## Test

Currently supported:

  * phpUnit ``fin phpunit``
  * behat ``fin behat``
  * pa11y ``fin pa11y``

### Theming

1. Edit scss files.
2. Run ``fin build-theme`` to compile sass files

To "watch" the files update in real-time run storybook command below.

### Storybook

#### Run Locally

To run Storybook ``fin storybook`` and click on the local network link:

![image](https://user-images.githubusercontent.com/512243/74872340-0ae99200-532b-11ea-9f67-2b4a4c68ea89.png)

## Updating Config

Run ``fin exec sed -i 's/provus/NEW_THEME/g' config/*`` to update config that points the the provus theme.

Then ``mv config/default/provus.settings.yml config/default/NEW_THEME.settings.yml``
